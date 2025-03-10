
// "use client";

// import React, { useRef, useState } from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import { useRouter } from "next/navigation";
// import { FaQuoteLeft } from "react-icons/fa";

// const bannerImages = [
//   {
//     Desc: "My experience during my coaching work with Shruti was transformative for me as a leader. Her approach is very mindful, deeply compassionate and non-judgmental wherein her exceptional ability to hold space for me created a safe environment that allowed me to introspect and share some of my deepest vulnerabilities as a leader that were stopping me from achieving my true potential. This in turn, helped me deeply connect with myself allowing me to strengthen my intuition to deal with ambiguities in life and business situations and develop greater trust with my own authority as an individual.",
//   },
//   {
//     Desc: "Photoframes My experience during my coaching work with Shruti was transformative for me as a leader. Her approach is very mindful, deeply compassionate and non-judgmental wherein her exceptional ability to hold space for me created a safe environment that allowed me to introspect and share some of my deepest vulnerabilities as a leader that were stopping me from achieving my true potential.",
//   },
//   {
//     Desc: "Religious Range My experience during my coaching work with Shruti was transformative for me as a leader. Her approach is very mindful, deeply compassionate and non-judgmental wherein her exceptional ability to hold space for me created a safe environment that allowed me to introspect and share some of my deepest vulnerabilities as a leader that were stopping me from achieving my true potential.",
//   },
// ];

// const Testimonials = () => {
//   const TwosliderRef = useRef(null);
//   const router = useRouter();

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     arrows: false,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <div className="flex justify-center relative">
//       <div className="w-full max-w-[80%] px-6">
//         <Slider ref={TwosliderRef} {...settings}>
//           {bannerImages.map((testimonial, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-xl shadow-[0px_4px_10px_rgba(0,0,0,0.1)] p-8 text-center"
//             >
//               <FaQuoteLeft className="text-gray-300 text-4xl mx-auto" />
//               <h3 className="text-lg font-semibold text-indigo-700 mt-4">
//                 {testimonial.name}
//               </h3>
//               <p className="text-gray-500 text-sm">{testimonial.title}</p>
//               <p className="text-gray-700 text-md mt-4 leading-relaxed">
//                 {testimonial.Desc.split("**").map((part, i) => (
//                   <span
//                     key={i}
//                     className={i % 2 === 1 ? "text-red-600 font-semibold" : ""}
//                   >
//                     {part}
//                   </span>
//                 ))}
//               </p>
//             </div>
//           ))}
//         </Slider>
//       </div>
//       {/* Left Arrow */}
//       <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex items-center">
//         <button
//           onClick={() => TwosliderRef.current.slickPrev()}
//           className="border-2 border-white bg-[#151583] rounded-full p-2 hover:bg-transparent transition"
//         >
//           <IoIosArrowBack className="text-white w-5 h-5 " />
//         </button>
//       </div>

//       {/* Right Arrow */}
//       <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center">
//         <button
//           onClick={() => TwosliderRef.current.slickNext()}
//           className="border-2 border-white bg-[#151583]  rounded-full p-2 hover:bg-transparent transition"
//         >
//           <IoIosArrowForward className="text-white w-5 h-5" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;


// "use client";
// import React, { useRef } from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import { FaQuoteLeft } from "react-icons/fa";

// const testimonials = [
//   {
//     name: "Aditya Patel",
//     title: "President, Dinesh Felts",
//     desc: "My experience during my coaching work with Shruti was **transformative** for me as a leader. Her approach is very mindful, deeply compassionate and non-judgmental wherein her exceptional ability to hold space for me created a **safe environment** that allowed me to introspect and share some of my deepest vulnerabilities as a leader that were stopping me from achieving my **true potential**. This in turn, helped me deeply connect with myself allowing me to strengthen my intuition to deal with ambiguities in life and business situations and develop greater trust with my own authority as an individual. One of the great **tangible achievements**, I can say in my reality about the process is my communication with people around me which has completely transformed due to my improved ability to express my needs clearly, connect with others’ needs and set healthy boundaries. All of this has led to reinstatement of trust in my relating with key stakeholders in **my life and business**.",
//   },
// ];

// const Testimonials = () => {
//   const sliderRef = useRef(null);

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     arrows: false,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <div className="relative flex justify-center items-center w-full py-10">
//       {/* Left Arrow */}
//       <button
//         onClick={() => sliderRef.current.slickPrev()}
//         className="absolute left-4 md:left-10 bg-indigo-900 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition"
//       >
//         <IoIosArrowBack size={20} />
//       </button>

//       <div className="w-full max-w-3xl px-6">
//         <Slider ref={sliderRef} {...settings}>
//           {testimonials.map((testimonial, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-xl shadow-lg p-8 text-center"
//             >
//               <FaQuoteLeft className="text-gray-300 text-4xl mx-auto" />
//               <h3 className="text-lg font-semibold text-indigo-700 mt-4">
//                 {testimonial.name}
//               </h3>
//               <p className="text-gray-500 text-sm">{testimonial.title}</p>
//               <p className="text-gray-700 text-md mt-4 leading-relaxed">
//                 {testimonial.desc.split("**").map((part, i) => (
//                   <span
//                     key={i}
//                     className={i % 2 === 1 ? "text-red-600 font-semibold" : ""}
//                   >
//                     {part}
//                   </span>
//                 ))}
//               </p>
//             </div>
//           ))}
//         </Slider>
//       </div>

//       {/* Right Arrow */}
//       <button
//         onClick={() => sliderRef.current.slickNext()}
//         className="absolute right-4 md:right-10 bg-indigo-900 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition"
//       >
//         <IoIosArrowForward size={20} />
//       </button>
//     </div>
//   );
// };

// export default Testimonials;


"use client";

import React, { useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useRouter } from "next/navigation";
import { FaQuoteLeft } from "react-icons/fa";

const bannerImages = [
  {
    Desc: "My experience during my coaching work with Shruti was transformative for me as a leader. Her approach is very mindful, deeply compassionate and non-judgmental wherein her exceptional ability to hold space for me created a safe environment that allowed me to introspect and share some of my deepest vulnerabilities as a leader that were stopping me from achieving my true potential. This in turn, helped me deeply connect with myself allowing me to strengthen my intuition to deal with ambiguities in life and business situations and develop greater trust with my own authority as an individual.",
    name: "Aditya Kumar",
    designa: "President, Dinesh Felts",
  },
  {
    Desc: "Photoframes My experience during my coaching work with Shruti was transformative for me as a leader. Her approach is very mindful, deeply compassionate and non-judgmental wherein her exceptional ability to hold space for me created a safe environment that allowed me to introspect and share some of my deepest vulnerabilities as a leader that were stopping me from achieving my true potential.",
    name: "Aditya Kumar",
    designa: "President, Dinesh Felts",
  },
  {
    Desc: "Religious Range My experience during my coaching work with Shruti was transformative for me as a leader. Her approach is very mindful, deeply compassionate and non-judgmental wherein her exceptional ability to hold space for me created a safe environment that allowed me to introspect and share some of my deepest vulnerabilities as a leader that were stopping me from achieving my true potential.",
    name: "Aditya Kumar",
    designa: "President, Dinesh Felts",
  },
];

const Testimonials = () => {
  const TwosliderRef = useRef(null);
  const router = useRouter();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="flex justify-center relative">
      <div className="w-full max-w-[80%] px-6">
        <Slider ref={TwosliderRef} {...settings}>
          {bannerImages.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl  p-8 text-center">
              <div className="shadow-[0px_4px_23px_6px_rgba(0,0,0,0.25)] rounded-[20px] p-6">
                <FaQuoteLeft className="text-gray-300 text-4xl mx-auto" />
                <h3 className="text-lg font-semibold text-indigo-700 mt-4">
                  {testimonial.name}
                </h3>
                <p className="text-gray-500 text-sm">{testimonial.designa}</p>
                <p className="text-gray-700 text-[1.4rem] mt-4 leading-relaxed">
                  {/* {testimonial.Desc.split("**").map((part, i) => (
                  <span
                    key={i}
                    className={i % 2 === 1 ? "text-red-600 font-semibold" : ""}
                  >
                    {part}
                  </span>
                ))} */}
                  {testimonial.Desc}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {/* Left Arrow */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex items-center">
        <button
          onClick={() => TwosliderRef.current.slickPrev()}
          className="border-2 border-white text-white bg-[#151583] rounded-full p-2 hover:bg-transparent transition hover:border-black hover:text-black"
        >
          <IoIosArrowBack className=" w-5 h-5 " />
        </button>
      </div>

      {/* Right Arrow */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center">
        <button
          onClick={() => TwosliderRef.current.slickNext()}
          className="border-2 border-white text-white bg-[#151583] rounded-full p-2 hover:bg-transparent transition hover:border-black hover:text-black"
        >
          <IoIosArrowForward className=" w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;