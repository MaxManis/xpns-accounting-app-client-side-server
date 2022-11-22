'use strict';

const express = require('express');
require('dotenv/config');
const path = require('path');
const PORT = process.env.PORT || 3000;

const app = express();
const staticFolder = path.join(__dirname, 'build', 'static');

app.use('/static', express.static(staticFolder));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('*', (req, res) => {
    res.statusCode = 404;
    res.send('<h1>404: NOT FOUND</h1>');
})

app.listen(PORT);
