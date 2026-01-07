function Fruta({ nombre }) {
    return <li>{nombre}</li>;
}

function ListaFrutas({ frutas }) {
    return (
    <div>
        <h3>Lista de Frutas:</h3>
        <ul>
        {frutas.map((fruta, index) => (
            <Fruta key={index} nombre={fruta} />
        ))}
        </ul>
    </div>
    );
}

export default ListaFrutas;
