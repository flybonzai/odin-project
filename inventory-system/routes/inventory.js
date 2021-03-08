const express = require('express')
const router = express.Router();

const inventoryController = require('../controllers/inventoryController')
const genreController = require('../controllers/genreController')
const gamesController = require('../controllers/gamesController')

router.get('/', inventoryController.index)

router.get('/genres/:id', genreController.genreDetail)

router.get('/games/create', gamesController.createGameGet)

router.post('/games/create', gamesController.createGamePost)

router.get('/games/:id', gamesController.gameDetail)

module.exports = router;