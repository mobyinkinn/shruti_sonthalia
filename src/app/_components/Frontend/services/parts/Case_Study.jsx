import React from "react";
import case1 from "../assets/case_study/case1.png";
import case2 from "../assets/case_study/case2.png";
import case3 from "../assets/case_study/case3.png";
import case4 from "../assets/case_study/case4.png";

const Case_Study = () => {
  return (
    <div className="flex flex-col mt-12">
      <div className="flex flex-col justify-center items-center space-x-4 text-center space-y-6">
        <span className="text-[1.4rem] leading-none ">Real-World Impact</span>
        <span className="text-[2.5rem] leading-none tracking-wider font-medium uppercase text-[#E22E1B]">
          Case Study 1
        </span>
        <span className="text-[1.4rem] leading-6 tracking-wider text-[#151583]">
          Transforming Challenges Into Leadership Triumphs
        </span>
      </div>

      <div className="mt-12">
        <div className="flex flex-row justify-between">
          <div className=" w-[28%]">
            <div
              className="hidden md:flex w-full min-h-[322px] md:min-h-[322px] lg:min-h-[350px] xl:min-h-[480px] rounded-[40px] bg-cover bg-center"
              style={{ backgroundImage: `url(${case1.src})` }}
            ></div>
          </div>
          <div className="flex flex-col w-[68%] space-y-8 justify-center">
            <span className="text-[1.2rem] leading-none font-normal uppercase">
              Client Challenge
            </span>
            <span className="text-[1.2rem] leading-7 font-normal  tracking-widest">
              The President of a third-generation family-run business faced the
              complex task of leading a successful legacy company. Balancing the
              need to assert his leadership authority while earning the respect
              of senior team members proved challenging. He sought to identify
              gaps in his leadership and improve relationships within the
              organisation.
            </span>

            <span className="text-[1.2rem] leading-none font-normal uppercase">
              Coaching Outcome
            </span>
            <span className="text-[1.2rem] leading-7 font-normal tracking-widest">
              After six months of coaching, the client reported a deep
              connection with his leadership stance. The coaching process
              enhanced his ability to navigate ambiguities in both life and
              business situations. Improved communication skills transformed his
              interactions, allowing him to express needs clearly, connect with
              others, and set healthy boundaries. This transformation reinstated
              confidence in collaborating with key stakeholders.
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center space-x-4 text-center space-y-6 mt-12">
        <span className="text-[2.5rem] leading-none tracking-wider font-medium uppercase text-[#E22E1B]">
          Case Study 2
        </span>
        <span className="text-[1.4rem] leading-6 tracking-wider text-[#151583]">
          From Email Wars to Collaborative Victory
        </span>
      </div>

      <div className="mt-12">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col w-[68%] space-y-8 justify-center">
            <span className="text-[1.2rem] leading-none font-normal uppercase">
              Client Challenge
            </span>
            <span className="text-[1.2rem] leading-7 font-normal  tracking-widest">
              An international business development head faced feedback on his
              people management skills, particularly collaboration issues with
              peers. His high-achieving role required effective collaboration,
              but occasional email conflicts impacted team culture.
            </span>

            <span className="text-[1.2rem] leading-none font-normal uppercase">
              Coaching Outcome
            </span>
            <span className="text-[1.2rem] leading-7 font-normal tracking-widest">
              The coaching process revealed the cost of lacking social and
              emotional intelligence for the client. Through sessions exploring
              nonviolent communication, he experienced a significant shift. The
              coaching journey became a “life-changing experience”, smoothing
              rough edges in power-sharing, understanding on g vulnerability,
              open communication, and empathetic listening. A pulse survey at
              the end demonstrated positive shifts in collaboration with
              colleagues.
            </span>
          </div>
          <div className=" w-[28%]">
            <div
              className="hidden md:flex w-full min-h-[322px] md:min-h-[322px] lg:min-h-[350px] xl:min-h-[480px] rounded-[40px] bg-cover bg-center"
              style={{ backgroundImage: `url(${case2.src})` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center space-x-4 text-center space-y-6 mt-12">
        <span className="text-[2.5rem] leading-none tracking-wider font-medium uppercase text-[#E22E1B]">
          Case Study 3
        </span>
        <span className="text-[1.4rem] leading-6 tracking-wider text-[#151583]">
          Reflect, Reveal, Rise: A Reflective Partner for Quantum Growth and
          Contentment
        </span>
      </div>

      <div className="mt-12">
        <div className="flex flex-row justify-between">
          <div className=" w-[28%]">
            <div
              className="hidden md:flex w-full min-h-[322px] md:min-h-[322px] lg:min-h-[350px] xl:min-h-[480px] rounded-[40px] bg-cover bg-center"
              style={{ backgroundImage: `url(${case3.src})` }}
            ></div>
          </div>
          <div className="flex flex-col w-[68%] space-y-8 justify-center">
            <span className="text-[1.2rem] leading-none font-normal uppercase">
              Client Challenge
            </span>
            <span className="text-[1.2rem] leading-7 font-normal  tracking-widest">
              The Deputy Head of Leadership and Talent Development faced major
              life changes, exploring options, creativity, and grappling with
              self-esteem and boundary issues. Health challenges were
              intertwined with these personal and professional challenges.
            </span>

            <span className="text-[1.2rem] leading-none font-normal uppercase">
              Coaching Outcome
            </span>
            <span className="text-[1.2rem] leading-7 font-normal tracking-widest">
              Over four months, the client took responsibility for publishing a
              book, quit her full-time job, and addressed discomfort in saying
              no and setting boundaries. The coaching journey, marked by
              kindness and insightful questioning, allowed her to explore and
              resolve personal issues. Her ability to take charge of her life
              improved significantly.
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center space-x-4 text-center space-y-6 mt-12">
        <span className="text-[2.5rem] leading-none tracking-wider font-medium uppercase text-[#E22E1B]">
          Case Study 4
        </span>
        <span className="text-[1.4rem] leading-6 tracking-wider text-[#151583]">
          Navigating Stresses and Loneliness with Executive Wisdom
        </span>
      </div>

      <div className="mt-12">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col w-[68%] space-y-8 justify-center">
            <span className="text-[1.2rem] leading-none font-normal uppercase">
              Client Challenge
            </span>
            <span className="text-[1.2rem] leading-7 font-normal  tracking-widest">
              An Associate Director at an international education non-profit
              struggled with burnout while meeting strategic leadership
              expectations. The client sought to balance assertiveness with
              personal health and departmental needs, acknowledging the
              loneliness of leadership.
            </span>

            <span className="text-[1.2rem] leading-none font-normal uppercase">
              Coaching Outcome
            </span>
            <span className="text-[1.2rem] leading-7 font-normal tracking-widest">
              Over seven months, the coaching process shifted the client from
              daily burnout to enhanced vitality. The client developed
              assertiveness, clarity, and a focus on the “important but not
              urgent” quadrant. Acceptance of seniority and specialisation
              allowed her to build a community of practice, addressing the need
              for connection in leadership.
            </span>
          </div>
          <div className=" w-[28%]">
            <div
              className="hidden md:flex w-full min-h-[322px] md:min-h-[322px] lg:min-h-[350px] xl:min-h-[480px] rounded-[40px] bg-cover bg-center"
              style={{ backgroundImage: `url(${case2.src})` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Case_Study;
