import React from "react";
import Coaching from "./parts/Coaching.jsx";
import Case_Study from "./parts/Case_Study.jsx";
import Contact_us from "../about/parts/Contact_us.jsx";
import Executive from "./parts/Executive.jsx";
import WhoWeWorkWith from "./parts/WhoWorkWith.jsx";
import Hero from "./parts/Hero.jsx";
import LeadershipProwess from "./parts/BannerwithImage.jsx";
import Testimonials from "./parts/Testimonials.jsx";
import bgimage from "../services/assets/2.jpg"
const Services = () => {
  return (
    <>
      <Hero />
      <div className="p-14 bg-[#FCFCFF]">
        <LeadershipProwess />
        <Coaching />
        <Executive />
        <WhoWeWorkWith />
        <Case_Study />
        {/* <Testimonials /> */}
        <Contact_us
          heading="Ready to Transform Your Leadership?"
          line1="Join the growing community of leaders investing in their leadership journey."
          line2="Get in touch today to explore coaching can drive measurable impact or you and your organization."
          bg_image={bgimage}
        />
      </div>
    </>
  );
};

export default Services;
