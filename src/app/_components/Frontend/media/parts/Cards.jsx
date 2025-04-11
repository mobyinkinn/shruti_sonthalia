import React from "react";
import e1 from "../assets/e1.png";
import e2 from "../assets/e2.png";
import e3 from "../assets/e3.png";
import e4 from "../assets/e4.png";
import e5 from "../assets/e5.png";
import e6 from "../assets/e6.png";
import e7 from "../assets/e7.png";
import e8 from "../assets/e8.png";
import Image from "next/image";

const data = [
  {
    title: "Burnout",
    item: "Session",
    img: e1,
  },
  {
    title: "Coaching Inn",
    item: "Podcast",
    img: e2,
  },
  {
    title: "ICF BD Family Businesses",
    item: "Session",
    img: e3,
  },
  {
    title: "coaching mindset",
    item: "Session",
    img: e4,
  },
  {
    title: "ICF coaching conclave",
    item: "Podcast",
    img: e5,
  },
  {
    title: "ICF Converge",
    item: "Lecture",
    img: e6,
  },
  {
    title: "ICF masterclass",
    item: "Session",
    img: e7,
  },
  {
    title: "Coaching supports Mission-driven Organizations",
    item: "Lecture",
    img: e8,
  },
];

const Cards = () => {
  return (
    <>
      <div className="py-10 flex flex-col justify-center items-center text-center">
        <h2 className="text-2xl md:text-3xl font-normal text-center text-[#E22E1B] mb-4 underline-offset-4 uppercase">
          Events
        </h2>
        <span className="text-[1.4rem] font-medium w-[70%]">
          Join our curated events designed to ignite leadership potential,
          foster meaningful connections, and accelerate personal and
          professional transformation.
        </span>
      </div>
      <div className="px-9 flex flex-row gap-10 flex-wrap ">
        {data.map((d) => (
          <div className="flex flex-col justify-center w-[48%] ">
            <div className="relative h-83 shadow-xl rounded-2xl">
              <Image
                src={d.img}
                alt="Flying bird"
                layout="fill"
                objectFit="cover"
                className="rounded-t-2xl"
              />
            </div>
            <div className="text-center text-black text-[1.8rem] font-medium pt-5">
              {d.title}
            </div>
            <div className="text-center text-[1.1rem] font-medium">
              {d.item}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cards;
