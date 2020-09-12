import React from 'react';
import '../styles/About.css';
import Cindy from '../assets/foto1.png'
import { Row } from 'react-bootstrap'
import Fondo from '../assets/fondo2.jpg';

const About = () => {
    return (
        <div class='biografia'>
            <img className='imgBio' src={Fondo} alt={'logo'} />
            <h3>Biografía</h3>
            <Row className='containerBio'  >
                <p>¡Hola! , soy Cindy Barria. soy Front - End Developer y Geóloga. Tengo 23 años y amo la programacion, aprender cosas nuevas y divertirme en el proceso. En mi tiempo libre me dedico a leer, ser series , peliculas y jugar. Siempre estoy en constante creciemiento y curiosa de descubrir nuevas herramientas para mi desarrollo personal.
</p>
                <img src={Cindy} alt={'logo'} className='imagePerfil' />


            </Row>

        </div>
    );
}

export default About;