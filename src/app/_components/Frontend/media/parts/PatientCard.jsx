// import Image from "next/image";
// import img1 from "../assets/new/1.png"
// import img2 from "../assets/new/2.png"
// import img3 from "../assets/new/3.png"

// export default function NewsCard() {
//   const data = [
//     {
//       image: img1,
//       data: "08 Aug, 2025",
//       title:
//         "Patchwork of Hope: This unique initiative aims to shelter the world under its warm blanket",
//       desc: "The Corona Quilt Project, co-founded by Gina Kellogg and Shruti Sonthalia, is offering people a way to creatively express their feelings",
//     },
//     {
//       image: img2,
//       data: "09 Aug, 2025",
//       title:
//         "Patchwork of Hope: This unique initiative aims to shelter the world under its warm blanket",
//       desc: "The Corona Quilt Project, co-founded by Gina Kellogg and Shruti Sonthalia, is offering people a way to creatively express their feelings",
//     },
//     {
//       image: img3,
//       data: "10 Aug, 2025",
//       title:
//         "Patchwork of Hope: This unique initiative aims to shelter the world under its warm blanket",
//       desc: "The Corona Quilt Project, co-founded by Gina Kellogg and Shruti Sonthalia, is offering people a way to creatively express their feelings",
//     },
//   ];
//   return (
//     <div className="rounded-2xl h-[85vh] overflow-hidden  bg-white  transition-shadow duration-300">
//       <h2 className="text-2xl md:text-3xl font-normal text-center text-[#E53935] mb-4 underline-offset-4 uppercase">
//         In the News
//       </h2>
//       <div className="flex flex-row w-[100%] justify-around">
//         {data.map((d) => (
//           <div className="w-[30%] shadow-lg hover:shadow-xl rounded-2xl pt-5">
//             <div className="w-full h-48 relative">
//               <Image
//                 src={d.image} // place the image in public folder
//                 alt="People with masks"
//                 fill
//                 className="object-cover"
//               />
//             </div>

//             <div className="p-6 ">
//               <p className="text-sm text-gray-500 mb-2">{d.data}</p>
//               <h2 className="text-xl font-semibold text-gray-900 mb-2">
//                 {d.title}
//               </h2>
//               <p className="text-gray-600 mb-4">{d.desc}</p>
//               <a
//                 href="#"
//                 className="text-indigo-600 font-medium flex items-center gap-1 hover:underline"
//               >
//                 Read More <span>&rarr;</span>
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



import Image from "next/image";
import img1 from "../assets/new/1.png";
import img2 from "../assets/new/2.png";
import img3 from "../assets/new/3.png";

export default function NewsCard() {
  const data = [
    {
      image: img1,
      data: "08 Aug, 2025",
      title:
        "Patchwork of Hope: This unique initiative aims to shelter the world under its warm blanket",
      desc: "The Corona Quilt Project, co-founded by Gina Kellogg and Shruti Sonthalia, is offering people a way to creatively express their feelings",
    },
    {
      image: img2,
      data: "09 Aug, 2025",
      title:
        "Patchwork of Hope: This unique initiative aims to shelter the world under its warm blanket",
      desc: "The Corona Quilt Project, co-founded by Gina Kellogg and Shruti Sonthalia, is offering people a way to creatively express their feelings",
    },
    {
      image: img3,
      data: "10 Aug, 2025",
      title:
        "Patchwork of Hope: This unique initiative aims to shelter the world under its warm blanket",
      desc: "The Corona Quilt Project, co-founded by Gina Kellogg and Shruti Sonthalia, is offering people a way to creatively express their feelings",
    },
  ];

  return (
    <div className="rounded-2xl min-h-[85vh] bg-white py-10 px-4 md:px-8 transition-shadow duration-300">
      <h2 className="text-2xl md:text-3xl font-normal text-center text-[#E53935] mb-8 underline-offset-4 uppercase">
        In the News
      </h2>
      <div className="flex flex-col sm:flex-row flex-wrap gap-6 items-stretch justify-center">
        {data.map((d, index) => (
          <div
            key={index}
            className="w-full sm:w-[48%] lg:w-[30%] shadow-lg hover:shadow-xl rounded-2xl overflow-hidden"
          >
            <div className="relative w-full h-48 sm:h-52">
              <Image
                src={d.image}
                alt="People with masks"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-5 sm:p-6">
              <p className="text-sm text-gray-500 mb-2">{d.data}</p>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                {d.title}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mb-4">
                {d.desc}
              </p>
              <a
                href="#"
                className="text-indigo-600 font-medium flex items-center gap-1 hover:underline"
              >
                Read More <span>&rarr;</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
