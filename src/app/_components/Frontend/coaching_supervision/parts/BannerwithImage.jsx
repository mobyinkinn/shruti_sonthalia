// "use client"
// import Image from "next/image";
// import image from "../assets/Image.png"
// import { useEffect, useRef, useState } from "react";
// import { useRouter } from "next/navigation";
// import { Volume2, VolumeX } from "lucide-react";
// const LeadershipProwess = () => {
//    const videoRef = useRef(null);
//     const [isMuted, setIsMuted] = useState(true);
//     const [isHovered, setIsHovered] = useState(false);
//     const router = useRouter();
//     const getTrasformStyles = (isHovered) => ({
//       transform: `translateY(${isHovered ? "-100%" : "0"})`,
//     });
//     const toggleMute = () => {
//       const video = videoRef.current;
//       if (video) {
//         video.muted = !video.muted;
//         setIsMuted(video.muted);
//       }
//     };
  
//     useEffect(() => {
//       const video = videoRef.current;
//       if (video) {
//         video.muted = true;
//         video.play().catch((err) => {
//           console.warn("Autoplay failed", err);
//         });
//       }
//     }, []);
  
//   return (
//     <section className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 px-4 md:px-16 py-12">
//       {/* Text Section */}
//       <div className="flex-1">
//         <h2 className="text-2xl md:text-3xl font-normal text-[#E53935] mb-4 underline-offset-4">
//           Unlock New Depths in Your Coaching Practice
//         </h2>
//         <p className="text-gray-800 text-base leading-relaxed mb-4">
//           Coaching supervision is an essential, structured process that enables
//           coaches to reflect, grow, and refine their skills. Whether you are an
//           experienced coach or new to the profession, supervision provides a
//           safe, confidential space to explore challenges, enhance self-
//           awareness, and improve professional effectiveness.
//         </p>
//         <p className="text-gray-800 text-base leading-relaxed mb-4">
//           We offer high-quality coaching supervision designed to support your
//           continuous professional development. With a focus on ethical practice,
//           psychological insight, and systemic awareness, our supervision
//           sessions empower you to bring greater impact to your clients and
//           maintain your well-being as a coach.
//         </p>
//       </div>

//       {/* Image Section */}
//       <div className="w-[50%] relative">
//         <video
//           ref={videoRef}
//           width="100%"
//           height="100%"
//           autoPlay
//           loop
//           muted
//           playsInline
//           controls={false}
//           style={{ objectFit: "cover" }}
//         >
//           <source src="/super1.mp4" type="video/mp4" />
//         </video>

//         {/* Sound Toggle Button */}
//         <button
//           onClick={toggleMute}
//           className="absolute bottom-5 right-5 z-100 bg-black bg-opacity-50 p-2 rounded-full text-white"
//         >
//           {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
//         </button>
//       </div>
//     </section>
//   );
// };

// export default LeadershipProwess;


"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Volume2, VolumeX } from "lucide-react";

const LeadershipProwess = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const router = useRouter();

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
    <section className="flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-16 px-4 sm:px-6 md:px-16 py-10">
      {/* Text Section */}
      <div className="flex-1">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-normal text-[#E53935] mb-4 underline-offset-4">
          Unlock New Depths in Your Coaching Practice
        </h2>
        <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-4">
          Coaching supervision is an essential, structured process that enables
          coaches to reflect, grow, and refine their skills. Whether you are an
          experienced coach or new to the profession, supervision provides a
          safe, confidential space to explore challenges, enhance self-
          awareness, and improve professional effectiveness.
        </p>
        <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-4">
          We offer high-quality coaching supervision designed to support your
          continuous professional development. With a focus on ethical practice,
          psychological insight, and systemic awareness, our supervision
          sessions empower you to bring greater impact to your clients and
          maintain your well-being as a coach.
        </p>
      </div>

      {/* Video Section */}
      <div className="w-full md:w-1/2 relative rounded-xl overflow-hidden shadow-md">
        <video
          ref={videoRef}
          className="w-full h-full object-cover rounded-xl"
          autoPlay
          loop
          muted
          playsInline
          controls={false}
        >
          <source src="/super1.mp4" type="video/mp4" />
        </video>

        {/* Sound Toggle Button */}
        <button
          onClick={toggleMute}
          className="absolute bottom-5 right-5 z-10 bg-black bg-opacity-50 p-2 rounded-full text-white"
        >
          {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
        </button>
      </div>
    </section>
  );
};

export default LeadershipProwess;
