
import Image from "next/image";
import about from "../assets/1.png";
import AnimatedButton from "@/app/utils/Butoon";

const ContactSection = () => {
  return (
    <section className="py-12 px-4 md:px-12">
      <div className="max-w-9xl mx-auto  overflow-hidden grid grid-cols-1 md:grid-cols-2 bg-[#100C7C] shadow-lg">
        {/* Left Image */}
        <div className="relative h-[500px] md:h-auto">
          <Image
            src={about}
            alt="Get in Touch"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-40 transition-all duration-500 group-hover:opacity-0"></div>
        </div>

        {/* Right Form */}
        <div className=" text-white p-8 md:p-8 flex flex-col justify-center ">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
            GET IN TOUCH
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Enter Your Full Name"
              className="w-full px-4 py-3  text-gray-800 focus:outline-none bg-white"
            />
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter Your Mail"
                className="flex-1 px-4 py-3 text-gray-800 focus:outline-none bg-white"
              />
              <input
                type="tel"
                placeholder="Enter Your Number"
                className="flex-1 px-4 py-3 text-gray-800 focus:outline-none bg-white"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3  text-gray-800 focus:outline-none bg-white"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full px-4 py-3 text-gray-800 focus:outline-none bg-white"
            ></textarea>
            <div className="flex items-center justify-center">
              <AnimatedButton name={"Contact Us"} />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
