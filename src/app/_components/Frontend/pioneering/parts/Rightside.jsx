import React from 'react'
import ten from "../assets/Mask10.png";
import eleven from "../assets/Mask11.png";
import twelve from "../assets/Mask12.png";
import thirteen from "../assets/Mask13.png";
import forteen from "../assets/Mask14.png";
import fifteen from "../assets/Mask15.png";


import Image from 'next/image';
const Rightside = () => {
  return (
    <>
      <div className="flex flex-col w-[40%] ">
        <div className="w-full pt-60 pb-30 flex flex-row">
          <Image
            src={ten}
            alt="Conference Hall 2"
            width={500}
            height={300}
            className="w-full h-auto object-cover"
          />
          <Image
            src={eleven}
            alt="Conference Hall 2"
            width={500}
            height={300}
            className="w-full h-auto object-cover p-10"
          />
        </div>
        <div className="w-full py-8 text-gray-900 font-sans space-y-10">
          <div>
            <p className="text-[1.5rem] font-semibold">2022 - 2023</p>
            <h2 className="text-[#E22E1B] font-semibold text-[1.8rem]">
              Graduate Women’s International, Geneva
              <span className="text-[#E22E1B] font-normal text-[1.8rem]">
                (Global Board Member)
              </span>
            </h2>
          </div>

          <div>
            <p className="text-[1.5rem] font-semibold">2019 - Present</p>
            <h2 className="text-[#E22E1B] font-semibold text-[1.8rem]">
              Graduate Women’s International (GWI)
            </h2>
            <span className="list-disc list-inside mt-2 space-y-1">
              <p>
                <span className="text-[#151583] text-[1.3rem] pr-2">ō</span>{" "}
                Young Member’s Advocacy Vice President and Education Committee.
              </p>
              <p>
                <span className="text-[#151583] text-[1.3rem] pr-2">ō</span>{" "}
                Designed, moderated, and co-facilitated multiple sessions,
                including "Connecting Across Generations" webinar series and
                Town Hall.
              </p>
              <p>
                <span className="text-[#151583] text-[1.3rem] pr-2">ō</span>{" "}
                Invited as a GWI Delegation representative at the 64th
                Commission on the Status of Women at the UN HQ in New York
                (suspended due to COVID-19).
              </p>
            </span>
          </div>
        </div>
        <div className="w-full rounded-2xl overflow-hidden pt-60 pb-40">
          <Image
            src={twelve}
            alt="Conference Hall 2"
            width={1000}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-6 px-6 pb-80 bg-white">
          <div className="flex flex-col gap-6 w-[60%]">
            <div className="rounded-2xl overflow-hidden">
              <Image
                src={thirteen}
                alt="Coaching Conference 1"
                width={1000}
                height={800}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden">
              <Image
                src={forteen}
                alt="Coaching Conference 2"
                width={1000}
                height={800}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden w-[50%]">
            <Image
              src={fifteen} // Replace with your image
              alt="ICF Coaching Visual"
              width={800}
              height={1000}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        <div className="w-full px-6 py-10  text-gray-900 font-sans space-y-10">
          <div>
            <p className="text-[1.5rem] font-semibold ">2017 – 2018</p>
            <h2 className="text-[#E22E1B] font-semibold text-[1.8rem]">
              Peace Corps Coaching Intervention, Fiji & Madagascar
            </h2>
            <span className="list-disc list-inside mt-2 space-y-1">
              <p>
                <span className="text-[#151583] text-[1.3rem] pr-2">ō</span> I
                led a coaching intervention for the Peace Corps, in Fiji and
                Madagascar, working in partnership with the Country Head and
                Training Director to design a unique coaching initiative.I
                introduced the idea of a coaching “debrief” where after an
                hour-long coaching conversation, the coach decoded the skills
                that had created the ‘aha’ moment for their clients in the
                session, providing them insights on the skills they could embody
                with their team. For the first time, we were designing an
                entirely virtual intervention.Given the bandwidth challenges of
                smaller Fijian islands, the intervention became totally
                auditory, where I supported the coaches to rely on their
                listening skills and intuition.I recruited coaches from India,
                Thailand and Hong Kong to offer coaches’ choice, time
                flexibility and meet the diversity in their team. The
                intervention led to a noticeable increase in vitality,
                collaboration, and stakeholder management. Inspired by the
                outcomes, the Madagascar Country Director requested a similar
                programme for her team. The experience elevated my
                cross-cultural competencies, prepared me to pivot in the
                pandemic and deepened my conviction to coach social impact
                leaders
              </p>
            </span>
          </div>

          {/* 2009 */}
          <div className='pt-20'>
            <p className="text-[1.5rem] font-semibold">2009</p>
            <h2 className="text-[#E22E1B] font-semibold text-[1.8rem]">
              International Student of the Year for London
            </h2>
            <ul className="list-disc list-inside text-blue-800 mt-2">
              <p>
                <span className="text-[#151583] text-[1.3rem] pr-2">ō</span>{" "}
                Awarded by The British Council.
              </p>
            </ul>

            <h2 className="text-[#E22E1B] font-semibold text-[1.8rem] mt-4">
              Global Ethics, The One Foundation, London
            </h2>
            <ul className="list-disc list-inside text-blue-800 mt-2 space-y-1">
              <p>
                <span className="text-[#151583] text-[1.3rem] pr-2">ō</span>{" "}
                Worked under COO Julie Devonshire.
              </p>
              <p>
                <span className="text-[#151583] text-[1.3rem] pr-2">ō</span>{" "}
                Conducted costing/evaluation of eight options for the supply
                chain service component.
              </p>
            </ul>

            <h2 className="text-[#E22E1B] font-semibold text-[1.8rem] mt-4">
              Aim Higher Path Finder, London
            </h2>
            <ul className="list-disc list-inside text-blue-800 mt-2 space-y-1">
              <p>
                <span className="text-[#151583] text-[1.3rem] pr-2">ō</span>{" "}
                Government-aided program to support school learners toward
                Higher Education.
              </p>
              <p>
                <span className="text-[#151583] text-[1.3rem] pr-2">ō</span>{" "}
                Trained and placed at St. George’s School, Maida Vale.
              </p>
            </ul>
          </div>

          {/* 2007 - 2008 */}
          <div>
            <p className="text-[1.5rem] font-semibold">2007 - 2008</p>
            <h2 className="text-[#E22E1B] font-semibold text-[1.8rem]">
              National Mentoring Scheme, London
            </h2>
            <ul className="list-disc list-inside text-blue-800 mt-2 space-y-1">
              <p>
                <span className="text-[#151583] text-[1.3rem] pr-2">ō</span>{" "}
                Weekly one-on-one mentoring at George Green School.
              </p>
              <p>
                <span className="text-[#151583] text-[1.3rem] pr-2">ō</span>{" "}
                Built trust and motivation with mentees for academic and
                personal growth.
              </p>
            </ul>
          </div>

          {/* 2006 - 2007 */}
          <div>
            <p className="text-[1.5rem] font-semibold">2006 - 2007</p>
            <h2 className="text-[#E22E1B] font-semibold text-[1.8rem]">
              Young Entrepreneurship Network Society, SIM, Singapore
            </h2>
            <ul className="list-disc list-inside text-blue-800 mt-2">
              <p>
                <span className="text-[#151583] text-[1.3rem] pr-2">ō</span>{" "}
                Committee member – organized major events like “Cash Flow” and
                “Exoro.”
              </p>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Rightside