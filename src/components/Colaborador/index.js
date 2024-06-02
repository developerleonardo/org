import './Colaborador.css';

const Colaborador = (props) => {
    return (
        <div className='colaborador'>
            <div className='encabezado'>
                <img src='https://github.com/developerleonardo.png' alt='Leonardo' />
            </div>
            <div className='info'>
                <h4>Leonardo Salazar</h4>
                <h5>Programador</h5>
            </div>
        </div>
    )
};

export { Colaborador }