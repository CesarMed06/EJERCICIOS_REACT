function Perfil({ nombre, edad, profesion }) {
    return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
        <p>
        Me llamo <strong>{nombre}</strong>, tengo <strong>{edad}</strong> años y
        soy <strong>{profesion}</strong>.
        </p>
    </div>
    );
}

export default Perfil;
