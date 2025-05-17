import React from "react";
import Hero from "./parts/Hero";
import Cards from "./parts/Cards";
import Contact_us from "../about/parts/Contact_us";
import git from "./assets/1.png";
import Carausal from "./parts/Carausel";
import NewsCard from "./parts/PatientCard";

const CaseStudies = () => {
  return (
    <div>
      <Hero />
      <Cards />
      <Carausal/>
      <NewsCard/>
      <div className="md:px-6">
        <Contact_us
          heading="We are the answer you’ve been looking for"
          line1="Reach out to us at support@ruhco.org to learn more"
          line2=""
          button_Name="Get In Touch"
            bg_image={git}
        />
      </div>
    </div>
  );
};

export default CaseStudies;
