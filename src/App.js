import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Nav from './components/Nav';
import './styles/App.css'

function App() {

  return (
    <Router>
      <div className="menu">
        <div className="menu-nav">
          <Nav></Nav>
          {/*  <Link to='/' className='menu-link'>Inicio</Link>
          <Link to='/about' className='menu-link'>Biografía</Link>
          <Link to='/skills' className='menu-link'>Habilidades</Link>
          <Link to='/projects' className='menu-link'>Proyectos</Link>
          <Link to='/contact' className='menu-link'>Contacto</Link> */}
        </div>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
