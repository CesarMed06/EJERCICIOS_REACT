import Saludo from './components/Ejercicio1';
import Perfil from './components/Ejercicio2';
import Tarjeta from './components/Ejercicio3';
import BotonAlerta from './components/Ejercicio4';
import InputConsola from './components/Ejercicio5';
import ListaFrutas from './components/Ejercicio6';
import Contador from './components/Ejercicio7';
import FormularioNombre from './components/Ejercicio8';
import ListaTareas from './components/Ejercicio9';
import LoginForm from './components/Ejercicio10';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Dojo React</h1>

      <hr/>
      <h2>Ejercicio 1: Componente Simple</h2>
      <Saludo nombre="Carlos" />

      <hr/>
      <h2>Ejercicio 2: Props Múltiples</h2>
      <Perfil nombre="Ana" edad={25} profesion="Diseñadora" />
      <Perfil nombre="Luis" edad={30} profesion="Desarrollador" />

      <hr/>
      <h2>Ejercicio 3: Componente Anidado</h2>
      <Tarjeta
        titulo="React Básico"
        contenido="Aprende los fundamentos de React."
      />
      <Tarjeta titulo="React Avanzado" contenido="Domina hooks y patrones." />

      <hr/>
      <h2>Ejercicio 4: Evento Click</h2>
      <BotonAlerta />

      <hr/>
      <h2>Ejercicio 5: Input y Consola</h2>
      <InputConsola />

      <hr/>
      <h2>Ejercicio 6: Lista Estática</h2>
      <ListaFrutas frutas={['Manzana', 'Banana', 'Naranja', 'Fresa']} />

      <hr/>
      <h2>Ejercicio 7: useState Básico</h2>
      <Contador />

      <hr/>
      <h2>Ejercicio 8: useState con Input</h2>
      <FormularioNombre />

      <hr/>
      <h2>Ejercicio 9: Lista Dinámica</h2>
      <ListaTareas />

      <hr/>
      <h2>Ejercicio 10: React Hook Form</h2>
      <LoginForm />
    </div>
  );
}

export default App;
