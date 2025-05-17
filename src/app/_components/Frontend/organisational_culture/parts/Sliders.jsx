// "use client";
// import Image from "next/image";
// import Mask from "../assets/Maskbg.png";
// import { useRef } from "react";
// import Mask1 from "../assets/1.jpg";
// import Mask2 from "../assets/2.jpg";
// import Mask3 from "../assets/3.jpg";

// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import "slick-carousel/slick/slick.css"; // Import Slick CSS
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// const Sliders = () => {
//   const TwosliderRef = useRef(null);

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     infinite: true,
//     speed: 1000,
//     loop: true,
//     autoplaySpeed: 500,

//     autoplay: true,
//     arrows: false,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };
//   const cardContent = [
//     {
//       title: "Culture Definition & Alignment",
//       description:
//       "Shape a culture that not only reflects your vision—but fuels it. We help you define, articulate, and embed cultural principles that drive alignment, accountability, and long-term strategic momentum.",
//       img: Mask2,
//     },
//     {
//       title: "Tailored to Your Organization’s Needs",
//       description:
//       "No templates. No assumptions. Just solutions built for you—from the ground up. Our approach is deeply contextual, aligning to your unique industry dynamics, cultural nuances, and transformation goals",
//       img: Mask3,
//     },
//     {
//       title: "Proven Track Record",
//       description:
//       "We've guided numerous organizations across diverse industries through complex change journeys—consistently driving measurable progress and delivering outcomes that matter. Our work is grounded in strategy, sustained by trust, and proven in execution.",
//       img: Mask1,
//     },
//   ];
//   return (
//     <div className="relative">
//       <div
//         className="relative bg-cover bg-center h-screen"
//         style={{ backgroundImage: `url(${Mask.src})` }}
//       >
//         <div className="z-20 flex flex-row px-10 justify-center items-center text-left h-[100%]">
//           <div className="w-[40%]">
//             <h1 className="text-white text-2xl md:text-5xl font-semibold mb-4 tracking-wider w-full">
//               What You’ll Take Away?
//             </h1>
//             <h1 className="text-white text-left mb-4 tracking-wider w-full">
//               Our programs are immersive, actionable, and human-centred. You’ll
//               explore:
//             </h1>
//             <button className="flex items-center gap-2 text-[1.4rem] px-6 py-2 bg-[#151583] v text-white rounded-full hover:bg-white hover:text-black transition cursor-pointer">
//               Book A Consult
//             </button>
//           </div>
//           <div className="bg-white w-[60%] h-[70%] rounded-2xl relative">
//             <div className="h-[100%]">
//               <Slider ref={TwosliderRef} {...settings} className="h-[100%]">
//                 {cardContent.map((card, index) => (
//                   <div
//                     key={index}
//                     className={`p-5 rounded-xl text-white h-[100%]`}
//                   >
//                     <div className="h-[100%] flex flex-row justify-between">
//                       <div className="w-[50%] flex flex-col justify-center">
//                         <h2 className="text-3xl font-semibold text-[#E53935] mb-4">
//                           {card.title}
//                         </h2>
//                         <p className="text-black">{card.description}</p>
//                       </div>
//                       <div className="w-[35%] h-[40%]">
//                         <Image
//                           src={card.img}
//                           alt="Workshop Image"
//                           layout="responsive"
//                           className="rounded-lg shadow-lg"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </Slider>
//             </div>
//             {/* <button
//               onClick={() => TwosliderRef.current.slickPrev()}
//               className="absolute cursor-pointer right-172 bottom-0 border-black border transform -translate-y-1/2 bg-[transparent] text-black p-2 rounded-[10px] shadow-md hover:bg-[white] hover:text-[#151583] transition"
//             >
//               <IoIosArrowBack className="w-6 h-6" />
//             </button>

//             <button
//               onClick={() => TwosliderRef.current.slickNext()}
//               className="absolute cursor-pointer right-155 bottom-0 border-black border transform -translate-y-1/2 bg-[transparent] text-black p-2 rounded-[10px] shadow-md hover:bg-[white] hover:text-[#151583] transition"
//             >
//               <IoIosArrowForward className="w-6 h-6" />
//             </button> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sliders;

"use client";
import Image from "next/image";
import Mask from "../assets/Maskbg.png";
import { useRef } from "react";
import Mask1 from "../assets/1.jpg";
import Mask2 from "../assets/2.jpg";
import Mask3 from "../assets/3.jpg";

import Slider from "react-slick";

const Sliders = () => {
  const desktopSliderRef = useRef(null);
  const mobileSliderRef = useRef(null);

  const desktopSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 500,
    autoplay: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const mobileSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    autoplaySpeed: 4000,
    autoplay: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const cardContent = [
    {
      title: "Culture Definition & Alignment",
      description:
        "Shape a culture that not only reflects your vision—but fuels it. We help you define, articulate, and embed cultural principles that drive alignment, accountability, and long-term strategic momentum.",
      img: Mask2,
    },
    {
      title: "Tailored to Your Organization’s Needs",
      description:
        "No templates. No assumptions. Just solutions built for you—from the ground up. Our approach is deeply contextual, aligning to your unique industry dynamics, cultural nuances, and transformation goals",
      img: Mask3,
    },
    {
      title: "Proven Track Record",
      description:
        "We've guided numerous organizations across diverse industries through complex change journeys—consistently driving measurable progress and delivering outcomes that matter. Our work is grounded in strategy, sustained by trust, and proven in execution.",
      img: Mask1,
    },
  ];

  return (
    <div className="relative">
      <div
        className="relative bg-cover bg-center md:h-screen h-[53vh]"
        style={{ backgroundImage: `url(${Mask.src})` }}
      >
        {/* Desktop: Text + Slider side-by-side */}
        <div className="z-20 hidden md:flex flex-row px-10 justify-center items-center text-left h-full gap-10">
          <div className="w-[40%]">
            <h1 className="text-white text-2xl md:text-5xl font-semibold mb-4 tracking-wider w-full">
              What You’ll Take Away?
            </h1>
            <h1 className="text-white text-left mb-4 tracking-wider w-full">
              Our programs are immersive, actionable, and human-centred. You’ll
              explore:
            </h1>
            <button className="flex items-center gap-2 text-[1.4rem] px-6 py-2 bg-[#151583] text-white rounded-full hover:bg-white hover:text-black transition cursor-pointer">
              Book A Consult
            </button>
          </div>
          <div className="bg-white w-[60%] h-[70%] rounded-2xl relative">
            <Slider
              ref={desktopSliderRef}
              {...desktopSettings}
              className="h-full"
            >
              {cardContent.map((card, index) => (
                <div
                  key={index}
                  className="p-5 rounded-xl text-white h-full flex"
                >
                  <div className="flex flex-row justify-between w-full">
                    <div className="w-[50%] flex flex-col justify-center">
                      <h2 className="text-3xl font-semibold text-[#E53935] mb-4">
                        {card.title}
                      </h2>
                      <p className="text-black">{card.description}</p>
                    </div>
                    <div className="w-[35%] h-[40%]">
                      <Image
                        src={card.img}
                        alt="Workshop Image"
                        layout="responsive"
                        className="rounded-lg shadow-lg"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Mobile: Only Text + Button */}
        <div className="z-20 flex flex-col md:hidden px-6 py-10 text-center text-white space-y-8">
          <h1 className="text-left font-semibold text-2xl tracking-wider">
            What You’ll Take Away?
          </h1>
          <h1 className="text-left tracking-wider text-lg">
            Our programs are immersive, actionable, and human-centred. You’ll
            explore:
          </h1>
          <button className="self-start bg-[#151583] px-6 py-2 rounded-full hover:bg-white hover:text-black transition cursor-pointer text-lg">
            Book A Consult
          </button>
        </div>
      </div>

      {/* Mobile Slider (separate) below text, visible only on mobile */}
      <div className="z-20 md:hidden pb-10 bg-white rounded-2xl my-5 mx-4">
        <Slider ref={mobileSliderRef} {...mobileSettings} className="h-full">
          {cardContent.map((card, index) => (
            <div
              key={index}
              className="p-5 rounded-xl text-black h-full flex flex-col"
            >
              <div className="flex flex-col justify-between w-full">
                <div className="mb-4">
                  <h2 className="text-2xl font-semibold text-[#E53935] mb-2">
                    {card.title}
                  </h2>
                  <p>{card.description}</p>
                </div>
                <div className="w-full h-[180px]">
                  <Image
                    src={card.img}
                    alt="Workshop Image"
                    layout="responsive"
                    className="rounded-lg shadow-lg"
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Sliders;
