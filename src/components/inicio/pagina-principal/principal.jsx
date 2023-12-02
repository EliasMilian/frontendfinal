import React from "react";
import { Link } from "react-router-dom";
import "./principal.css";

function Explore() {
  return (
    <div className="explore-container">
      <div className="explore-options">
        <Link to="/Categoria" className="option-card">
          <h2>Comenzar la aventura</h2>
          <p>
            ¡Descubre nuevas experiencias basadas en recomendaciones de otros
            usuarios!
          </p>
        </Link>
        <Link to="/register-establishment" className="option-card">
          <h2>Recomendar establecimiento</h2>
          <p>
            Ayuda a que otras personas descubran nuevos lugares que valgan la
            pena visitar!
          </p>
        </Link>
      </div>
      <Link to="/money-management-help" className="manage-money-link">
        Aprende a gestionar tu dinero
      </Link>
      <footer className="explore-footer">
        <p>about us</p>
      </footer>
    </div>
  );
}

export default Explore;
