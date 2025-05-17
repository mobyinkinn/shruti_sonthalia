"use client";
import React, { useEffect, useRef, useState } from "react";
import six from "../assets/Mask6.png";
import seven from "../assets/Mask7.png";
import eight from "../assets/Mask8.png";
import nine from "../assets/Mask9.png";
import img from "../assets/1.png";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/1.jpeg";
import img6 from "../assets/1111.jpg";

import img5 from "../assets/1.png";
import cert from "../assets/111.jpg";
import imgnew from "../assets/img.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
const coachingImages = [img, img1, img2, img6];
const fifthImages = [imgnew, img3, cert];

const BothSide = () => {
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
  const Coasettings = {
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
  const fifthsettings = {
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
      <div className="flex flex-col w-[90%] md:w-[45%]">
        <div className="w-full md:px-6 md:py-8  text-gray-900 font-sans">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="font-normal text-xl text-[1.5rem]">2024 - 2025</p>
              <p className="text-[#E53935] font-normal tracking-wider text-xl md:text-3xl">
                ICF Coaching Education -{" "}
                <span className="text-[#E53935] font-normal tracking-wider text-xl md:text-3xl">
                  Global Diversity, Equity, Inclusion, and Belonging Advisory
                  Committee
                </span>
              </p>
            </div>

            <div className="mt-24 space-y-2">
              <p className="font-normal text-xl text-[1.8rem]">2024</p>
              <p className="text-[#E53935] font-normal tracking-wider text-xl md:text-3xl">
                ICF Coaching Impact Awards -{" "}
                <span className="text-[#E53935] font-normal tracking-wider text-xl md:text-3xl">
                  Professional Coaches Distinguished Coach (MCC Category) Jury
                  Member
                </span>
              </p>

              <span className="list-disc list-inside mt-2 space-y-1">
                <p className="ml-4">
                  <span className="text-[#151583] text-[1.5rem] pr-2">ō</span>{" "}
                  ICF Credentials & Standards Subject Matter Expert, Evaluated
                  and provided feedback on ICF’s Advanced Certification in Team
                  Coaching (ACTC)
                </p>
              </span>
            </div>
          </div>
        </div>
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
        <div className="w-full overflow-hidden ">
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
        <div className="w-full p-8 flex flex-col gap-6">
          <Slider {...Coasettings}>
            {coachingImages.map((cert, index) => (
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

        <div className="w-full px-6 py-8 text-gray-900 font-sans space-y-10">
          <div className="space-y-2">
            <p className="text-[1.5rem] font-normal">2020</p>
            <h2 className="text-[#E53935] font-normal tracking-wider text-xl md:text-3xl">
              Co-founder, Corona Quilt Project
            </h2>
            <span className="list-disc list-inside text-black space-y-1 mt-2">
              <p className="ml-4">
                <span className="text-[#151583] text-[1.3rem] pr-2">ō</span>
                Initiated during the pandemic to promote authentic expression
                and connection
              </p>
              <p className="ml-4">
                <span className="text-[#151583] text-[1.3rem] pr-2">ō</span>{" "}
                Co-led a team that engaged 50+ organizations across India
              </p>
              <p className="ml-4">
                <span className="text-[#151583] text-[1.3rem] pr-2">ō</span>{" "}
                Reached over 50,000+ people globally, resulting in six public
                art installations
              </p>
              <p className="ml-4">
                <span className="text-[#151583] text-[1.3rem] pr-2">ō</span>{" "}
                Celebrated as a symbol of healing, inclusion, and creative
                solidarity
              </p>
            </span>
          </div>

          <div>
            <h2 className="text-[#E53935] font-normal tracking-wider text-xl md:text-3xl">
              International Coaching Federation Foundation (ICFF) - Council of
              Ambassadors
            </h2>
            <span className="list-disc list-inside text-black space-y-1 mt-2">
              <p className="ml-4">
                <span className="text-[#151583] text-[1.3rem] pr-2">ō</span>{" "}
                Advocated for coaching for social change across Asia and
                Presented at global coaching forums including ICF Converge
              </p>
              <div className="ml-4">
                <span className="text-[#151583] text-[1.3rem] pr-2">ō</span> Led
                three Ignite Coaching Initiatives in universities and schools
                <span className="ml-16 list-disc">
                  <p className="text-[#363B3F]">
                    <span className="text-[#151583] ml-6 pr-2">
                      Shoolini University –
                    </span>
                    600 students, 35 faculty members.
                  </p>
                  <p className="text-[#363B3F]">
                    <span className="text-[#151583] ml-6  pr-2">
                      Parivartan School
                    </span>
                    Leadership & Faculty.
                  </p>
                  <p className="ml-6 text-[#363B3F]">
                    Brindavan Education Trust – Special needs educators.
                  </p>
                </span>
              </div>
            </span>
          </div>

          <div className="space-y-2">
            <p className="text-[1.5rem] font-normal">2019</p>
            <h2 className="text-[#E53935] font-normal tracking-wider text-xl md:text-3xl">
              Vice President, Young Members’ Advocacy & Education, Graduate
              Women’s International; Nominated to represent GWI at the UN's 64th
              Commission on the Status of Women
            </h2>
          </div>
        </div>
        <div className="w-full pt-40 pb-20 text-gray-900 font-sans space-y-10">
          <Slider {...fifthsettings}>
            {fifthImages.map((cert, index) => (
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
        <div className="w-full overflow-hidden py-20">
          <Image
            src={eight}
            alt="Conference Hall 1"
            width={1000}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="w-full px-6 py-8 text-gray-900 font-sans space-y-10">
          <div>
            <p className="text-[1.5rem] font-normal">2007 - 2009</p>
            <h2 className="text-[#E53935] font-normal tracking-wider text-xl md:text-3xl">
              <span className="font-normal"> LSE Ambassador,</span> LSE Student
              Recruitment Office
            </h2>
            <span className="list-disc list-inside  mt-2">
              <p className="ml-4">
                <span className="text-[#151583] text-[1.3rem] pr-2">ō</span> Led
                outreach programs under “Aim for College Education” (ACE)
              </p>
            </span>
          </div>

          <div className="space-y-2 mt-60">
            <p className="text-[1.5rem] font-normal">2008 - 2009</p>
            <h2 className="text-[#E53935] font-normal tracking-wider text-xl md:text-3xl">
              <span className="font-normal">Student Associate Scheme,</span>
              Institute of Education, London
            </h2>

            <h2 className="text-[#E53935] font-normal tracking-wider text-xl md:text-3xl">
              <span className="font-normal">London Nightline,</span> University
              of London, Providing confidential support through overnight
              helpline
            </h2>
          </div>
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

export default BothSide;
