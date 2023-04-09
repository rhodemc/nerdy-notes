// dependencies
const html = require('express').Router();
const path = require('path');

// get route for notes.html
html.get('notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// get route for index.html
html.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// export
module.exports = html;