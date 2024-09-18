import React from "react";
import swaraat from "../assets/swaraat.png";
import aditya from "../assets/aditya.png";
import nabeel from "../assets/nabeel.png";
import syed from "../assets/syed.png";

function About() {
  return (
    <div className="about-section background">
      <div className="team-heading">Tutorial Video</div>
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
      <div className="team" id="team">
        <div className="team-heading">Team</div>
        <div className="team-members">
          <div className="members">
            <div>
              <img
                src={aditya}
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
                src={nabeel}
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
                src={syed}
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
