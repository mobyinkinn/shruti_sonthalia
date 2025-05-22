// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";

// const Hero = () => {
//   const [isHovered, setIsHovered] = useState(false);
//   const router = useRouter();
//   const getTrasformStyles = (isHovered) => ({
//     transform: `translateY(${isHovered ? "-100%" : "0"})`,
//   });
//   return (
//     <div className="relative w-full h-[screen]">
//       <video
//         width="100%"
//         height="100%"
//         autoPlay
//         loop
//         muted
//         controls={false}
//         style={{ objectFit: "cover" }}
//       >
//         <source src="/Video.mp4" type="video/mp4" />
//       </video>

//       {/* <div className="absolute inset-0 bg-black opacity-30 z-10"></div> */}
//       <div className="absolute inset-0 z-20 flex flex-col justify-end items-center text-center px-4 md:px-8 py-5">
//         <div>
//           <h1 className="text-white text-2xl md:text-[2.5rem] font-semibold mb-4 tracking-wider uppercase">
//             Organisational Culture
//           </h1>
//           <p className="text-white text-lg md:text-xl max-w-4xl mb-6">
//             Organizational culture defines workplace values and behaviors,
//             shaping employee engagement and productivity. A strong culture
//             fosters collaboration, innovation, and long-term success.
//           </p>
//           <button
//             style={{
//               marginTop: "20px",
//               color: "white",
//               backgroundColor: "#151583",
//               padding: "10px 25px",
//               borderRadius: "20px",
//               // fontWeight: "bold",
//               cursor: "pointer",
//               outline: "none",
//               border: "none",
//             }}
//             onClick={() =>
//               router.push(
//                 "https://calendly.com/shrutisonthalia"
//               )
//             }
//             onMouseEnter={() => {
//               setIsHovered(true);
//             }}
//             onMouseLeave={() => {
//               setIsHovered(false);
//             }}
//           >
//             <span className="fancy-button-text-container">
//               <span style={getTrasformStyles(isHovered)}>Book A Consult</span>
//               <span style={getTrasformStyles(isHovered)}>Book A Consult</span>
//             </span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  const getTrasformStyles = (isHovered) => ({
    transform: `translateY(${isHovered ? "-100%" : "0"})`,
  });
  return (
    <div className="relative w-full">
      {/* Video */}
      <video
        width="100%"
        className="h-[60vh] md:h-screen object-cover"
        autoPlay
        loop
        muted
        controls={false}
      >
        <source src="/Video.mp4" type="video/mp4" />
      </video>

      {/* Content overlay on desktop */}
      <div className="hidden md:flex absolute inset-0 z-20 flex-col justify-end items-center text-center px-8 pb-16">
        <div className="max-w-4xl">
          <h1 className="text-white text-[2.5rem] font-semibold mb-4 tracking-wider uppercase">
            Organisational Culture
          </h1>
          <p className="text-white text-xl mb-6 leading-relaxed">
            Organizational culture defines workplace values and behaviors,
            shaping employee engagement and productivity. A strong culture
            fosters collaboration, innovation, and long-term success.
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
            onClick={() =>
              router.push(
                "https://calendly.com/shrutisonthalia"
              )
            }
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
          >
            <span className="fancy-button-text-container">
              <span style={getTrasformStyles(isHovered)}>Book a Consult</span>
              <span style={getTrasformStyles(isHovered)}>Book a Consult</span>
            </span>
          </button>
        </div>
      </div>

      {/* Content below video on mobile */}
      <div className="md:hidden px-6 py-8 text-center  bg-opacity-70 text-white">
        <h1 className="text-2xl font-semibold mb-4 tracking-wider uppercase text-black">
          Organisational Culture
        </h1>
        <p className="text-base mb-6 leading-relaxed text-black">
          Organizational culture defines workplace values and behaviors, shaping
          employee engagement and productivity. A strong culture fosters
          collaboration, innovation, and long-term success.
        </p>
        <button
          className="bg-[#151583] px-6 py-3 rounded-full text-white font-medium hover:bg-white hover:text-black transition cursor-pointer"
          onClick={() =>
            router.push(
              "https://calendly.com/shrutisonthalia"
            )
          }
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Book A Consult
        </button>
      </div>
    </div>
  );
};

export default Hero;
