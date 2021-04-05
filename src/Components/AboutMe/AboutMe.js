import "./AboutMe.css";
import MyPhoto from "./AboutMeImages/MyFoto.jpg";
import Aptitudes from "./AboutMeImages/aptitudes.png";
import Conocimientos from "./AboutMeImages/Conocimientos.svg";
import Ciencia from "./AboutMeImages/Ciencia.png";
import Dibujo from "./AboutMeImages/Dibujo.png";
import Mascotas from "./AboutMeImages/Mascotas.png";
import Tejido from "./AboutMeImages/Tejido.png";

function AboutMe() {
  return (
    <div className="content">
      <div className="leftContent">
        <div className="descriptionContent">
          <h2 className="title">¡Hola!</h2>
          <p className="description">
            Soy una Científica que descubrió su pasión por la programación.
            Siempre trato de aplicar mi amor por el código y la ciencia en
            todo lo que hago.
            <br />
            Me gusta mucho el anime (otaku veterana), tejer y dibujar. Alguna
            vez toqué violín y canté opera.
            <br />
            Actividades:
            <br />
          </p>
          <div className="imagesContainer">
            <div className="imagescontent">
              <img src={Ciencia} alt="" className="PersonalImages" />
              <p className="descriptionImages">Ciencia</p>
            </div>
            <div className="imagescontent">
              <img src={Dibujo} alt="" className="PersonalImages" />
              <p className="descriptionImages">Dibujo</p>
            </div>
            <div className="imagescontent">
              <img src={Mascotas} alt="" className="PersonalImages" />
              <p className="descriptionImages">Mascotas</p>
            </div>
            <div className="imagescontent">
              <img src={Tejido} alt="" className="PersonalImages" />
              <p className="descriptionImages">Tejido</p>
            </div>
          </div>
        </div>
        <div className="AptitudContainer">
          <div className="TitleContainer">
            <h2 className="Title">Aptitudes</h2>
            <h2 className="Title">Intereses</h2>
          </div>
          <div className="Aptitud">
            <img src={Aptitudes} className="AptitudImage" alt="hola" />
          </div>
        </div>
      </div>
      <div>
        <img src={MyPhoto} className="MyPhoto" alt="" />
        <div>
          <h2 className="TitleSkills">Conocimientos</h2>
          <div className="Skills">
            <img src={Conocimientos} className="skillImage" alt="" />
          </div>
        </div>
        <button className="CVBtn">
          <a href="https://n9.cl/cv_personal">Mi CV</a>
        </button>
      </div>
    </div>
  );
}

export default AboutMe;