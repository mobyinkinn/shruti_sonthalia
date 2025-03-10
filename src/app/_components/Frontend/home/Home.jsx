import React from "react";
import Carausal from "./parts/Carausel";
import Info from "./parts/Info";
import InterestSection from "./parts/GotQues";
import News from "./parts/News";
import Insightsews from "./parts/Insights";
import Testimonials from "./parts/Testimonials";
import HoverEffectText from "./parts/ImageDesign";

const Home = () => {
  return (
    <>
      <Carausal />
      <HoverEffectText />

      <Info />
      <Insightsews />
      <InterestSection />
      <News />
      <Testimonials />
    </>
  );
};

export default Home;
