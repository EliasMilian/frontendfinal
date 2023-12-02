import React from "react";
import { Link, useParams } from "react-router-dom";
import "./mas-info.css"; // Asegúrate de que este archivo CSS está creado y enlazado correctamente

function EstablishmentDetail() {
  const { establishmentId } = useParams();

  // Aquí puedes cargar los detalles del establecimiento usando el establishmentId
  // Por ejemplo, haciendo una petición a una API o buscando en un array

  return (
    <div className="establishment-detail-container">
      <Link to={`/recommendations/:category`} className="back-button">
        ←
      </Link>
      <div className="detail-section">
        <div className="description-block">
          <h3>Descripción del establecimiento</h3>
          <textarea
            defaultValue={`Descripción del Local ${establishmentId}...`}
            disabled
          />

          <div className="user-experiences">
            <h4>Experiencias de usuarios</h4>
            {/* Ejemplo de comentarios de usuarios */}
            <p>@comentario: -----------</p>
            <p>@comentario: -----------</p>
            <p>@comentario: -----------</p>
          </div>
        </div>
        <div className="info-block">
          <h1>Local {establishmentId}</h1>
          <p>Rango de precios: Bajo</p>
          <p>Tipo: restaurante</p>
          <p>Categoría de restaurante:</p>
          <div className="rating">Calificación: ★★★★☆</div>
          <Link
            to={`/leave-rating/${establishmentId}`}
            className="leave-rating-button"
          >
            ¡DEJANOS TU CALIFICACIÓN!
          </Link>
        </div>
      </div>
      <footer className="establishment-footer">
        <p>about us</p>
      </footer>
    </div>
  );
}

export default EstablishmentDetail;
