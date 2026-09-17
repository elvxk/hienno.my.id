import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhatIDo from "./components/WhatIDo";
import WorkExperience from "./components/WorkExperience";
import MyImpact from "./components/MyImpact";
import Recommendation from "./components/Recommendation";
import Achievements from "./components/Achievements";
import Licenses from "./components/Licenses";
import Footer from "./components/Footer";

const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 100,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <WhatIDo />
      <WorkExperience />
      <MyImpact />
      <Recommendation />
      <Achievements />
      <Licenses />
      <Footer />
    </>
  )
}

export default App
