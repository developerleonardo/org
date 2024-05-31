import { useState } from 'react';
import './MiOrg.css';

const MiOrg = (props) => {

    return (
        <section className='org_section'>
            <h3 className='title'>Mi organización</h3>
            <img src='./img/add.png' alt='add' onClick={props.cambiarMostrar} />
        </section>
    );
};

export { MiOrg }