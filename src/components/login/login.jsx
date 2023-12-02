import React from 'react';
import { LoginUser } from '../Api/RestApi';
import { Link } from 'react-router-dom';
import './login.css'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const notifySuccess = () => toast.success("¡Inicio de sesión exitoso!");
  const notifyError = () => toast.error("Hubo un error en el inicio de sesión.");

  const login = async (e) => {
    try {
      const body = {
        email: e.target.email.value,
        password: e.target.password.value
      };

      const { message } = (await LoginUser(body)).data;
      if (message === "success") {
        notifySuccess();
        window.location.href = "/explore";
      } else {
        notifyError();
      }
    } catch (error) {
      console.log(`
        Request failed: ${error}
      `);
      notifyError();
    }
  };

  return (
    <div className="login-container">
      <Link to="/" className="back-button">←</Link>
      <div className="login-logo">INFO</div>
      <form method="post" className="login-form" onSubmit={(e) => { e.preventDefault(); login(e) }} >
        <input type="email" placeholder="Correo institucional" name='email' />
        <input type="password" placeholder="Contraseña" name="password" />
        <Link to="/password-recovery" className="forgot-password">¿Olvidaste tu contraseña?</Link>
        <input type="submit" className="explore" value="Ingresar" />
      </form>
      <footer className="login-footer">
        <p>about us</p>
      </footer>
      <ToastContainer />
    </div>
  );
}

export default Login;