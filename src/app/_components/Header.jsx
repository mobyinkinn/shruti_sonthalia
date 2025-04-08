// import Image from "next/image";

// const navLinks = [
//   { id: 1, name: "Home", link: "/" },
//   { id: 2, name: "About", link: "/about_me" },
//   { id: 3, name: "Services", link: "/services" },
//   { id: 4, name: "Coaching Supervision", link: "/coaching_supervision" },
//   { id: 5, name: "Coaching Skills", link: "/coaching_skills" },
// ];

// export default function Header() {
//   return (
//     <div className=" w-full h-24 flex items-center justify-between px-10 bg-transparent z-40">
//       <a href={"/"} className="flex items-center">
//         <Image src="/logo_1.png" alt="Ruhco." width={142} height={51} />
//       </a>
//       <div className="space-x-8 flex items-center">
//         {navLinks.map((nav) => (
//           <div key={nav.id} className="relative group">
//             <a
//               href={nav.link}
//               className="no-underline flex items-center text-[#363B3F] font-semibold text-[1rem] hover:text-black transition-colors"
//             >
//               {nav.name}
//             </a>
//           </div>
//         ))}
//       </div>
//       <a href={"/"} className="flex items-center">
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


// import Image from "next/image";

// const navLinks = [
//   { id: 1, name: "Home", link: "/" },
//   { id: 2, name: "About Us", link: "/about_us" },
//   {
//     id: 3,
//     name: "Services",
//     link: "#",
//     dropdown: [
//       { id: 1, name: "Service 1", link: "/services/service1" },
//       { id: 2, name: "Service 2", link: "/services/service2" },
//       { id: 3, name: "Service 3", link: "/services/service3" },
//       { id: 4, name: "Service 4", link: "/services/service4" },
//       { id: 5, name: "Service 5", link: "/services/service5" },
//       { id: 6, name: "Service 6", link: "/services/service6" },
//     ],
//   },
//   { id: 4, name: "Publications & Media", link: "/publications_media" },
//   {
//     id: 5,
//     name: "Pioneer Innovative Solutions",
//     link: "/pioneer_innovative_solutions",
//   },
// ];

// export default function Header() {
//   return (
//     <div className="w-full h-24 flex items-center justify-between px-10 bg-transparent z-40">
//       <a href="/" className="flex items-center">
//         <Image src="/logo_1.png" alt="Ruhco." width={142} height={51} />
//       </a>

//       <div className="space-x-8 flex items-center">
//         {navLinks.map((nav) => (
//           <div key={nav.id} className="relative group">
//             <a
//               href={nav.link}
//               className="no-underline flex items-center text-[#363B3F] font-semibold text-[1rem] hover:text-black transition-colors"
//             >
//               {nav.name}
//             </a>

//             {/* Dropdown for Services */}
//             {nav.dropdown && (
//               <div className="absolute top-full left-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-md z-50">
//                 <ul className="py-2 px-4 min-w-[200px]">
//                   {nav.dropdown.map((item) => (
//                     <li key={item.id} className="py-1">
//                       <a
//                         href={item.link}
//                         className="block text-[#363B3F] hover:text-black text-sm"
//                       >
//                         {item.name}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>

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

import Image from "next/image";

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
    ],
  },
  { id: 4, name: "Publications & Media", link: "/publication-and-media" },
  {
    id: 5,
    name: "Pioneering Innovative Solutions",
    link: "/pioneering-innovative-solution",
  },
];

export default function Header() {
  return (
    <div className="absolute w-full h-24 flex items-center justify-between px-10 bg-transparent z-40">
      <a href="/" className="flex items-center">
        <Image src="/logo_1.png" alt="Ruhco." width={142} height={51} />
      </a>

      <div className="space-x-8 flex items-center">
        {navLinks.map((nav) => (
          <div key={nav.id} className="relative group">
            <a
              href={nav.link}
              className="no-underline flex items-center text-[white] font-semibold text-[1rem] transition-colors"
            >
              {nav.name}
            </a>

            {/* Dropdown Menu */}
            {nav.dropdown && (
              <div className="absolute left-0 top-[69%] mt-2 hidden group-hover:flex flex-col bg-white shadow-md rounded-md z-50 min-w-[200px] py-2">
                {nav.dropdown.map((item) => (
                  <a
                    key={item.id}
                    href={item.link}
                    className="px-4 py-2 text-sm text-[#363B3F] hover:bg-gray-100 hover:text-black transition"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Right logo */}
      <a href="/" className="flex items-center">
        <Image
          src="/logo_2.png"
          alt="Shruti Sonthalia"
          width={234}
          height={35}
        />
      </a>
    </div>
  );
}
