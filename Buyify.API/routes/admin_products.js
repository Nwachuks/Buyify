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

module.exports = router;