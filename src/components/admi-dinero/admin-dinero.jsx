import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './dinero.css';

function MoneyManagementApp() {
  const [frequency, setFrequency] = useState('weekly');
  const [amount, setAmount] = useState('');
  const [results, setResults] = useState(null);

  const handleCalculateClick = () => {
    // Aquí podrías validar los datos antes de calcular
    const y = amount ? Number(amount) : 0;
    setResults({
      fiftyPercent: (y * 50) / 100,
      thirtyPercent: (y * 30) / 100,
      twentyPercent: (y * 20) / 100,
    });
  };

  return (
    <div className="money-management-app-container">
      <Link to="/explore" className="back-button">
        ←
      </Link>
      <div className="form-container">
        <label htmlFor="frequency">
          Con qué regularidad te dan el dinero para tu manutención?
        </label>
        <select
          id="frequency"
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
        >
          <option value="weekly">Semanalmente</option>
          <option value="biweekly">Quincenalmente</option>
          <option value="monthly">Mensualmente</option>
        </select>

        <label htmlFor="amount">Cuánto dinero te dan?</label>
        <input
          type="text"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Ingresa una cantidad"
        />

        <button onClick={handleCalculateClick} className="calculate-button">
          Calcular
        </button>
      </div>
      {results && (
        <div className="results-container">
          <h2>
            Tus gastos deberían de quedar representados de la siguiente manera
          </h2>
          <div className="calculation-result">
            <p>${results.fiftyPercent} deberían de representar el 50% ............</p>
            <p>${results.thirtyPercent} deberían de representar el 30% ............</p>
            <p>${results.twentyPercent} deberían de representar el 20% ............</p>
          </div>
          <p className="note">
            Nota: x es el valor del dinero total que maneja el estudiante
          </p>
        </div>
      )}
      <Link to="/explore" className="home-button">
        Regresar al inicio
      </Link>
      <footer className="money-management-footer">
        <p>about us</p>
      </footer>
    </div>
  );
}

export default MoneyManagementApp;
