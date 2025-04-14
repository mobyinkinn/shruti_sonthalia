import React from "react";
import Carausal from "./parts/Carausel";
import Info from "./parts/Info";
import InterestSection from "./parts/GotQues";
import News from "./parts/News";
import Insightsews from "./parts/Insights";
import Testimonials from "./parts/Testimonials";
import HoverEffectText from "./parts/ImageDesign";
import Hero from "./parts/Hero";
import Contact_us from "../about/parts/Contact_us";
import Empowering from "./parts/Empowering";
import ContactForm from "./parts/Contact";
import InsightsSlider from "./parts/SliderInsights";
import ResearchCard from "./parts/Stories";

const Home = () => {
  return (
    <>
      <Hero />
      <Carausal />
      <Empowering/>
      {/* <Testimonials />
      <InsightsSlider/> */}
      <ResearchCard/>
      <HoverEffectText />
      <ContactForm/>
      {/* <Info /> */}
      {/* <News /> */}
      {/* <Insightsews /> */}
      {/* <InterestSection /> */}
      {/* <div className="mx-14">
        <Contact_us
          heading="Get In Touch"
          line1="Have questions? Ready to take your business to the next level? I’d love to hear from you!"
        />
      </div> */}
    </>
  );
};

export default Home;
