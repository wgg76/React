import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-3 mt-3">
      <p className="text-sm">&copy; {new Date().getFullYear()} Todos los derechos le pertenecen a EsteNoEsMonti
      </p>
      <p>❤️Tu Pirata Favorito </p>
    </footer>
  );
};

export default Footer;
