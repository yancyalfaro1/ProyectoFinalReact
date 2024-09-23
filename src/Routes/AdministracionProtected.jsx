import React from 'react';
import { useNavigate } from 'react-router-dom';

function FormAdministracion() {
  const navigate = useNavigate();

 function cerrarSesion() {
    localStorage.removeItem('Autenticado');
    navigate('/');
  };

  return (
    <div>
      <h2>Bienvenido a la Página de Inicio</h2>
      <button onClick={cerrarSesion}>Cerrar Sesión</button> 
    </div>
  );
}
export default FormAdministracion;