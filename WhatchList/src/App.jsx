import { useState } from "react";
import Header from "./components/Header";
import WatchlistModal from "./components/WatchlistModal";
import MoviesList from "./components/MoviesList";
import { useWatchlist } from "./hooks/useWatchlist";
import Footer from "./components/Footer";


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { watchlist, addToWatchlist, removeFromWatchlist } = useWatchlist();

  return (
    <>
      <Header setIsModalOpen={setIsModalOpen} />

      <WatchlistModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        watchlist={watchlist}
        removeFromWatchlist={removeFromWatchlist}
      />

      <MoviesList addToWatchlist={addToWatchlist} />
      <Footer /> {/* Agregamos el footer aquí */}
    </>
  );
}

export default App;
