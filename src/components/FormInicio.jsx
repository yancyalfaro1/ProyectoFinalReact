import React from "react";
import imagen2 from '../img/IMG-2.jpeg'
import "../styles/Inicio.css"





function FormInicio() {


  return (
    <div className='FormInicio'>

       <img className="imgInicio" src={imagen2} alt="" />
            <div className="overlay">
                <h1 className='subtitulo'>"Siéntete cómoda, segura y con estilo en cada movimiento con nuestra ropa deportiva."</h1>
            </div>
          
    </div>



    
)
}

export default FormInicio;