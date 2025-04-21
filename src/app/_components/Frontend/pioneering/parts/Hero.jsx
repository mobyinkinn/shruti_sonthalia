// import Image from "next/image";
// import publication from "../assets/Mask5.png";
// const Hero = () => {
//   return (
//     <div className="relative w-full h-[screen]">
//       {/* <Image
//         src={publication}
//         alt="Transformational Leadership"
//         layout="fill"
//         objectFit="cover"
//         className="z-0"
//         priority
//       />
//       <div className="absolute inset-0 bg-black opacity-30 z-10"></div> */}
//       <div className="w-[100%] relative ">
//         {/* <Image src={hero} alt="" fill objectFit="cover" /> */}
//         <video
//           width="100%"
//           height="100%"
//           autoPlay
//           loop
//           controls={false}
//           style={{ objectFit: "cover" }}
//         >
//           <source src="/Pioneering.mp4" type="video/mp4" />
//         </video>
//       </div>
//       <div className="absolute inset-0 z-20 flex flex-col justify-end items-center text-center px-4 md:px-8 py-5">
//         <h1 className="text-white text-2xl md:text-4xl font-semibold mb-4 tracking-wider uppercase">
//           Innovative Solutions for Social Inclusion
//         </h1>
//         <p className="text-white text-lg md:text-md max-w-5xl mb-6">
//           With over 20 years of experience, we've led impactful initiatives in
//           coaching, advocacy, and social change. Our journey reflects a deep
//           commitment to empowering communities and driving meaningful
//           transformation.
//         </p>
//         <button className="flex items-center gap-2 text-[1.4rem] px-6 py-2 bg-[#151583] text-white rounded-full hover:bg-white hover:text-black transition cursor-pointer">
//           Book A Consult
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Hero;

"use client"
// import { useEffect, useRef } from "react";
// import Image from "next/image";
// import publication from "../assets/Mask5.png";

// const Hero = () => {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const video = videoRef.current;
//     // Try to play the video with sound after user interaction
//     const playVideoWithSound = () => {
//       if (video) {
//         video.muted = false;
//         video.play().catch((e) => {
//           console.log("Autoplay with sound failed", e);
//         });
//       }
//     };

//     // Attach one-time click listener
//     window.addEventListener("click", playVideoWithSound, { once: true });

//     return () => {
//       window.removeEventListener("click", playVideoWithSound);
//     };
//   }, []);

//   return (
//     <div className="relative w-full h-[screen]">
//       <div className="w-[100%] relative ">
//         <video
//           ref={videoRef}
//           width="100%"
//           height="100%"
//           autoPlay
//           loop
//           controls={false}
//           style={{ objectFit: "cover" }}
//         >
//           <source src="/Pioneering.mp4" type="video/mp4" />
//         </video>
//       </div>
//       <div className="absolute inset-0 z-20 flex flex-col justify-end items-center text-center px-4 md:px-8 py-5">
//         <h1 className="text-white text-2xl md:text-4xl font-semibold mb-4 tracking-wider uppercase">
//           Innovative Solutions for Social Inclusion
//         </h1>
//         <p className="text-white text-lg md:text-md max-w-5xl mb-6">
//           With over 20 years of experience, we've led impactful initiatives in
//           coaching, advocacy, and social change. Our journey reflects a deep
//           commitment to empowering communities and driving meaningful
//           transformation.
//         </p>
//         <button className="flex items-center gap-2 text-[1.4rem] px-6 py-2 bg-[#151583] text-white rounded-full hover:bg-white hover:text-black transition cursor-pointer">
//           Book A Consult
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Hero;



import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Volume2, VolumeX } from "lucide-react"; // You can use any icon library
import { useRouter } from "next/navigation";

const Hero = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
const [isHovered, setIsHovered] = useState(false);
     const router = useRouter();
      const getTrasformStyles = (isHovered) => ({
        transform: `translateY(${isHovered ? "-100%" : "0"})`,
      });
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

  return (
    <div className="relative w-full h-[screen]">
      <div className="w-full relative">
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
          <source src="/Corona.mp4" type="video/mp4" />
        </video>
        
        {/* Sound Toggle Button */}
        <button
          onClick={toggleMute}
          className="absolute bottom-5 right-5 z-100 bg-black bg-opacity-50 p-2 rounded-full text-white"
        >
          {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
        </button>
      </div>

      <div className="absolute inset-0 z-20 flex flex-col justify-end items-center text-center px-4 md:px-8 py-5">
        <h1 className="text-white text-2xl md:text-4xl font-semibold mb-4 tracking-wider uppercase">
          Innovative Solutions for Social Inclusion
        </h1>
        <p className="text-white text-lg md:text-md max-w-5xl mb-6">
          With over 20 years of experience, we've led impactful initiatives in
          coaching, advocacy, and social change. Our journey reflects a deep
          commitment to empowering communities and driving meaningful
          transformation.
        </p>
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
          onClick={() => router.push("/contact-us")}
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          <span className="fancy-button-text-container">
            <span style={getTrasformStyles(isHovered)}>Book a Session</span>
            <span style={getTrasformStyles(isHovered)}>Book a Session</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
