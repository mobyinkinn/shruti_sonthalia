import Image from "next/image";
import mask3 from "../assets/Mask.png"
const Hero = () => {
  return (
    <div className="relative w-full h-[600px] rounded-3xl overflow-hidden">
      <Image
        src={mask3}
        alt="Transformational Leadership"
        layout="fill"
        objectFit="cover"
        className="z-0"
        priority
      />
      <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
      <div className="absolute inset-0 z-20 flex flex-col justify-end items-center text-center px-4 md:px-8 py-5">
        <h1 className="text-white text-2xl md:text-5xl font-semibold mb-4 tracking-wider uppercase">
          Change Management
        </h1>
        <p className="text-white text-lg md:text-xl max-w-3xl mb-6">
          Change management helps businesses adapt to new processes,
          technologies, and strategies with minimal resistance. It fosters
          employee engagement and ensures a smooth, successful transition.
        </p>
        <button className="flex items-center gap-2 text-[1.4rem] px-6 py-2 bg-[#151583] text-white rounded-full hover:bg-white hover:text-black border transition cursor-pointer">
          Book A Consult
        </button>
      </div>
    </div>
  );
};

export default Hero;
