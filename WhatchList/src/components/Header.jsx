import React from "react";

const Header = ({ setIsModalOpen }) => {
  const onOpenModal = () => setIsModalOpen(true);

  return (
    <header className="bg-gray-800 text-amber-300 p-3 shadow-md flex justify-between">
      <h1 className="text-xl font-bold">🎬 BIENVENIDO A NODOPLAY - TU PAGINA DE PIRATERIA PREFERIDA</h1>
      <button className="bg-blue-600 text-white p-2" onClick={onOpenModal}>
        Ver tus Favoritos
      </button>
    </header>
  );
};

export default Header;
