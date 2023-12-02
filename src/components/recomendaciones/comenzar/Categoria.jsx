import React from "react";
import { Link } from "react-router-dom";
import "./Categoria.css";

function Categories() {
  return (
    <div className="categories-container">
      <Link to="/explore" className="back-button">
        ←
      </Link>
      <h1>¿Qué buscas hoy?</h1>
      <div className="categories-grid">
        <div className="category-item">
          <Link to="/recommendations/comida">Comida</Link>
        </div>
        <div className="category-item">
          <Link to="/recommendations/bebidas">Bebidas</Link>
        </div>
        <div className="category-item">
          <Link to="/recommendations/servicios">Servicios</Link>
        </div>
        <div className="category-item">
          <Link to="/recommendations/lugaresDeIntereses">Lugares de interés</Link>
        </div>
        <div className="category-item">
          <Link to="/recommendations/utlidadesUniversitarias">Utilidades Universitarias</Link>
        </div>
        <div className="category-item">
          <Link to="/recommendations/ocio">Ocio</Link>
        </div>
      </div>
      <footer className="categories-footer">
        <p>about us</p>
      </footer>
    </div>
  );
}

export default Categories;
  