"use client";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function AnimatedButton() {
  return (
    <button className="relative flex items-center gap-2 px-6 py-2 bg-white text-black rounded-full border transition duration-300 group overflow-hidden">
      {/* Icon (Moves Right on Hover) */}
      <motion.span
        initial={{ x: 0 }}
        whileHover={{ x: 10 }}
        transition={{ duration: 0.3 }}
        className="relative z-10 transition-transform duration-300 group-hover:translate-x-5"
      >
        <FaExternalLinkAlt />
      </motion.span>

      {/* Text (Moves Left on Hover) */}
      <motion.span
        initial={{ x: 0 }}
        whileHover={{ x: -10 }}
        transition={{ duration: 0.3 }}
        className="relative z-10 transition-transform duration-300 group-hover:-translate-x-5"
      >
        Continue
      </motion.span>
    </button>
  );
}
