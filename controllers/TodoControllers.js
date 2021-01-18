const TodoModel = require("../models/Todo");
const { validationResult } = require('express-validator');

exports.getTodoByID = async (req, res, next, Todo_ID) => {
    await TodoModel.findById(Todo_ID).exec()
    .then( (response) => {
        req.todo = response;
        next();
    } )
    .catch( (error) => {
        return res.json({ errorMessage: "Failed To Find Todo" });
    } );
}

exports.addTodo = async (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.json({ errorMessage: errors.array()[0].msg });
    }   

    const data = req.body;
    const { message } = data; // De-Structure data object

    if(message) {
        const newTodo = new TodoModel(data);
        await newTodo.save()
        .then( (response) => {
            return res.json(response);
        } )
        .catch( () => {
            return res.json({ errorMessage: "Failed To Add Todo" });
        } );
    }
    else {
        return res.json({ errorMessage: "Please Enter Todo" });
    }
}

exports.getTodos = async (req, res) => {
    await TodoModel.find().exec()
    .then( (response) => {
        return res.json(response);
    } )
    .catch( (error) => {
        console.log(error);
        return res.json({ errorMessage: "No Todo Found" });
    } );
}

exports.editTodo = async (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.json({ errorMessage: errors.array()[0].msg });
    } 
    
    const todo = req.todo; // Fetching Todo From Request Object
    const data = req.body;
    const { message } = data;
    
    console.log(todo);
    console.log(data);

    if(message) {
        await TodoModel.findByIdAndUpdate(
            { _id: todo._id },
            { $set: data },
            { new: true, useFindAndModify: false }
        )
        .then( (response) => {
            return res.json(response);
        } )
        .catch( (error) => {
            return res.json({ errorMessage: "Failed To Update Todo" });
        } );
    }
    else {
        return res.json({ errorMessage: "Please Enter Todo" });
    }

}

exports.deleteTodo = async (req, res) => {
    const todo = req.todo;
    await TodoModel.findByIdAndDelete(todo._id)
    .then( () => {
        return res.json({ successMessage: "Todo Removed SuccessFully" })
    } )
    .catch( () => {
        return res.json({ errorMessage: "Failed To Delete Todo" });
    } );

}