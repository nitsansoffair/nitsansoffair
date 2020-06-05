const express = require('express');

const indexRouter = require('./routes/index');

const app = express();

app.use((req, res, next) => {
    res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods': '*'
    });
    next();
});
app.use(indexRouter);

module.exports = app;
