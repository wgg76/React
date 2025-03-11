import React from "react";
import movies from "../api/movies.json";
import MovieCard from "./MovieCard";

const MoviesList = ({ addToWatchlist }) => {
  return (
    <div className="p-30 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-15">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} onAdd={addToWatchlist} />
      ))}
    </div>
  );
};

export default MoviesList;
