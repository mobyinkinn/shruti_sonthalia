"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import img from "../assets/2.png";
import img2 from "../assets/2.png";
import img3 from "../assets/2.png";
import img4 from "../assets/2.png";
import img5 from "../assets/2.png";
import img6 from "../assets/2.png";


const carausel = [
  { id: 0, img: img },
  { id: 1, img: img2 },
  { id: 2, img: img3 },
  { id: 3, img: img4 },
  { id: 4, img: img5 },
  { id: 5, img: img6 },
];


const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 1000,
  loop:true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  responsive: [
    { breakpoint: 1440, settings: { slidesToShow: 8 } },
    { breakpoint: 1220, settings: { slidesToShow: 7 } },
    { breakpoint: 1024, settings: { slidesToShow: 5 } },
    { breakpoint: 768, settings: { slidesToShow: 5 } },
    { breakpoint: 420, settings: { slidesToShow: 3 } },
    { breakpoint: 370, settings: { slidesToShow: 2 } },
  ],
};


export default function Carausal() {
    const duplicated = [...carausel, ...carausel];
  return (
    <div className="px-5 xl:px-12 py-5">
      
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
      <Image width={500} height={500} src={el.img} alt="client image" />
    </div>
  );
}
