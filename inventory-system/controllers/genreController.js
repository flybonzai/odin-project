const Genres = require('../models/genre')
const Games = require('../models/videogame')
const mongoose = require('mongoose')
const async = require('async')

exports.genreDetail = function (req, res, next) {
  async.parallel(
    {
      genre: function (callback) {
        Genres.findById(req.params.id)
          .exec(callback)
      },
      gameList: function (callback) {
        Games.find({genre: req.params.id})
          .populate('genre')
          .exec(callback)
      }
    },
    function (err, results) {
      console.log(JSON.stringify(results))
      if (err) {
        console.log('Error occurred')
        next(err)
      }
      res.render('genre_detail', {genre: results.genre, gameList: results.gameList})
    }
  )
}