"use client";

import Image from "next/image";
import press from "../assets/press.png";
import mobpress from "../assets/mobpress.jpg";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/app/_components/Header";
const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  const getTrasformStyles = (isHovered) => ({
    transform: `translateY(${isHovered ? "-100%" : "0"})`,
  });
  return (
    <div className="relative w-full h-[600px]">
      <Image
        src={press}
        alt="Transformational Leadership"
        layout="fill"
        objectFit="cover"
        className="z-0 md:block hidden"
        priority
      />
      <Image
        src={mobpress}
        alt="Transformational Leadership"
        layout="fill"
        objectFit="cover"
        className="z-0 md:hidden block"
        priority
      />

      <div className="absolute inset-0 z-20 flex flex-col justify-end items-center text-center px-4 md:px-8 py-5">
        <div>
          <h1 className="text-white text-2xl md:text-[2.5rem] font-bold mb-4 tracking-wider uppercase">
            Press, Appearances & Highlights
          </h1>
          <p className="text-white text-lg md:text-xl max-w-4xl mb-6">
            Stay updated with our latest media coverage, industry insights, and
            thought leadership features. Explore upcoming events, workshops, and
            highlights from our recent engagements.
          </p>
          <button
            style={{
              marginTop: "20px",
              color: "white",
              backgroundColor: "#151583",
              padding: "10px 25px",
              borderRadius: "20px",
              // fontWeight: "bold",
              cursor: "pointer",
              outline: "none",
              border: "none",
            }}
            onClick={() => router.push("https://calendly.com/shrutisonthalia")}
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
          >
            <span className="fancy-button-text-container">
              <span style={getTrasformStyles(isHovered)}>Book A Consult</span>
              <span style={getTrasformStyles(isHovered)}>Book A Consult</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
