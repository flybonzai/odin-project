#! /usr/bin/env node

console.log('This script populates some test games and genres to your database. Specified database as argument - e.g.: populatedb mongodb+srv://cooluser:coolpassword@cluster0.a9azn.mongodb.net/local_library?retryWrites=true');

// Get arguments passed on command line
var userArgs = process.argv.slice(2);
/*
if (!userArgs[0].startsWith('mongodb')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}
*/
var async = require('async')
var Game = require('./models/videogame')
var Genre = require('./models/genre')


var mongoose = require('mongoose');
var mongoDB = userArgs[0];
console.log('MongoDB url ' + mongoDB)
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var games = []
var genres = []

function gameCreate(title, desc, genre, price, numInStock, releaseDate, cb) {
  game = new Game({
    title,
    description: desc,
    genre,
    price,
    numInStock,
    releaseDate
  })

  game.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New Game: ' + game)
    games.push(game)
    cb(null, game)
  })
}

function genreCreate(name, desc, cb) {
  var genre = new Genre({name: name, description: desc});

  genre.save(function (err) {
    if (err) {
      cb(err, null);
      return;
    }
    console.log('New Genre: ' + genre);
    genres.push(genre)
    cb(null, genre);
  });
}

function createGenreGames(cb) {
  async.series([
      function (callback) {
        genreCreate("Role-Playing", 'RPG', callback);
      },
      function (callback) {
        genreCreate("First-Person Shooter", 'Kill \'em all', callback);
      },
      function (callback) {
        genreCreate("Action-Adventure", 'Nathan Drake ftw', callback);
      },
      function (callback) {
        gameCreate('The Witcher 3', 'Geralt of Rivia\'s third adventure', genres[0], 59.99, 20, '5/18/2015', callback)
      },
      function (callback) {
        gameCreate('The Legend of Zelda: Ocarina of Time', 'The seminal adventure of the Hero of Time', genres[0], 49.99, 20, '11/21/1998', callback)
      },
      function (callback) {
        gameCreate('Halo: Combat Evolved', 'Master Chief and Cortana kicking ass, taking names', genres[1], 59.99, 20, '11/15/2001', callback)
      },
      function (callback) {
        gameCreate('Doom', 'Reimagining of ID Software\'s masterpiece', genres[1], 59.99, 20, '5/13/2016', callback)
      }
    ],
    // optional callback
    cb);
}

async.series([
    createGenreGames
  ],
// Optional callback
  function (err, results) {
    if (err) {
      console.log('FINAL ERR: ' + err);
    } else {
      console.log('Games: ' + games);

    }
    // All done, disconnect from database
    mongoose.connection.close();
  });
