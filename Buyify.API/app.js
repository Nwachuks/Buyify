const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/database');
const cors = require('cors');

// Connect to db
mongoose.connect(config.database);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Init app
const app = express();

// Enable cors
app.use(cors({ origin: 'http://localhost:4200' }));

// Set routes
const adminPages = require('./routes/admin_pages');
app.use('/admin/pages', adminPages);

const pages = require('./routes/pages');
app.use('/', pages);



// Start server
const port = 3000;

app.listen(port, () => {
    console.log('Server started on port ' + port);
});
