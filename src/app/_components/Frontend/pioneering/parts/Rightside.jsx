"use client";

import React, { useEffect, useRef, useState } from "react";
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
import meet4 from "../assets/12.jpeg";
import meet5 from "../assets/qw.png";
import new1 from "../assets/new1.jpg";
import new2 from "../assets/new2.jpg";
import new3 from "../assets/new3.jpg";
import new4 from "../assets/new4.jpg";
import new5 from "../assets/new5.png";
import new6 from "../assets/new6.jpg";


import meet3 from "../assets/33.png";
import { Volume2, VolumeX } from "lucide-react";
import certnew from "../assets/2.jpeg";
const certImages = [certnew, cert2, cert3];
const meetImages = [meet, meet2, meet3, meet4, meet5];
const newImages = [new1, new2, new3, new4, new5, new6];




const Rightside = () => {
   const videoRef = useRef(null);
      const [isMuted, setIsMuted] = useState(true);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    infinite: true,
    speed: 1500,
    loop: true,
    autoplaySpeed: 1500,

    autoplay: true,
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
 const toggleMute = () => {
   const video = videoRef.current;
   if (video) {
     video.muted = !video.muted;
     setIsMuted(video.muted);
   }
 };

 useEffect(() => {
   const video = videoRef.current;
   if (video) {
     video.muted = true;
     video.play().catch((err) => {
       console.warn("Autoplay failed", err);
     });
   }
 }, []);

  const meetsettings = {
    dots: true,
    infinite: true,
    speed: 500,
    infinite: true,
    speed: 1500,
    loop: true,
    autoplaySpeed: 1500,

    autoplay: true,
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
const newsettings = {
  dots: true,
  infinite: true,
  speed: 500,
  infinite: true,
  speed: 1500,
  loop: true,
  autoplaySpeed: 1500,

  autoplay: true,
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
      <div className="flex flex-col md:w-[40%] w-[100%] mt-24">
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
            <h2 className="text-[#E53935] font-normal tracking-wider text-xl md:text-3xl">
              Global Board Member,
              <span className="text-[#E53935] font-normal tracking-wider text-xl md:text-3xl">
                Graduate Women’s International, Geneva
              </span>
            </h2>
          </div>

          <div className="space-y-2 mt-24">
            <p className="text-[1.5rem] font-semibold">2021</p>
            <h2 className="text-[#E53935] font-normal tracking-wider text-xl md:text-3xl">
              Vice President,
              <span className="text-[#E53935] font-normal tracking-wider text-xl md:text-3xl">
                Gujarat State Coaching Council, Women’s Indian Chamber of
                Commerce & Industry (WICCI)
              </span>
            </h2>
          </div>
        </div>
        <div className="w-full overflow-hidden pt-52 pb-20">
          <div className="w-[95%] relative">
            <video
              ref={videoRef}
              width="100%"
              height="100%"
              autoPlay
              loop
              muted
              playsInline
              controls={false}
              style={{ objectFit: "cover" }}
            >
              <source src="/Pioneering.mp4" type="video/mp4" />
            </video>

            {/* Sound Toggle Button */}
            <button
              onClick={toggleMute}
              className="absolute bottom-5 right-5 z-100 bg-black bg-opacity-50 p-2 rounded-full text-white"
            >
              {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
            </button>
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
            <h2 className="text-[#E53935] font-normal tracking-wider text-xl md:text-3xl">
              Peace Corps Coaching Intervention,{" "}
              <span className="text-[#E53935] font-normal tracking-wider text-xl md:text-3xl">
                Fiji & Madagascar
              </span>
            </h2>
          </div>

          {/* 2009 */}
          <div className="pt-32 space-y-2">
            <p className="text-[1.5rem] font-semibold">2009</p>
            <h2 className="text-[#E53935] font-normal tracking-wider text-xl md:text-3xl">
              Awarded by the British Council International Student of the Year
              <span className="text-[#E53935] font-normal tracking-wider text-xl md:text-3xl">
                – London for academic and leadership excellence
              </span>
            </h2>

            <h2 className="text-[#E53935] font-normal tracking-wider text-xl md:text-3xl">
              Worked under COO Julie Devonshire at Global Ethics,
              <span className="text-[#E53935] font-normal tracking-wider text-xl md:text-3xl">
                The One Foundation, London conducted evaluation of supply chain
                service options
              </span>
            </h2>

            <h2 className="text-[#E53935] font-normal tracking-wider text-xl md:text-3xl">
              Aim Higher Path Finder,
              <span className="text-[#E53935] font-normal tracking-wider text-xl md:text-3xl">
                London, Supporting students aiming for higher education t St.
                George’s School, Maida Vale
              </span>
            </h2>
          </div>

          {/* 2007 - 2008 */}
          <div className="pt-30 space-y-2">
            <p className="text-[1.5rem] font-semibold">2007 - 2008</p>
            <h2 className="text-[#E53935] font-normal tracking-wider text-xl md:text-3xl">
              National Mentoring Scheme,
              <span className="text-[#E53935] font-normal tracking-wider text-xl md:text-3xl">
                London, Mentoring school students for academic and emotional
                well-being
              </span>
            </h2>
          </div>

          <div className="w-full pr-8 text-gray-900 font-sans space-y-10">
            <Slider {...newsettings}>
              {newImages.map((cert, index) => (
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
          {/* 2006 - 2007 */}
          <div className="space-y-2 pt-28">
            <p className="text-[1.5rem] font-semibold">2006 - 2007</p>
            <h2 className="text-[#E53935] font-normal tracking-wider text-xl md:text-3xl">
              Young Entrepreneurship Network Society,
              <span className="text-[#E53935] font-normal tracking-wider text-xl md:text-3xl">
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
