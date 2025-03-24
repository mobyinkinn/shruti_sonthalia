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
      <LeadershipProwess/>
      <Coaching />
      <Benifits />
      <Approach />
      <Contact_us
        heading="Ready to Transform Your Leadership?"
        line1="Take the first step toward building a coaching culture in your organization. Join our Coaching Skills Program and become the leader who inspires, empowers, and drives meaningful change."
        line2="Get in Touch Now to book a consultation and explore how this program can elevate your leadership."
      />
    </div>
  );
};

export default Coaching_supervision;
