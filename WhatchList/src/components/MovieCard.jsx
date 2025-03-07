import React from "react";
import { motion } from "framer-motion";

const MovieCard = ({ movie, onAdd }) => {
  return (
    <div className="bg-gray-700 p-3 rounded shadow-md text-center">
      <img src={`src/assets/imgMovies/${movie.img}.jpg`} alt={movie.name} />
      <h3 className="text-lg font-semibold">{movie.name}</h3>

      {/* Botón con animación */}
      <motion.button
        className="bg-green-500 p-3 mt-1 rounded text-white"
        onClick={() => onAdd(movie)}
        whileTap={{ scale: 0.9 }} // Reduce el tamaño al hacer clic
        whileHover={{ scale: 1.05 }} // Aumenta ligeramente al pasar el mouse
        transition={{ type: "spring", stiffness: 300 }} // Efecto suave con rebote
      >
        Agregar a Favoritos
      </motion.button>
    </div>
  );
};

export default MovieCard;
