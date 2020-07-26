require('dotenv').config();
const express = require('express');
const init = require('./init');

const app = express();
init(app);
app.listen(process.env.PORT, () => {
    console.log('PWA scanner POC started on port', process.env.PORT);
});
