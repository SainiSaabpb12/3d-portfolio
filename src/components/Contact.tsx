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
            <p>
              <a
                href="mailto:prabhjotsaini2303@gmail.com"
                data-cursor="disable"
              >
                prabhjotsaini2303@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>Bachelor's Degree (Pursuing) — English Honours, 2nd Year</p>
            <p>Diploma in Information Technology — Lal Bahadur Shastri Training Institute</p>
            <p>12th Grade — NIOS, Delhi</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.9rem" }}>
              Coming soon — currently building my online presence.
            </p>
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
