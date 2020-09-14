const express = require('express');
const router = express.Router();
const Joke = require('../../../models/joke');
const { v4: uuidv4 } = require('uuid');
const jokeController = require('../../../controller/JokeController')

router.get('/', jokeController.add);

router.get('/random', jokeController.random);

router.get('/:id', jokeController.update);

router.post('/new',  jokeController.new);

router.put('/update/:id', jokeController.update);

router.delete('/delete/:id', jokeController.delete);

module.exports = {
    router
}