const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        required: true,
        minlength: 5
    },
    role: {
        type: Number,
        trim: true,
        required: true,
        default: 0,
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    },
});

module.exports = mongoose.model("User", UserSchema);