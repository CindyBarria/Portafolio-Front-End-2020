import React from 'react';
import '../styles/Skills.css';
import Fondo from '../assets/fondo2.jpg';
import Figma from '../assets/Vector.png';
import Firebase from '../assets/firebase.png';
const Skills = () => {
    return (
        <div class='habilidades' >
            <img className='imgSkills' src={Fondo} alt={'logo'} />
            <h3>Habilidades</h3>
            <div class='iconos'>
                <div className='skills-icon'>
                    <span class="devicon-html5-plain"></span>
                    <h4>HTML</h4>
                    <p className='description'>Lenguaje de marcado para la estructura de la web.</p>
                </div>
                <div className='skills-icon'>
                    <span class="devicon-css3-plain"></span>
                    <h4>CSS</h4>
                    <p className='description'>Lenguaje de hoja de estilo utilizado en web.</p>
                </div>
                <div className='skills-icon'>
                    <span class="devicon-javascript-plain"></span>
                    <h4>JAVASCRIPT</h4>
                    <p className='description'>Lenguaje de programación interpretado.</p>
                </div>
                <div className='skills-icon'>
                    <span class="devicon-react-original"></span>
                    <h4>REACT</h4>
                    <p className='description'>Librería Javascript para el desarrollo de interfaces de usuario.</p>
                </div>
                <div className='skills-icon'>
                    <span class="devicon-bootstrap-plain"></span>
                    <h4>BOOTSTRAP</h4>
                    <p className='description'>Conjunto de herramientas de código abierto para diseño de sitios .</p>
                </div>
                <div className='skills-icon'>
                    <span class="devicon-github-plain"></span>
                    <h4>GITHUB</h4>
                    <p className='description'>Servicio de hospedaje basado en web para control de versiones.</p>
                </div>
                <div className='skills-icon'>
                    <span class="devicon-git-plain"></span>
                    <h4>GIT</h4>
                    <p className='description'>Sistema de control de versiones para seguimiento de cambios.</p>
                </div>
                <div className='skills-icon'>
                    <span class="devicon-nodejs-plain"></span>
                    <h4>NODE JS</h4>
                    <p className='description'>Entorno JavaScript que utiliza un modelo asíncrono y dirigido por eventos.</p>
                </div>
                <div className='skills-icon'>
                    <span class="devicon-npm-original-wordmark"></span>
                    <h4>NPM</h4>
                    <p className='description'>Sistema de gestión de paquetes por defecto para Node.js.</p>
                </div>
                <div className='skills-icon'>
                    <span class="devicon-photoshop-line"></span>
                    <h4>PHOTOSHOP</h4>
                    <p className='description'>Editor de fotografías desarrollado por Adobe Systems.</p>
                </div>
                <div className='skills-icon'>
                    <img class="figma" src={Figma} alt='' />
                    <h4>FIGMA</h4>
                    <p className='description'>Editor de gráficos vectoriales y creación de prototipos</p>
                </div>
                <div className='skills-icon'>
                    <img class="figma" src={Firebase} alt='' />
                    <h4>FIREBASE</h4>
                    <p className='description'>Plataforma para desarrollar aplicaciones desarrollada por Google.</p>
                </div>
                <div className='skills-icon'>
                    <span class="devicon-trello-plain"></span>
                    <h4>TRELLO</h4>
                    <p className='description'>Software con interfaz web para organizar proyectos​.</p>
                </div>
            </div>
        </div>
    );
}

export default Skills;