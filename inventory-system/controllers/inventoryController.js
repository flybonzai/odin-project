const Genres = require('../models/genre')
const Game = require('../models/videogame')

const async = require('async')

exports.index = function (req, res, next) {
  Genres.find()
    .exec(function (err, genreList) {
      if (err) {
        return next(err)
      }
      res.render('inventory', {title: 'Genres', genres: genreList})
    })
}