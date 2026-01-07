function InputConsola() {
    const manejarClick = () => {
    const valor = document.getElementById('miInput').value;
    console.log(valor);
    };

    return (
    <div>
        <input type="text" id="miInput" placeholder="Escribe algo..." />
        <button onClick={manejarClick}>Imprimir en consola</button>
    </div>
    );
}

export default InputConsola;
