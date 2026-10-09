const search = document.querySelector(".search");
const categories = document.querySelectorAll(".category");

if (search) {
  search.addEventListener("input", () => {
    const text = search.value.toLowerCase().trim();

    const filtered = movieList.filter(movie =>
      movie.title.toLowerCase().includes(text)
    );

    showMovies(filtered);
  });
}

categories.forEach(button => {
  button.addEventListener("click", () => {
    const category = button.textContent.trim();

    const filtered = category === "All"
      ? movieList
      : movieList.filter(movie => movie.category === category);

    showMovies(filtered);
  });
});
