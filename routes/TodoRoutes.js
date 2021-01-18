const router = require("express").Router();
const { getTodoByID, addTodo, getTodos, editTodo, deleteTodo } = require("../controllers/TodoControllers");
const { check } = require('express-validator');

router.param("Todo_ID", getTodoByID); // Find Specific Todo From DB

// Route To Add Todo
router.post("/addTodo",[
    check('message', 'Task Should be Above 5 Character Length').isLength({ min:5 })
] , addTodo);

// Route To List All Todos
router.get("/getTodos", getTodos);

// Route To Edit Single Todo
router.put("/editTodo/:Todo_ID", editTodo);

// Route To Delete Single Todo
router.delete("/deleteTodo/:Todo_ID", deleteTodo);

module.exports = router; // Exporting Router