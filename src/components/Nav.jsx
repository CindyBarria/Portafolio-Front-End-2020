import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/App.css";
import Logo from "../assets/logo4.jpg";

const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <nav className="navbar">
      <img src={Logo} alt="" className="logo" />
      <Link to="/" className="navbar-logo"></Link>
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"} />
      </div>
      <ul className={click ? "menu-nav active" : "menu-nav"}>
        <li className="nav-item">
          <Link to="/" className="menu-links" onClick={closeMobileMenu}>
            Inicio
          </Link>
          <Link to="/about" className="menu-links" onClick={closeMobileMenu}>
            Biografia
          </Link>
          <Link to="/skills" className="menu-links" onClick={closeMobileMenu}>
            Habilidades
          </Link>
          <Link to="/projects" className="menu-links" onClick={closeMobileMenu}>
            Proyectos
          </Link>
          <Link to="/contact" className="menu-links" onClick={closeMobileMenu}>
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
