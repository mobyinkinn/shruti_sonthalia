

// import Image from "next/image";

// const navLinks = [
//   { id: 1, name: "Home", link: "/" },
//   { id: 2, name: "About Us", link: "/about_me" },
//   {
//     id: 3,
//     name: "Services",
//     link: "#",
//     dropdown: [
//       {
//         id: 1,
//         name: "Executive Coaching",
//         link: "/services/executive_coaching",
//       },
//       {
//         id: 2,
//         name: "Coaching Supervision",
//         link: "/services/coaching_supervision",
//       },
//       { id: 3, name: "Coaching Skills", link: "/services/coaching_skills" },
//       {
//         id: 4,
//         name: "Organisational Vision",
//         link: "/services/organisational_vision",
//       },
//       { id: 5, name: "Change Management", link: "/services/change_management" },
//       {
//         id: 6,
//         name: "Organisational Culture",
//         link: "/services/organisational_culture",
//       },
//     ],
//   },
//   { id: 4, name: "Publications", link: "/publication-and-media" },
//   {
//     id: 5,
//     name: "Community First",
//     link: "/community-first",
//   },
//   {
//     id: 6,
//     name: "Case Studies",
//     link: "/Case-studies",
//   },
//   {
//     id: 7,
//     name: "Media",
//     link: "/media-and-events",
//   },
//   {
//     id: 8,
//     name: "Contact us",
//     link: "/contact-us",
//   },
// ];

// export default function Header() {
//   return (
//     <div className="absolute w-full h-24 flex items-center justify-between px-10 bg-transparent z-40">
//       <a href="/" className="flex items-center">
//         <Image src="/logoo.png" alt="Ruhco." width={142} height={51} />
//       </a>

//       <div className="space-x-8 flex items-center">
//         {navLinks.map((nav) => (
//           <div key={nav.id} className="relative group">
//             <a
//               href={nav.link}
//               className="no-underline flex items-center text-[white] font-semibold text-[1rem] transition-colors"
//             >
//               {nav.name}
//             </a>

//             {/* Dropdown Menu */}
//             {nav.dropdown && (
//               <div className="absolute left-0 top-[69%] mt-2 hidden group-hover:flex flex-col bg-white shadow-md rounded-md z-50 min-w-[200px] py-2">
//                 {nav.dropdown.map((item) => (
//                   <a
//                     key={item.id}
//                     href={item.link}
//                     className="px-4 py-2 text-sm text-[#363B3F] hover:bg-gray-100 hover:text-black transition"
//                   >
//                     {item.name}
//                   </a>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Right logo */}
//       <a href="/" className="flex items-center">
//         <Image
//           src="/logo_2.png"
//           alt="Shruti Sonthalia"
//           width={234}
//           height={35}
//         />
//       </a>
//     </div>
//   );
// }


"use client";
import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // Importing hamburger and close icons

const navLinks = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About Us", link: "/about_me" },
  {
    id: 3,
    name: "Services",
    link: "#",
    dropdown: [
      {
        id: 1,
        name: "Executive Coaching",
        link: "/services/executive_coaching",
      },
      {
        id: 2,
        name: "Coaching Supervision",
        link: "/services/coaching_supervision",
      },
      { id: 3, name: "Coaching Skills", link: "/services/coaching_skills" },
      {
        id: 4,
        name: "Organisational Vision",
        link: "/services/organisational_vision",
      },
      { id: 5, name: "Change Management", link: "/services/change_management" },
      {
        id: 6,
        name: "Organisational Culture",
        link: "/services/organisational_culture",
      },
    ],
  },
  { id: 4, name: "Publications", link: "/publication-and-media" },
  { id: 5, name: "Community First", link: "/community-first" },
  { id: 6, name: "Case Studies", link: "/Case-studies" },
  { id: 7, name: "Media", link: "/media-and-events" },
  { id: 8, name: "Contact us", link: "/contact-us" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState();

  return (
    <header className="absolute w-full h-24 flex items-center justify-between px-6 md:px-10 bg-transparent z-40">
      {/* Left Logo */}
      <a href="/" className="flex items-center">
        <Image src="/logoo.png" alt="Ruhco." width={142} height={51} />
      </a>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-8 items-center">
        {navLinks.map((nav) => (
          <div key={nav.id} className="relative group">
            <a
              href={nav.link}
              className="no-underline flex items-center text-white font-semibold text-[1rem] transition-colors"
            >
              {nav.name}
              {nav.dropdown && (
                <span className="ml-1 transform transition-transform group-hover:rotate-180">
                  ▼
                </span>
              )}
            </a>
            {nav.dropdown && (
              <div className="absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible bg-white bg-opacity-10 mt-2 space-y-2 p-4 rounded-xl min-w-[200px] backdrop-blur-md transition-all duration-300">
                {nav.dropdown.map((item) => (
                  <a
                    key={item.id}
                    href={item.link}
                    className="block text-black hover:rounded-full p-2 transition"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Right Logo */}
      <a href="/" className="md:flex items-center hidden">
        <Image
          src="/logo_2.png"
          alt="Shruti Sonthalia"
          width={234}
          height={35}
        />
      </a>

      {/* Mobile Hamburger Toggle */}
      <button
        className="md:hidden text-white z-50"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-[80%] sm:w-[60%] bg-black bg-opacity-90 backdrop-blur-md z-40 p-6 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col space-y-5 mt-16">
          {navLinks.map((nav) => (
            <div key={nav.id}>
              <div
                onClick={() =>
                  nav.dropdown
                    ? setOpenSubMenu(openSubMenu === nav.id ? null : nav.id)
                    : setMobileMenuOpen(false)
                }
                className="flex justify-between items-center text-white font-semibold text-lg cursor-pointer"
              >
                <a href={nav.link}>{nav.name}</a>
                {nav.dropdown && (
                  <span className="ml-2 text-sm">
                    {openSubMenu === nav.id ? "▲" : "▼"}
                  </span>
                )}
              </div>
              {nav.dropdown && openSubMenu === nav.id && (
                <div className="ml-4 mt-2 space-y-2">
                  {nav.dropdown.map((item) => (
                    <a
                      key={item.id}
                      href={item.link}
                      className="block text-white text-base hover:underline"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
