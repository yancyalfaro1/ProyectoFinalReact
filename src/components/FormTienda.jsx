import React, { useEffect, useState } from 'react';
import getArticulo from '../services/GetArticulo';
import '../styles/Tienda.css';

function FormTienda() {
  const [articulo, setArticulo] = useState([]);

  useEffect(() => {
    const fetchArticulo = async () => {
      const data = await getArticulo();
      setArticulo(data);
    };
    fetchArticulo();
  }, []);

  return (
    <div className="tienda-container">
      {articulo.map(art => (
        <div className="card" key={art.id}>
          <img
            className="card-img-top img-fluid"
            src={art.Imagen}
            alt={art.Articulo}
          />
          <div className="card-body">
            <h5 className="card-title">{art.Articulo}</h5>
            <p className="card-text">{art.Descripcion}</p>
            <p className="card-text">
              <strong>Precio: ${art.Precio}</strong>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FormTienda;
