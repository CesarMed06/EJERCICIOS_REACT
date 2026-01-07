function Contenido({ contenido }) {
    return <p>{contenido}</p>;
}

function Tarjeta({ titulo, contenido }) {
    return (
    <div style={{ border: '2px solid blue', padding: '15px', margin: '10px' }}>
        <h3>{titulo}</h3>
        <Contenido contenido={contenido} />
    </div>
    );
}

export default Tarjeta;
