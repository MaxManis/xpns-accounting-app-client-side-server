'use strict';

const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000;

const app = express();
const staticFolder = path.join(__dirname, 'build', 'static');

app.use('/static', express.static(staticFolder));

app.get('/', (req, res) => {
    console.log(req.params)

    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT);
