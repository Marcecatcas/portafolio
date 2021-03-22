import "./Contact.css";
import Email from "./ContactImages/correo.png"
import linkedin from "./ContactImages/linkedIn.png"
import github from "./ContactImages/github.png"

function Contact() {
  return (
    <div className="Content">
      <div className="titleContent">
        <h2 className="title">Contacto</h2>
        <div className="emailContent">
          <img src={Email} className="emailIcon" alt="" />
          <p className="descriptionContact">marce.catalan.castelli@gmail.com</p>
        </div>
        <div className="linkedinContent">
          <img src={linkedin} className="linkedinIcon" alt="" />
          <p className="descriptionContact">www.linkedin.com/in/marcela-catalan-castelli</p>
        </div>
        <div className="githubContent">
          <img src={github} className="githubIcon" alt="" />
          <p className="descriptionContact">https://github.com/Marcecatcas</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
