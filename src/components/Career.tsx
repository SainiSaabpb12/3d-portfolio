import "./styles/Career.css";
const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>E-commerce & Operations Executive</h4>
                <h5>Near-Earth Object · New Delhi</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Developed and managed the official company website nearearthobject.in.
              Created AI-generated product visuals by placing jewellery on virtual
              models for marketing. Managed complete operations on Amazon Seller
              Central, Ajio Luxe, and Myntra Seller Portal. Executed marketing
              campaigns, monitored sales analytics, and handled inventory,
              dispatch, and logistics end to end.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Diploma in Information Technology</h4>
                <h5>Lal Bahadur Shastri Training Institute</h5>
              </div>
              <h3>CERT</h3>
            </div>
            <p>
              Completed a Diploma in Information Technology, building foundational
              skills in programming, computer systems, and software applications.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor's Degree (Pursuing)</h4>
                <h5>2nd Year · English Honours</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Pursuing English Honours while simultaneously working full-time
              in tech and e-commerce. Passionate about technology and
              self-teaching web development, GitHub, React, and AI tools
              outside of college — because curiosity beats a syllabus.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>12th Grade</h4>
                <h5>NIOS · Delhi</h5>
              </div>
              <h3>DONE</h3>
            </div>
            <p>
              Completed 12th Grade from NIOS Delhi, building a foundation for
              further studies in technology and computer science.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Career;
