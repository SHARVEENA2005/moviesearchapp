import React from "react";
import { FaStar } from "react-icons/fa";
import "../styles/MovieCard.scss";

const MovieCard = ({ movie, onClick }) => {
  if (!movie.poster_path) return null;

  return (
    <div className="movie-card" onClick={() => onClick(movie.id)}>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>
          <FaStar className="star-icon" /> {movie.vote_average.toFixed(1)}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;