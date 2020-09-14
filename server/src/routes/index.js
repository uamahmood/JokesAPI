const express = require('express');
const router = express.Router();
const apiRouter = require('./api').router;

router.use('/api', apiRouter);

router.get('/', (req, res) => {
    res.send("Hello World");
})

module.exports = {router}