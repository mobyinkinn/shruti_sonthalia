"use client";

import React, { useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useRouter } from "next/navigation";
import { FaQuoteLeft } from "react-icons/fa";

const bannerImages = [
  {
    Desc: "My experience during my coaching work with Shruti was transformative for me as a leader. Her approach is very mindful, deeply compassionate and non-judgmental wherein her exceptional ability to hold space for me created a safe environment that allowed me to introspect and share some of my deepest vulnerabilities as a leader that were stopping me from achieving my true potential. This in turn, helped me deeply connect with myself allowing me to strengthen my intuition to deal with ambiguities in life and business situations and develop greater trust with my own authority as an individual.",
    name: "Aditya Kumar",
    designa: "President, Dinesh Felts",
  },
  {
    Desc: "Photoframes My experience during my coaching work with Shruti was transformative for me as a leader. Her approach is very mindful, deeply compassionate and non-judgmental wherein her exceptional ability to hold space for me created a safe environment that allowed me to introspect and share some of my deepest vulnerabilities as a leader that were stopping me from achieving my true potential.",
    name: "Aditya Kumar",
    designa: "President, Dinesh Felts",
  },
  {
    Desc: "Religious Range My experience during my coaching work with Shruti was transformative for me as a leader. Her approach is very mindful, deeply compassionate and non-judgmental wherein her exceptional ability to hold space for me created a safe environment that allowed me to introspect and share some of my deepest vulnerabilities as a leader that were stopping me from achieving my true potential.",
    name: "Aditya Kumar",
    designa: "President, Dinesh Felts",
  },
];

const Testimonials = () => {
  const TwosliderRef = useRef(null);
  const router = useRouter();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <h2 className="text-3xl font-medium text-[#E22E1B] mb-6 text-center">
        WHAT THEY SAY
      </h2>
      <div className="flex justify-center relative">
        <div className="w-full max-w-[80%] px-6">
          <Slider ref={TwosliderRef} {...settings}>
            {bannerImages.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl  p-8 text-center">
                <div className="shadow-[0px_4px_23px_6px_rgba(0,0,0,0.25)] bg-[#F2824C] rounded-[20px] p-6">
                  <FaQuoteLeft className="text-white text-4xl mx-auto" />
                  <h3 className="text-lg font-semibold text-white mt-4">
                    {testimonial.name}
                  </h3>
                  <p className="text-black text-sm">{testimonial.designa}</p>
                  <p className="text-white text-[1.4rem] mt-4 leading-relaxed">
                    {/* {testimonial.Desc.split("**").map((part, i) => (
                  <span
                    key={i}
                    className={i % 2 === 1 ? "text-red-600 font-semibold" : ""}
                  >
                    {part}
                  </span>
                ))} */}
                    {testimonial.Desc}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        {/* Left Arrow */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex items-center">
          <button
            onClick={() => TwosliderRef.current.slickPrev()}
            className="border-2 border-white text-white bg-[#151583] rounded-full p-2 hover:bg-transparent transition hover:border-black hover:text-black"
          >
            <IoIosArrowBack className=" w-5 h-5 " />
          </button>
        </div>

        {/* Right Arrow */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center">
          <button
            onClick={() => TwosliderRef.current.slickNext()}
            className="border-2 border-white text-white bg-[#151583] rounded-full p-2 hover:bg-transparent transition hover:border-black hover:text-black"
          >
            <IoIosArrowForward className=" w-5 h-5" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
