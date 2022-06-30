const mongoose = require("mongoose");

const newMessage = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    services: {
        type: String,
    },
    message: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
});

const Message = new mongoose.model("Message", newMessage);

module.exports = Message;
