// import React from "react";
// import e1 from "../assets/e1.png";
// import e2 from "../assets/e2.png";
// import e3 from "../assets/e3.png";
// import e4 from "../assets/e4.png";
// import e5 from "../assets/e5.png";
// import e6 from "../assets/e6.png";
// import e7 from "../assets/e7.png";
// import e8 from "../assets/e8.png";
// import Image from "next/image";

// const data = [
//   {
//     title: "Burnout",
//     item: "Session",
//     img: e1,
//   },
//   {
//     title: "Coaching Inn",
//     item: "Podcast",
//     img: e2,
//   },
//   {
//     title: "ICF BD Family Businesses",
//     item: "Session",
//     img: e3,
//   },
//   {
//     title: "coaching mindset",
//     item: "Session",
//     img: e4,
//   },
//   {
//     title: "ICF coaching conclave",
//     item: "Podcast",
//     img: e5,
//   },
//   {
//     title: "ICF Converge",
//     item: "Lecture",
//     img: e6,
//   },
//   {
//     title: "ICF masterclass",
//     item: "Session",
//     img: e7,
//   },
//   {
//     title: "Coaching supports Mission-driven Organizations",
//     item: "Lecture",
//     img: e8,
//   },
// ];

// const Cards = () => {
//   return (
//     <>
//       <div className="py-10 flex flex-col justify-center items-center text-center">
//         <h2 className="text-2xl md:text-3xl font-normal text-center text-[#E22E1B] mb-4 underline-offset-4 uppercase">
//           Events
//         </h2>
//         <span className="text-[1.4rem] font-medium w-[70%]">
//           Join our curated events designed to ignite leadership potential,
//           foster meaningful connections, and accelerate personal and
//           professional transformation.
//         </span>
//       </div>
//       <div className="px-9 flex flex-row gap-10 flex-wrap ">
//         {data.map((d) => (
//           <div className="flex flex-col justify-center w-[48%] ">
//             <div className="relative h-83 shadow-xl rounded-2xl">
//               <Image
//                 src={d.img}
//                 alt="Flying bird"
//                 layout="fill"
//                 objectFit="cover"
//                 className="rounded-t-2xl"
//               />
//             </div>
//             <div className="text-center text-black text-[1.8rem] font-medium pt-5">
//               {d.title}
//             </div>
//             <div className="text-center text-[1.1rem] font-medium">
//               {d.item}
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Cards;


"use client";
import React, { useRef, useState, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

const data = [
  {
    title: "Burnout",
    item: "Session",
    video: "/videos/e1.mp4",
  },
  {
    title: "Coaching Inn",
    item: "Podcast",
    video: "/videos/e2.mp4",
  },
  {
    title: "ICF BD Family Businesses",
    item: "Session",
    video: "/videos/e3.mp4",
  },
  {
    title: "coaching mindset",
    item: "Session",
    video: "/videos/e4.mp4",
  },
  {
    title: "ICF coaching conclave",
    item: "Podcast",
    video: "/videos/e5.mp4",
  },
  {
    title: "ICF Converge",
    item: "Lecture",
    video: "/videos/e6.mp4",
  },
  {
    title: "ICF masterclass",
    item: "Session",
    video: "/videos/e7.mp4",
  },
  {
    title: "Coaching supports Mission-driven Organizations",
    item: "Lecture",
    video: "/videos/e8.mp4",
  },
];

const Cards = () => {
  return (
    <>
      <div className="py-10 flex flex-col justify-center items-center text-center">
        <h2 className="text-2xl md:text-3xl font-normal text-center text-[#E22E1B] mb-4 underline-offset-4 uppercase">
          Events
        </h2>
        <span className="text-[1.4rem] font-medium w-[70%]">
          Join our curated events designed to ignite leadership potential,
          foster meaningful connections, and accelerate personal and
          professional transformation.
        </span>
      </div>
      <div className="px-9 flex flex-row gap-10 flex-wrap ">
        {data.map((d, index) => (
          <VideoCard
            key={index}
            videoSrc={d.video}
            title={d.title}
            item={d.item}
          />
        ))}
      </div>
    </>
  );
};

const VideoCard = ({ videoSrc, title, item }) => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

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
    <div className="flex flex-col justify-center w-[48%] relative group">
      <div className="relative h-[300px] shadow-xl rounded-2xl overflow-hidden">
        <video
          ref={videoRef}
          src={videoSrc}
          loop
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover rounded-t-2xl"
        />
        <button
          onClick={toggleMute}
          className="absolute bottom-3 right-3 bg-black bg-opacity-50 p-2 rounded-full text-white z-10"
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
      </div>
      <div className="text-center text-black text-[1.8rem] font-medium pt-5">
        {title}
      </div>
      <div className="text-center text-[1.1rem] font-medium">{item}</div>
    </div>
  );
};

export default Cards;
