// "use client";
// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
// import { RiFacebookFill } from "react-icons/ri";

// const socialMediaLinks = [
//   // {
//   //   id: 1,
//   //   icon: <FaInstagram color="white" size={"25px"} />,
//   //   link: "https://www.instagram.com/",
//   // },
//   // {
//   //   id: 2,
//   //   icon: <RiFacebookFill color="white" size={"25px"} />,
//   //   link: "https://www.facebook.com/",
//   // },
//   {
//     id: 3,
//     icon: <FaLinkedinIn color="white" size={"25px"} />,
//     link: "https://www.linkedin.com/in/shruti-sonthalia/",
//   },
//   {
//     id: 4,
//     icon: <FaYoutube color="white" size={"25px"} />,
//     link: "https://www.youtube.com/@RuhcoSupport",
//   },
// ];

// const services = [
//   { id: 1, name: "Executive Coaching", link: "/services/executive_coaching" },
//   {
//     id: 2,
//     name: "Coaching Supervision",
//     link: "/services/coaching_supervision",
//   },
//   { id: 3, name: "Change Mangement", link: "/services/change_management" },
//   {
//     id: 4,
//     name: "Organizational Vision",
//     link: "/services/organisational_vision",
//   },
//   { id: 5, name: "Coaching Skills", link: "/services/coaching_skills" },
//   {
//     id: 6,
//     name: "Organizational Culture",
//     link: "/services/organisational_culture",
//   },
// ];

// const quickLinks = [
//   { id: 1, name: "About Us", link: "/about_me" },
//   { id: 2, name: "Case Studies", link: "/Case-studies" },
//   { id: 3, name: "Media", link: "/publication-and-media" },
//   { id: 4, name: "Publications", link: "/media-and-events" },
//   { id: 5, name: "Contact Us", link: "/contact-us" },
// ];

// export default function Footer() {
//   const pathname = usePathname();
//   const isPinkBackground = pathname === "/publication-and-media";

//   return (
//     <div
//       className={`w-full px-23 flex justify-between text-[#363B3F] py-8 ${
//         isPinkBackground ? "bg-[#f5c9c6]" : "bg-white"
//       }`}
//     >
//       <div className="items-start flex flex-col justify-around space-y-4">
//         <div>
//           <a href={"/"}>
//             <Image src="/logo_2.png" alt="Logo" width={311} height={46} />
//           </a>
//         </div>
//         <div className="flex flex-col">
//           <span className="text-[1rem] leading-6">
//             Empowering you to elevate your business through bespoke leadership
//             <br />
//             programs that delivers clarity, strategy, and sustainable growth.
//             Let’s take your
//             <br /> business to the next level — starting today.
//           </span>
//         </div>

//         <div className="flex flex-col">
//           <div className="flex space-x-2">
//             {socialMediaLinks.map((social) => (
//               <div
//                 key={social.id}
//                 className="w-[1.9rem] h-[1.9rem] bg-[#363B3F] flex justify-center items-center rounded-lg "
//               >
//                 <a href={social.link} className="text-white">
//                   {social.icon}
//                 </a>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="flex flex-col relative pt-3 gap-4">
//         <span className="font-bold text-[1.4rem] leading-6 mb-1">Services</span>
//         <ul className="flex flex-col space-y-4">
//           {services.map((service) => (
//             <li key={service.id} className="text-[1rem] leading-6 font-medium">
//               <a
//                 href={service.link}
//                 className="no-underline text-[#363B3F] hover:text-black transition-colors"
//               >
//                 {service.name}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div className="flex flex-col relative pt-3 gap-4">
//         <span className="font-bold text-[1.4rem] leading-6 mb-1">
//           Quick Links
//         </span>
//         <ul className="flex flex-col space-y-4">
//           {quickLinks.map((link) => (
//             <li key={link.id} className="text-[1rem] leading-6 font-medium">
//               <a
//                 href={link.link}
//                 className="no-underline text-[#363B3F] hover:text-black transition-colors"
//               >
//                 {link.name}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { RiFacebookFill } from "react-icons/ri";

const socialMediaLinks = [
  {
    id: 1,
    icon: <FaInstagram color="white" size={"25px"} />,
    link: "https://www.instagram.com/",
  },
  {
    id: 2,
    icon: <RiFacebookFill color="white" size={"25px"} />,
    link: "https://www.facebook.com/",
  },
  {
    id: 3,
    icon: <FaLinkedinIn color="white" size={"25px"} />,
    link: "https://www.linkedin.com/in/shruti-sonthalia/",
  },
  {
    id: 4,
    icon: <FaYoutube color="white" size={"25px"} />,
    link: "https://www.youtube.com/@RuhcoSupport",
  },
];

const services = [
  { id: 1, name: "Executive Coaching", link: "/services/executive_coaching" },
  {
    id: 2,
    name: "Coaching Supervision",
    link: "/services/coaching_supervision",
  },
  { id: 3, name: "Change Mangement", link: "/services/change_management" },
  {
    id: 4,
    name: "Organizational Vision",
    link: "/services/organisational_vision",
  },
  { id: 5, name: "Coaching Skills", link: "/services/coaching_skills" },
  {
    id: 6,
    name: "Organizational Culture",
    link: "/services/organisational_culture",
  },
];

const quickLinks = [
  { id: 1, name: "About Us", link: "/about_me" },
  { id: 2, name: "Case Studies", link: "/Case-studies" },
  { id: 3, name: "Media", link: "/publication-and-media" },
  { id: 4, name: "Publications", link: "/media-and-events" },
  { id: 5, name: "Contact Us", link: "/contact-us" },
];

export default function Footer() {
  const pathname = usePathname();
  const isPinkBackground = pathname === "/publication-and-media";

  return (
    <div
      className={`w-full px-6 md:px-12 lg:px-6 flex flex-col md:flex-row justify-between text-[#363B3F] py-8 ${
        isPinkBackground ? "bg-[#f5c9c6]" : "bg-white"
      }`}
    >
      {/* Left Section */}
      <div className="flex flex-col items-start space-y-4 w-full md:w-1/2 md:px-10">
        <div>
          <a href={"/"}>
            <Image src="/logo_2.png" alt="Logo" width={311} height={46} />
          </a>
        </div>
        <p className="text-[1rem] leading-6 text-gray-700">
          Empowering you to elevate your business through bespoke leadership
          programs that deliver clarity, strategy, and sustainable growth. Let’s
          take your business to the next level — starting today.
        </p>
        <div className="flex space-x-4 mt-4">
          {socialMediaLinks.map((social) => (
            <div
              key={social.id}
              className="w-8 h-8 bg-[#363B3F] flex justify-center items-center rounded-full"
            >
              <a
                href={social.link}
                className="text-white"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow us on ${social.icon.type.displayName}`}
              >
                {social.icon}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="flex flex-col pt-3 gap-4 w-full md:w-1/4">
        <span className="font-bold text-[1.4rem] leading-6 mb-4">Services</span>
        <ul className="flex flex-col space-y-4">
          {services.map((service) => (
            <li key={service.id} className="text-[1rem] leading-6 font-medium">
              <a
                href={service.link}
                className="no-underline text-[#363B3F] hover:text-black transition-colors"
              >
                {service.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Quick Links Section */}
      <div className="flex flex-col pt-3 gap-4 w-full md:w-1/4">
        <span className="font-bold text-[1.4rem] leading-6 mb-4">Quick Links</span>
        <ul className="flex flex-col space-y-4">
          {quickLinks.map((link) => (
            <li key={link.id} className="text-[1rem] leading-6 font-medium">
              <a
                href={link.link}
                className="no-underline text-[#363B3F] hover:text-black transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
