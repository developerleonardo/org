import { useState } from 'react';
import { Campo } from '../Campo';
import { ListaOpciones } from '../ListaOpciones';
import { Boton } from '../Boton';
import './Formulario.css';

const Formulario = (props) => {

    const [nombre, setNombre] = useState("");
    const [puesto, setPuesto] = useState("");
    const [foto, setFoto] = useState("");
    const [equipo, setEquipo] = useState("");

    const [titulo, setTitulo] = useState("");
    const [color, setColor] = useState("");

    const { registrarColaborador, crearEquipo } = props;

    const manejarEnvio = (event) => {
        event.preventDefault();
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        };
        registrarColaborador(datosAEnviar);
    }

    const manejarNuevoEquipo = (event) => {
        event.preventDefault();
        crearEquipo({ titulo, colorPrimario: color });
    }

    return (
        <section className='formulario'>
            <form onSubmit={manejarEnvio}>
                <h2>Rellena el formulario para crear el colaborador</h2>
                <Campo
                    titulo="Nombre"
                    placeholder="Ingresar nombre"
                    required
                    valor={nombre}
                    actualizarValor={setNombre} />
                <Campo
                    titulo="Puesto"
                    placeholder="Ingresar puesto"
                    required
                    valor={puesto}
                    actualizarValor={setPuesto} />
                <Campo
                    titulo="Foto"
                    placeholder="Ingresar enlace de foto"
                    required
                    valor={foto}
                    actualizarValor={setFoto} />
                <ListaOpciones
                    valor={equipo}
                    actualizarEquipo={setEquipo}
                    equipos={props.equipos} />
                <Boton texto="Crear" />
            </form>
            <form onSubmit={manejarNuevoEquipo}>
                <h2>Rellena el formulario para crear el equipo</h2>
                <Campo
                    titulo="Título"
                    placeholder="Ingresar título"
                    required
                    valor={titulo}
                    actualizarValor={setTitulo} />
                <Campo
                    titulo="Color"
                    placeholder="Ingresar el color en Hex"
                    required
                    valor={color}
                    actualizarValor={setColor}
                    type="color" />
                <Boton texto="Registar equipo" />
            </form>
        </section>
    );
};

export { Formulario }