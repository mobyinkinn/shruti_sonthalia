import Image from "next/image";
import { FaInstagram } from "react-icons/fa6";
import { RiFacebookFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

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
    link: "https://www.linkedin.com/",
  },
  {
    id: 4,
    icon: <FaYoutube color="white" size={"25px"} />,
    link: "https://www.youtube.com",
  },
];

const services = [
  { id: 1, name: "Executive Coaching", link: "" },
  { id: 2, name: "Mentor Coaching & Coaching Supervision", link: "" },
  { id: 3, name: "Change Mangement", link: "" },
  { id: 4, name: "Organizational Development", link: "" },
];

const quickLinks = [
  { id: 1, name: "About Shruti", link: "" },
  { id: 2, name: "Case Studies", link: "" },
  { id: 3, name: "Publications & Media", link: "" },
  { id: 4, name: "Contact Us", link: "" },
];

export default function Footer() {
  return (
    <div className="w-full px-23 flex justify-between bg-white text-[#363B3F]">
      <div className=" items-start flex flex-col justify-around space-y-4">
        <div>
          <a href={"/"}>
            <Image src="/logo_2.png" alt="Logo" width={311} height={46} />
          </a>
        </div>
        <div className="flex flex-col">
          <span className="text-[1rem] leading-6">
            Elevate your business with my coaching services and
            <br /> take your business to the next level. Grow your
            <br /> business today
          </span>
        </div>

        <div className="flex flex-col">
          <span className="text-[1rem] leading-6 mb-1">Follow Us On:</span>
          <div className="flex space-x-2">
            {socialMediaLinks.map((social) => (
              <div
                key={social.id}
                className="w-[1.9rem] h-[1.9rem] bg-[#363B3F] flex justify-center items-center rounded-lg "
              >
                <a href={social.link} className="text-white">
                  {social.icon}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="  flex flex-col relative pt-3 gap-4 ">
        <span className="font-bold text-[1.4rem] leading-6 mb-1">Services</span>
        <ul className="flex flex-col space-y-4   ">
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
      <div className="flex flex-col  relative pt-3 gap-4">
        <span className="font-bold text-[1.4rem] leading-6 mb-1 ">
          Quick Links
        </span>
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
