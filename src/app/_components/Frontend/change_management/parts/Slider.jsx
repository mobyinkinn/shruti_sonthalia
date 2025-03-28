"use client"
import Image from "next/image";
import Mask from "../assets/Maskbg.png"
import { useRef } from "react";
import Mask12 from "../assets/12.png"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "slick-carousel/slick/slick.css"; // Import Slick CSS
import "slick-carousel/slick/slick-theme.css"; 
import Slider from "react-slick";
const Sliders = () => {
    const TwosliderRef = useRef(null);
  
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    };
     const cardContent = [
       {
         title: "Data-Driven",
         description:
           "We use behavioral analytics and tracking to measure progress and drive accountability.",
         img: Mask12,
       },
       {
         title: "Tailored to Your Organization’s Needs",
         description:
           "Our solutions are not one-size-fits-all. We create customized strategies based on your industry, company culture, and transformation objectives.",
         img: Mask12,
       },
       {
         title: "Proven Track Record",
         description:
           "We’ve helped over x number of organizations across industries successfully navigate change, with a x% success rate in achieving desired outcomes.",
         img: Mask12,
       },
       
     ];
  return (
    <div className="relative">
      <div
        className="relative bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${Mask.src})` }}
      >
        <div className="z-20 flex flex-row px-10 justify-center items-center text-left h-[100%]">
          <div className="w-[40%]">
            <h1 className="text-white text-left font-medium mb-4 tracking-wider w-full">
              ō Why Navigating Change Matters
            </h1>
            <h1 className="text-white text-2xl md:text-5xl font-semibold mb-4 tracking-wider w-full">
              The Challenge We Solve?
            </h1>
            <button className="flex items-center gap-2 text-[1.4rem] px-6 py-2 bg-[#151583] v text-white rounded-full hover:bg-white hover:text-black transition cursor-pointer">
              Book A Consult
            </button>
          </div>
          <div className="bg-white w-[60%] h-[70%] rounded-2xl relative">
            <div className="h-[100%]">
              <Slider ref={TwosliderRef} {...settings} className="h-[100%]">
                {cardContent.map((card, index) => (
                  <div
                    key={index}
                    className={`p-8 rounded-xl shadow-lg text-white h-[100%]`}
                  >
                    <div className="h-[100%] flex flex-row justify-around">
                      <div className="w-[50%] flex flex-col justify-center">
                        <h2 className="text-3xl font-semibold text-[#e22e1b] mb-4">
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
            <button
              onClick={() => TwosliderRef.current.slickPrev()}
              className="absolute cursor-pointer right-172 bottom-0 border-black border transform -translate-y-1/2 bg-[transparent] text-black p-2 rounded-[10px] shadow-md hover:bg-[white] hover:text-[#151583] transition"
            >
              <IoIosArrowBack className="w-6 h-6" />
            </button>

            <button
              onClick={() => TwosliderRef.current.slickNext()}
              className="absolute cursor-pointer right-155 bottom-0 border-black border transform -translate-y-1/2 bg-[transparent] text-black p-2 rounded-[10px] shadow-md hover:bg-[white] hover:text-[#151583] transition"
            >
              <IoIosArrowForward className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sliders;

