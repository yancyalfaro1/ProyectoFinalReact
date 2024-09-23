import React from "react";
import FormMap from '../components/FormMap'
import '../styles/Contacto.css'
import FormFooter from "../components/FormFooter";
import FormNavbar from "../components/FormNavbar"
import { ContactUs } from "../components/email";

function Contacto () {
 return (
<div>
   < FormNavbar /> 
    <div className=" CONTENEDOR">
      < ContactUs />
      < FormMap />
   </div>
        < FormFooter />
 </div>
 )  
}
export default Contacto