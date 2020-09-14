const express = require('express');
const router = express.Router();
const jokesRouter = require('./jokes').router;

router.use('/jokes', jokesRouter);

module.exports = {router}