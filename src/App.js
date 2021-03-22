import React from "react";
import "./App.css";
import Logo from "./img/logo.png";
import MyCarousel from "./Components/Slider/Slider";
import Projects from "./Components/Projects/Projects";
import AboutMe from "./Components/AboutMe/AboutMe";
import Contact from "./Components/Contact/Contact";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="FixedContent">
      <div className="Container">
      <aside className="FixedInfo">
        <img src={Logo} className="FixedLogo" alt="" />
        <div className="div">
        <h2 className="FixedName">Marcela Catalán</h2>
        <h3 className="FixedDescription">Front-End Developer y Cientifica</h3>
        <p className="FixedWelcome">
          ¡Hola! bienvenida a mi portafolio, aqui podras encontrar
          informacion de mi, de mis proyectos y de contacto.
        </p>
        <h3 className="FixedTools">Herramientas</h3>
        <MyCarousel/>
        </div>
      </aside>
      <div className="FixedContainer">
    <Router>
        <nav >
          <ul className="NavMenu">
                <li className="projectBtn"><Link to="/">Proyectos</Link></li>
                  <li className="projectBtn"><Link to="/SobreMi">Sobre Mi</Link></li>
                  <li className="projectBtn"><Link to="/Contacto">Contacto</Link></li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/sobreMi">
            <AboutMe />
          </Route>
          <Route path="/Contacto">
            <Contact />
          </Route>
          <Route path="/">
            <Projects />
          </Route>
        </Switch>
    </Router>
    </div>
    </div>
    </div>
  );
}

export default App;
