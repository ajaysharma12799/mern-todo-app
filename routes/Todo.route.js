const express = require('express');
const router = express.Router();
const Auth = require("../utils/Auth");
const TodoModel = require("../models/Todo.model");

router.post('/', Auth, async (req, res) => { // Add New Todo
    try {
        const {title, description, priority, isCompleted} = req.body;
        const todo = new TodoModel({title, description, priority, isCompleted, user: req.user.id});
        await todo.save();
        res.json({msg: "Todo Saved Successfully"});
    } catch (error) {
        return res.status(500).json({msg: "Server Error"});
    }
});

router.get('/', Auth, async (req, res) => { // Get All Todo
    try {
        const todos = await TodoModel.find({user: req.user.id}).sort({date: -1});
        res.json(todos);
    } catch (error) {
        return res.status(500).json({msg: "Server Error"});
    }
});

router.get('/:id', Auth, async (req, res) => { // Get Single Todo
    try {
        const todo = await TodoModel.findById(req.params.id);
        res.json(todo);
    } catch (error) {
        return res.status(500).json({msg: "Server Error"});
    }
});

router.put('/:id', Auth, async (req, res) => { // Update Single Todo
    try {
        const todoFields = {};
        const {title, description, priority, isCompleted} = req.body;
        console.log(title, description, priority, isCompleted)

        // Building Todo Object
        if(title) todoFields.title = title;
        if(description) todoFields.description = description;
        if(priority) todoFields.priority = priority;
        if(isCompleted) todoFields.isCompleted = isCompleted;

        let todo = await TodoModel.findById(req.params.id);
        if(!todo) { // Check If Todo is Present or Not
            return res.status(404).json({msg: "No Todo Found"});
        }
        if(todo.user.toString() !== req.user.id) { // Check whether todo is owned by user or not
            return res.status(401).json({msg: "Not Authorized"});
        }

        todo = await TodoModel.findByIdAndUpdate(req.params.id, {
            $set: todoFields
        }, {
            new: true
        });
        res.json(todo);
    } catch (error) {
        console.log(error)
        return res.status(500).json({msg: "Server Error"});
    }
});

router.delete('/:id', async (req, res) => { // Delete Single Todo
    res.send("Delete Todo");
});

module.exports = router;