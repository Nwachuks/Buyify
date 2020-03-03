const express = require('express');
const router = express.Router();

// Get localhost:3000/admin/pages
router.get('/', (req, res) => {
    res.send('Admin Area');
});

module.exports = router;