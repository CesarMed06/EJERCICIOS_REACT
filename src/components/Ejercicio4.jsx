function BotonAlerta() {
    const manejarClick = () => {
    alert('¡Has hecho clic en el botón!');
    };

    return <button onClick={manejarClick}>Haz clic aquí</button>;
}

export default BotonAlerta;
