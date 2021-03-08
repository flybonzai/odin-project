const Genres = require('../models/genre')
const Games = require('../models/videogame')

const mongoose = require('mongoose')

exports.gameDetail = function (req, res, next) {
  console.log(req.params.id)
  Games.findById(req.params.id)
    .exec(function (err, game) {
      if (err) {
        next(err)
      }
      if (game === null) {
        console.log('Yooo')
      }
      console.log(JSON.stringify(game))
      res.render('game_detail', {game})
    })
}

exports.createGameGet = function (req, res, next) {
  Genres.find()
    .sort([["name", "ascending"]])
    .exec(function(err, genres) {
      if (err) {
        next(err)
      }
      res.render('create_game', {genres})
    })
}

exports.createGamePost = function (req, res, next) {

}