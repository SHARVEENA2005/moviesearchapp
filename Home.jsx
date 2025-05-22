
import React, { useState } from "react";
import { fetchMovies, fetchMovieDetails } from "../api";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";
import "../styles/App.scss";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (query) => {
    setIsLoading(true);
    const results = await fetchMovies(query);
    setMovies(results);
    setIsLoading(false);
  };

  const handleMovieClick = async (movieId) => {
    const details = await fetchMovieDetails(movieId);
    setSelectedMovie(details);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="app">
      <h1 className="animated-header">
        <span>🎬</span> SHAR FLIX <span>🍿</span>
      </h1>
      <SearchBar onSearch={handleSearch} />
      
      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <div className="movies-container">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onClick={handleMovieClick}
              />
            ))
          ) : (
            <p className="no-results">No movies found. Try searching for a movie!</p>
          )}
        </div>
      )}
      {isModalOpen && (
        <MovieModal movie={selectedMovie} onClose={closeModal} />
      )}
    </div>
  );
};

export default Home;