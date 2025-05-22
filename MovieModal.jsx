import React from "react";
import { FaTimes, FaStar, FaCalendarAlt, FaClock } from "react-icons/fa";
import "../styles/MovieModal.scss";

const MovieModal = ({ movie, onClose }) => {
  if (!movie) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          <FaTimes />
        </button>
        <div className="modal-body">
          <img
            src={movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "https://via.placeholder.com/300x450?text=No+Poster"
            }
            alt={movie.title}
          />
          <div className="movie-details">
            <h2>{movie.title}</h2>
            <p>{movie.overview || "No description available."}</p>
            <div className="details-row">
              <span>
                <FaStar /> {movie.vote_average?.toFixed(1) || "N/A"}
              </span>
              <span>
                <FaCalendarAlt /> {movie.release_date || "Unknown"}
              </span>
              {movie.runtime && (
                <span>
                  <FaClock /> {`${movie.runtime} mins`}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;