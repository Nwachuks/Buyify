const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;
const { check, validationResult } = require('express-validator');
const mkdirp = require('mkdirp');
const fs = require('fs-extra');
const resizeImg = require('resize-img');

// Get Product model
const Product = require('../models/product');

// Get Category model
const Category = require('../models/category');

// Get localhost:3000/admin/products
router.get('/', (req, res) => {
    let productCount = 0;
    Product.countDocuments((err, count) => {
        productCount = count;
    });

    Product.find((err, productsReturned) => {
        if (!err) {
            const results = {
                count: productCount,
                products: productsReturned
            }
            res.send(results);
        } else {
            return console.log('Error in retrieving Products: ' + JSON.stringify(err, undefined, 2));
        }
    });
});

// Post localhost:3000/admin/products/add-products
router.post('/add-product', [
    check('title', 'Title is required').not().isEmpty(),
    check('description', 'Description is required').not().isEmpty(),
    check('price', 'Price must be specified').isDecimal()
], (req, res) => {
    title = req.body.title;
    slug = title.replace(/\s+/g, '-').toLowerCase();
    description = req.body.description;
    price = req.body.price;
    image = req.body.image;
    cat_slug = req.body.category;
    Category.findOne({slug: cat_slug}, (err, cat) => {
        if (cat) {
            catID = cat._id;
            category = cat.title
        } else {
            res.status.send(400).send({
                message: 'Could not find category'
            });
        }
    });

    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).send({
            message: errors.errors[0].msg
        });
    } else {
        // Check if product exists
        Product.findOne({slug: slug}, (err, product) => {
            if (product) {
                return res.status(400).send({
                    message: 'Product title already exists, please choose another.'
                });
            } else {
                const product = new Product({
                    title: title,
                    slug: slug,
                    description: description,
                    price: price,
                    image: image,
                    cat_id: catID,
                    category: category
                });

                product.save().then((result) => {
                    Category.findOne({slug: cat_slug}, (err, category) => {
                        if (category) {
                            category.products.push(product);
                            category.save();
                            res.send(result);
                        }
                    });
                }).catch(error => {
                    return console.log('Error in saving Products: ' + JSON.stringify(error, undefined, 2));
                });
            }
        });
    }
});

module.exports = router;
