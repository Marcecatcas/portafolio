import './App.css';
import Logo from "./img/logo.png";
import MyCarousel from "./Components/Slider";

function App() {
  return (
    <div className="FixedContent">
      <header className="FixedHeader">
        <div className="NavMenu">
          <h3>PROYECTOS</h3>
          <h3>SOBRE MI</h3>
          <h3>CONTACTO</h3>
        </div>
      </header>
      <aside className="FixedInfo">
        <img src={Logo} className="FixedLogo" alt=""/>
        <h2 className="FixedName">Marcela Catalán</h2>
        <h3 className="FixedDescription">Front-End Developer y Cientifica</h3>
        <p className="FixedWelcome">
          ¡Hola! bienvenido a mi pagina personal, aqui podras encontrar
          informacion sobre mi, mis proyectos y de contacto.
        </p>
        <h3 className="FixedTools">Herramientas</h3>
        <MyCarousel />
      </aside>
    </div>
  );
}

export default App;
