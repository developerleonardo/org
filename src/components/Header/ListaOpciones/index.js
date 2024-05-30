import './ListaOpciones.css';

const ListaOpciones = () => {

    const equipos = [
        "Programación",
        "Frontend",
        "Data Science",
        "Devops",
        "Ux y Diseño",
        "Móvil",
        "Innovación y Gestión"
    ]

    return (
        <div className="lista-opciones">
            <label>Equipos</label>
            <select>
                { equipos.map( (equipo, index) => <option key={index}>{equipo}</option>
                 ) }
            </select>
        </div>
    );
};

export { ListaOpciones }