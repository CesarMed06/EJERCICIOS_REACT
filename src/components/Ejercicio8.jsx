import { useState } from 'react';

function FormularioNombre() {
    const [nombre, setNombre] = useState('');

    return (
    <div>
        <input
        type="text"
        placeholder="Ingresa tu nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        />
        <p>Hola, {nombre || 'Anónimo'}</p>
    </div>
    );
}

export default FormularioNombre;
