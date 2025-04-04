import React from "react";
import Image from "next/image";
import img1 from "../assets/publication/img1.png";
import img2 from "../assets/publication/img2.jpg";
import img3 from "../assets/publication/img3.png";
import img4 from "../assets/publication/img4.png";
import img5 from "../assets/publication/img5.png";
import img6 from "../assets/publication/img6.png";
import img7 from "../assets/publication/img7.png";
import img8 from "../assets/publication/img8.png";
import img9 from "../assets/publication/img9.png";
import img10 from "../assets/publication/img10.png";

const publicationData = [
  {
    id: 1,
    img: img1,
    title:
      "Evaluating the impact of embodying the coaching mindset on leaders’ paradigm of power ",
    publicationDate: "6 Feb, 2024",
    shortDescription:
      "The benefits of coach training for organisations and leaders are well-documented. Embodying the coaching mindset, defined as the development and maintenance of an open, curious, flexible, and..........",
  },

  {
    id: 2,
    img: img2,
    title:
      "Impact of Coaching Intervention Programmes on Indian Educators in Tier-2 Cities",
    publicationDate: "1 Feb, 2024",
    shortDescription:
      "Coaching can be defined as a process of ‘unlocking people’s potential to maximise their own performance’ (Whitmore, 2009, p.10) by forging a partnership with them. The International Coaching..........",
  },

  {
    id: 3,
    img: img3,
    title:
      "Regenerative Leadership: Lessons from Birthing of the Corona Quilt Project",
    publicationDate:
      "“Emergence: Sculpting New Thinking”, Indian Society for Applied Behavioural Science 2022",
    shortDescription:
      "We live in a time of exceptional upheaval, disruption, chaos and uncertainty. Often, moments of extremestress and pressure serve as  significant initiations for us as individuals and communities..........",
  },

  {
    id: 4,
    img: img4,
    title: "Initiative with Shoolini University, ICF Foundation Periodical",
    publicationDate: "10 Mar, 2022",
    shortDescription:
      "India has the largest millennial population (400 million) in the world. This makes education the most critical insertion point for India and an important driver for future readiness. It is further essential..........",
  },

  {
    id: 5,
    img: img5,
    title: "Integrating the Five Pathways",
    publicationDate: "5 Jul, 2013",
    shortDescription:
      "Brought up as a woman in India, the concept of my own needs seemed alien. I had learned to be a pleaser; the role and identity of being a caregiver came with ease. At one point I felt completely..........",
  },

  {
    id: 6,
    img: img6,
    title: "A Sociologist’s Pursuit of ‘Happiness’",
    publicationDate: "10 Jun, 2010",
    shortDescription:
      "An analysis of previous research demonstrates a clear correspondence between the variables that provide individuals meaning and happiness; however, this has surprisingly not been addressed in the..........",
  },

  {
    id: 7,
    img: img7,
    title: "Building Initial Trust while Coaching Family Businesses",
    publicationDate: "18 July , 2023",
    shortDescription:
      "Family businesses contribute to almost 70% of the annual GDP of most developed and developing countries. However, they surprisingly remain an underserved target group for the coaching industry worldwide..........",
  },

  {
    id: 8,
    img: img8,
    title: "The Power Of Reflective Supervision In Coaching Leadership",
    publicationDate: "18 Mar , 2024",
    shortDescription:
      "As an ICF-accredited coach and coach educator, my journey has been one of continual learning and evolution. While my primary focus has been on using coaching as a space for personal growth and mentor..........",
  },

  {
    id: 9,
    img: img9,
    title: "The Leadership Winter: Embracing The season of renewal",
    publicationDate: "13 Dec , 2024",
    shortDescription:
      "In our modern world, the relentless pursuit of productivity has led to an epidemic of burnout. We often find ourselves trapped in a cycle of endless striving, neglecting our wellbeing in the process. However, the..........",
  },

  {
    id: 10,
    img: img10,
    title: "In conversation with Shruti Sonthalia",
    publicationDate: "21 Oct , 2024",
    shortDescription:
      "Shruti Sonthalia is a Master Certified Coach (ICF) with extensive experience working with C-Suite and senior leaders across industries including technology, healthcare, financial services, and..........",
  },
];

const Publication = () => {
  return (
    <>
      {publicationData.map((publication) => (
        <section
          key={publication.id}
          className="flex flex-col md:flex-row items-center gap-22 md:gap-8 xl:gap-8 mt-12"
        >
          {/* Image Section */}
          <div className="rounded-2xl overflow-hidden w-[40%]">
            <Image
              src={publication.img}
              alt="Leadership Team Discussion"
              width={600}
              height={300}
              className="rounded-2xl w-full h-auto object-cover"
            />
          </div>

          {/* Text Section */}

          <div className="flex-1 space-y-4 xl:mt-6">
            <h2 className="text-[2.4rem] font-semibold text-[#000000] underline-offset-4">
              {publication.title}
            </h2>
            <p className="text-[#000000] text-base leading-relaxed">
              {publication.publicationDate}
            </p>
            <p className="text-[#000000] text-[1.2rem] leading-relaxed">
              {publication.shortDescription}
            </p>
            <button className="flex items-center gap-2 text-[1rem] px-6 py-2 bg-[#151583] text-white rounded-full hover:bg-white hover:text-black transition cursor-pointer">
              Read More
            </button>
          </div>
        </section>
      ))}
    </>
  );
};

export default Publication;
