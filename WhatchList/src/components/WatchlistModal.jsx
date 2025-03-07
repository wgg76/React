import React from "react";

const WatchlistModal = ({ isModalOpen, setIsModalOpen, watchlist, removeFromWatchlist }) => {
  if (!isModalOpen) return null;

  const onClose = () => setIsModalOpen(false);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-md relative">
        <button className="absolute top-2 right-2 text-red-600 text-lg" onClick={onClose}>
          ✖️
        </button>
        <h2 className="text-xl font-bold mb-4">Mis Favoritos</h2>

        {watchlist.length === 0 ? (
          <p className="text-center text-gray-500">No hay películas en la lista</p>
        ) : (
          <div className="space-y-4">
            {watchlist.map((movie) => (
              <div key={movie.id} className="flex items-center gap-4 border-b pb-2">
                {movie.img && (
                  <img src={`src/assets/imgMovies/${movie.img}.jpg`} alt={movie.name} className="w-16 h-16 rounded-lg" />
                )}
                <p className="font-semibold text-gray-800">{movie.name}</p>
                <button className="bg-red-500 text-white px-3 py-1 rounded" onClick={() => removeFromWatchlist(movie.id)}>
                  Remover
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WatchlistModal;
