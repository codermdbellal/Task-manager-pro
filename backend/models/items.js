
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    day: Number,
    month: String,
    year: Number,
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;


