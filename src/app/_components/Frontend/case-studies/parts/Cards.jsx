import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import git from "../assets/2.png";

const Cards = () => {
    const data = [
      {
        img: git,
        title: "Coaching Across Borders – From Innovation to Impact",
      },
      {
        img: git,
        title: "Coaching Across Borders – From Innovation to Impact",
      },
      {
        img: git,
        title: "Coaching Across Borders – From Innovation to Impact",
      },
      {
        img: git,
        title: "Coaching Across Borders – From Innovation to Impact",
      },
    ];

    const data2 = [
      {
        img: git,
        title: "Coaching Across Borders – From Innovation to Impact",
      },
      {
        img: git,
        title: "Coaching Across Borders – From Innovation to Impact",
      },
      {
        img: git,
        title: "Coaching Across Borders – From Innovation to Impact",
      },
      {
        img: git,
        title: "Coaching Across Borders – From Innovation to Impact",
      },
    ];
    const data3 = [
      {
        img: git,
        title: "Coaching Across Borders – From Innovation to Impact",
      },
      {
        img: git,
        title: "Coaching Across Borders – From Innovation to Impact",
      },
      {
        img: git,
        title: "Coaching Across Borders – From Innovation to Impact",
      },
      {
        img: git,
        title: "Coaching Across Borders – From Innovation to Impact",
      },
    ];
  return (
    <>
      <div className="py-10">
        <h2 className="text-2xl md:text-3xl font-normal text-center text-[#E22E1B] mb-4 underline-offset-4">
          Organisational Case Study
        </h2>
        <div className="flex flex-row flex-wrap justify-center gap-20">
          {data.map((d) => (
            <div className="w-[40%] rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
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
                <Link
                  href="#"
                  className="text-blue-800 font-medium flex items-center gap-1"
                >
                  Read More <span className="text-xl leading-4">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-10">
        <h2 className="text-2xl md:text-3xl font-normal text-center text-[#E22E1B] mb-4 underline-offset-4">
          Executive Coaching Case Study
        </h2>
        <div className="flex flex-row flex-wrap justify-center gap-20">
          {data2.map((d) => (
            <div className="w-[40%] rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
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
                <Link
                  href="#"
                  className="text-blue-800 font-medium flex items-center gap-1"
                >
                  Read More <span className="text-xl leading-4">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-10">
        <h2 className="text-2xl md:text-3xl font-normal text-center text-[#E22E1B] mb-4 underline-offset-4">
          Case Study
        </h2>
        <div className="flex flex-row flex-wrap justify-center gap-20">
          {data3.map((d) => (
            <div className="w-[40%] rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
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
                <Link
                  href="#"
                  className="text-blue-800 font-medium flex items-center gap-1"
                >
                  Read More <span className="text-xl leading-4">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Cards