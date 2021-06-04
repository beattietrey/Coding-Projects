const mongoose = require('mongoose')

const SoapSchema = new.mongoose.Schema({
    name: String,
    price: Number,
    ingredients: Object,


})

const Soap = mongoose.model("Soap", SoapSchema)
module.exports = Soap;