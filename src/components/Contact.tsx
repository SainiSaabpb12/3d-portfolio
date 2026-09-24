import { MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>Connect via LinkedIn for work opportunities.</p>
            <h4>Education</h4>
            <p>Bachelor's Degree (Pursuing) — English Honours, 2nd Year</p>
            <p>Diploma in Information Technology — Lal Bahadur Shastri Training Institute</p>
            <p>12th Grade — NIOS, Delhi</p>
          </div>
          <div className="contact-box">
            <h4>Elsewhere</h4>
            <p><a href="https://www.linkedin.com/in/prabhjot-saini-96ab41298/" target="_blank" rel="noreferrer">LinkedIn</a></p>
            <p><a href="https://github.com/SainiSaabpb12" target="_blank" rel="noreferrer">GitHub</a></p>
            <p><a href="https://wearwildcard.shop" target="_blank" rel="noreferrer">Wear Wild Card</a></p>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Prabhjot Singh Saini</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
