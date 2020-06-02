const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/database');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const { check, validationResult } = require('express-validator');

// Connect to db
mongoose.connect(config.database, { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Init app
const app = express();

// Enable cors
app.use(cors({ origin: 'http://localhost:4200' }));

// Body Parser middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Express Session middleware
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
    cookie: { secure: true }
}));

// Set routes
const adminPages = require('./routes/admin_pages');
app.use('/admin/pages', adminPages);

const adminCategories = require('./routes/admin_categories');
app.use('/admin/categories', adminCategories);

const pages = require('./routes/pages');
app.use('/', pages);

// Start server
const port = 3000;

app.listen(port, () => {
    console.log('Server started on port ' + port);
});
