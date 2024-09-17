import React from "react";
import swaraat from "../assets/swaraat.jpeg";

function About() {
  return (
    <div className="about-section">
      <div className="video">
        <iframe
          src="https://www.youtube.com/embed/n3ITmdALc7o?autoplay=1&mute=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="video-details">
          The RE-DACT application is a versatile and secure redaction tool
          designed to anonymize, mask, and redact sensitive information across
          various document formats. It allows users to apply a user-defined
          gradational scale for redaction, ensuring data protection and
          compliance with privacy regulations.
        </div>
      </div>
      <div className="team">
        <div className="team-heading">Developer Team</div>
        <div className="team-members">
          <div className="members">
            <div>
              <img
                src="https://media.licdn.com/dms/image/v2/D4D03AQGlzNfXyHR9-w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1720377246855?e=1732147200&v=beta&t=G8BFJxcZdq6NUnjJUHWgMwVzc3DDR1Nv1xh3Ycjf9f8"
                alt=""
              />
            </div>
            <div className="member-details">
              <div>Aditya Raj</div>
              <div>Frontend Developer</div>
            </div>
          </div>
          <div className="members">
            <div>
              <img
                src="https://media.licdn.com/dms/image/v2/D4D03AQFujzrZpaytlg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1725627302765?e=2147483647&v=beta&t=WrbWKkcSsXQsBpwqUOSrAqWrojRBaGq8WW7LMpS1w3A"
                alt=""
              />
            </div>
            <div className="member-details">
              <div>Nabeel Wasif</div>
              <div>Data Scientist</div>
            </div>
          </div>
          <div className="members">
            <div>
              <img src={swaraat} alt="" />
            </div>
            <div className="member-details">
              <div>Swaraat Chatterjee</div>
              <div>Backend Developer</div>
            </div>
          </div>
          <div className="members">
            <div>
              <img
                src="https://media.licdn.com/dms/image/v2/D4E03AQH5Xtc0uicckA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1712479195831?e=2147483647&v=beta&t=VyLloNPPEM5EWzpNU9A_opG6-QlhaZ2bPQIaCnRMCPM"
                alt=""
              />
            </div>
            <div className="member-details">
              <div>Syed Abdul</div>
              <div>Cloud Developer</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
