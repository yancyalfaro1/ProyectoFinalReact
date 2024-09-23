import React from 'react';
import { Link } from "react-router-dom";
import "../styles/Navbar.css"; 
import logo from "../img/IMG-LOGO.png"

function FormNavbar() {
  return (
    <nav>
      <img src={logo} alt="logoNavbar" />
      <ul>
        <li><Link to="/Administracion">Administración</Link></li>
        <li><Link to="/Login">Login</Link></li>
        <li><Link to="/Contacto">Contacto</Link></li>
      </ul>
    </nav>
  );
}

export default FormNavbar;
