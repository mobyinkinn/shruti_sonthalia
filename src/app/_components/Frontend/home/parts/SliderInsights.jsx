// "use client";

// import Slider from "react-slick";
// import Image from "next/image";
// import cert from "../assets/11.png"
// import cert2 from "../assets/22.png";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const insights = [
//   {
//     image: {cert},
//     title:
//       "Impact of Coaching Intervention Programmes on Indian Educators in Tier-2 Cities",
//     link: "#",
//   },
//   {
//     image: {cert2},
//     title:
//       "Building Initial Trust with Family Businesses, ICF Coaching World, July 2023",
//     link: "#",
//   },
// ];

// const InsightsSlider = () => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 600,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     arrows: true,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <section className="bg-[#E5E3F0] py-16 px-4 md:px-12 rounded-3xl">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-center text-3xl font-semibold mb-10">
//           INSIGHTS & RESEARCH
//         </h2>

//         <Slider {...settings}>
//           {insights.map((item, index) => (
//             <div key={index} className="px-4">
//               <div className="bg-white p-6 rounded-2xl shadow-md text-center h-full flex flex-col items-center">
//                 <Image
//                   src={item.image}
//                   alt={item.title}
//                   width={300}
//                   height={400}
//                   className="rounded-xl mb-6"
//                 />
//                 <p className="text-gray-900 font-medium text-lg mb-4">
//                   {item.title}
//                 </p>
//                 <a
//                   href={item.link}
//                   className="bg-[#1E1FB3] text-white px-6 py-2 rounded-full text-sm hover:bg-[#0d0d8a] transition"
//                 >
//                   Read More
//                 </a>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </section>
//   );
// };

// export default InsightsSlider;



"use client";

import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cert from "../assets/11.png"
import cert2 from "../assets/22.png";
import { useRef } from "react";
import { IoIosArrowRoundForward, } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";

const insights = [
  {
    image: cert,
    title:
      "Impact of Coaching Intervention Programmes on Indian Educators in Tier-2 Cities",
    link: "#",
  },
  {
    image: cert2,
    title:
      "Building Initial Trust with Family Businesses, ICF Coaching World, July 2023",
    link: "#",
  },
];



const InsightsSlider = () => {
const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section className="bg-[#1515834D] m-10 px-4 md:px-12 rounded-3xl relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl font-normal pt-12">
          INSIGHTS & RESEARCH
        </h2>

        <Slider ref={sliderRef} {...settings}>
          {insights.map((item, index) => (
            <div key={index} className="px-6">
              <div className="p-6 rounded-3xl h-full flex flex-row justify-between items-center text-center gap-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={400}
                  className="rounded-2xl mb-6"
                />
                <div className="flex flex-col items-start">
                  <p className="text-black font-medium text-lg mb-4 max-w-xs text-left">
                    {item.title}
                  </p>
                  <a
                    href={item.link}
                    className="bg-[#151583] text-white px-6 py-2 rounded-full text-sm hover:bg-[#141497] transition"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div >
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="absolute right-162 bottom-0 transform -translate-y-1/2 bg-[transparent] border border-black text-black px-3 rounded-[10px] shadow-md hover:bg-[white] hover:text-[#151583] transition"
          >
            <IoIosArrowRoundBack className="w-6 h-6" />
          </button>

          <button
            onClick={() => sliderRef.current.slickNext()}
            className="absolute right-142 bottom-0 transform -translate-y-1/2 bg-[black] border border-black text-white px-3 rounded-[10px] shadow-md hover:bg-[white] hover:text-[#151583] transition"
          >
            <IoIosArrowRoundForward className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default InsightsSlider;
