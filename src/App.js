import { useState } from 'react';
import { Header } from './components/Header';
import { Formulario } from './components/Formulario';
import { MiOrg } from './components/MiOrg';
import { Equipo } from './components/Equipo';
import './App.css';

function App() {

  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const cambiarMostrar = () => {
    setMostrarFormulario(!mostrarFormulario)
  }

  return (
    <div>
      <Header />
      {mostrarFormulario &&
      <Formulario /> 
      }
      <MiOrg cambiarMostrar={cambiarMostrar} />
      <Equipo />
    </div>
  );
}

export default App;