const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
    message: {
        type: String,
        minlength: 5,
        trim: true,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Todo", TodoSchema);