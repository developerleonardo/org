import { CampoTexto } from '../CampoTexto';
import { ListaOpciones } from '../ListaOpciones';
import { Boton } from '../Boton';
import './Formulario.css';

const Formulario = () => {

    const manejarEnvio = (event) => {
        event.preventDefault();
        console.log("Manejar el envio", event);
    }

    return (
        <section className='formulario'>
            <form onSubmit={manejarEnvio}>
                <h2>Rellena el formulario para crear el colaborador</h2>
                <CampoTexto titulo="Nombre" placeholder="Ingresar nombre"/>
                <CampoTexto titulo="Puesto" placeholder="Ingresar puesto"/>
                <CampoTexto titulo="Foto" placeholder="Ingresar enlace de foto"/>
                <ListaOpciones />
                <Boton texto="Crear" />
            </form>
        </section>
    );
};

export { Formulario }