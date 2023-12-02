import React from 'react';
// LocationView.jsx
import { useEffect } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet/dist/leaflet.css';
import "./map.css"; // Asegúrate de que este archivo CSS está creado y enlazado correctamente

function LocationView() {
    const map = useMap();

    useEffect(() => {
      if (map) {
        const pointA = L.latLng(13.6731, -89.2382); // Reemplaza con tus coordenadas
        const pointB = L.latLng(14.7034, -89.2073); // Reemplaza con tus coordenadas

        // Crear la ruta
        L.Routing.control({
          waypoints: [pointA, pointB],
          routeWhileDragging: true,
          // Aquí puedes agregar más opciones y personalizaciones
        }).addTo(map);
      }
    }, [map]);

    return null;
  }

  function MapWithRouting() {
    return (
      <MapContainer center={[13.6731, -89.2382]} zoom={13}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <LocationView />
        
      </MapContainer>
    );
  }

  export default MapWithRouting;
