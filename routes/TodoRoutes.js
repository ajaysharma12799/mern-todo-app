const router = require("express").Router();
const { addTodo, getTodos, editTodo, deleteTodo } = require("../controllers/TodoControllers");

// Route To Add Todo
router.post("/addTodo", addTodo);

// Route To List All Todos
router.get("/getTodos", getTodos);

// Route To Edit Single Todo
router.put("/editTodo/:todoID", editTodo);

// Route To Delete Single Todo
router.delete("/deleteTodo/:todoID", deleteTodo);

module.exports = router; // Exporting Router