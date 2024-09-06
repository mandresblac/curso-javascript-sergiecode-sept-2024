/* ---------- VARIABLES ---------- */
const api_key = "8d6d2c65ac6a26c3ee949e0a8ec15f06";
const urlBase = "https://api.themoviedb.org/3/search/movie";
const urlImg = "https://image.tmdb.org/t/p/w200";

const resultsContainer = document.querySelector("#results");

/* ---------- EVENTOS ---------- */
document.querySelector("#searchButton").addEventListener("click", searchMovies);

/* ---------- FUNCIONES ---------- */
function searchMovies() {
  resultsContainer.innerHTML = "Cargando...";
  const searchInput = document.querySelector("#searchInput").value;

  fetch(`${urlBase}?api_key=${api_key}&query=${searchInput}`)
    .then((response) => response.json())
    .then((response) => displayMovies(response.results));
}

function displayMovies(movies) {
  resultsContainer.innerHTML = "";

  if (movies.length === 0) {
    resultsContainer.innerHTML =
      "<p>No se encontraron resultados para tu busqueda</p>";
    return; // Sale de la función
  }

  movies.forEach((movie) => {
    // Creamos un elemento div de html
    const movieDiv = document.createElement("div");
    movieDiv.classList.add("movie");

    // Creamos un elemento h2 de html
    const title = document.createElement("h2");
    title.textContent = movie.title;

    // Creamos un elemento p de html
    const releaseDate = document.createElement("p");
    releaseDate.textContent =
      "La fecha de lanzamiento fue: " + movie.release_date;

    // Creamos un elemento p de html
    const overview = document.createElement("p");
    overview.textContent = `Descripción general: ${movie.overview}`;

    const posterPath = urlImg + movie.poster_path;
    // Creamos un elemento img de html
    const poster = document.createElement("img");
    poster.src = posterPath; // src es el "source" donde busca la imagen

    // Agregamos todos los elementos a movieDiv
    movieDiv.appendChild(poster);
    movieDiv.appendChild(title);
    movieDiv.appendChild(releaseDate);
    movieDiv.appendChild(overview);

    // Agregamos movieDiv a resultsContainer
    resultsContainer.appendChild(movieDiv);
  });
}
