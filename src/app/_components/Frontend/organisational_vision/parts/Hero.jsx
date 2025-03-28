import Image from "next/image";
import organise from "../assets/hero/organise.png";
const Hero = () => {
  return (
    <div className="relative w-full h-[600px] rounded-3xl overflow-hidden">
        {/* <Image src={hero} alt="" fill objectFit="cover" /> */}
        <video
          width="100%"
          height="100%"
          autoPlay
          loop
          muted
          controls={false}
          style={{ objectFit: "cover", borderRadius: "30px" }}
        >
          <source src="/org.mp4" type="video/mp4" />
        </video>
      <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
      <div className="absolute inset-0 z-20 flex flex-col justify-end items-center text-center px-4 md:px-8 py-5">
        <h1 className="text-white text-2xl md:text-5xl font-semibold mb-4 tracking-wider">
          Organisational Vision
        </h1>
        <p className="text-white text-lg md:text-xl max-w-3xl mb-6">
          A strong organizational vision goes beyond profits—it shapes culture,
          ethics, and long-term success. It unites employees and stakeholders,
          driving them toward a shared purpose.
        </p>
        <button className="flex items-center gap-2 text-[1.4rem] px-6 py-2 bg-[#151583] text-white rounded-full hover:bg-white hover:text-black transition cursor-pointer">
          Book A Consult
        </button>
      </div>
    </div>
  );
};

export default Hero;
