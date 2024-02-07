import React from "react";

function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Explora el mundo Digimon</h5>
            <p>
              Descubre nuevos Digimons y aventuras en un mundo lleno de misterio
              y emoción.
            </p>
          </div>
        </div>
        <hr />
        <p className="text-center">
          &copy; {new Date().getFullYear()} Digimon World. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
