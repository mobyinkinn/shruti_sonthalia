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
      <Case_Study />
      <Testimonials />
      <Contact_us />
      <Executive/>
      <WhoWeWorkWith/>
    </div>
  );
};

export default Services;
