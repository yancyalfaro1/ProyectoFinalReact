import React from 'react';

async function PostArticulo(Articulo,Descripcion,Precio,Imagen) {

    const ArticuloData={
    Articulo,
    Descripcion,
    Precio,
    Imagen

    }
    try {
        const response = await fetch('http://localhost:3001/Articulo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ArticuloData)
        });

        if (!response.ok) {
            throw new Error('Error al agregar un Articulo');
        }

        const Articulo = await response.json();
        return Articulo;
    } catch (error) {
        console.error('Error al agregar un Articulo', error);
        throw error;
    }
}

export default PostArticulo;
