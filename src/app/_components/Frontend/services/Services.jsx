import React from "react";
import Hero from "./parts/Hero.jsx";
import Coaching from "./parts/Coaching.jsx";
import Case_Study from "./parts/Case_Study.jsx";
import Contact_us from "../about/parts/Contact_us.jsx";
import Testimonials from "../home/parts/Testimonials.jsx";
import Executive from "./parts/Executive.jsx";
import WhoWeWorkWith from "./parts/WhoWorkWith.jsx";

const Services = () => {
  return (
    <div className="p-14">
      <Hero />
      <Coaching />
      <Executive />
      <WhoWeWorkWith />
      <Case_Study />
      <Testimonials />
      <Contact_us
        heading="Ready to Transform Your Leadership?"
        line1="Join the growing community of leaders investing in their leadership journey."
        line2="Get in touch today to explore coaching can drive measurable impact or you and your organization."
      />
    </div>
  );
};

export default Services;
