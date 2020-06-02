const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;
const { check, validationResult } = require('express-validator');

// Get Category model
const Category = require('../models/category');

// Get localhost:3000/admin/categories
router.get('/', (req, res) => {
    Category.find((err, categories) => {
        if (!err) {
            res.send(categories)
        } else {
            return console.log('Error in retrieving Categories: ' + JSON.stringify(err, undefined, 2));
        }
    });
});

module.exports = router;
