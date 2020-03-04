const express = require('express');
const router = express.Router();
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

module.exports = router;