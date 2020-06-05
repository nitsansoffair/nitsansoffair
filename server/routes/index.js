const express = require('express');
const path = require('path');

const email = require('../mail/index');

const router = new express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'index.html'));
});

router.post('/send-mail', async (req, res) => {
    try {
        const response = email.send(req.query);

        if (!response) {
            return res.status(400).send({
                error: 'An error occurred.'
            });
        }

        res.send();
    } catch (e) {
        res.status(400).send({
            error: e
        });
    }
});

module.exports = router;
