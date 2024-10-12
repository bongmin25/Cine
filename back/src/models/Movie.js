const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({ 
  title: {
    type: String,
    unique: true,
    required: true,
  },
  duration: { type: String, unique: true, required: true },

  genre: {
    type: [String],
    unique: true,
    required: true,
  },
  poster: {
    type: String,
    unique: true,
    required: true,
  },
  year: {
    type: Number,
    unique: true,
    required: true,
  },
  director: {
    type: String,
    unique: true,
    required: true,
  },
  rate: {
    type: Number,
    unique: true,
    required: true,
  },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
