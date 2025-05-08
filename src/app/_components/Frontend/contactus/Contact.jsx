"use client"

import { useRouter } from "next/navigation";
import React, {useState } from "react";

export default function Contact() {
  const [isHovered, setIsHovered] = useState(false);
   const router = useRouter();
    const getTrasformStyles = (isHovered) => ({
      transform: `translateY(${isHovered ? "-100%" : "0"})`,
    });
  return (
    <>
      <div className="text-center text-2xl font-semibold mt-12 mb-6">
        GET IN TOUCH
      </div>
      <div className="max-w-4xl mx-auto mb-30 p-8 bg-white rounded-3xl shadow-lg">
        <form className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Enter Your Full Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-full"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Profession</label>
              <input
                type="text"
                placeholder="Enter Your Profession"
                className="w-full px-4 py-3 border border-gray-300 rounded-full"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Age</label>
              <input
                type="number"
                placeholder="Enter Your Age"
                className="w-full px-4 py-3 border border-gray-300 rounded-full"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Gender</label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-full text-gray-500">
                <option>Select Your Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div>
              <label className="block text-sm mb-2">Work Title</label>
              <input
                type="text"
                placeholder="Enter Your Work Title"
                className="w-full px-4 py-3 border border-gray-300 rounded-full"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Organisation</label>
              <input
                type="text"
                placeholder="Select Your Organisation"
                className="w-full px-4 py-3 border border-gray-300 rounded-full"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Service Selection</label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-full text-gray-500">
                <option>Select the service you are interested in</option>
              </select>
            </div>
            <div>
              <label className="block text-sm mb-2">Logistics</label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-full text-gray-500">
                <option>When would you like to begin?</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm mb-2">
              Reason for Seeking Services
            </label>
            <textarea
              placeholder="Type Here"
              className="w-full px-4 py-3 border border-gray-300 rounded-2xl resize-none"
              rows={4}
            ></textarea>
          </div>

          <div>
            <label className="block text-sm mb-2">
              Goals and Desired Results
            </label>
            <div className="space-y-4">
              {[1, 2, 3].map((goal) => (
                <div key={goal} className="flex w-full flex-row gap-5">
                  <span className="flex items-center justify-center w-24 px-4 py-3 border border-gray-300 rounded-l-full text-sm font-medium bg-white">
                    Goal {goal}
                  </span>
                  <input
                    type="text"
                    placeholder="What are your goals and desired results from this service?"
                    className="w-full px-4 py-3 border border-gray-300  rounded-r-full"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center ">
            <button
              type="submit"
              className="border border-[#151583] text-black rounded-full py-3 px-10 hover:bg-[#151583] hover:text-white mt-4 md:mt-0"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
