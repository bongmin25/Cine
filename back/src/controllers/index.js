// se encarga de dar las indicaciones, es como el DT

const movieService = require("../services/movieService");

async function moviesControler(req, res) {
  try {
    const movies = await movieService.getMovies();
    res.status(200).send(movies);
  } catch (error) {
    res.status(500).send({ error: "Error al obtener las películas" });
  }
}

async function creatingMovieController(req, res) {
  const { title, duration, genre, poster, year, director, rate } = req.body;
  try {
    const movie = await movieService.createMovie({
      title,
      duration,
      genre,
      poster,
      year,
      director,
      rate,
    });
    res.status(201).send(movie);
  } catch (error) {
    console.error("Error al crear la película:", error);
    res.status(500).send({ error: "Error al obtener las películas" });
  }
}

module.exports = { moviesControler, creatingMovieController };
