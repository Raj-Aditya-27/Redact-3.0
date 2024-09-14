import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HeroSection from "./HeroSection";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <HeroSection/>
      <Footer />
    </div>
  );
}

export default Home;
