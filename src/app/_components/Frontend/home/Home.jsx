import React from "react";
import Carausal from "./parts/Carausel";
import Info from "./parts/Info";
import InterestSection from "./parts/GotQues";
import News from "./parts/News";
import Insightsews from "./parts/Insights";
import Testimonials from "./parts/Testimonials";
import HoverEffectText from "./parts/ImageDesign";
import Hero from "./parts/Hero";

const Home = () => {
  return (
    <>
    <Hero/>
      <HoverEffectText />
      <Info />
      <Carausal />
      <News />
      <Testimonials />
      <Insightsews />
      <InterestSection />
    </>
  );
};

export default Home;
