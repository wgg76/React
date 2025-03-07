import { useState, useEffect } from "react";

export const useWatchlist = () => {
  const [watchlist, setWatchlist] = useState([]);

  // Cargar la Watchlist desde localStorage cuando se monta el componente
  useEffect(() => {
    const savedWatchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    setWatchlist(savedWatchlist);
  }, []);

  const addToWatchlist = (movie) => {
    // Evitar duplicados
    if (!watchlist.some((item) => item.id === movie.id)) {
      const updatedList = [...watchlist, movie];
      setWatchlist(updatedList);
      localStorage.setItem("watchlist", JSON.stringify(updatedList));
    }
  };

  const removeFromWatchlist = (id) => {
    const updatedList = watchlist.filter((movie) => movie.id !== id);
    setWatchlist(updatedList);
    localStorage.setItem("watchlist", JSON.stringify(updatedList));
  };

  return { watchlist, addToWatchlist, removeFromWatchlist };
};
