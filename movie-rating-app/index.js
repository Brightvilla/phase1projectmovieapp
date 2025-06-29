const movies = [];

function renderMovies() {
    const moviesUl = document.getElementById('movies');
    moviesUl.innerHTML = '';
    if (movies.length === 0) {
        moviesUl.innerHTML = '<li>No movies rated yet.</li>';
        return;
    }
    movies.forEach(movie => {
        const li = document.createElement('li');
        li.textContent = `${movie.title} - Rating: ${movie.rating}/10`;
        moviesUl.appendChild(li);
    });
}

document.getElementById('submit-rating').addEventListener('click', function() {
    const titleInput = document.getElementById('movie-title');
    const ratingInput = document.getElementById('movie-rating');
    const title = titleInput.value.trim();
    const rating = parseInt(ratingInput.value);

    if (!title || isNaN(rating) || rating < 1 || rating > 10) {
        alert('Please enter a valid movie title and a rating between 1 and 10.');
        return;
    }

    movies.push({ title, rating });
    renderMovies();

    titleInput.value = '';
    ratingInput.value = '';
});

document.addEventListener("DOMContentLoaded", renderMovies);