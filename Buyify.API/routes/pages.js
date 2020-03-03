const express = require('express');
const router = express.Router();

// Get localhost:3000
router.get('/', (req, res) => {
    res.send('Pages');
});

module.exports = router;