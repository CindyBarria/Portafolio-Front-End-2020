import React from "react";
import Fondo from "../assets/fondo2.jpg";
import "../styles/contact.css";
import PDF from "../assets/CVCindyBarria.pdf";
const Contact = () => {
  return (
    <div className="contacto">
      <img className="imgContact" src={Fondo} alt={"logo"} />
      <h3>Contacto</h3>
      <p className="contact-text">
        Estoy disponible para trabajar<br></br>¡No dudes en contactarme!
      </p>
      <div className="iconos-contact">
        <a className="links" href="https://github.com/CindyBarria">
          <span className="devicon-github-plain"></span>
        </a>
        <a className="links" href="mailto:cindybarria@gmail.com">
          <span className="fa fa-envelope"></span>
        </a>
        <a className="links" href="https://www.linkedin.com/in/cindybarria/">
          <span className="devicon-linkedin-plain"></span>
        </a>
      </div>
      <div className="container-download">
        <p className="download-text">Descargar CV</p>
        <a className="download" href={PDF} download>
          <span class="fas fa-arrow-circle-down"></span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
