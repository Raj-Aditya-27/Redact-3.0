import React from "react";
import swaraat from "../assets/swaraat.png";
import aditya from "../assets/aditya.png";
import nabeel from "../assets/nabeel.png";
import syed from "../assets/syed.png";
import Button from "./Button";

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
          Anonify is a powerful tool designed to protect your privacy by
          securely masking or redacting sensitive information in documents,
          text, and files. To get started, upload the file or text you want to
          safeguard. Choose the level of masking you need, from minimal to
          extensive coverage. Anonify uses advanced NLP technology to
          automatically identify and conceal personal data such as names,
          emails, and addresses. After processing, review the document to ensure
          all sensitive information is appropriately masked and make any
          necessary adjustments. Finally, save or export your secure document,
          knowing Anonify has kept your data private and protected, whether
          you’re working online or offline.
        </div>
      </div>
      <div className="team" id="team">
        <div className="team-heading">Team</div>
        <div className="team-members">
          <div className="members">
            <div>
              <img src={aditya} alt="" />
            </div>
            <div className="member-details">
              <div>Aditya Raj</div>
              <div>Frontend Developer</div>
            </div>
            <div>
              <Button content="Connect"/>
            </div>
          </div>
          <div className="members">
            <div>
              <img src={nabeel} alt="" />
            </div>
            <div className="member-details">
              <div>Nabeel Wasif</div>
              <div>Data Scientist</div>
            </div>
            <div>
              <Button content="Connect"/>
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
            <div>
              <Button content="Connect"/>
            </div>
          </div>
          <div className="members">
            <div>
              <img src={syed} alt="" />
            </div>
            <div className="member-details">
              <div>Syed Abdul</div>
              <div>Cloud Developer</div>
            </div>
            <div>
              <Button content="Connect"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
