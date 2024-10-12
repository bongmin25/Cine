// se encarga de recibir las solicitudes HTTP
const { Router } = require("express");
const { creatingMovieController } = require("../controllers/index");
const {moviesControler} = require("../controllers/index");

const router = Router();

router.get("/movies", moviesControler);

router.post("/movies", creatingMovieController);

module.exports = router;

