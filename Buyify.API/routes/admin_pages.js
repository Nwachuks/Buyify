const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

// Get page model
const Page = require('../models/page');

// Get localhost:3000/admin/pages
router.get('/', (req, res) => {
    Page.find({}).sort({sorting: 1}).exec((err, pages) => {
        if (!err) {
            res.send(pages);
        } else {
            return console.log('Error in retrieving Pages: ' + JSON.stringify(err, undefined, 2));
        }
    })
});

// Get localhost:3000/admin/pages/add-page
// router.get('/add-page', (req, res) => {
//     const page = new Page({
//         title: title,
//         slug: slug,
//         content: content
//     });
// });

// Post localhost:3000/admin/pages/add-page
router.post('/add-page', [
    check('title', 'Title is required').not().isEmpty(),
    check('content', 'Content must not be empty').not().isEmpty()
], (req, res) => {
    title = req.body.title;
    if (req.body.slug == null) {
        slug = title.replace(/\s+/g, '-').toLowerCase();
    } else {
        slug = req.body.slug.replace(/\s+/g, '-').toLowerCase();
    }
    content = req.body.content;
    
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        // Validation errors already handled on front end
        console.log(errors);
        return res.status(400).send({
            message: errors.errors[0].msg
        });
    } else {
        // Check if slug is unique
        Page.findOne({slug: slug}, (err, page) => {
            if (page) {
                return res.status(400).send({
                    message: 'Page slug exists choose another.'
                });
            } else {
                const page = new Page({
                    title: title,
                    slug: slug,
                    content: content,
                    sorting: 100
                });

                page.save((err, doc) => {
                    if(!err) {
                        res.send(doc);
                    } else {
                        return console.log('Error in saving Page: ' + JSON.stringify(err, undefined, 2));
                    }
                });
            }
        });
    }
});

module.exports = router;