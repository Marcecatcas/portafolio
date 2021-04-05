import "./Contact.css";
import Email from "./ContactImages/correo.png"
import linkedin from "./ContactImages/linkedIn.png"
import github from "./ContactImages/github.png"
import laboratoria from "./ContactImages/Laboratoria.png"

const openLink = (link) => {
  window.open(link)
}

function Contact() {
  return (
    <div className="Content">
      <div className="titleContent">
        <h2 className="title">Contacto</h2>
        <p className="contactDescription">Si tienes dudas o cualquier inquietud, ¡Contáctame!:</p>
        <div className="emailContent">
          <img src={Email} className="emailIcon" alt="" />
          <a href="mailto:marce.catalan.castelli@gmail.com"><p className="contactDescription">marce.catalan.castelli@gmail.com</p></a>
        </div>
        <div className="linkedinContent">
          <img src={linkedin} className="linkedinIcon" alt="" />
          <p className="contactDescriptionLinkedin" onClick={() => {openLink('www.linkedin.com/in/marcela-catalan-castelli')}}>www.linkedin.com/in/marcela-catalan-castelli</p>
        </div>
        <div className="githubContent">
          <img src={github} className="githubIcon" alt="" />
          <p className="contactDescription" onClick={() => {openLink('https://github.com/Marcecatcas')}}>https://github.com/Marcecatcas</p>
        </div>
        <div className="appTalentContent">
          <img src={laboratoria} className="TalentIcon" alt="" />
          <p className="contactDescription" onClick={() => {openLink('https://app.talento.laboratoria.la/profile/ydrOvokgLeMxYFrN9fcwTstjKFu2')}}>App Talento Laboratoria</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
