// import React from "react";
// import hero_banner from "../assets/hero/hero_banner.png";

// const Hero = () => {
//   return (
//     <div className="flex flex-col ">

//       <div>
//         <div
//           className="hidden md:flex w-full min-h-[322px] md:min-h-[322px] lg:min-h-[434px] xl:min-h-[600px] bg-cover bg-center"
//           style={{ backgroundImage: `url(${hero_banner.src})`, backgroundSize:"contain", backgroundRepeat:"no-repeat" }}
//         ></div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

"use client"
// import React, { useEffect, useRef, useState } from "react";
// import Player from "@vimeo/player";
// import { Volume2, VolumeX } from "lucide-react";

// const Hero = () => {
//   const iframeRef = useRef(null);
//   const [isMuted, setIsMuted] = useState(true);
//   const [player, setPlayer] = useState(null);

//   useEffect(() => {
//     if (iframeRef.current) {
//       const vimeoPlayer = new Player(iframeRef.current);
//       vimeoPlayer.setVolume(0); // Initially muted
//       setPlayer(vimeoPlayer);
//     }
//   }, []);

//   const toggleMute = async () => {
//     if (player) {
//       if (isMuted) {
//         await player.setVolume(1); // Set to full volume
//       } else {
//         await player.setVolume(0);
//       }
//       setIsMuted(!isMuted);
//     }
//   };

//   return (
//     <div className="relative w-full min-h-[322px] md:min-h-[434px] xl:min-h-[600px]">
//       <div className="absolute inset-0 z-10">
//         <div className="w-full h-full">
//           <iframe
//             ref={iframeRef}
//             src="https://player.vimeo.com/video/760359377?background=1&autoplay=1&loop=1&muted=1&controls=0"
//             frameBorder="0"
//             allow="autoplay; fullscreen"
//             allowFullScreen
//             className="w-full h-full object-contain"
//           ></iframe>
//         </div>
//       </div>

//       {/* Volume Toggle Button */}
//       <button
//         onClick={toggleMute}
//         className="absolute top-4 right-4 z-20 bg-black bg-opacity-60 p-2 rounded-full text-white"
//       >
//         {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
//       </button>
//     </div>
//   );
// };

// export default Hero;

// import React, { useEffect, useRef, useState } from "react";
// import Player from "@vimeo/player";
// import { Volume2, VolumeX } from "lucide-react";

// const Hero = () => {
//   const iframeRef = useRef(null);
//   const [isMuted, setIsMuted] = useState(true);
//   const [player, setPlayer] = useState(null);

//   useEffect(() => {
//     if (iframeRef.current) {
//       const vimeoPlayer = new Player(iframeRef.current);
//       vimeoPlayer.setVolume(0); // Start muted
//       setPlayer(vimeoPlayer);
//     }
//   }, []);

//   const toggleMute = async () => {
//     if (player) {
//       if (isMuted) {
//         await player.setVolume(1);
//       } else {
//         await player.setVolume(0);
//       }
//       setIsMuted(!isMuted);
//     }
//   };

//   return (
//     <div className="relative w-full min-h-screen overflow-hidden">
//       {/* Vimeo Iframe Fullscreen Background */}
//       <div className="absolute inset-0 z-10">
//         <iframe
//           ref={iframeRef}
//           src="https://player.vimeo.com/video/760359377?background=1&autoplay=1&loop=1&muted=1&controls=0"
//           frameBorder="0"
//           allow="autoplay; fullscreen"
//           allowFullScreen
//           className="w-full h-full"
//           style={{ objectFit: "cover" }}
//         ></iframe>
//       </div>

//       {/* Volume Toggle Button */}
//       <button
//         onClick={toggleMute}
//         className="absolute top-4 right-4 z-20 bg-black bg-opacity-60 p-2 rounded-full text-white"
//       >
//         {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
//       </button>

//       {/* Optional Overlay Content */}
//       <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white text-center px-4">
//         <h1 className="text-3xl md:text-5xl font-bold mb-4">
//           Empowering Through Inclusion
//         </h1>
//         <p className="text-lg md:text-xl max-w-xl">
//           Join us in driving positive change for every community.
//         </p>
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
          <source src="/About.mp4" type="video/mp4" />
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
  );
};

export default Hero;
