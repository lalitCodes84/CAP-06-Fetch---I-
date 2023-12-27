document.addEventListener('DOMContentLoaded', function () {
    const searchBar = document.getElementById('searchBar');
    const searchBtn = document.getElementById('searchBtn');
    const movieCard = document.getElementById('movieCard');
    const apiKey = 'e813c679'; // Replace with your actual OMDB API key
  
    searchBtn.addEventListener('click', searchMovies);
  
    function searchMovies() {
      const searchTerm = searchBar.value.trim();
  
      if (searchTerm === '') {
        alert('Please enter a search term.');
        return;
      }
  
      const apiUrl = `http://www.omdbapi.com/?apikey=${'e813c679'}&t=${searchTerm}`;
  
      // Using the OMDB API to fetch movie data
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayMovie(data))
        .catch(error => console.error('Error fetching movie:', error));
    }
  
    function displayMovie(movie) {
      // Display movie data in the movie card
      movieCard.innerHTML = '';
  
      const movieTitle = document.createElement('h1');
      movieTitle.innerText = movie.Title;
  
      const movieDescription = document.createElement('p');
      movieDescription.innerText = movie.Plot;
  
      const movieImage = document.createElement('img');
      movieImage.src = movie.Poster === 'N/A' ? 'placeholder.jpg' : movie.Poster;
      movieImage.alt = movie.Title;
  
      movieCard.appendChild(movieTitle);
      movieCard.appendChild(movieDescription);
      movieCard.appendChild(movieImage);
    }
  });
  