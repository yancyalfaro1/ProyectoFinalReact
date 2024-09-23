import React from 'react';
import{ BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Administracion from '../pages/Administracion'
import Contacto from '../pages/Contacto'
import Map from '../pages/Map';

import Inicio from '../pages/Inicio';


const Routing = () => {
  return (
    <Router>
             <Routes>
                 <Route path="/Login" element={<Login />} />
                 <Route path="/Administracion" element={<Administracion />}/>
                 <Route path="/Contacto" element={<Contacto />}/>
                 <Route path="/Map" element={<Map />}/>
                 <Route path="/" element={<Inicio />}/>
            </Routes>
    </Router>
  );
};
export default Routing;