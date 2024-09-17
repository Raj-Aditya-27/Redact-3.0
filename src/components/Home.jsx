import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import About from "./About";
import HeroSection from "./HeroSection";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <HeroSection/>
      <About />
      <Footer />
    </div>
  );
}

export default Home;
