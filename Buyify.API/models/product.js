const mongoose = require('mongoose');

// Product Schema
const ProductSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String
    },
    description: {
        type: String,
        required: true
    },
    cat_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    category: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String
    }
})

const Product = module.exports = mongoose.model('Product', ProductSchema);