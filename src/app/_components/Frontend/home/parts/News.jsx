import React from "react";
import news_1 from "../assets/news/news_1.png";
import news_2 from "../assets/news/news_2.png";
import news_3 from "../assets/news/news_3.png";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";

const News = () => {
  return (
    <>
      <div className="flex justify-center pb-5 ">
        <span className="text-black text-[2.5rem]">Empowering Solutions</span>
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
              <div className="absolute inset-0 flex flex-col justify-end items-center">
                <div className="bg-black rounded-s-2xl bg-opacity-30 opacity-20 absolute inset-0 transition-opacity duration-300  hover:opacity-0 rounded-[20px]"></div>

                <div className="text-white text-[1.9rem] leading-[2.4rem] space-y-2 flex flex-col justify-center items-center">
                  <span className="font-white">Executive Coaching</span>
                </div>
              </div>
            </div>
            <span className="text-[1.3rem] font-light leading-[1.6rem] text-center h-[100px]">
              Executive coaching helps leaders identify blind spots, break
              limits, and step into their next phase with clarity and purpose.
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
                src={news_2.src}
                alt={news_2}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className="rounded-[20px]"
              />
              <div className="absolute inset-0 flex flex-col justify-end items-center">
                <div className="bg-black rounded-s-2xl rounded-[20px] bg-opacity-30 opacity-20 absolute inset-0 transition-opacity duration-300  hover:opacity-0"></div>

                <div className="text-white text-[1.9rem] leading-[2.4rem] space-y-2 flex flex-col justify-center items-center">
                  <span className="font-white">Organisational Development</span>
                </div>
              </div>
            </div>

            <span className="text-[1.3rem] font-light leading-[1.6rem] text-center h-[100px]">
              A coach provides a safe space to explore discomfort, break
              limiting patterns, and unlock intuition—guiding coachees to find
              answers from within.
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
              <div className="absolute inset-0 flex flex-col justify-end items-center">
                <div className="bg-black rounded-s-2xl rounded-[20px] bg-opacity-30 opacity-20 absolute inset-0 transition-opacity duration-300  hover:opacity-0"></div>

                <div className="text-white text-[1.9rem] leading-[2.4rem] space-y-2 flex flex-col justify-center items-center">
                  <span className="font-white">Coaching Supervision</span>
                </div>
              </div>
            </div>

            <span className="text-[1.3rem] font-light leading-[1.6rem] text-center h-[100px]">
              A transformative, nine-phase strategy engaging your leadership
              team to drive tailored organizational growth.
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

export default News;
