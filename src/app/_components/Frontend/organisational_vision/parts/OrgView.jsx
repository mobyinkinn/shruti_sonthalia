"use client"
import React from "react";

import { useRouter } from "next/navigation";

import { useState } from "react";
const OrgView = ({ bg_image }) => {
    const [isHovered, setIsHovered] = useState(false);
    const router = useRouter();
    const getTrasformStyles = (isHovered) => ({
      transform: `translateY(${isHovered ? "-100%" : "0"})`,
    });
  return (
    <div
      className="mx-5 p-16 flex flex-col items-center justify-between mt-12 bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${bg_image?.src})`,
        backgroundColor: "#151583",
        height: "50vh",
      }}
    >
      <div className="absolute inset-0 z-20 flex flex-col justify-end items-center text-center px-4 md:px-8 py-5">
        <button
          style={{
            marginTop: "20px",
            color: "white",
            backgroundColor: "#151583",
            padding: "10px 25px",
            borderRadius: "20px",
            fontWeight: "bold",
            cursor: "pointer",
            outline: "none",
            border: "none",
          }}
          onClick={() => router.push("/Case-studies")}
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          <span className="fancy-button-text-container">
            <span style={getTrasformStyles(isHovered)}>View Case Study</span>
            <span style={getTrasformStyles(isHovered)}>View Case Study</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default OrgView;
