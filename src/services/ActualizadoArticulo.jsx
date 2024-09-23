
import React from 'react';

async function ActualizadoArticulo(ArticuloId, ActualizadoArticulo) {
    try {
        const response = await fetch(`http://localhost:3001/Articulo/${ArticuloId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ActualizadoArticulo)
        });

        if (!response.ok) {
            throw new Error('Error al actualizar el articulo');
        }

        const task = await response.json();
        return task;
    } catch (error) {
        console.error('Error al actualizar el articulo', error);
        throw error;
    }
}

export default ActualizadoArticulo;
