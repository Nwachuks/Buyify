const mongoose = require('mongoose');

// Category Schema
const CategorySchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String
    },
    products: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }
    ]
})

const Category = module.exports = mongoose.model('Category', CategorySchema);