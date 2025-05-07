
// "use client";
// import React, { useRef, useState, useEffect } from "react";
// import { Volume2, VolumeX } from "lucide-react";

// const data = [
//   {
//     title: "Burnout",
//     item: "Session",
//     video: "/videos/e1.mp4",
//   },
//   {
//     title: "Coaching Inn",
//     item: "Podcast",
//     video: "/videos/e2.mp4",
//   },
//   {
//     title: "ICF BD Family Businesses",
//     item: "Session",
//     video: "/videos/e3.mp4",
//   },
//   {
//     title: "Coaching Mindset",
//     item: "Session",
//     video: "/videos/e4.mp4",
//   },
//   {
//     title: "ICF coaching conclave",
//     item: "Podcast",
//     video: "/videos/e5.mp4",
//   },
//   {
//     title: "ICF Converge",
//     item: "Lecture",
//     video: "/videos/e6.mp4",
//   },
//   {
//     title: "ICF masterclass",
//     item: "Session",
//     video: "/videos/e7.mp4",
//   },
//   {
//     title: "Coaching supports Mission-driven Organizations",
//     item: "Lecture",
//     video: "/videos/e8.mp4",
//   },
// ];

// const Cards = () => {
//   return (
//     <>
//       <div className="py-10 flex flex-col justify-center items-center text-center">
//         <h2 className="text-2xl md:text-3xl font-normal text-center text-[#E22E1B] mb-4 underline-offset-4 uppercase">
//           Events
//         </h2>
//         <span className="text-lg md:text-xl max-w-4xl mb-6">
//           Join our curated events designed to ignite leadership potential,
//           foster meaningful connections, and accelerate personal and
//           professional transformation.
//         </span>
//       </div>
//       <div className="px-9 flex flex-row gap-10 flex-wrap ">
//         {data.map((d, index) => (
//           <VideoCard
//             key={index}
//             videoSrc={d.video}
//             title={d.title}
//             item={d.item}
//           />
//         ))}
//       </div>
//     </>
//   );
// };

// const VideoCard = ({ videoSrc, title, item }) => {
//   const videoRef = useRef(null);
//   const [isMuted, setIsMuted] = useState(true);

//   const toggleMute = () => {
//     const video = videoRef.current;
//     if (video) {
//       video.muted = !video.muted;
//       setIsMuted(video.muted);
//     }
//   };

//   useEffect(() => {
//     const video = videoRef.current;
//     if (video) {
//       video.muted = true;
//       video.play().catch((err) => {
//         console.warn("Autoplay failed", err);
//       });
//     }
//   }, []);

//   return (
//     <div className="flex flex-col justify-center w-[48%] relative group">
//       <div className="relative h-[300px] shadow-xl rounded-2xl overflow-hidden">
//         <video
//           ref={videoRef}
//           src={videoSrc}
//           loop
//           autoPlay
//           muted
//           playsInline
//           className="w-full h-full object-cover rounded-t-2xl"
//         />
//         <button
//           onClick={toggleMute}
//           className="absolute bottom-3 right-3 bg-black bg-opacity-50 p-2 rounded-full text-white z-10"
//         >
//           {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
//         </button>
//       </div>
//       <div className="text-center text-black text-[1.8rem] font-medium pt-5">
//         {title}
//       </div>
//       <div className="text-center text-[1.1rem] font-medium">{item}</div>
//     </div>
//   );
// };

// export default Cards;

// "use client";
// import React, { useRef, useState } from "react";
// import { Volume2, VolumeX, PlayCircle } from "lucide-react";
// import { Dialog } from "@mui/material";


// const data = [
//   {
//     title: "Burnout",
//     item: "Session",
//     video: "https://www.youtube.com/watch?v=PD9Kf02uykw",
//   },
//   {
//     title: "Coaching Inn",
//     item: "Podcast",
//     video: "https://www.youtube.com/watch?v=PD9Kf02uykw",
//   },
//   {
//     title: "ICF BD Family Businesses",
//     item: "Session",
//     video: "https://www.youtube.com/watch?v=PD9Kf02uykw",
//   },
//   {
//     title: "Coaching Mindset",
//     item: "Session",
//     video: "https://www.youtube.com/watch?v=PD9Kf02uykw",
//   },
//   {
//     title: "ICF coaching conclave",
//     item: "Podcast",
//     video: "https://www.youtube.com/watch?v=PD9Kf02uykw",
//   },
//   {
//     title: "ICF Converge",
//     item: "Lecture",
//     video: "https://www.youtube.com/watch?v=PD9Kf02uykw",
//   },
//   {
//     title: "ICF masterclass",
//     item: "Session",
//     video: "https://www.youtube.com/watch?v=PD9Kf02uykw",
//   },
//   {
//     title: "Coaching supports Mission-driven Organizations",
//     item: "Lecture",
//     video: "https://www.youtube.com/watch?v=PD9Kf02uykw",
//   },
// ];

// const Cards = () => {
//   const [openModal, setOpenModal] = useState(false);
//   const [selectedVideoId, setSelectedVideoId] = useState("");

//   const handleOpenModal = (videoUrl) => {
//     const id = extractVideoId(videoUrl);
//     if (id) {
//       setSelectedVideoId(id);
//       setOpenModal(true);
//     }
//   };

//   const handleCloseModal = () => {
//     setOpenModal(false);
//     setSelectedVideoId("");
//   };

//   return (
//     <>
//       <div className="py-10 flex flex-col justify-center items-center text-center">
//         <h2 className="text-2xl md:text-3xl font-normal text-[#E22E1B] mb-4 uppercase">
//           Events
//         </h2>
//         <span className="text-lg md:text-xl max-w-4xl mb-6">
//           Join our curated events designed to ignite leadership potential,
//           foster meaningful connections, and accelerate transformation.
//         </span>
//       </div>

//       <div className="px-9 flex flex-row gap-10 flex-wrap">
//         {data.map((d, index) => (
//           <VideoCard
//             key={index}
//             videoUrl={d.video}
//             title={d.title}
//             item={d.item}
//             onPlay={() => handleOpenModal(d.video)}
//           />
//         ))}
//       </div>

//       {/* Modal */}
//       <Dialog
//         open={openModal}
//         onClose={handleCloseModal}
//         maxWidth="md"
//         fullWidth
//       >
//         <div className="relative w-full h-full">
//           <button
//             onClick={handleCloseModal}
//             className="absolute top-2 right-2 text-white bg-black bg-opacity-50 p-2 rounded-full z-10"
//           >
//             ✕
//           </button>
//           {selectedVideoId && (
//             <iframe
//               width="100%"
//               height="500"
//               src={`https://www.youtube.com/embed/${selectedVideoId}`}
//               frameBorder="0"
//               allow="autoplay; encrypted-media"
//               allowFullScreen
//               title="YouTube video"
//             ></iframe>
//           )}
//         </div>
//       </Dialog>
//     </>
//   );
// };

// const VideoCard = ({ videoUrl, title, item, onPlay }) => {
//   const [isMuted, setIsMuted] = useState(true);
//   const videoRef = useRef(null);

//   const thumbnail = `https://img.youtube.com/vi/${extractVideoId(
//     videoUrl
//   )}/hqdefault.jpg`;

//   const toggleMute = () => {
//     const video = videoRef.current;
//     if (video) {
//       video.muted = !video.muted;
//       setIsMuted(video.muted);
//     }
//   };

//   return (
//     <div className="flex flex-col justify-center w-[48%] relative group">
//       <div className="relative h-[300px] shadow-xl rounded-2xl overflow-hidden">
//         <img
//           src={thumbnail}
//           alt="video thumbnail"
//           className="w-full h-full object-cover rounded-t-2xl"
//         />
//         <button
//           onClick={onPlay}
//           className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-50 transition"
//         >
//           <PlayCircle className="text-white" size={50} />
//         </button>
//       </div>
//       <div className="text-center text-black text-[1.8rem] font-medium pt-5">
//         {title}
//       </div>
//       <div className="text-center text-[1.1rem] font-medium">{item}</div>
//     </div>
//   );
// };

// // Helper to extract YouTube ID
// const extractVideoId = (url) => {
//   const match =
//     url.match(
//       /(?:youtube\.com.*(?:\?|&)v=|youtu\.be\/|embed\/)([a-zA-Z0-9_-]{11})/
//     ) || url.match(/shorts\/([a-zA-Z0-9_-]{11})/);
//   return match ? match[1] : null;
// };

// export default Cards;



// "use client";
// import React, { useState } from "react";
// import follow from "../assets"
// const data = [
//   {
//     title: "Burnout",
//     item: "Session",
//     video: "https://youtu.be/gCkC94iTVM0",
//     thumbnail: "",
//   },
//   {
//     title: "Coaching Inn",
//     item: "Podcast",
//     video: "https://www.youtube.com/watch?v=PD9Kf02uykw",
//   },
//   {
//     title: "ICF BD Family Businesses",
//     item: "Session",
//     video: "https://www.youtube.com/watch?v=PD9Kf02uykw",
//   },
//   {
//     title: "Coaching Mindset",
//     item: "Session",
//     video: "https://www.youtube.com/watch?v=PD9Kf02uykw",
//   },
//   {
//     title: "ICF coaching conclave",
//     item: "Podcast",
//     video: "https://www.youtube.com/watch?v=PD9Kf02uykw",
//   },
//   {
//     title: "ICF Converge",
//     item: "Lecture",
//     video: "https://www.youtube.com/watch?v=PD9Kf02uykw",
//   },
//   {
//     title: "ICF masterclass",
//     item: "Session",
//     video: "https://www.youtube.com/watch?v=93376kv4VjA",
//   },
//   {
//     title: "Coaching supports Mission-driven Organizations",
//     item: "Lecture",
//     video: "https://www.youtube.com/watch?v=H2NGCP_rR2E",
//   },
// ];

// const Cards = () => {
//   const [openModal, setOpenModal] = useState(false);
//   const [selectedVideoId, setSelectedVideoId] = useState("");

//   const handleOpenModal = (videoUrl) => {
//     const id = extractVideoId(videoUrl);
//     if (id) {
//       setSelectedVideoId(id);
//       setOpenModal(true);
//     }
//   };

//   const handleCloseModal = () => {
//     setOpenModal(false);
//     setSelectedVideoId("");
//   };

//   return (
//     <>
//       <div className="py-10 flex flex-col justify-center items-center text-center">
//         <h2 className="text-2xl md:text-3xl font-semibold text-[#E22E1B] mb-4 uppercase">
//           Events
//         </h2>
//         <p className="text-lg md:text-xl max-w-4xl mb-6">
//           Join our curated events designed to ignite leadership potential,
//           foster meaningful connections, and accelerate transformation.
//         </p>
//       </div>

//       <div className="px-9 flex flex-row gap-10 flex-wrap justify-center">
//         {data.map((d, index) => (
//           <VideoCard
//             key={index}
//             videoUrl={d.video}
//             title={d.title}
//             item={d.item}
//             onPlay={() => handleOpenModal(d.video)}
//           />
//         ))}
//       </div>

//       {/* Modal */}
//       {openModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4">
//           <div className="bg-black w-full max-w-4xl rounded-lg overflow-hidden relative">
//             <button
//               onClick={handleCloseModal}
//               className="absolute top-3 right-3 text-white text-2xl"
//             >
//               &times;
//             </button>
//             <iframe
//               className="w-full h-[500px]"
//               src={`https://www.youtube.com/embed/${selectedVideoId}?autoplay=1`}
//               frameBorder="0"
//               allow="autoplay; encrypted-media"
//               allowFullScreen
//               title="YouTube video"
//             ></iframe>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// const VideoCard = ({ videoUrl, title, item, onPlay }) => {
//   const videoId = extractVideoId(videoUrl);
//   const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

//   return (
//     <div className="flex flex-col justify-center w-[45%] relative group cursor-pointer">
//       <div className="relative h-[200px] shadow-xl rounded-2xl overflow-hidden">
//         <img
//           src={thumbnail}
//           alt="video thumbnail"
//           className="w-full h-full object-cover"
//         />
//         <div
//           onClick={onPlay}
//           className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-50 transition"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-16 w-16 text-white"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             strokeWidth={1.5}
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M14.752 11.168l-5.197-3.027A1 1 0 008 9.027v5.946a1 1 0 001.555.857l5.197-3.027a1 1 0 000-1.715z"
//             />
//           </svg>
//         </div>
//       </div>
//       <div className="text-center text-black text-xl font-medium pt-4">
//         {title}
//       </div>
//       <div className="text-center text-gray-600 text-base">{item}</div>
//     </div>
//   );
// };

// const extractVideoId = (url) => {
//   const match =
//     url.match(
//       /(?:youtube\.com.*[?&]v=|youtu\.be\/|embed\/)([a-zA-Z0-9_-]{11})/
//     ) || url.match(/shorts\/([a-zA-Z0-9_-]{11})/);
//   return match ? match[1] : null;
// };

// export default Cards;




"use client";
import React, { useState } from "react";
import thumb from "../assets/thumb/1.jpeg"
import Image from "next/image";
const data = [
  {
    title: "Burnout",
    item: "Session",
    video: "https://youtu.be/gCkC94iTVM0",
    thumbnail: thumb, // Custom thumbnail
  },
  {
    title: "Coaching Inn",
    item: "Podcast",
    video: "https://www.youtube.com/watch?v=PD9Kf02uykw",
    thumbnail: thumb, // Custom thumbnail
  },
  {
    title: "ICF BD Family Businesses",
    item: "Session",
    video: "https://www.youtube.com/watch?v=PD9Kf02uykw",
    thumbnail: thumb, // Custom thumbnail
  },
  {
    title: "Coaching Mindset",
    item: "Session",
    video: "https://www.youtube.com/watch?v=PD9Kf02uykw",
    thumbnail: thumb,
  },
  {
    title: "ICF coaching conclave",
    item: "Podcast",
    video: "https://www.youtube.com/watch?v=PD9Kf02uykw",
    thumbnail: thumb,
  },
  {
    title: "ICF Converge",
    item: "Lecture",
    video: "https://www.youtube.com/watch?v=PD9Kf02uykw",
    thumbnail: thumb,
  },
  {
    title: "ICF masterclass",
    item: "Session",
    video: "https://www.youtube.com/watch?v=93376kv4VjA",
    thumbnail: thumb,
  },
  {
    title: "Coaching supports Mission-driven Organizations",
    item: "Lecture",
    video: "https://www.youtube.com/watch?v=H2NGCP_rR2E",
    thumbnail: thumb,
  },
];

const Cards = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState("");

  const handleOpenModal = (videoUrl) => {
    const id = extractVideoId(videoUrl);
    if (id) {
      setSelectedVideoId(id);
      setOpenModal(true);
    }
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedVideoId("");
  };

  return (
    <>
      <div className="py-10 flex flex-col justify-center items-center text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#E22E1B] mb-4 uppercase">
          Events
        </h2>
        <p className="text-lg md:text-xl max-w-4xl mb-6">
          Join our curated events designed to ignite leadership potential,
          foster meaningful connections, and accelerate transformation.
        </p>
      </div>

      <div className="px-9 flex flex-row gap-10 flex-wrap justify-center">
        {data.map((d, index) => (
          <VideoCard
            key={index}
            videoUrl={d.video}
            title={d.title}
            item={d.item}
            thumbnail={d.thumbnail} // Pass custom thumbnail
            onPlay={() => handleOpenModal(d.video)}
          />
        ))}
      </div>

      {/* Modal */}
      {openModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4">
          <div className="bg-black w-full max-w-4xl rounded-lg overflow-hidden relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-3 text-white text-2xl"
            >
              &times;
            </button>
            <iframe
              className="w-full h-[500px]"
              src={`https://www.youtube.com/embed/${selectedVideoId}?autoplay=1`}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="YouTube video"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

const VideoCard = ({ videoUrl, title, item, thumbnail, onPlay }) => {
  const videoId = extractVideoId(videoUrl);

  // Fallback function in case thumbnail doesn't load
  const handleError = (e) => {
    e.target.src = thumb; // Fallback to default image
  };

  return (
    <div className="flex flex-col justify-center w-[45%] relative group cursor-pointer">
      <div className="relative h-[320px] shadow-xl rounded-2xl overflow-hidden">
        <Image
          src={thumbnail.src} // Custom thumbnail or fallback
          alt="video thumbnail"
          objectFit="contain"
          className="w-full h-full object-cover"
          layout="fill" // Fill the parent container
          onError={handleError} // Fallback on error
        />
        <div
          onClick={onPlay}
          className="absolute inset-0 flex items-center justify-center bg-opacity-30 hover:bg-opacity-50 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.752 11.168l-5.197-3.027A1 1 0 008 9.027v5.946a1 1 0 001.555.857l5.197-3.027a1 1 0 000-1.715z"
            />
          </svg>
        </div>
      </div>
      <div className="text-center text-black text-xl font-medium pt-4">
        {title}
      </div>
      <div className="text-center text-gray-600 text-base">{item}</div>
    </div>
  );
};

const extractVideoId = (url) => {
  const match =
    url.match(
      /(?:youtube\.com.*[?&]v=|youtu\.be\/|embed\/)([a-zA-Z0-9_-]{11})/
    ) || url.match(/shorts\/([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : null;
};

export default Cards;
