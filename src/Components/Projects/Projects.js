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
          <p className="projectInformation">Plataforma Web en formato mobile para conectar a participantes del programa 
            "Second chance education" de ONU Mujeres en un sistema integrado y formal.
            Proyecto creado a partir de la alianza entre Laboratoria y ONU Mujeres</p><br/>
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
          <p className="projectInformation">Red social creada para los amantes del maquillaje, donde pueden publicar fotos, dar "me gusta", 
            hacer comentarios y crear un perfil personalizado.</p><br/>
          <p className="projectInformation">Recursos utilizados: HTML, CSS, Javascript, Figma, NPM, Git, GitHub, Firebase. </p>
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
          <p className="projectInformation">Plataforma para restaurante con funcionamiento las 24 hrs, que automatiza los procesos como el env??o de pedidos, 
            el c??lculo del valor total del pedido realizado y lograr una conexi??n con la cocina.</p><br/>
            <p className="projectInformation">Recursos utilizados: HTML, CSS, Javascript, React, Figma, Firebase, NPM, Git, GitHub. </p>
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
          <p className="projectInformation">Aplicaci??n web responsive que permite visualizar, filtrar y ordenar la base de datos de personajes y cap??tulos de la serie "Rick and Morty".</p><br/>
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
          <h3 className="projectTitle">Validaci??n Tarjetas de Prepago</h3>
          <p className="projectInformation">Aplicaci??n web creada para validar tarjetas de cr??dito prepago, mediante el algoritmo de Luhn.</p><br/>
            <p className="projectInformation">Recursos utilizados: HTML, CSS, Javascript, Figma, NPM, Git y GitHub.</p>
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
