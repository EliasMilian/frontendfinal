import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./comentarios.css"; // Asegúrate de que este archivo CSS está creado y enlazado correctamente

function LeaveRating() {
  const { establishmentId } = useParams();
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0); // Agregado para manejar el estado de hover

  // Renderiza las estrellas
  const renderStars = () => {
    return [...Array(5)].map((star, index) => {
      return (
        <button
          key={index}
          className={`star-button ${index < rating ? "on" : "off"}`}
          onClick={() => setRating(index + 1)}
          onMouseEnter={() => setHover(index + 1)}
          onMouseLeave={() => setHover(rating)}
        >
          <span className="star">&#9733;</span>
        </button>
      );
    });
  };

  return (
    <div className="leave-rating-container">
      <Link
        to={`/establishment-detail/${establishmentId}`}
        className="back-button"
      >
        ←
      </Link>
      <h1>¿Cómo calificarías tu experiencia en este lugar?</h1>
      <div className="stars">{renderStars()}</div>
      <h2>Déjanos tu comentario</h2>
      <textarea placeholder="Comentario"></textarea>
      <button className="submit-button">Enviar</button>
      <Link to="/explore" className="home-button">
        Regresar al inicio
      </Link>
      <footer className="rating-footer">
        <p>about us</p>
      </footer>
    </div>
  );
}

export default LeaveRating;
