import React from 'react';
import { Register } from '../Api/RestApi';
import { Link } from 'react-router-dom';
import './registro.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Registro() {
  const notifySuccess = () => toast.success("¡Registro exitoso!");
  const notifyError = () => toast.error("Hubo un error en el registro.");

  const SignUp = async (e) => {
    try {
      const body = {
        name: e.target.nombre.value,
        email: e.target.email.value,
        password: e.target.password.value,
        role: "User"
      };

      const { message } = (await Register(body)).data;
      if (message === "success") {
        // Puedes redirigir o hacer otras acciones en caso de éxito
        window.location.href = "/login";
      }
      
      notifySuccess(); // Muestras la notificación de éxito solo si el registro fue exitoso
    } catch (error) {
      console.log(`
        Request failed: ${error}
      `);
      notifyError();
    }
  };

  return (
    <div className="registro-container">
      <Link className="navigation-icon">←</Link>
      <div className="info-icon">i</div>
      <div className="logo">INFO</div>
      <form method='post' className="form" onSubmit={(e) => { e.preventDefault(); SignUp(e) }} >
        <input type="text" placeholder="Nombre" name='nombre' />
        <input type="email" placeholder="Correo institucional" name='email' />
        <input type="password" placeholder="Contraseña" name='password' />
        <input type="submit" className='registro' value="Registrate" />
        <ToastContainer />
      </form>
      <footer className="footer">
        <p>about us</p>
      </footer>
    </div>
  );
}

export default Registro;
