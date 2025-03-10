"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import img from "../assets/client1.jpg";
import img3 from "../assets/client2.jpg";
import img4 from "../assets/client3.jpg";
import img5 from "../assets/client4.jpg";
import img6 from "../assets/client5.jpg";
import img7 from "../assets/client6.jpg";

const carausel = [
  { id: 0, img: img },
  { id: 1, img: img3 },
  { id: 2, img: img4 },
  { id: 3, img: img5 },
  { id: 4, img: img6 },
  { id: 5, img: img7 },
  { id: 6, img: img },
  { id: 7, img: img3 },
  { id: 8, img: img4 },
  { id: 9, img: img5 },
  { id: 10, img: img6 },
  { id: 11, img: img7 },
];

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 7,
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

const settingsRight = {
  ...settings,
  rtl: true,
};

export default function Carausal() {
  return (
    <div className="px-5 xl:px-12 py-5">
      <div className="flex justify-center py-5">
          <span className="text-black text-[2.2rem]">Noteworthy Clients Working At</span>
      </div>
      <div className="space-y-10 py-5">
        <Slider {...settings}>
          {carausel.map((el) => (
            <Images key={el.id} el={el} />
          ))}
        </Slider>
        <Slider {...settingsRight}>
          {carausel.map((el) => (
            <Images key={el.id} el={el} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

function Images({ el }) {
  return (
    <div className="flex items-center justify-center">
      <Image width={100} height={100} src={el.img} alt="client image" />
    </div>
  );
}
