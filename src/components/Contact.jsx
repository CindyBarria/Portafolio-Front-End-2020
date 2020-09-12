import React from 'react';
import Fondo from '../assets/fondo2.jpg';
import '../styles/contact.css';
import Talent from '../assets/applab.png';
const Contact = () => {
    return (
        <div className='contacto'>
            <img className='imgContact' src={Fondo} alt={'logo'} />
            <h3>Contacto</h3>
            <div className='iconos-contact' >
                <span className="devicon-github-plain" ><a className='links' href='https://github.com/CindyBarria'>github.com/CindyBarria</a></span>
                <span className="devicon-google-plain"><p className='links'>cindybarria@gmail.com</p></span>
                <span className="devicon-linkedin-plain" style={{ marginLeft: '10%' }}><a className='links' href='https://www.linkedin.com/in/cindybarria/'>linkedin.com/in/cindybarria/</a></span>
                <div>
                    <img className="talent" src={Talent} alt='' /><a className='links' href='https://app.talento.laboratoria.la/profile/7pc1I9UDjrYrov97UVu6Z9O8YUz1'>app.talento.laboratoria.la</a>
                </div>

            </div>
        </div>

    );
}

export default Contact;