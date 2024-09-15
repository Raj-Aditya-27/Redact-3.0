import React from "react";
import Button from "./Button";
import heroImage from "../assets/heroImageBg.png";

function HeroSection() {
  return (
    <div className="heroSection">
      <div className="hero-content">
        <h2>Simple, Secure Redaction</h2>
        <p>
          Effortlessly protect data, redact, mask, and anonymize with just a few
          clicks.
        </p>
        <Button content="Click Here to Redact" to="/document" />
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="" />
      </div>
    </div>
  );
}

export default HeroSection;
