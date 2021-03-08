const mongoose = require('mongoose')
const {DateTime} = require('luxon')
const Schema = mongoose.Schema;

const GameSchema = new Schema({
  title: {type: String, required: true, maxlength: 50},
  description: {type: String, required: true},
  genre: {type: Schema.Types.ObjectId, ref: 'Genre', required: true},
  price: {type: Number, required: true},
  numInStock: {type: Number, required: true},
  releaseDate: {type: Date, required: true}
})

GameSchema
  .virtual('url')
  .get(function () {
    return '/inventory/games/' + this._id
  })

GameSchema
  .virtual('releaseDateFormatted')
  .get(function () {
    return DateTime.fromJSDate(this.releaseDate).toLocaleString(Datetime.DATE_MED)
  })

module.exports = mongoose.model('Game', GameSchema)