// "use client"
// import Slider from "react-slick"; // react-slick for carousel functionality
// import "slick-carousel/slick/slick.css"; // Import Slick CSS
// import "slick-carousel/slick/slick-theme.css"; // Import Slick theme CSS
// import { useRef } from "react";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// const WhyStandApart = () => {
//   const TwosliderRef = useRef(null);
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     arrows: false
//   };

//   const cardContent = [
//     {
//       title: "Data-Driven",
//       description:
//         "We use behavioral analytics and tracking to measure progress and drive accountability.",
//       bgClass: "bg-gradient-to-r from-[#f43d24] to-[#8d2e69]",
//     },
//     {
//       title: "Tailored to Your Organization’s Needs",
//       description:
//         "Our solutions are not one-size-fits-all. We create customized strategies based on your industry, company culture, and transformation objectives.",
//       bgClass: "bg-gradient-to-r from-[#8d2e69] to-[#3D2B66]",
//     },
//     {
//       title: "Proven Track Record",
//       description:
//         "We’ve helped over x number of organizations across industries successfully navigate change, with a x% success rate in achieving desired outcomes.",
//       bgClass: "bg-gradient-to-r from-[#3D2B66] to-[#191982]",
//     },
    
//   ];

//   return (
//     <section className="py-20 px-4 bg-white text-center relative">
//       <h3 className="text-xl text-[#151583] mb-2 ">The RuhCo Approach</h3>

//       <h2 className="text-2xl md:text-3xl font-normal text-[#E53935] underline-offset-4 my-3">
//         Why We Stand Apart
//       </h2>

//       {/* Card Slider */}
//       <div className="flex flex-row">
//         {/* <Slider ref={TwosliderRef} {...settings}> */}
//           {cardContent.map((card, index) => (
//             <div key={index} className="px-4 w-[33%]">
//               <div
//                 className={`p-8 h-80 rounded-xl shadow-lg ${card.bgClass} text-white`}
//               >
//                 <div className="flex flex-col h-[100%] justify-center">
//                   <h4 className="text-xl font-bold mb-4">{card.title}</h4>
//                   <p className="text-md">{card.description}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         {/* </Slider> */}
//       </div>

//       {/* <button
//         onClick={() => TwosliderRef.current.slickPrev()}
//         className="absolute cursor-pointer right-332 bottom-50 border-black border transform -translate-y-1/2 bg-[transparent] text-black p-2 rounded-full shadow-md hover:bg-[white] hover:text-[#151583] transition"
//       >
//         <IoIosArrowBack className="w-6 h-6" />
//       </button>

//       <button
//         onClick={() => TwosliderRef.current.slickNext()}
//         className="absolute cursor-pointer -right-10 bottom-45 border-black border transform -translate-y-1/2 bg-[transparent] text-black p-2 rounded-full shadow-md hover:bg-[white] hover:text-[#151583] transition"
//       >
//         <IoIosArrowForward className="w-6 h-6" />
//       </button> */}
//     </section>
//   );
// };

// export default WhyStandApart;
"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState, useEffect } from "react";

const WhyStandApart = () => {
  const TwosliderRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen width for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint approx 768px
    };
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: isMobile ? 1 : 3,
    arrows: false,
  };

  const cardContent = [
    {
      title: "Data-Driven",
      description:
        "We use behavioral analytics and tracking to measure progress and drive accountability.",
      bgClass: "bg-gradient-to-r from-[#f43d24] to-[#8d2e69]",
    },
    {
      title: "Tailored to Your Organization’s Needs",
      description:
        "Our solutions are not one-size-fits-all. We create customized strategies based on your industry, company culture, and transformation objectives.",
      bgClass: "bg-gradient-to-r from-[#8d2e69] to-[#3D2B66]",
    },
    {
      title: "Proven Track Record",
      description:
        "We’ve helped over x number of organizations across industries successfully navigate change, with a x% success rate in achieving desired outcomes.",
      bgClass: "bg-gradient-to-r from-[#3D2B66] to-[#191982]",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white text-center relative max-w-6xl mx-auto">
      <h3 className="text-xl text-[#151583] mb-2">The RuhCo Approach</h3>

      <h2 className="text-2xl md:text-3xl font-normal text-[#E53935] underline-offset-4 my-3">
        Why We Stand Apart
      </h2>

      {isMobile ? (
        // Mobile Slider
        <div className="relative">
          <Slider ref={TwosliderRef} {...settings}>
            {cardContent.map((card, index) => (
              <div key={index} className="px-4">
                <div
                  className={`p-8 h-80 rounded-xl shadow-lg ${card.bgClass} text-white`}
                >
                  <div className="flex flex-col h-full justify-center">
                    <h4 className="text-xl font-bold mb-4">{card.title}</h4>
                    <p className="text-md">{card.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          {/* Arrows */}
          <button
            onClick={() => TwosliderRef.current.slickPrev()}
            className="absolute top-1/2 -left-8 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow-md hover:bg-opacity-100 transition"
          >
            <IoIosArrowBack className="w-6 h-6 text-[#151583]" />
          </button>

          <button
            onClick={() => TwosliderRef.current.slickNext()}
            className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow-md hover:bg-opacity-100 transition"
          >
            <IoIosArrowForward className="w-6 h-6 text-[#151583]" />
          </button>
        </div>
      ) : (
        // Desktop static cards in flex row
        <div className="flex flex-row gap-6 justify-center">
          {cardContent.map((card, index) => (
            <div key={index} className="w-1/3 px-4">
              <div
                className={`p-8 h-80 rounded-xl shadow-lg ${card.bgClass} text-white`}
              >
                <div className="flex flex-col h-full justify-center">
                  <h4 className="text-xl font-bold mb-4">{card.title}</h4>
                  <p className="text-md">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default WhyStandApart;
