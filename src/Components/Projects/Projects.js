import "./Projects.css";
import Card from "./ProjectsImages/cardValidation.png"
import tuOportunidad from "./ProjectsImages/tuOportunidad.png"
import Sushi from "./ProjectsImages/sushiQueen.png"
import Data from "./ProjectsImages/dataLovers.png"
import Beauty from "./ProjectsImages/beautyTips.png"

function Projects() {
  return (
    <div>
      <div className="projects">
        {/* proyecto Onu Mujeres */}
        <div className="leftprojectContent">
          
          <div className="mainproyectContent">
          <img src={tuOportunidad} alt="" className="onuProjectImage"/>
          <div className="onuProjectDescription">
          <h3 className="projectTitle">Tu Oportunidad</h3>
          <p className="projectInformation">Plataforma Web en formato mobile, para conectar a participantes del programa 
            "the second chance education" de Onu Mujeres en un sistema integrado y formal.
            Proyecto creado a partir de Alianza entre Laboratoria y Onu Mujeres</p><br/>
            <p className="projectInformation">Recursos utilizados: HTML, CSS, Javascript, Firebase, NPM, Git, GitHub</p>

          </div>
          </div>
          <div className="leftbuttons">
            <button className="demoButton">
              <a href="https://marcecatcas.github.io/ONU_Mujeres/src/">
                Demo
              </a>
            </button>
            <button className="GitHubButton">
              <a href="https://github.com/Marcecatcas/ONU_Mujeres">
                GitHub
              </a>
            </button>
          </div>
        </div>  
         {/* proyecto Social Network */}
         <div className="rightprojectContent">
          <div className="mainproyectContent">
          <img src={Beauty} alt="" className="beautyProjectImage" />
          <div className="beautyProjectDescription">
          <h3 className="projectTitle">Beauty Tips</h3>
          <p className="projectInformation">Red Social creada para amantes del Maquillaje, en donde pueden publicar fotos, dar "me gusta", 
            hacer comentarios y crear un perfil persoanlizados con los participantes.</p><br/>
          <p className="projectInformation">Recursos Utilizados: HTML, CSS, Javascript, Figma, NPM, Git, GitHub, Firebase, </p>
          </div>
          </div>
          <div className="rightbuttons">
            <button className="demoButton">
              <a href="https://marcecatcas.github.io/SCL015-social-network/src/">
                Demo
              </a>
            </button>
            <button className="GitHubButton">
              <a href="https://github.com/Marcecatcas/SCL015-social-network">
                GitHub
              </a>
            </button>
          </div>
        </div>
         {/* proyecto React Burguer Queen */}
        <div className="leftprojectContent">
          <div className="mainproyectContent">
          <img src={Sushi} alt="" className="sushiProjectImage" />
          <div className="sushiProjectDescription">
          <h3 className="projectTitle">Sushi Queen</h3>
          <p className="projectInformation">Plataforma para Restaurant 24 hrs con diversos menus, que automatiza procesos como envio de pedidos, 
            calculo de valor total del pedido realizado y conecta con la cocina donde llegan los pedidos.</p><br/>
            <p className="projectInformation">Recursos utilizados:HTML, CSS, Javascript, React, Figma,Firebase, NPM, Git, GitHub </p>
          </div>
          </div>
          <div className="leftbuttons">
            <button className="demoButton">
              <a className="DBtn" href="https://marcecatcas.github.io/SCL015-card-validation/src/">
                Demo
              </a>
            </button>
            <button className="GitHubButton">
              <a className="GBtn" href="https://github.com/Marcecatcas/SCL015-card-validation">
                GitHub
              </a>
            </button>
          </div>
        </div>
        {/* proyecto data lovers */}
        <div className="rightprojectContent">
          <div className="mainproyectContent">
          <img src={Data} alt="" className="dataProjectImage" />
          <div className="dataProjectDescription">
          <h3 className="projectTitle">Rick and Morty for Dummies</h3>
          <p className="projectInformation">Aplicacion web responsive, que permite visualizar, filtrar y ordenar la base de datos de personajes y capitulos de la serie "Rick and Morty".</p><br/>
          <p className="projectInformation">Recursos utilizados: HTML, CSS, Javascript, NPM, Git, GitHub, Figma. </p>
          </div>
          </div>
          <div className="rightbuttons">
            <button className="demoButton">
              <a href="https://marcecatcas.github.io/SCL015-data-lovers/src/">
                Demo
              </a>
            </button>
            <button className="GitHubButton">
              <a href="https://github.com/Marcecatcas/SCL015-data-lovers">
                GitHub
              </a>
            </button>
          </div>
        </div>
        
       
        {/* proyecto card validation */}
        <div className="leftprojectContent">
          <div className="mainproyectContent">
          <img src={Card} alt="" className="cardProjectImage" />
          <div className="projectDescription">
          <h3 className="projectTitle">Validación Tarjetas de Prepago</h3>
          <p className="projectInformation">Aplicacion web creada para validar tarjetas de credito prepago, mediante el algoritmo de Luhn.</p><br/>
            <p className="projectInformation">Recursos utilizados: HTML, CSS, Javascript, Figma, NPM, Git y GitHub</p>
          </div>
          </div>
          <div className="leftbuttons">
            <button className="demoButton">
              <a href="https://marcecatcas.github.io/SCL015-card-validation/src/">
                Demo
              </a>
            </button>
            <button className="GitHubButton">
              <a href="https://github.com/Marcecatcas/SCL015-card-validation">
                GitHub
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
