
"use client";
import React, { useState } from "react";
import Inn from "../assets/thumb/Inn.png"
import Mind from "../assets/thumb/Mind.png";
import Subm from "../assets/thumb/Subm.png";
import Fami from "../assets/thumb/Fami.png";
import Mast from "../assets/thumb/Mast.png";
import Onv from "../assets/thumb/Onv.png";
import ICF from "../assets/thumb/ICF.png";
import BURN from "../assets/thumb/BURJ.png";



import Image from "next/image";
const data = [
  {
    title: "Coaching Inn",
    item: "Session",
    video: "https://www.youtube.com/watch?v=9yGbopgoFyA",
    thumbnail: Inn, // Custom thumbnail
  },
  {
    title: "ICF Masterclass",
    item: "Podcast",
    video: "https://www.youtube.com/watch?v=COvi0GUimG0",
    thumbnail: Mast,
  },
  {
    title: "ICF Converge",
    item: "Lecture",
    video: "https://www.youtube.com/watch?v=vQIev9LRzzI",
    thumbnail: Onv,
  },
  {
    title: "ICF BD Family Businesses",
    item: "Podcast",
    video: "https://www.youtube.com/watch?v=IdZRzM9qabM",
    thumbnail: Fami, // Custom thumbnail
  },
  {
    title: "Coaching supports Mission-driven Organizations",
    item: "Session",
    video: "https://www.youtube.com/watch?v=YlDv4ARgUhA",
    thumbnail: Subm, // Custom thumbnail
  },
  {
    title: "Coaching Mindset",
    item: "Session",
    video: "https://www.youtube.com/watch?v=i2UOpIRfSFY",
    thumbnail: Mind,
  },

  {
    title: "ICF Conclave",
    item: "Session",
    video: "https://youtu.be/M6oGgurwlkk",
    thumbnail: ICF,
  },
  {
    title: "Burnout",
    item: "Session",
    video: "https://www.youtube.com/watch?v=3S5-ifS-Mas&feature=youtu.be",
    thumbnail: BURN,
  },
  // {
  //   title: "Coaching supports Mission-driven Organizations",
  //   item: "Lecture",
  //   video: "https://www.youtube.com/watch?v=H2NGCP_rR2E",
  //   thumbnail: thumb,
  // },
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
