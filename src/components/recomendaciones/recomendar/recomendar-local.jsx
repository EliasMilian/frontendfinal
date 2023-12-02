import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./recomendar.css";
import { Create } from "../../Api/RestApi";
import useGeoLocation from "../../../hooks/getLocation";
import axios from "axios";



// Resto del código...

function RegisterEstablishment() {
  const location = useGeoLocation();
  const [locationData, setLocationData] = useState({
    lat: null,
    lng: null
  });

  const captureLocation = () => {
    if (location.loaded && !location.error) {
      setLocationData({
        lat: location.coordinates.lat,
        lng: location.coordinates.lng
      });
      alert("Ubicación capturada: " + location.coordinates.lat + ", " + location.coordinates.lng);

      // Envia los datos de ubicación al servidor inmediatamente
      sendLocationToServer(location.coordinates.lat, location.coordinates.lng);
    } else {
      alert("Error al capturar ubicación: " + (location.error ? location.error.message : "Ubicación no cargada"));
    }
  };

  const sendLocationToServer = (lat, lng) => {
    // Puedes enviar la solicitud HTTP a tu servidor aquí
    // Utiliza la librería que estás usando para realizar solicitudes HTTP (axios, fetch, etc.)
    // Ejemplo con axios:
    axios.post('/api/post/save-location', { lat, lng })
      .then(response => {
        console.log(response.data);
      })
     .catch(error => {
        console.error('Error al enviar la ubicación al servidor:', error);
      });
  };

  const SendData = (e) => {
    e.preventDefault();

    if (!locationData.lat || !locationData.lng) {
      alert("Por favor, capture la ubicación antes de enviar el formulario.");
      return;
    }

    const body = {
      title: e.target.titulo.value,
      category: e.target.categoria.value,
      lat: locationData.lat,
      lng: locationData.lng,
      description: e.target.description.value,
      priceRange: e.target.precio.value
    };

    Create(body)
      .then(({ data }) => {
        const { message } = data;
        if (message === "success") {
          alert("Información guardada con éxito");
          window.location.href = "/establishment-registration-confirmation";
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="register-establishment-container">
      <Link to="/explore" className="back-button">
        ←
      </Link>
      <div className="form-container">
        <form onSubmit={SendData}>
          <input type="text" placeholder="Nombre del local" name="titulo" required />
          <select name="categoria" required>
            <option value="" disabled selected>Categoría</option>
            <option value="bebidas">Bebidas</option>
            <option value="comida">Comida</option>
            {/* Agrega el resto de las opciones aquí */}
          </select>
          <input type="text" placeholder="Rango de precio" name="precio" required />
          <textarea placeholder="Descripción" name="description" required></textarea>
          <button type="button" className="add-location-button" onClick={captureLocation}>
            Agregar ubicación
          </button>
          <input type="submit" className="submit-button" value={"crear"} />
        </form>
      </div>
    </div>
  );
}

export default RegisterEstablishment;
