
// "use client";

// import Image from "next/image";
// import con from "../assets/contact/1.png";
// export default function GetInTouch() {
//   return (
//     <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl mx-auto p-4">
//       {/* Left Image Section */}
//       <div className="relative w-full md:w-1/2 h-64 md:h-96">
//         <Image
//           src={con}
//           alt="Reaching Hands"
//           layout="fill"
//           objectFit="cover"
//           className="rounded-l-lg"
//         />
//       </div>

//       {/* Right Contact Form Section */}
//       <div className="bg-[#0A1C7A] text-white p-6 md:p-8 w-full md:w-1/2 rounded-r-lg">
//         <h2 className="text-lg md:text-2xl font-semibold mb-4">GET IN TOUCH</h2>
//         <form className="space-y-4">
//           <input
//             type="text"
//             placeholder="Enter Your Full Name"
//             className="w-full p-2 rounded-md text-black"
//           />
//           <div className="flex space-x-2">
//             <input
//               type="email"
//               placeholder="Enter Your Mail"
//               className="w-1/2 p-2 rounded-md text-black"
//             />
//             <input
//               type="tel"
//               placeholder="Enter Your Number"
//               className="w-1/2 p-2 rounded-md text-black"
//             />
//           </div>
//           <input
//             type="text"
//             placeholder="Subject"
//             className="w-full p-2 rounded-md text-black"
//           />
//           <textarea
//             placeholder="Message"
//             className="w-full p-2 rounded-md text-black h-24"
//           ></textarea>
//           <button
//             type="submit"
//             className="bg-white text-[#0A1C7A] px-4 py-2 rounded-md flex items-center justify-center space-x-2"
//           >
//             <span>Contact Us</span>
//             <span>&rarr;</span>
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }



import Image from "next/image";
import about from "../assets/Mask.png";
import AnimatedButton from "@/app/utils/Butoon";

const ContactSection = () => {
  return (
    <section className="py-12 px-4 md:px-12">
      <div className="max-w-9xl mx-auto rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2 bg-[#100C7C] shadow-lg">
        {/* Left Image */}
        <div className="relative h-[500px] md:h-auto">
          <Image
            src={about}
            alt="Get in Touch"
            layout="fill"
            objectFit="cover"
            className="rounded-l-3xl"
            priority
          />
        </div>

        {/* Right Form */}
        <div className=" text-white p-8 md:p-8 flex flex-col justify-center rounded-r-3xl ">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
            GET IN TOUCH
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Enter Your Full Name"
              className="w-full px-4 py-3 rounded-md text-gray-800 focus:outline-none bg-white"
            />
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter Your Mail"
                className="flex-1 px-4 py-3 rounded-md text-gray-800 focus:outline-none bg-white"
              />
              <input
                type="tel"
                placeholder="Enter Your Number"
                className="flex-1 px-4 py-3 rounded-md text-gray-800 focus:outline-none bg-white"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 rounded-md text-gray-800 focus:outline-none bg-white"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full px-4 py-3 rounded-md text-gray-800 focus:outline-none bg-white"
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
