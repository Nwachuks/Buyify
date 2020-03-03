const express = require('express');

// Init app
const app = express();

// Test server
app.get('/', (req, res) => {
    res.send('Working!');
});

// Start server
const port = 3000;

app.listen(port, () => {
    console.log('Server started on port ' + port);
});
