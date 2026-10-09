// Movie Hub - Movie Database

const movieList = [
  {
    id: 1,
    title: "Ali Baba 40 Bhoot",
    category: "Bollywood",
    year: 2026,
    language: "Hindi",
    rating: 8.2,
    poster: "images/movie1.jpg",
    video: "videos/Ali baba 40 bhoot  hindi.mp4",
    description: "Ali Baba 40 Bhoot - Hindi movie."
  },

  {
    id: 2,
    title: "Marjaavaan",
    category: "Bollywood",
    year: 2019,
    language: "Hindi",
    rating: 7.0,
    poster: "images/marjaavaan.jpg",
    video: "videos/marjaavaan.mkv",
    description: "Marjaavaan (2019) - Hindi movie."
  },

  {
    id: 3,
    title: "Mirzapur: The Movie",
    category: "Bollywood",
    year: 2026,
    language: "Hindi",
    rating: 8.5,
    poster: "images/Mirzapur .jpg",
    video: "videos/mirzapur.mkv",
    description: "Mirzapur: The Movie (2026)."
  },

  {
    id: 4,
    title: "Dhoom 3",
    category: "Bollywood",
    year: 2013,
    language: "Hindi",
    rating: 8.0,
    poster: "images/dhoom3.jpg",
    video: "videos/Dhoom_3_2013_Hindi_Full_Movie_BluRay.mp4",
    description: "Dhoom 3 - Bollywood action movie."
  }
];

// Display movies
function showMovies(list) {
  const moviesContainer = document.querySelector(".movies");

  if (!moviesContainer) {
    return;
  }

  if (!list || list.length === 0) {
    moviesContainer.innerHTML =
      '<p class="no-movies">कोई मूवी नहीं मिली।</p>';
    return;
  }

  moviesContainer.innerHTML = list
    .map(
      (movie) => `
        <div class="movie">
          <a href="movie.html?id=${movie.id}" class="movie-link">
            <img
              src="${movie.poster}"
              alt="${movie.title}"
              class="movie-image"
              loading="lazy"
              onerror="this.onerror=null;this.src='images/movie1.jpg';"
            >

            <div class="movie-info">
              <h3>${movie.title}</h3>
              <p>${movie.year} · ${movie.language}</p>
              <p>⭐ ${movie.rating}</p>
              <span class="movie-category">${movie.category}</span>
            </div>
          </a>
        </div>
      `
    )
    .join("");
}

// Show all movies when the page loads
document.addEventListener("DOMContentLoaded", () => {
  showMovies(movieList);
});
