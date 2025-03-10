// import React from 'react'

// const Insights = () => {
//   return (
//     <div>Insights</div>
//   )
// }

// export default Insights

import React from "react";
import news_1 from "../assets/insight/insight1.png";
import news_2 from "../assets/insight/insight1.png";
import news_3 from "../assets/insight/insight1.png";

import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";

const Insightsews = () => {
  return (
    <>
      <div className="flex justify-center pb-5 ">
        <span className="text-black text-[2.5rem]">Insights & Research</span>
      </div>
      <div className="w-[90%] h-[900px] mx-auto flex space-x-4 ">
        <div className="flex flex-col w-[33.33%] space-y-4 items-center gap-6">
          <div className="flex flex-col gap-7">
            <div className="h-[560px] w-full relative">
              <Image
                src={news_1.src}
                alt={news_1}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className="rounded-[20px]"
              />
            </div>
            <span className="text-[1rem] font-light leading-[1.6rem] text-center">
              Impact of Coaching Intervention Programmes on Indian Educators in
              Tier-2 Cities: Evidence from the Parevartan Ignite Project
            </span>
          </div>
          <div>
            <button className="flex items-center gap-2 px-6 py-2 bg-[#151583] text-white rounded-full hover:bg-white hover:text-black border  transition">
              Read More <FaExternalLinkAlt />
            </button>
          </div>
        </div>
        <div className="flex flex-col w-[33.33%] space-y-4 items-center gap-6">
          <div className="flex flex-col gap-7">
            <div className="h-[560px] w-full relative">
              <Image
                src={news_2.src}
                alt={news_2}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className="rounded-[20px]"
              />
            </div>

            <span className="text-[1rem] font-light leading-[1.6rem] text-center">
              Impact of Coaching Intervention Programmes on Indian Educators in
              Tier-2 Cities: Evidence from the Parevartan Ignite Project
            </span>
          </div>
          <div>
            <button className="flex items-center gap-2 px-6 py-2 bg-[#151583] text-white rounded-full hover:bg-white hover:text-black border  transition">
              Know More <FaExternalLinkAlt />
            </button>
          </div>
        </div>
        <div className="flex flex-col w-[33.33%] space-y-4 items-center gap-6">
          <div className="flex flex-col gap-7">
            <div className="h-[560px] w-full relative">
              <Image
                src={news_3.src}
                alt={news_3}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className="rounded-[20px]"
              />
            </div>

            <span className="text-[1rem] font-light leading-[1.6rem] text-center">
              Impact of Coaching Intervention Programmes on Indian Educators in
              Tier-2 Cities: Evidence from the Parevartan Ignite Project
            </span>
          </div>
          <div>
            <button className="flex items-center gap-2 px-6 py-2 bg-[#151583] text-white rounded-full hover:bg-white hover:text-black border  transition">
              Know More <FaExternalLinkAlt />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Insightsews;
