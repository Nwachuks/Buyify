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

// Post localhost:3000/admin/categories/add-category
router.post('/add-category', [
    check('title', 'Title is required').not().isEmpty()
], (req, res) => {
    title = req.body.title,
    slug = title.replace(/\s+/g, '-').toLowerCase();

    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).send({
            message: errors.errors[0].msg
        });
    } else {
        // Check if slug is unique
        Category.findOne({slug: slug}, (err, category) => {
            if (category) {
                return res.status(400).send({
                    message: 'Category slug exists, please choose another.'
                });
            } else {
                const category = new Category({
                    title: title,
                    slug: slug
                });

                category.save((err, doc) => {
                    if(!err) {
                        res.send(doc);
                    } else {
                        return console.log('Error in saving Category: ' + JSON.stringify(err, undefined, 2));
                    }
                });
            }
        });
    }

});

module.exports = router;
