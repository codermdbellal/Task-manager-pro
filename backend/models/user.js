

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    gmail: {type: String, required: true},
    filename: String,
    url: String,
    uploadedAt: { type: Date, default: Date.now },
})

const user =  mongoose.model("User", userSchema);
module.exports = user;