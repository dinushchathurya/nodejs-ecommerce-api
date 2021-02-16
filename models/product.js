const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: String,
    image: String,
    countInStock: {
        type: Number,
        required: true
    }
})

module.exports= mongoose.model('Product', productSchema);