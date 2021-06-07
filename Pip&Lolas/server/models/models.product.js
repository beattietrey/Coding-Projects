const mongoose = require('mongoose')

const ProductSchema = new.mongoose.Schema({
    name: String,
    price: Number,
    productType: String,


})

const Product = mongoose.model("Product", ProductSchema)
module.exports = Product;