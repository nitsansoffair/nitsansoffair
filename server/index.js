const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const app = require('./app');

const port = process.env.PORT || 3005;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '..', '')));

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
