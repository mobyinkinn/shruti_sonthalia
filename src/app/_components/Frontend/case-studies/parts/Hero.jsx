"use client";

import Image from "next/image";
import blog from "../assets/blog.png";
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
        src={blog}
        alt="Transformational Leadership"
        layout="fill"
        objectFit="cover"
        className="z-0"
        priority
      />

      <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
      <div className="absolute inset-0 z-20 flex flex-col justify-end items-center text-center px-4 md:px-8 py-5">
        <div>
          <h1 className="text-white text-2xl md:text-[2.5rem] font-semibold mb-4 tracking-wider uppercase">
            Blog Post/ Case Studies
          </h1>
          <p className="text-white text-lg md:text-xl max-w-4xl mb-6">
            Discover real-world case studies and blog posts packed with
            strategies, lessons, and breakthroughs to elevate your business
            journey
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
            onClick={() => router.push("/contact-us")}
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
