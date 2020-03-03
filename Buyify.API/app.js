const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/database');

// Connect to db
mongoose.connect(config.database);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

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
