import React from "react";
import FormInicio from "../components/FormInicio";
import FormFooter from "../components/FormFooter";
import FormNavbar from "../components/FormNavbar"
import FormTienda from "../components/FormTienda";

function Inicio () {
 return (
    <div>
     < FormNavbar />
     < FormInicio />
     <FormTienda />
     < FormFooter />
    </div>
 )  
}

export default Inicio
  