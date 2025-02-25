

const mongoose = require("mongoose");


const completeScheam = new mongoose.Schema({
    id: String, // Or ObjectId if needed
    name: String,
})

const Complete = mongoose.model('Complete', completeScheam);

module.exports = Complete 
