import { useState } from 'react';
import { Header } from './components/Header';
import { Formulario } from './components/Header/Formulario';
import { MiOrg } from './components/Header/MiOrg';
import './App.css';

function App() {

  const [mostrarFormulario, setMostrarFormulario] = useState(true);

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
    </div>
  );
}

export default App;