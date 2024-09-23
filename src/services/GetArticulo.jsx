import React from 'react';

async function getArticulo() {
    try {
        const response = await fetch('http://localhost:3001/Articulo', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error al obtener tareas');
        }

        const Articulo = await response.json();
        return Articulo;
    } catch (error) {
        console.error('Error al obtener tareas:', error);
        throw error;
    }
}

export default getArticulo;