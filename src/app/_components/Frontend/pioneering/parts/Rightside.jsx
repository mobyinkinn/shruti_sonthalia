"use client";

import React from "react";
import ten from "../assets/Mask10.png";
import eleven from "../assets/Mask11.png";
import twelve from "../assets/Mask12.png";
import thirteen from "../assets/Mask13.png";
import forteen from "../assets/Mask14.png";
import fifteen from "../assets/Mask15.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import cert from "../assets/111.jpg";
import cert2 from "../assets/222.jpg";
import cert3 from "../assets/333.jpg";
import meet2 from "../assets/2.png";
import meet from "../assets/11.png";
import meet3 from "../assets/33.png";


const certImages = [cert, cert2, cert3];
const meetImages = [meet, meet2, meet3];

const Rightside = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: (i) => (
      <div
        style={{
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          background: "#d1d5db", // light gray (Tailwind gray-300)
          margin: "0 5px",
          transition: "all 0.3s",
        }}
      />
    ),
    appendDots: (dots) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "20px",
        }}
      >
        <ul style={{ display: "flex", padding: 0, margin: 0 }}>{dots}</ul>
      </div>
    ),
  };

  const meetsettings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: (i) => (
      <div
        style={{
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          background: "#d1d5db", // light gray (Tailwind gray-300)
          margin: "0 5px",
          transition: "all 0.3s",
        }}
      />
    ),
    appendDots: (dots) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "20px",
        }}
      >
        <ul style={{ display: "flex", padding: 0, margin: 0 }}>{dots}</ul>
      </div>
    ),
  };

  return (
    <>
      <div className="flex flex-col w-[40%] mt-24">
        <div className="w-full p-8 text-gray-900 font-sans space-y-10">
          <Slider {...settings}>
            {certImages.map((cert, index) => (
              <Image
                src={cert}
                alt="Conference Hall 2"
                width={400}
                height={200}
                className="w-full h-auto object-cover"
              />
            ))}
          </Slider>
        </div>
        <div className="w-full py-8 text-gray-900 font-sans mt-24 space-y-10">
          <div className="space-y-2">
            <p className="text-[1.5rem] font-semibold">2022 - 2023</p>
            <h2 className="text-[#E22E1B] font-semibold text-[1.8rem]">
              Global Board Member,
              <span className="text-[#E22E1B] font-normal text-[1.8rem]">
                Graduate Women’s International, Geneva
              </span>
            </h2>
          </div>

          <div className="space-y-2 mt-24">
            <p className="text-[1.5rem] font-semibold">2021</p>
            <h2 className="text-[#E22E1B] font-semibold text-[1.8rem]">
              Vice President,
              <span className="text-[#E22E1B] font-normal text-[1.8rem]">
                Gujarat State Coaching Council, Women’s Indian Chamber of
                Commerce & Industry (WICCI)
              </span>
            </h2>
          </div>
        </div>
        <div className="w-full overflow-hidden pt-52 pb-20">
          <div className="w-[100%] relative pr-5">
            <video
              width="100%"
              height="100%"
              autoPlay
              loop
              muted
              controls={false}
              style={{ objectFit: "cover" }}
            >
              <source src="/Pioneering.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-6  pt-16 pb-20">
          <div className="w-full pr-8 text-gray-900 font-sans space-y-10">
            <Slider {...meetsettings}>
              {meetImages.map((cert, index) => (
                <Image
                  src={cert}
                  alt="Conference Hall 2"
                  width={400}
                  height={200}
                  className="w-full h-auto object-cover"
                />
              ))}
            </Slider>
          </div>
        </div>
        <div className="w-full px-6 py-10  text-gray-900 font-sans  pt-32 space-y-10">
          <div className="space-y-2">
            <p className="text-[1.5rem] font-semibold ">2017 – 2018</p>
            <h2 className="text-[#E22E1B] font-semibold text-[1.8rem]">
              Peace Corps Coaching Intervention,{" "}
              <span className="text-[#E22E1B] font-normal text-[1.8rem]">
                Fiji & Madagascar
              </span>
            </h2>
          </div>

          {/* 2009 */}
          <div className="pt-32 space-y-2">
            <p className="text-[1.5rem] font-semibold">2009</p>
            <h2 className="text-[#E22E1B] font-semibold text-[1.8rem]">
              Awarded by the British Council International Student of the Year
              <span className="text-[#E22E1B] font-normal text-[1.8rem]">
                – London for academic and leadership excellence
              </span>
            </h2>

            <h2 className="text-[#E22E1B] font-semibold text-[1.8rem] mt-4 pt-20">
              Worked under COO Julie Devonshire at Global Ethics,
              <span className="text-[#E22E1B] font-normal text-[1.8rem]">
                The One Foundation, London conducted evaluation of supply chain
                service options
              </span>
            </h2>

            <h2 className="text-[#E22E1B] font-semibold text-[1.8rem] mt-4 pt-20">
              Aim Higher Path Finder,
              <span className="text-[#E22E1B] font-normal text-[1.8rem]">
                London, Supporting students aiming for higher education t St.
                George’s School, Maida Vale
              </span>
            </h2>
          </div>

          {/* 2007 - 2008 */}
          <div className="pt-80 space-y-2">
            <p className="text-[1.5rem] font-semibold">2007 - 2008</p>
            <h2 className="text-[#E22E1B] font-semibold text-[1.8rem]">
              National Mentoring Scheme,
              <span className="text-[#E22E1B] font-normal text-[1.8rem]">
                London, Mentoring school students for academic and emotional
                well-being
              </span>
            </h2>
          </div>

          {/* 2006 - 2007 */}
          <div className="space-y-2 pt-48">
            <p className="text-[1.5rem] font-semibold">2006 - 2007</p>
            <h2 className="text-[#E22E1B] font-semibold text-[1.8rem]">
              Young Entrepreneurship Network Society,
              <span className="text-[#E22E1B] font-normal text-[1.8rem]">
                SIM, Singapore, Organising national events such as Cash Flow and
                Exoro
              </span>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rightside;
