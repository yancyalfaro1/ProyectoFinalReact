import React from 'react';

async function DeleteArticulo(ArticuloId) {
    try {
        const response = await fetch(`http://localhost:3001/Articulo/${ArticuloId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error deleting task');
        }

        const result = await response.json(); 
        return result;
    } catch (error) {
        console.error('Error deleting task:', error);
        throw error;
    }
}

export default DeleteArticulo;
