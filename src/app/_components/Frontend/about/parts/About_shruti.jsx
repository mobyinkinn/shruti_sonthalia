import React from "react";
import shruti from "../assets/about_shruti/shruti.png";
import shruti_ring from "../assets/about_shruti/shruti_ring.png";

const About_shruti = () => {
  return (
    <div className="flex flex-col mt-12 gap-4">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col w-[48%] space-y-8">
          <span className="text-[2.5rem] leading-none font-semibold">
            ABOUT SHRUTI SONTHALIA
          </span>
          <span className="text-[1.2rem] leading-7 tracking-widest">
            Shruti Sonthalia, a highly accomplished Master Certified Coach
            recognized by the International Coaching Federation (ICF), conveys a
            profound depth and breadth of experience, a fervent passion for
            coaching, and exceptional coaching expertise. Her extensive journey
            encompasses the C-Suite and senior leadership in diverse sectors,
            ranging from multinational corporations and technology leaders to
            family businesses, as well as mentoring fellow coaches.
          </span>
          <span className="text-[1.2rem] leading-7 tracking-widest">
            As a Leading Organisational Development Specialist and an advisor to
            senior leadership. Shruti is proficient in coaching across various
            industries such as technology, healthcare, retail, manufacturing,
            financial services, development, Edutech, chemical, agrochemical,
            and textiles, she stands as a testament to dynamic executive
            coaching prowess.
          </span>
          <span className="text-[1.2rem] leading-7 tracking-widest">
            Invitations to present at major coaching platforms, including the
            prestigious ICF Global Converge, underscore her reputation as a
            leading industry professional.
          </span>
        </div>
        <div className=" w-[48%]">
          {" "}
          <div
            className="hidden md:flex w-full min-h-[322px] md:min-h-[322px] lg:min-h-[350px] xl:min-h-[650px] rounded-[40px] bg-cover bg-center"
            style={{ backgroundImage: `url(${shruti_ring.src})` }}
          ></div>
        </div>
      </div>
      <div className="flex flex-row justify-between mt-12 items-center">
        <div className=" w-[48%]">
          <div
            className="hidden md:flex w-full min-h-[322px] md:min-h-[322px] lg:min-h-[350px] xl:min-h-[400px] rounded-[40px] bg-cover bg-center"
            style={{ backgroundImage: `url(${shruti.src})` }}
          ></div>
        </div>
        <div className="flex flex-col w-[48%]  space-y-8">
          <span className="text-[1.2rem] leading-7 tracking-widest text-end">
            With nearly a decade of expertise as a Coach Educator, Mentor Coach,
            and Assessor, Shruti has contributed to shaping coaching
            professionals globally. She has mentored over 200 trainee coaches
            from Omega Institute, Los Angeles, New York Open Centre, Distance
            Learning, and India cohorts, ensuring compliance with ICF ACTP/Level
            2 accreditation. Currently, she serves as a faculty member at the
            Academy of Executive Coaching in the United Kingdom, facilitating
            the Practitioner Diploma in Executive Coaching and the Professional
            Practitioner Diploma in Executive Coaching. She also mentors coaches
            in training on the Advance Diploma in Executive Coaching. Her focus
            lies in equipping business leaders, consultants, and HR
            professionals across Europe with highly effective coaching skills.
          </span>
        </div>
      </div>
    </div>
  );
};

export default About_shruti;
