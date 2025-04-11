import React from "react";
import Image from "next/image";
import img1 from "../assets/publication/i1.png";
import img2 from "../assets/publication/i2.jpg";
import img3 from "../assets/publication/i3.png";
import img4 from "../assets/publication/i4.png";
import img5 from "../assets/publication/i5.png";
import img6 from "../assets/publication/i6.png";
import img7 from "../assets/publication/i7.png";
import img8 from "../assets/publication/i8.png";
import img9 from "../assets/publication/i9.png";
import img10 from "../assets/publication/i10.png";

const publicationData = [
  {
    id: 1,
    img: img1,
    title:
      "Evaluating the impact of embodying the coaching mindset on leaders’ paradigm of power ",
    publicationDate: "6 Feb, 2024",
    shortDescription:
      "The benefits of coach training for organisations and leaders are well-documented. Embodying the coaching mindset, defined as the development and maintenance of an open, curious, flexible, and..........",
    buttonTitle: "Journal Article",
  },

  {
    id: 2,
    img: img2,
    title:
      "Impact of Coaching Intervention Programmes on Indian Educators in Tier-2 Cities",
    publicationDate: "1 Feb, 2024",
    shortDescription:
      "Coaching can be defined as a process of ‘unlocking people’s potential to maximise their own performance’ (Whitmore, 2009, p.10) by forging a partnership with them. The International Coaching..........",
    buttonTitle: "Journal Article",
    link: "https://radar.brookes.ac.uk/radar/file/08d2850c-51fe-42ab-aeea-e7ec829bc5a9/1/IJEBCM%2022_1_10.pdf",
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
    buttonTitle: "Book",
  },

  {
    id: 4,
    img: img4,
    title: "Initiative with Shoolini University, ICF Foundation Periodical",
    publicationDate: "10 Mar, 2022",
    shortDescription:
      "India has the largest millennial population (400 million) in the world. This makes education the most critical insertion point for India and an important driver for future readiness. It is further essential..........",
    buttonTitle: "Book",
    link: "https://docs.google.com/document/d/1GqzHvVxRkIObLte5w2aX_mrqofsQSrc0PGekOWRgD6M/edit?tab=t.0",
  },

  {
    id: 5,
    img: img5,
    title: "Integrating the Five Pathways",
    publicationDate: "5 Jul, 2013",
    shortDescription:
      "Brought up as a woman in India, the concept of my own needs seemed alien. I had learned to be a pleaser; the role and identity of being a caregiver came with ease. At one point I felt completely..........",
    buttonTitle: "Research Paper",
    link: "https://drive.google.com/file/d/1cuOdwdXPJMT6yjaBfFRlRTVNCXnWHh1U/view?usp=drive_link",
  },

  {
    id: 6,
    img: img6,
    title: "A Sociologist’s Pursuit of ‘Happiness’",
    publicationDate: "10 Jun, 2010",
    shortDescription:
      "An analysis of previous research demonstrates a clear correspondence between the variables that provide individuals meaning and happiness; however, this has surprisingly not been addressed in the..........",
    buttonTitle: "Thesis",
  },

  {
    id: 7,
    img: img7,
    title: "Building Initial Trust while Coaching Family Businesses",
    publicationDate: "18 July , 2023",
    shortDescription:
      "Family businesses contribute to almost 70% of the annual GDP of most developed and developing countries. However, they surprisingly remain an underserved target group for the coaching industry worldwide..........",
    buttonTitle: "Research Paper",
    link: "https://coachingfederation.org/blog/trust-with-family-businesses",
  },

  {
    id: 8,
    img: img8,
    title: "The Power Of Reflective Supervision In Coaching Leadership",
    publicationDate: "18 Mar , 2024",
    shortDescription:
      "As an ICF-accredited coach and coach educator, my journey has been one of continual learning and evolution. While my primary focus has been on using coaching as a space for personal growth and mentor..........",
    buttonTitle: "Research Paper",
    link: "https://www.aoec.com/knowledge-bank/the-power-of-reflective-supervision-in-coaching-leadership/",
  },

  {
    id: 9,
    img: img9,
    title: "The Leadership Winter: Embracing The season of renewal",
    publicationDate: "13 Dec , 2024",
    shortDescription:
      "In our modern world, the relentless pursuit of productivity has led to an epidemic of burnout. We often find ourselves trapped in a cycle of endless striving, neglecting our wellbeing in the process. However, the..........",
    buttonTitle: "Research Paper",
    link: "https://www.aoec.com/knowledge-bank/the-leadership-winter-embracing-the-season-of-renewal/",
  },

  {
    id: 10,
    img: img10,
    title: "In conversation with Shruti Sonthalia",
    publicationDate: "21 Oct , 2024",
    shortDescription:
      "Shruti Sonthalia is a Master Certified Coach (ICF) with extensive experience working with C-Suite and senior leaders across industries including technology, healthcare, financial services, and..........",
    buttonTitle: "Research Paper",
    link: "https://www.aoec.com/knowledge-bank/in-conversation-with-shruti-sonthalia/",
  },
];

const Publication = () => {
  return (
    <>
      {publicationData.map((publication) => (
        <section
          key={publication.id}
          className="flex flex-col md:flex-row items-center gap-22 md:gap-8 xl:gap-12 mt-12 "
        >
          {/* Image Section */}
          <div className="relative overflow-hidden w-[40%]">
            <Image
              src={publication.img}
              alt="Leadership Team Discussion"
              width={600}
              height={300}
              className="w-full h-auto object-cover"
            />
            <button className="absolute bottom-[20px] left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-2 text-[1.5rem] px-6 py-2 bg-[#E22E1B] text-white rounded-[10px] hover:bg-white hover:text-[#E22E1B] hover:border hover:border-[#E22E1B] transition cursor-pointer">
              <a
                href={publication.link}
                className="text-[white] hover:text-[black] "
              >
                {publication.buttonTitle}
              </a>
            </button>
          </div>

          {/* Text Section */}

          <div className="flex-1 space-y-4 xl:mt-6">
            <h2 className="text-[2.4rem] font-medium text-[#000000] underline-offset-4">
              {publication.title}
            </h2>

            <p className="text-[#000000] text-[1.4rem] leading-relaxed">
              {publication.shortDescription}
              <a
                href={publication.link}
                className="text-[#151583] hover:text-[#151583] "
              >
                Read More
              </a>
            </p>
          </div>
        </section>
      ))}
    </>
  );
};

export default Publication;
