import React from 'react';
import '../styles/About.css';
import Cindy from '../assets/perfil3.jpg'
import Fondo from '../assets/fondo2.jpg';

const About = () => {
    return (
        <div class='biografia'>
            <img className='imgBio' src={Fondo} alt={'logo'} />
            <h3>Biografía</h3>
            <div className='containerBio'  >
                <p>¡Hola!, soy Cindy Barria. soy Front - End Developer y Geóloga. Tengo 23 años y amo la programacion, aprender cosas nuevas y divertirme en el proceso. En mi tiempo libre me dedico a leer y ver series. Soy métodica, proactiva y responsable. Siempre estoy en constante creciemiento y curiosa de descubrir nuevas herramientas para mi desarrollo personal y profesional.
</p>
                <img src={Cindy} alt={'logo'} className='imagePerfil' />


            </div>

        </div>
    );
}

export default About;