const express = require('express');
const path = require('path');
const jsonServer = require('json-server');
const router = jsonServer.router(path.join(__dirname, 'data.json'));

module.exports = (app) => {
    app.use('/api', router);
    app.get('/status', (req, res) => res.send('OK'));

    if (process.env.NODE_ENV === 'production') {
        app.use(express.static(path.join(__dirname, 'web')));
        app.use((req, res) => {
            res.sendFile(path.join(__dirname, 'web/index.html'));
        });
    }
};
