import { useState } from 'react';

function Tarea({ titulo, onEliminar }) {
    return (
    <li>
        {titulo}
        <button onClick={onEliminar} style={{ marginLeft: '10px' }}>
        Eliminar
        </button>
    </li>
    );
}

function ListaTareas() {
    const [tareas, setTareas] = useState([
    'Aprender React',
    'Hacer ejercicios',
    'Practicar hooks',
    ]);

    const eliminarTarea = (index) => {
    const nuevasTareas = tareas.filter((_, i) => i !== index);
    setTareas(nuevasTareas);
    };

    return (
    <div>
        <h3>Lista de Tareas:</h3>
        <ul>
        {tareas.map((tarea, index) => (
            <Tarea
            key={index}
            titulo={tarea}
            onEliminar={() => eliminarTarea(index)}
            />
        ))}
        </ul>
    </div>
    );
}

export default ListaTareas;
