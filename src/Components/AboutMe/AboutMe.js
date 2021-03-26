import "./AboutMe.css"
import MyPhoto from "./AboutMeImages/MyFoto.jpg"
import Aptitudes from "./AboutMeImages/Aptitudes.svg"
import Conocimientos from "./AboutMeImages/Conocimientos.svg"

function AboutMe() {
    return (
        <div className="content">
            <div className="leftContent">
                <div className="descriptionContent">
        <h2 className="title">¡Hola!</h2>
        <p className="description">
            Soy una Cientifica que descubrio su pasion por la programación. Siempre trato de aplicar a mi amor por el codigo y la ciencia en todo lo que hago!<br/>
            Me gusta mucho el anime (otaku veterana), tejer y dibujar. Alguna vez toque violin y cante opera.<br/>   
        </p>
        <div>
            <img src="" alt=""/>
        </div>
        </div>
        <div>
        <div className="TitleContanier"> <h2 className="Title">Aptitudes</h2><h2 className="Title">Intereses</h2></div>
         <div className="Aptitud">
             <img src={Aptitudes} className="AptitudImage" alt=""/>
             </div>
        </div>
        </div>
        <div>
        <img src={MyPhoto} className="MyPhoto" alt=""/>
        <div>
         <h2 className="TitleSkills">Conocimientos</h2>
         <div className = "Skills">
             <img src={Conocimientos} className="skillImage" alt=""/>
             </div>
        </div>
        <button className="CVBtn"><a href="https://n9.cl/cv_personal">Mi CV</a></button>
        </div>
            </div>
    );
}

export default AboutMe;