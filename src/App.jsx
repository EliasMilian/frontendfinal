//escucha de .env

// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './components/inicio/inicio'; // Asegúrate de que la importación coincida con la ubicación de tu archivo
import Registro from './components/registro/registro'; // Asegúrate de que la importación coincida con la ubicación de tu archivo
import Login from './components/login/login';
import Explore from './components/inicio/pagina-principal/principal';
import Categoria from './components/recomendaciones/comenzar/Categoria';
import Recommendations from './components/recomendaciones/opciones/opciones';
import EstablishmentDetail from './components/recomendaciones/opciones/mas-info';
import LocationView from './components/recomendaciones/mapa/map'; // Importa el nuevo componente
import LeaveRating from './components/recomendaciones/comentarios/comentarios'; // Importa el nuevo componente
import MoneyManagementHelp from './components/admi-dinero/admin-dinero'; // Importa el nuevo componente
import RegisterEstablishment from './components/recomendaciones/recomendar/recomendar-local'; // Importa el nuevo componente


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/explore" element={<Explore />} /> 
        <Route path="/Categoria" element={<Categoria />} />
        <Route path="/recommendations/:categorie" element={<Recommendations />} />
        <Route path="/establishment-detail" element={<EstablishmentDetail />} />
        <Route path="/location" element={<LocationView />} /> 
        <Route path="/leave-rating" element={<LeaveRating />} /> 
      

        <Route path="/money-management-help" element={<MoneyManagementHelp />} />
        <Route path="/register-establishment" element={<RegisterEstablishment />} />

        {/* Agrega aquí otras rutas según sea necesario */}
      </Routes>
    </Router>
  );
}

export default App;