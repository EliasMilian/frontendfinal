import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./inicio.css";

function Inicio() {
  return (
    <div className="inicio">
      <header className="inicio-header">
        <div className="logo">
          <img src="/img/logo.png" alt="Logo"></img>
        </div>
        <nav className="header-buttons">
          <Link to="/login" className="header-button">
            iniciar sesión
          </Link>
          <Link to="/registro" className="header-button">
            registrarse
          </Link>
        </nav>
      </header>
      <div className="content-container">
        <div className="text-content">
          <h1>In-Foraneo</h1>
          <p>
            El sitio de ayuda para que puedas descubrir las mejores maneras de
            usar tu dinero.
          </p>
        </div>
        <div className="slider-conteiner">
          <div className="slider"></div>
        </div>
      </div>
      <footer className="footer">
        <p>about us</p>
      </footer>
    </div>
  );
}

export default Inicio;
