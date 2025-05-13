// "use client"
// import Image from "next/image";
// import one from "../assets/stories/1.png";
// import two from "../assets/stories/2.png";
// import three from "../assets/stories/3.png";
// import { useRouter } from "next/navigation";


// const ResearchCard = () => {
//     const router = useRouter();
  
//     const data = [
//       {
//         img: one,
//         title: "See the Transformation",
//         desc: "Real stories of growth, resilience, and leadership in action",
//         link:"/Case-studies"
//       },
//       {
//         img: two,
//         title: "Explore Our Research & Insights",
//         desc: "Thought leadership that inspires reflection, action, and change",
//         link:"/media-and-events"
//       },
//       {
//         img: three,
//         title: "Beyond the Sessions",
//         desc: "Webinars, podcasts, and press moments that deepen the story",
//         link:"/publication-and-media"
//       },
//     ];
//   return (
//     <>
//       <h2 className="text-2xl md:text-3xl font-normal text-center text-[#E53935] underline-offset-4 capitalize py-8">
//         Stories, Research & Sessions that Spark Change
//       </h2>
//       <div className="flex flex-row justify-evenly">
//         {data.map((d) => (
//           <div className=" bg-white shadow-lg rounded-md overflow-hidden">
//             {/* Image */}
//             <div className="w-full h-[200px] relative">
//               <Image
//                 src={d.img}
//                 alt="Research Discussion"
//                 layout="fill"
//                 objectFit="cover"
//               />
//             </div>

//             {/* Text Section */}
//             <div className="bg-[#091A63] p-6 text-white space-y-3">
//               <h3 className="text-lg font-semibold">{d.title}</h3>
//               <p className="text-sm">{d.desc}</p>

//               {/* Know More Button */}
//               <div className="flex items-center justify-between text-white mt-4 cursor-pointer">
//                 <span
//                   className="font-medium"
//                   onClick={() => router.push(`${d.link}`)}
//                 >
//                   Know More
//                 </span>
//                 <div
//                   className="w-8 h-8 rounded-full bg-white text-[#091A63] flex items-center justify-center"
//                   onClick={() => router.push(`${d.link}`)}
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="w-4 h-4"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     strokeWidth={2}
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M9 5l7 7-7 7"
//                     />
//                   </svg>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default ResearchCard;
"use client";
import { useState } from "react";
import Image from "next/image";
import one from "../assets/stories/1.png";
import two from "../assets/stories/2.png";
import three from "../assets/stories/3.png";
import { useRouter } from "next/navigation";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// React Slick Settings for Mobile
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

const ResearchCard = () => {
  const router = useRouter();

  const data = [
    {
      img: one,
      title: "See the Transformation",
      desc: "Real stories of growth, resilience, and leadership in action",
      link: "/Case-studies",
    },
    {
      img: two,
      title: "Explore Our Research & Insights",
      desc: "Thought leadership that inspires reflection, action, and change",
      link: "/media-and-events",
    },
    {
      img: three,
      title: "Beyond the Sessions",
      desc: "Webinars, podcasts, and press moments that deepen the story",
      link: "/publication-and-media",
    },
  ];

  return (
    <>
      <h2 className="text-2xl md:text-3xl font-normal text-center text-[#E53935] underline-offset-4 capitalize py-8">
        Stories, Research & Sessions that Spark Change
      </h2>

      {/* Mobile Slider */}
      <div className="md:hidden">
        <Slider {...sliderSettings}>
          {data.map((d) => (
            <div className="p-2">
              <div
                key={d.id}
                className="bg-white shadow-lg rounded-md overflow-hidden"
              >
                {/* Image */}
                <div className="w-full h-[200px] relative">
                  <Image
                    src={d.img}
                    alt="Research Discussion"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>

                {/* Text Section */}
                <div className="bg-[#091A63] p-6 text-white space-y-3">
                  <h3 className="text-lg font-semibold">{d.title}</h3>
                  <p className="text-sm">{d.desc}</p>

                  {/* Know More Button */}
                  <div className="flex items-center justify-between text-white mt-4 cursor-pointer">
                    <span
                      className="font-medium"
                      onClick={() => router.push(`${d.link}`)}
                    >
                      Know More
                    </span>
                    <div
                      className="w-8 h-8 rounded-full bg-white text-[#091A63] flex items-center justify-center"
                      onClick={() => router.push(`${d.link}`)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex flex-row justify-evenly">
        {data.map((d) => (
          <div
            key={d.id}
            className="bg-white shadow-lg rounded-md overflow-hidden"
          >
            {/* Image */}
            <div className="w-full h-[200px] relative">
              <Image
                src={d.img}
                alt="Research Discussion"
                layout="fill"
                objectFit="cover"
              />
            </div>

            {/* Text Section */}
            <div className="bg-[#091A63] p-6 text-white space-y-3">
              <h3 className="text-lg font-semibold">{d.title}</h3>
              <p className="text-sm">{d.desc}</p>

              {/* Know More Button */}
              <div className="flex items-center justify-between text-white mt-4 cursor-pointer">
                <span
                  className="font-medium"
                  onClick={() => router.push(`${d.link}`)}
                >
                  Know More
                </span>
                <div
                  className="w-8 h-8 rounded-full bg-white text-[#091A63] flex items-center justify-center"
                  onClick={() => router.push(`${d.link}`)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ResearchCard;
