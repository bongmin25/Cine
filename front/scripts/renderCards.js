const renderCards = (movies) => {
  const contenedorGeneralPeliculas = document.querySelector(
    ".contenedorGeneralPeliculas"
  );

  contenedorGeneralPeliculas.innerHTML = "";

  movies.forEach((pelicula) => {
    const tarjetaPelicula = document.createElement("div");
    tarjetaPelicula.classList.add("contenedorPeliculas");

    const titulo = document.createElement("h3");
    titulo.textContent = pelicula.title;
    titulo.classList.add("tituloPelicula");

    const img = document.createElement("img");
    img.src = pelicula.poster;
    img.classList.add("pelicula");

    const descripcion = document.createElement("p");
    descripcion.innerHTML = `Director: ${pelicula.director}<br> 
      Año: ${pelicula.year}<br> 
      Duración: ${pelicula.duration}<br> 
      Genero: ${pelicula.genre.join(", ")}<br>
      Calificación: ${pelicula.rate}`;
    descripcion.classList.add("descripcion");

    tarjetaPelicula.appendChild(titulo);
    tarjetaPelicula.appendChild(img);
    tarjetaPelicula.appendChild(descripcion);

    contenedorGeneralPeliculas.appendChild(tarjetaPelicula);
  });
};

module.exports = renderCards;
