"use client";
import { useRouter } from "next/navigation";
import { GoArrowRight } from "react-icons/go";

export default function AnimatedButton({name}) {
  const router = useRouter()
  return (
    <button
      className="relative flex items-center gap-2 px-6 py-2 bg-white text-black rounded-full border transition-all duration-300 overflow-hidden group delay-150 cursor-pointer"
      onClick={() => router.push("/contact-us")}
    >
      {/* Text - Moves right on hover */}
      <span className="transition-transform duration-600 group-hover:translate-x-10 font-bold text-[#363B3F] text-[1.5rem] delay-150">
        {name}
      </span>

      {/* Icon - Moves left on hover */}
      <span className="transition-transform duration-600 group-hover:-translate-x-36 delay-150">
        <GoArrowRight className="bg-[#151583] text-[#fff] rounded-[20px] size-10 p-1" />
      </span>
    </button>
  );
}
