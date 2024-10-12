const axios = require("axios");
const { fetchData } = require("./index");

const newMovie = async () => {
  const title = document.getElementById("titleInput").value;
  const director = document.getElementById("directorInput").value;
  const year = document.getElementById("yearInput").value;
  const duration = document.getElementById("durationInput").value;
  const rate = document.getElementById("rateInput").value;
  const genre = document.getElementById("genreInput").value;
  const poster = document.getElementById("imagenInput").value;

  if (!title || !director || !year || !duration || !rate || !genre || !poster) {
    alert("Es necesario completar todos los campos");
    return;
  }

  try {
    await axios.post("http://localhost:3000/movies", {
      title,
      director,
      year,
      duration,
      genre,
      rate,
      poster,
    });

  } catch (error) {
    console.error("Error al añadir la película:", error);
  }
};

// Botón que envía el formulario y botón que limpia inputs
window.onload = function () {
  const botonEnviar = document.getElementById("botonEnvio");
  if (botonEnviar) {
    botonEnviar.addEventListener("click", newMovie);
  }

  const botonLimpieza = document.getElementById("botonLimpiar");
  if (botonLimpieza) {
    botonLimpieza.addEventListener("click", function cleaner() {
      document.getElementById("titleInput").value = "";
      document.getElementById("directorInput").value = "";
      document.getElementById("yearInput").value = "";
      document.getElementById("durationInput").value = "";
      document.getElementById("rateInput").value = "";
      document.getElementById("genreInput").value = "";
      document.getElementById("imagenInput").value = "";
    });
  }
};
