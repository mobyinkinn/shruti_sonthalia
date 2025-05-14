// "use client"
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import git from "../assets/2.png";
// import i2 from "../assets/i2.png";
// import i3 from "../assets/i3.png";
// import i4 from "../assets/i4.png";
// import i5 from "../assets/i5.png";
// import i6 from "../assets/i6.png";
// import i7 from "../assets/i7.png";
// import i8 from "../assets/i8.png";
// import i9 from "../assets/i9.png";
// import i10 from "../assets/i10.png";
// import i11 from "../assets/i11.png";
// import i12 from "../assets/i12.png";
// import { useRouter } from "next/navigation";

// const Cards = () => {
//   const router = useRouter();
//   const data = [
//     {
//       img: git,
//       title: "Coaching Across Borders – From Innovation to Impact",
//       route: "Coaching-Across-Borders-From-Innovation-to-Impact",
//     },
//     {
//       img: i2,
//       title:
//         "Scaling with Structure – A Leading Ethnic Wear Brand’s Growth Journey",
//       route:
//         "scaling-with-structure-a-leading-ethnic-wear-brand-growth-journey",
//     },
//     {
//       img: i3,
//       title:
//         "From Legacy to Leadership – A Traditional Manufacturing Firm’s Evolution",
//       route:
//         "from-legacy-to-leadership-a-traditional-manufacturing-firm-evolution",
//     },
//     {
//       img: i4,
//       title:
//         "Navigating Disruption – Reinventing Strategy in the Packaging Ink Sector",
//       route:
//         "navigating-disruption-reinventing-strategy-in-the-packaging-ink-sector",
//     },
//   ];

//   const data2 = [
//     {
//       img: i5,
//       title: "Reclaiming Leadership Authority in a Legacy Business",
//       route: "reclaiming-leadership-authority-in-a-legacy-business",
//     },
//     {
//       img: i6,
//       title: "From Email Wars to Collaborative Wins",
//       route: "from-email-wars-to-collaborative-wins",
//     },
//     {
//       img: i7,
//       title: "Unlocking Strategic Focus and Accountability",
//       route: "unlocking-strategic-focus-and-accountability",
//     },
//     {
//       img: i8,
//       title: "Overcoming Inertia and Creating Career Clarity",
//       route: "overcoming-inertia-and-creating-career-clarity",
//     },
//   ];
//   const data3 = [
//     {
//       img: i9,
//       title: "Reclaiming Self Through Creativity and Boundaries",
//       route: "reclaiming-self-through-creativity-and-boundaries",
//     },
//     {
//       img: i10,
//       title: "Speaking Up with Courage and Confidence",
//       route: "speaking-up-with-courage-and-confidence",
//     },
//     {
//       img: i11,
//       title: "Listening with the Heart",
//       route: "listening-with-the-heart",
//     },
//     {
//       img: i12,
//       title: "From Burnout to Vitality",
//       route: "from-burnout-to-vitality",
//     },
//   ];
//   return (
//     <>
//       <div className="py-10">
//         <h2 className="text-2xl md:text-3xl font-normal text-center text-[#E53935] mb-4 underline-offset-4 uppercase">
//           Organisational Case Study
//         </h2>
//         <div className="flex flex-row flex-wrap justify-center gap-20">
//           {data.map((d, index) => (
//             <div
//               key={index}
//               className="w-[40%] rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
//             >
//               <div className="relative h-48 w-full">
//                 <Image
//                   src={d.img} // Place your image inside public folder or use an external link
//                   alt="Flying bird"
//                   layout="fill"
//                   objectFit="cover"
//                   className="rounded-t-2xl"
//                 />
//               </div>
//               <div className="bg-white px-4 py-5">
//                 <p className="text-gray-900 font-medium text-base mb-4">
//                   {d.title}
//                 </p>
//                 <button
//                   className="text-blue-800 font-medium flex items-center gap-1"
//                   onClick={() => router.push(`/Case-studies/${d.route}`)}
//                 >
//                   Read More <span className="text-xl leading-4">→</span>
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="py-10">
//         <h2 className="text-2xl md:text-3xl font-normal text-center text-[#E53935] mb-4 underline-offset-4 uppercase">
//           Executive Coaching Case Study
//         </h2>
//         <div className="flex flex-row flex-wrap justify-center gap-20 ">
//           {data2.map((d, index) => (
//             <div
//               key={index}
//               className="w-[40%] rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
//             >
//               <div className="relative h-48 w-full">
//                 <Image
//                   src={d.img} // Place your image inside public folder or use an external link
//                   alt="Flying bird"
//                   layout="fill"
//                   objectFit="cover"
//                   className="rounded-t-2xl"
//                 />
//               </div>
//               <div className="bg-white px-4 py-5">
//                 <p className="text-gray-900 font-medium text-base mb-4">
//                   {d.title}
//                 </p>
//                 <button
//                   className="text-blue-800 font-medium flex items-center gap-1"
//                   onClick={() => router.push(`/Case-studies/${d.route}`)}
//                 >
//                   Read More <span className="text-xl leading-4">→</span>
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="py-10">
//         <h2 className="text-2xl md:text-3xl font-normal text-center text-[#E53935] mb-4 underline-offset-4 uppercase">
//           Case Study
//         </h2>
//         <div className="flex flex-row flex-wrap justify-center gap-20">
//           {data3.map((d, index) => (
//             <div
//               key={index}
//               className="w-[40%] rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
//             >
//               <div className="relative h-48 w-full">
//                 <Image
//                   src={d.img} // Place your image inside public folder or use an external link
//                   alt="Flying bird"
//                   layout="fill"
//                   objectFit="cover"
//                   className="rounded-t-2xl"
//                 />
//               </div>
//               <div className="bg-white px-4 py-5">
//                 <p className="text-gray-900 font-medium text-base mb-4">
//                   {d.title}
//                 </p>
//                 <button
//                   className="text-blue-800 font-medium flex items-center gap-1"
//                   onClick={() => router.push(`/Case-studies/${d.route}`)}
//                 >
//                   Read More <span className="text-xl leading-4">→</span>
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Cards;
"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import git from "../assets/2.png";
import i2 from "../assets/i2.png";
import i3 from "../assets/i3.png";
import i4 from "../assets/i4.png";
import i5 from "../assets/i5.png";
import i6 from "../assets/i6.png";
import i7 from "../assets/i7.png";
import i8 from "../assets/i8.png";
import i9 from "../assets/i9.png";
import i10 from "../assets/i10.png";
import i11 from "../assets/i11.png";
import i12 from "../assets/i12.png";
import { useRouter } from "next/navigation";

const Cards = () => {
  const router = useRouter();
  const data = [
    {
      img: git,
      title: "Coaching Across Borders – From Innovation to Impact",
      route: "Coaching-Across-Borders-From-Innovation-to-Impact",
    },
    {
      img: i2,
      title:
        "Scaling with Structure – A Leading Ethnic Wear Brand’s Growth Journey",
      route:
        "scaling-with-structure-a-leading-ethnic-wear-brand-growth-journey",
    },
    {
      img: i3,
      title:
        "From Legacy to Leadership – A Traditional Manufacturing Firm’s Evolution",
      route:
        "from-legacy-to-leadership-a-traditional-manufacturing-firm-evolution",
    },
    {
      img: i4,
      title:
        "Navigating Disruption – Reinventing Strategy in the Packaging Ink Sector",
      route:
        "navigating-disruption-reinventing-strategy-in-the-packaging-ink-sector",
    },
  ];

  const data2 = [
    {
      img: i5,
      title: "Reclaiming Leadership Authority in a Legacy Business",
      route: "reclaiming-leadership-authority-in-a-legacy-business",
    },
    {
      img: i6,
      title: "From Email Wars to Collaborative Wins",
      route: "from-email-wars-to-collaborative-wins",
    },
    {
      img: i7,
      title: "Unlocking Strategic Focus and Accountability",
      route: "unlocking-strategic-focus-and-accountability",
    },
    {
      img: i8,
      title: "Overcoming Inertia and Creating Career Clarity",
      route: "overcoming-inertia-and-creating-career-clarity",
    },
  ];
  const data3 = [
    {
      img: i9,
      title: "Reclaiming Self Through Creativity and Boundaries",
      route: "reclaiming-self-through-creativity-and-boundaries",
    },
    {
      img: i10,
      title: "Speaking Up with Courage and Confidence",
      route: "speaking-up-with-courage-and-confidence",
    },
    {
      img: i11,
      title: "Listening with the Heart",
      route: "listening-with-the-heart",
    },
    {
      img: i12,
      title: "From Burnout to Vitality",
      route: "from-burnout-to-vitality",
    },
  ];

  return (
    <>
      <div className="py-10 px-4">
        <h2 className="text-2xl md:text-3xl font-normal text-center text-[#E53935] mb-4 underline-offset-4">
          Organisational Case Study
        </h2>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {data.map((d, index) => (
            <div
              key={index}
              className="w-full sm:w-[48%] lg:w-[40%] rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={d.img} // Place your image inside public folder or use an external link
                  alt="Flying bird"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-2xl"
                />
              </div>
              <div className="bg-white px-4 py-5">
                <p className="text-gray-900 font-medium text-base mb-4">
                  {d.title}
                </p>
                <button
                  className="text-blue-800 font-medium flex items-center gap-1"
                  onClick={() => router.push(`/Case-studies/${d.route}`)}
                >
                  Read More <span className="text-xl leading-4">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-10 px-4">
        <h2 className="text-2xl md:text-3xl font-normal text-center text-[#E53935] mb-4 underline-offset-4">
          Executive Coaching Case Study
        </h2>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {data2.map((d, index) => (
            <div
              key={index}
              className="w-full sm:w-[48%] lg:w-[40%] rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={d.img} // Place your image inside public folder or use an external link
                  alt="Flying bird"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-2xl"
                />
              </div>
              <div className="bg-white px-4 py-5">
                <p className="text-gray-900 font-medium text-base mb-4">
                  {d.title}
                </p>
                <button
                  className="text-blue-800 font-medium flex items-center gap-1"
                  onClick={() => router.push(`/Case-studies/${d.route}`)}
                >
                  Read More <span className="text-xl leading-4">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-10 px-4">
        <h2 className="text-2xl md:text-3xl font-normal text-center text-[#E53935] mb-4 underline-offset-4">
          Case Study
        </h2>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {data3.map((d, index) => (
            <div
              key={index}
              className="w-full sm:w-[48%] lg:w-[40%] rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={d.img} // Place your image inside public folder or use an external link
                  alt="Flying bird"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-2xl"
                />
              </div>
              <div className="bg-white px-4 py-5">
                <p className="text-gray-900 font-medium text-base mb-4">
                  {d.title}
                </p>
                <button
                  className="text-blue-800 font-medium flex items-center gap-1"
                  onClick={() => router.push(`/Case-studies/${d.route}`)}
                >
                  Read More <span className="text-xl leading-4">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cards;
