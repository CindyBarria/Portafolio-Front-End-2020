import React from 'react';
import { Button, Card, Row } from 'react-bootstrap'
import Valida from '../assets/sis.png'
import Harry from '../assets/Harry.png'
import Pincelbook from '../assets/pincelbook.png'
import Burger from '../assets/bq.jpg'
import Md from '../assets/md2.png'
import Hootie from '../assets/hootie.png'
import '../styles/Projects.css';
import Fondo from '../assets/fondo2.jpg';
const Projects = () => {
    return (
        <div className='proyectos'>
            <img className='imgFondo' src={Fondo} alt={'logo'} />
            <h3 style={{ position: 'relative' }}>Mis Proyectos</h3>
            <div className='container'>
                <Card >
                    <div className='single-content'>
                        <Card.Img variant="top" src={Valida} />
                        <Card.Body className='text-content'>
                            <Card.Text>
                                Es un MVP con el que se participo en Hackaton 2020, quedando finalista. Esta plataforma web adaptable a celulares se desarrollo para prevenir e informar sobre la violencia obstétrica, utilizando gamificación y un botón de pánico para brindar asistencia.
                    </Card.Text>
                            <Row >
                                <Button variant="primary" className='link' href='https://hackathon2020-6329e.firebaseapp.com/'>Demo</Button>
                                <Button variant="primary" href='https://github.com/CindyBarria/Hackaton2020-Boton-de-panico'>Código</Button>
                            </Row>
                        </Card.Body>
                    </div>
                </Card>
                <Card>
                    <div className='single-content'>
                        <Card.Img variant="top" src={Harry} />
                        <Card.Body className='text-content'>
                            <Card.Text>
                                Esta es una plataforma web adaptable a celulares fue diseñada para usuarios que conocen las películas de Harry Potter y quieren conocer mas información sobre sus personajes favoritos a traves de filtros y buscadores para conocer a los personajes, casas, patronus y varitas.
                    </Card.Text>
                            <Row>
                                <Button variant="primary" className='link' href='https://cindybarria.github.io/SCL013-data-lovers/src/index.html'>Demo</Button>
                                <Button variant="primary" href='https://github.com/CindyBarria/SCL013-data-lovers'>Código</Button>
                            </Row>
                        </Card.Body>
                    </div>
                </Card>
                <Card  className='card-burger'>
                    <div className='single-content'>
                        <Card.Img variant="top" src={Burger} />
                        <Card.Body className='text-content'>
                            <Card.Text>
                                Burger Queen es una plataforma web adaptada para tablet diseñada con el objetivo de entregar una herramienta cómoda y de facil uso para meseros de un restaurante. En esta podra realizar pedidos y enviarlos a cocina. Ademas de llevar un control de la cantidad total de pedidos.
                    </Card.Text>
                            <Row>
                                <Button className='link' href='https://project-burguer-queen.web.app/'>Demo</Button>
                                <Button className='link' href='https://github.com/CindyBarria/burguer-queen'>Código</Button>
                            </Row>
                        </Card.Body>
                    </div>
                </Card>
                <Card className='card-hootie' >
                    <div className='single-content'>
                        <Card.Img variant="top" src={Hootie} />
                        <Card.Body className='text-content'>
                            <Card.Text>
                                Ganemosle al virus es una plataforma web desarrollada para la empresa Hootie Hoo con el objetivo de informar y enseñar a niños y adultos de manera didáctica sobre el covid-19, utilizando técnicas de gamificación con diversos juegos, videos y modulos intormativos.
                    </Card.Text>
                            <Row>
                                <Button variant="primary" className='link' href='https://hootie-hoo1.web.app/'>Demo</Button>
                                <Button variant="primary" href='https://github.com/CindyBarria/Proyecto-empresa'>Código</Button>
                            </Row>
                        </Card.Body>
                    </div>
                </Card>
                <Card className='card-pincel'>
                    <div className='single-content'>
                        <Card.Img variant="top" src={Pincelbook} />
                        <Card.Body className='text-content'>
                            <Card.Text>
                                PINCELBOOK, es una plataforma web adaptable a celular que consiste en una red social colaborativa con un enfoque artístico.Esta permite que usuarios puedan compartir sus orbras, interactuar y conocer obras de aficionados a la fotografía e ilustración.
                    </Card.Text>
                            <Row>
                                <Button variant="primary" className='link' href='https://red-social-36807.firebaseapp.com/'>Demo</Button>
                                <Button variant="primary" href='https://github.com/CindyBarria/SCL013-social-network'>Código</Button>
                            </Row>
                        </Card.Body>
                    </div>
                </Card>

                <Card className='card-md'>
                    <div className='single-content'>
                        <Card.Img variant="top" src={Md} />
                        <Card.Body className='text-content'>
                            <Card.Text>
                                Markdown Links es una librería de Node.js que nos permite buscar en un directorio todos los archivos en formato Markdown que en su interior contengan link. Esta libreria nos permite poder validar el estado actual de cada link contenido, entregando un total de link rotos y su ubicación.
                    </Card.Text>
                            <Row>
                                <Button variant="primary" className='link' href='https://github.com/CindyBarria/SCL013-md-links'>Código</Button>
                            </Row>
                        </Card.Body>
                    </div>
                </Card>

            </div>
        </div>
    );
}

export default Projects;