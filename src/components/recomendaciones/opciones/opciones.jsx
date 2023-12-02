import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ListByCategorie } from "../../Api/RestApi";
import "./opciones.css"; // Asegúrate de que este archivo CSS esté creado y enlazado correctamente

function Recommendations() {
  const [list, setList] = useState([]);
  const { categorie } = useParams();

  useEffect(() => {
    ListByCategorie(categorie).then(({ data }) => {
      setList(data.lista);
    });
  }, []);

  const renderRecommendationSection = (title) => (
    <div className="recommendation-section">
      <h2>{title}</h2>
      {list.map((item, index) => (
        <div className="local-item" key={index}>
          <h3>Nombre: {item.title}</h3>
          <p>Precio: {item.priceRange}</p>
          <p>Tipo: {item.category}</p>
          <Link to="/establishment-detail">Más información</Link>
          <Link to="/location">Ubicación</Link>
        </div>
      ))}
    </div>
  );

  return (
    <div className="recommendations-container" style={{ height: "auto" }}>
      <Link to="/Categoria" className="back-button">
        ←
      </Link>

      {renderRecommendationSection("Recomendación del día")}

      {/* Suponiendo que quieras una sección diferente para recomendaciones de usuarios */}
      <div className="user-recommendations-section">

        {renderRecommendationSection("Recomendaciones de usuarios")}
        {/* ... otros locales */}
      </div>

      <footer className="recommendations-footer">
        <p>about us</p>
      </footer>
    </div>
  );
}

export default Recommendations;