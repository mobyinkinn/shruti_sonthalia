import React from "react";
import Hero from "./parts/Hero";
import Coaching from "./parts/Coaching";
import Benifits from "./parts/Benifits";
import Approach from "./parts/Approach";
import Contact_us from "../about/parts/Contact_us";
import LeadershipProwess from "./parts/BannerwithImage";
import cont from "./assets/1.jpg"
import mob from "./assets/mob.jpg";

const Coaching_supervision = () => {
  return (
    <>
      <Hero />
      <div className="md:p-14">
        <LeadershipProwess />
        <Coaching />
        <Benifits />

        <Approach />
        <Contact_us
          heading="READY TO ADVANCE YOUR COACHING PRACTICE?"
          line1="Our expert supervision is here to support your journey."
          line2="Let’s connect and explore how we can amplify your impact through purposeful guidance."
          bg_image={cont}
          mob_bg_image={mob}
        />
      </div>
    </>
  );
};

export default Coaching_supervision;
