import { useState } from 'react';
import { Header } from './components/Header';
import { Formulario } from './components/Formulario';
import { MiOrg } from './components/MiOrg';
import { Equipo } from './components/Equipo';
import { Footer } from './components/Footer';
import './App.css';

function App() {

  const [mostrarFormulario, setMostrarFormulario] = useState(true);
  const [colaboradores, setColaboradores] = useState([]);

  const cambiarMostrar = () => {
    setMostrarFormulario(!mostrarFormulario)
  };

  //Registrar colaborador
  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador);
    setColaboradores([...colaboradores, colaborador]);
  };

  //Lista de equipos
  const equipos = [
    {
      titulo: "Programación",
      colorPrimario: "#57c278",
      colorSecundario: "#D9F7E9",
    },
    {
      titulo: "Frontend",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    {
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    {
      titulo: "Ux y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },
    {
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },
    {
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
    }
  ];

  return (
    <div>
      <Header />
      {mostrarFormulario &&
        <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
        />
      }
      <MiOrg cambiarMostrar={cambiarMostrar} />
      {equipos.map((equipo, index) => {
        return <Equipo datos={equipo} key={index} colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)} />
      })}
      <Footer />
    </div>
  );
}

export default App;