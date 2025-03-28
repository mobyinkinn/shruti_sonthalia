import Image from "next/image";
import React from "react";
import img from "../assets/1.png"
const features = [
  {
    title: "Data-Driven",
    description:
      "We utilize proprietary diagnostics and benchmarking tools to assess vision alignment and impact. Our tools are research-backed, topical modules. Our strategic organisational mapping helps leaders ascertain their present status and align it with their future goals.",
    image: img,
  },
  {
    title: "Incorporate PESTLE Analysis",
    description:
      "We use PESTLE analysis to assess external factors impacting your organization and help you adapt your strategy.",
    image: img,
  },
  {
    title: "End-to-End Implementation",
    description:
      "From strategy to execution, we partner with you throughout your transformation journey.",
    image: img,
  },
  {
    title: "Employee Engagement",
    description:
      "We foster environments that empower employees, boosting morale and productivity.",
    image: img,
  },
  {
    title: "Customized for Your Industry",
    description:
      "Our solutions are tailored to the specific challenges and needs of your industry.",
    image: img,
  },
  {
    title: "Proven Results",
    description:
      "Our data-backed approach delivers measurable improvements across your organization.",
    image: img,
  },
];

const topFeatures = [
  {
    title: "Data-Driven",
    description:
      "We utilize proprietary diagnostics and benchmarking tools to assess vision alignment and impact. Our tools are research-backed, topical modules. Our strategic organisational mapping helps leaders ascertain their present status and align it with their future goals.",
    image: img,
    
  },
  {
    title: "Incorporate PESTLE Analysis",
    description:
      "We use PESTLE analysis to assess external factors impacting your organization and help you adapt your strategy.",
    image: img,
  },
];

const bottomFeatures = [
  {
    title: "End-to-End Implementation",
    description:
      "From strategy to execution, we partner with you throughout your transformation journey.",
    image: img,
  },
  {
    title: "Employee Engagement",
    description:
      "We foster environments that empower employees, boosting morale and productivity.",
    image: img,
  },
  {
    title: "Customized for Your Industry",
    description:
      "Our solutions are tailored to the specific challenges and needs of your industry.",
    image: img,
  },
  {
    title: "Proven Results",
    description:
      "Our data-backed approach delivers measurable improvements across your organization.",
    image: img,
  },
];

const WhyWeStandApart = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-10">
      <div className="text-center mb-12">
        <h3 className="text-indigo-800 font-medium text-lg">
          The RuhCo Approach
        </h3>
        <h2 className="text-3xl md:text-4xl font-semibold text-red-600 mt-2">
          WHY WE STAND APART
        </h2>
      </div>

      {/* Top Row - 2 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {topFeatures.map((feature, index) => (
          <FeatureCard key={index} feature={feature} />
        ))}
      </div>

      {/* Bottom Row - 4 Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {bottomFeatures.map((feature, index) => (
          <FeatureCard key={index} feature={feature} />
        ))}
      </div>
    </section>
  );
};

const FeatureCard = ({ feature }) => {
  return (
    <div className="relative group rounded-xl overflow-hidden shadow-lg h-64">
      <div className="relative w-full h-full transition-all duration-500 grayscale group-hover:grayscale-0">
        <Image
          src={feature.image}
          alt={feature.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-5 text-center">
        <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
        <p className="text-sm">{feature.description}</p>
      </div>

      {/* Default Title (when not hovered) */}
      <div className="absolute bottom-4 left-4 text-white text-lg font-semibold z-10 group-hover:opacity-0 transition-opacity duration-300">
        {feature.title}
      </div>
    </div>
  );
};

export default WhyWeStandApart;
