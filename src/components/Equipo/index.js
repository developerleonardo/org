import { Colaborador } from '../Colaborador';
import './Equipo.css';
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {

    const { colorPrimario, colorSecundario, titulo, id } = props.datos;
    const { colaboradores, eliminarColaborador, actualizarColor } = props;

    return (
        <>

            {colaboradores.length > 0 &&
                <section className='equipo' style={{ backgroundColor: hexToRgba(colorPrimario, 0.6) }}>
                    <input
                        type='color'
                        className='input_color'
                        value={colorPrimario}
                        onChange={(event) => {
                            actualizarColor(event.target.value, id);
                        }}
                    />
                    <h3 style={{ borderColor: colorPrimario }}>{titulo}</h3>
                    <div className='colaboradores'>
                        {
                            colaboradores.map((colaborador, index) => {
                                return <Colaborador
                                    datos={colaborador}
                                    key={index}
                                    colorPrimario={colorPrimario}
                                    eliminarColaborador={eliminarColaborador}
                                />
                            })
                        }
                    </div>
                </section>
            }
        </>
    );
};

export { Equipo };