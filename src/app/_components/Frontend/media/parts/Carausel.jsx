// "use client";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Image from "next/image";
// import img from "../assets/Flyers/1.jpg";
// import img2 from "../assets/Flyers/2.jpg";
// import img3 from "../assets/Flyers/3.jpg";
// import img4 from "../assets/Flyers/4.jpg";
// import img5 from "../assets/Flyers/5.jpg";
// import img6 from "../assets/Flyers/6.jpg";
// import img7 from "../assets/Flyers/7.jpg";
// import img8 from "../assets/Flyers/8.jpg";
// import img9 from "../assets/Flyers/9.jpg";
// import img10 from "../assets/Flyers/10.jpg";
// import img11 from "../assets/Flyers/11.jpg";
// import img12 from "../assets/Flyers/12.jpg";
// import img13 from "../assets/Flyers/13.jpg";
// import img14 from "../assets/Flyers/14.jpg";



// const carausel = [
//   { id: 0, img: img4 },
//   { id: 1, img: img5 },
//   { id: 2, img: img6 },
//   { id: 3, img: img7 },
//   { id: 4, img: img8 },
//   { id: 5, img: img },
//   { id: 6, img: img2 },
//   { id: 7, img: img3 },

//   { id: 8, img: img9 },
//   { id: 9, img: img10 },
//   { id: 10, img: img11 },
//   { id: 11, img: img12 },
//   { id: 12, img: img13 },
//   { id: 13, img: img14 },
// ];


// const settings = {
//   dots: false,
//   arrows: false,
//   infinite: true,
//   speed: 1000,
//   loop:true,
//   slidesToShow: 5,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 0,
//   cssEase: "linear",
//   responsive: [
//     { breakpoint: 1440, settings: { slidesToShow: 8 } },
//     { breakpoint: 1220, settings: { slidesToShow: 7 } },
//     { breakpoint: 1024, settings: { slidesToShow: 5 } },
//     { breakpoint: 768, settings: { slidesToShow: 5 } },
//     { breakpoint: 420, settings: { slidesToShow: 3 } },
//     { breakpoint: 370, settings: { slidesToShow: 2 } },
//   ],
// };


// export default function Carausal() {
//     const duplicated = [...carausel, ...carausel];
//   return (
//     <div className="px-5 xl:px-12 py-5">
      
//       <div className="space-y-10 py-5">
//         <Slider {...settings}>
//           {duplicated.map((el) => (
//             <Images key={el.id} el={el} />
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// }

// function Images({ el }) {
//   return (
//     <div className="flex items-center justify-center mx-5">
//       <Image width={500} height={500} src={el.img} alt="client image" />
//     </div>
//   );
// }

"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import img from "../assets/Flyers/1.jpg";
import img2 from "../assets/Flyers/2.jpg";
import img3 from "../assets/Flyers/3.jpg";
import img4 from "../assets/Flyers/4.jpg";
import img5 from "../assets/Flyers/5.jpg";
import img6 from "../assets/Flyers/6.jpg";
import img7 from "../assets/Flyers/7.jpg";
import img8 from "../assets/Flyers/8.jpg";
import img9 from "../assets/Flyers/9.jpg";
import img10 from "../assets/Flyers/10.jpg";
import img11 from "../assets/Flyers/11.jpg";
import img12 from "../assets/Flyers/12.jpg";
import img13 from "../assets/Flyers/13.jpg";
import img14 from "../assets/Flyers/14.jpg";

const carausel = [
  { id: 0, img: img4 },
  { id: 1, img: img5 },
  { id: 2, img: img6 },
  { id: 3, img: img7 },
  { id: 4, img: img8 },
  { id: 5, img: img },
  { id: 6, img: img2 },
  { id: 7, img: img3 },
  { id: 8, img: img9 },
  { id: 9, img: img10 },
  { id: 10, img: img11 },
  { id: 11, img: img12 },
  { id: 12, img: img13 },
  { id: 13, img: img14 },
];

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 1000,
  loop: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  responsive: [
    { breakpoint: 1440, settings: { slidesToShow: 8 } },
    { breakpoint: 1220, settings: { slidesToShow: 7 } },
    { breakpoint: 1024, settings: { slidesToShow: 5 } },
    { breakpoint: 768, settings: { slidesToShow: 4 } }, // Reduced to 4 slides for tablets
    { breakpoint: 420, settings: { slidesToShow: 3 } }, // Reduced to 3 slides for mobile
    { breakpoint: 370, settings: { slidesToShow: 2 } }, // Reduced to 2 slides for very small screens
  ],
};

export default function Carausal() {
  const duplicated = [...carausel, ...carausel];
  return (
    <div className="px-5 xl:px-12 py-5 overflow-hidden">
      <div className="space-y-10 py-5">
        <Slider {...settings}>
          {duplicated.map((el) => (
            <Images key={el.id} el={el} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

function Images({ el }) {
  return (
    <div className="flex items-center justify-center mx-5">
      <Image
        className="w-full h-auto object-cover" // Ensures the image is responsive
        width={500}
        height={500}
        src={el.img}
        alt="client image"
      />
    </div>
  );
}
