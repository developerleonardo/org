import { useState } from 'react';
import { CampoTexto } from './CampoTexto';
import { ListaOpciones } from './ListaOpciones';
import { Boton } from './Boton';
import './Formulario.css';

const Formulario = () => {

    const [nombre, setNombre] = useState("");
    const [puesto, setPuesto] = useState("");
    const [foto, setFoto] = useState("");
    const [equipo, setEquipo] = useState("");

    const manejarEnvio = (event) => {
        event.preventDefault();
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        };
        console.log(datosAEnviar);
    }

    return (
        <section className='formulario'>
            <form onSubmit={manejarEnvio}>
                <h2>Rellena el formulario para crear el colaborador</h2>
                <CampoTexto
                    titulo="Nombre"
                    placeholder="Ingresar nombre"
                    required
                    valor={nombre}
                    actualizarValor={setNombre} />
                <CampoTexto
                    titulo="Puesto"
                    placeholder="Ingresar puesto"
                    required
                    valor={puesto}
                    actualizarValor={setPuesto} />
                <CampoTexto
                    titulo="Foto"
                    placeholder="Ingresar enlace de foto"
                    required
                    valor={foto}
                    actualizarValor={setFoto} />
                <ListaOpciones
                    valor={equipo}
                    actualizarEquipo={setEquipo} />
                <Boton texto="Crear" />
            </form>
        </section>
    );
};

export { Formulario }