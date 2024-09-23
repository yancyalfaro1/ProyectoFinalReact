import React, { useState, useEffect } from 'react';
import getArticulo from '../services/GetArticulo';
import ActualizadoArticulo from '../services/ActualizadoArticulo';
import DeleteArticulo from '../services/DeleteArticulo';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import PostArticulo from '../services/PostArticulo';
import '../styles/Administracion.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Container, Modal } from 'react-bootstrap';

function FormAdministracion() {
  const [articulo, setArticulo] = useState([]);
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [imagen, setImagen] = useState('');
  const [nombre, setNombre] = useState('');
  
  useEffect(() => {
    const fetchArticulo = async () => {
      const data = await getArticulo();
      setArticulo(data);
    };
    fetchArticulo();
  }, []);

  const agregarNombre = (event) => setNombre(event.target.value);
  const cargaDescripcion = (event) => setDescripcion(event.target.value);
  const cargaPrecio = (event) => setPrecio(event.target.value);
  
  const cargaImagen = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => setImagen(reader.result);
    reader.readAsDataURL(file);
  };

  const agregar = async () => {
    if (!nombre || !descripcion || !precio || !imagen) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "¡No se permiten espacios vacíos!",
      });
      return;
    }

    try {
      await PostArticulo(nombre, descripcion, precio, imagen);
      Swal.fire("¡Artículo agregado exitosamente!");
      // Resetear campos
      setNombre('');
      setDescripcion('');
      setPrecio('');
      setImagen('');
      const data = await getArticulo();
      setArticulo(data); // Actualizar lista
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo agregar el artículo",
      });
    }
  };

  const eliminar = async (articuloId) => {
    try {
      await DeleteArticulo(articuloId);
      setArticulo(articulo.filter((art) => art.id !== articuloId));
      Swal.fire("¡Artículo eliminado!");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "¡Error al eliminar el artículo!",
      });
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Administración</h2>
      <div className="mb-4">
        <input 
          className="form-control mb-2"
          type="text" 
          placeholder="Nombre del Artículo" 
          value={nombre}
          onChange={agregarNombre}
          required
        />
        <input 
          type="text" 
          className="form-control mb-2"
          placeholder="Descripción"
          value={descripcion}
          onChange={cargaDescripcion}
          required
        />
        <input 
          type="text" 
          className="form-control mb-2"
          placeholder="Precio"
          value={precio}
          onChange={cargaPrecio}
          required
        />
        <input 
          type="file" 
          accept='image/*'
          className="form-control mb-2"
          onChange={cargaImagen}
          required
        />
        <Button variant="primary" onClick={agregar}>Agregar</Button>
      </div>

      <h3>Lista de Artículos</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Imagen</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {articulo.map((art) => (
            <tr key={art.id}>
              <td>{art.Articulo}</td>
              <td>{art.Descripcion}</td>
              <td>{art.Precio}</td>
              <td><img className="img-fluid" src={art.Imagen} alt={art.name} style={{ width: '100px' }} /></td>
              <td>
                <Button variant="danger" onClick={() => eliminar(art.id)}>Eliminar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default FormAdministracion;
