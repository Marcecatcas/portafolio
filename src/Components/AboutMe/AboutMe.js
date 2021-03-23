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
            Soy una Ingeniero en Biotecnologia que por temas de pandemia y curiosidad comenzó a interiorizarse en el area tech.<br/> 
            Asi fue como llegue al BootCamp de Laboratoria despues de quedar desempleada (como muchos), 
            me lance al mundo de la programación para cambiar mi rumbo y agregarle un plus a mi carrera de base.<br/>
            Me considero una persona super comprometida y determinada, trato de aplicar a mi aprendizaje como FED tambien mi 
            formación cientifica tanto en la ejecución como en creación de proyectos.<br/>
            Me gusta mucho el anime (otaku veterana), tejer y dibujar. Me gustaria seguir aprendiendo mas de la programación 
            sobre todo de Data Science, Machine Learning e Inteligencia Artificial, temas que por los que nacio mi curiosidad 
            por la programación.
        </p>
        </div>
        <div>
         <h2 className="Title">Aptitudes</h2>
         <div className="Aptitud">
             <img src={Aptitudes} alt=""/>
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