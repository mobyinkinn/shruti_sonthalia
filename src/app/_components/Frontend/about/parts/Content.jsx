// import React from 'react'

// const Content = () => {
//   return (
//     <div className="flex flex-row items-center">
//       <p className="text-[#E53935] text-[2rem] font-bold w-[72%]">
//         Unlocking Potential, Delivering Results
//       </p>
//       <p className="text-[1.2rem] leading-7 text-left">
//         At RuhCo., we blend ancient wisdom with data-backed insight to cultivate
//         leaders who lead with clarity, presence, and purpose. From C-suite to
//         emerging teams, our personalized coaching empowers transformation at
//         scale — building resilient, high-performing teams in a fast-changing
//         world.
//       </p>
//     </div>
//   );
// }

// export default Content
import React from "react";

const Content = () => {
  return (
    <div className="flex flex-col md:flex-row items-center px-4 md:px-8 py-8">
      <p className="text-[#E53935] text-[2rem] font-bold w-full md:w-[32%] text-center md:text-left mb-4 md:mb-0">
        Unlocking Potential, Delivering Results
      </p>
      <p className="text-[1.2rem] leading-7 w-full md:w-[72%] text-center md:text-left">
        At RuhCo., we blend ancient wisdom with data-backed insight to cultivate
        leaders who lead with clarity, presence, and purpose. From C-suite to
        emerging teams, our personalized coaching empowers transformation at
        scale — building resilient, high-performing teams in a fast-changing
        world.
      </p>
    </div>
  );
};

export default Content;
