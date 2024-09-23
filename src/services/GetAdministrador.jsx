async function GetAdministrador() {
    try {
        const response = await fetch('http://localhost:3001/Administrador', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching Administrador');
        }

        const Administrador = await response.json();
        return Administrador;
    } catch (error) {
        console.error('Error fetching administrador:', error);
        throw error;
    }
}

export default GetAdministrador ;