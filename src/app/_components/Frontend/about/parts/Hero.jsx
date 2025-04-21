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

import React, { useEffect, useRef, useState } from "react";
import Player from "@vimeo/player";
import { Volume2, VolumeX } from "lucide-react";

const Hero = () => {
  const iframeRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    if (iframeRef.current) {
      const vimeoPlayer = new Player(iframeRef.current);
      vimeoPlayer.setVolume(0); // Start muted
      setPlayer(vimeoPlayer);
    }
  }, []);

  const toggleMute = async () => {
    if (player) {
      if (isMuted) {
        await player.setVolume(1);
      } else {
        await player.setVolume(0);
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Vimeo Iframe Fullscreen Background */}
      <div className="absolute inset-0 z-10">
        <iframe
          ref={iframeRef}
          src="https://player.vimeo.com/video/760359377?background=1&autoplay=1&loop=1&muted=1&controls=0"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          className="w-full h-full"
          style={{ objectFit: "cover" }}
        ></iframe>
      </div>

      {/* Volume Toggle Button */}
      <button
        onClick={toggleMute}
        className="absolute top-4 right-4 z-20 bg-black bg-opacity-60 p-2 rounded-full text-white"
      >
        {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
      </button>

      {/* Optional Overlay Content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Empowering Through Inclusion
        </h1>
        <p className="text-lg md:text-xl max-w-xl">
          Join us in driving positive change for every community.
        </p>
      </div>
    </div>
  );
};

export default Hero;
