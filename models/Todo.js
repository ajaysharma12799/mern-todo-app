const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
    message: {
        type: String,
        minlength: 5,
        trim: true,
        required: true
    }
});

module.exports = mongoose.model("Todo", TodoSchema);