import React from "react";
import img from "../assets/logo.png"

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={img} alt="" />
      </div>
      <div className="about">About</div>
    </div>
  );
}

export default Navbar;
