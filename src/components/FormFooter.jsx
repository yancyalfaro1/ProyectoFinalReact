import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram,faWhatsapp, } from '@fortawesome/free-brands-svg-icons';
import '../styles/Footer.css';
import logo from'../img/IMG-LOGO.png'

const FormFooter = () => {
  return (
    <footer className="footer">
      <div className="social-media">
        <a href="https://facebook.com" aria-label="Facebook"><FontAwesomeIcon icon={faFacebookF} /> Sport LE </a>   
        <a href="https://instagram.com" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /> le_sport_nosara </a>
        <a href="https://instagram.com" aria-label="Instagram"><FontAwesomeIcon icon={faWhatsapp} /> le_sport_nosara </a>
 

      </div>
      <p className="description">
      </p>
      <div className="logo">
        <img src={logo} alt="LE" />
      </div>
      <div className="text">
        <p>Sport|LE</p>
      </div>
    </footer>
  );
};

export default FormFooter;
