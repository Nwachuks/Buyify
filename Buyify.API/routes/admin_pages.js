const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

// Get page model
const Page = require('../models/page');

// Get localhost:3000/admin/pages
router.get('/', (req, res) => {
    res.send('Admin Area');
});

// Get localhost:3000/admin/pages/add-page
router.get('/add-page', (req, res) => {
    let title = "";
    let slug = "";
    let content = "";

    const page = new Page({
        title: title,
        slug: slug,
        content: content
    });
});

// Post localhost:3000/admin/pages/add-page
router.post('/add-page', [
    check('title', 'Title is required').not().isEmpty(),
    check('content', 'Content must not be empty').not().isEmpty()
], (req, res) => {
    let title = req.body.title;
    let slug = req.body.slug.replace(/\s+/g, '-').toLowerCase();
    if (slug == ""){
        slug = title.replace(/\s+/g, '-').toLowerCase();
    }
    let content = req.body.content;
    
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        console.log(errors);
        // res.render('admin/add_page', {
        //     errors: errors.array(),
        //     title: title,
        //     slug: slug,
        //     content: content
        // });
    }
});

module.exports = router;