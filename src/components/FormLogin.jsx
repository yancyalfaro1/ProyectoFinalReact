import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useEffect } from 'react';
import '../styles/Login.css'
import GetAdministrador from '../services/GetAdministrador'

function FormLogin() {

  

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Administrador, setAdministrador] = useState([]);
  

  const navigate = useNavigate();
  
  
    useEffect(() => {
      const fetchAdministrador = async () => {
       const data = await GetAdministrador();
     
      console.log(data);
      
       setAdministrador(data);
      };
      fetchAdministrador();
    }, []);


  function cargaEmail(event) {
    setEmail(event.target.value);
  }

  const cargaPassword = (event) => {
    setPassword(event.target.value);
  };

  function login () {
     
  

    if (!Administrador || !email || !password) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "¡No se permiten espacios vacios!",
        footer: '<a href="#">¿Por qué tengo este problema?</a>'
      });
      return;
    }
    
      const autentic = Administrador.find(admin =>  email === admin.email && password === admin.password) 
      

      console.log(autentic);
      
        localStorage.setItem('Autenticado','true');

      if (autentic) {
        
         Swal.fire({
          position: "top-end",
          icon: "success",
          title:"¡Inicio de sesión exitoso!",
          showConfirmButton: false,
          timer: 1500
        });
      
        navigate('/Administracion');
      }else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "¡Inicio de sesión fallido!",
          footer: '<a href="#">¿Por qué tengo este problema?</a>'
        });
      }
  };


  return (
    <div className='contenedor-login'>
    <div className='fondo'>
     <h2 className='textLogin'>Iniciar sesion</h2>
      <div>
        <label htmlFor="email"></label>
        <input 
         className='imputEmail'
          type="text" 
           id="email" 
            name="email" 
            placeholder="Correo" 
           value={email}
          onChange={cargaEmail}
         required
        />
      </div>
      <br />
    <div>
     <label htmlFor="password"></label>
      <input 
       type="password" 
        className='imputPassword'
         id="password"  
          name="password" 
          placeholder="Contraseña"
         value={password}
        onChange={cargaPassword}
       required
      />
      <br />
     </div>
       <button className='btnLogin' onClick={login}>Inicio</button>
     </div>
     </div>
  );
}

export default FormLogin;