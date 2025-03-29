import Image from "next/image";
import publication from "../assets/Mask5.png";
const Hero = () => {
  return (
    <div className="relative w-full h-[600px] rounded-3xl overflow-hidden">
      <Image
        src={publication}
        alt="Transformational Leadership"
        layout="fill"
        objectFit="cover"
        className="z-0"
        priority
      />
      <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
      <div className="absolute inset-0 z-20 flex flex-col justify-end items-center text-center px-4 md:px-8 py-5">
        <h1 className="text-white text-2xl md:text-4xl font-semibold mb-4 tracking-wider uppercase">
          Innovative Solutions for Social Inclusion
        </h1>
        <p className="text-white text-lg md:text-md max-w-5xl mb-6">
          With over 20 years of experience, we've led impactful initiatives in
          coaching, advocacy, and social change. Our journey reflects a deep
          commitment to empowering communities and driving meaningful
          transformation.
        </p>
        <button className="flex items-center gap-2 text-[1.4rem] px-6 py-2 bg-[#151583] text-white rounded-full hover:bg-white hover:text-black transition cursor-pointer">
          Book A Consult
        </button>
      </div>
    </div>
  );
};

export default Hero;
