import React from "react";
import Hero from "./parts/Hero";
import Coaching from "./parts/Coaching";
import Benifits from "./parts/Benifits";
import Approach from "./parts/Approach";
import Contact_us from "../about/parts/Contact_us";
import LeadershipProwess from "./parts/BannerwithImage";

const Coaching_supervision = () => {
  return (
    <div className="p-14">
      <Hero />
      <LeadershipProwess />
      <Coaching />
      <Benifits />
      <Approach />
      <Contact_us
        heading="READY TO ADVANCE YOUR COACHING PRACTICE?"
        line1="We are Here to Help You!"
        line2="Get in touch today to explore how our coaching supervision can drive measurable impact for you."
      />
    </div>
  );
};

export default Coaching_supervision;
