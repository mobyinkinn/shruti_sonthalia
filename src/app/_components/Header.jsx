import Image from "next/image";

const navLinks = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About", link: "/about_me" },
  { id: 3, name: "Services", link: "/services" },
  { id: 4, name: "Coaching Supervision", link: "/coaching_supervision" },
  { id: 5, name: "Coaching Skills", link: "/coaching_skills" },
];

export default function Header() {
  return (
    <div className=" w-full h-24 flex items-center justify-between px-10 bg-transparent z-40">
      <a href={"/"} className="flex items-center">
        <Image src="/logo_1.png" alt="Ruhco." width={142} height={51} />
      </a>
      <div className="space-x-8 flex items-center">
        {navLinks.map((nav) => (
          <div key={nav.id} className="relative group">
            <a
              href={nav.link}
              className="no-underline flex items-center text-[#363B3F] font-semibold text-[1rem] hover:text-black transition-colors"
            >
              {nav.name}
            </a>
          </div>
        ))}
      </div>
      <a href={"/"} className="flex items-center">
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
