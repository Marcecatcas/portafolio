import "./Contact.css";
import Email from "./ContactImages/correo.png"
import linkedin from "./ContactImages/linkedIn.png"
import github from "./ContactImages/github.png"

function Contact() {
  return (
    <div className="Content">
      <div className="titleContent">
        <h2 className="title">Contacto</h2>
        <p>Si tienes dudas o cualquier inquietud no dudes en contactarme por las siguientes vias:</p>
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
