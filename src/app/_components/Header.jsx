

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
      {
        id: 6,
        name: "Organisational Culture",
        link: "/services/organisational_culture",
      },
    ],
  },
  { id: 4, name: "Publications", link: "/publication-and-media" },
  {
    id: 5,
    name: "Community First",
    link: "/community-first",
  },
  {
    id: 6,
    name: "Case Studies",
    link: "/Case-studies",
  },
  {
    id: 7,
    name: "Media",
    link: "/media-and-events",
  },
  {
    id: 8,
    name: "Contact us",
    link: "/contact-us",
  },
];

export default function Header() {
  return (
    <div className="absolute w-full h-24 flex items-center justify-between px-10 bg-transparent z-40">
      <a href="/" className="flex items-center">
        <Image src="/logoo.png" alt="Ruhco." width={142} height={51} />
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
