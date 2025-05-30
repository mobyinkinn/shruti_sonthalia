const HoverEffectText = () => {
  const textItems = [
    "Prioritising Your Time",
    "Building Self-Confidence",
    "Overcoming Procrastination",
    "Overcoming the Fear of Failure",
    "Maintaining Focus, Direction & Motivation",
  ];

  return (
    <div className="flex flex-col items-center justify-center pt-10 relative">
      <div className="py-5 flex flex-col items-center gap-2">
        <h2 className="text-2xl md:text-3xl font-normal text-center text-[#E53935] underline-offset-4 capitalize">
          Introducing Shruti Sonthalia
        </h2>
        <p className="text-black text-lg font-bold text-center max-w-5xl mx-auto leading-relaxed">
          Master Certified Coach, Trusted Advisor to C-Suite Leaders and Coaches
        </p>
      </div>
      <div
        className="relative w-[100%] h-[631px] bg-cover bg-right md:flex hidden justify-end items-start  pt-6"
        style={{ backgroundImage: `url('/tempBanner.png')` }}
      ></div>
      <div
        className="relative w-[100%] h-[631px] bg-cover bg-right md:hidden flex justify-end items-start  pt-6"
        style={{ backgroundImage: `url('/Intro.jpg')` }}
      ></div>
      <p className="absolute w-[89%] pb-4 text-white text-lg md:text-xl max-w-4xl bottom-0 text-center">
        Shruti Sonthalia, a highly accomplished Master Certified Coach
        recognized by the International Coaching Federation (ICF), conveys a
        profound depth and breadth of experience, a fervent passion for
        coaching, and exceptional coaching expertise. Her extensive journey
        encompasses the C-Suite and senior leadership in diverse sectors,
        ranging from multinational corporations and technology leaders to family
        businesses, as well as mentoring fellow coaches.
      </p>
    </div>
  );
};

export default HoverEffectText;
