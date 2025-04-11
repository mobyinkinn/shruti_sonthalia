import React from 'react'
import HeroCopy from './HeroCopy'
import One from './One'
import hero_banner from "../assets/1.jpg";
const FirstOne = () => {
  const data = `<section>
        <h2>How a Virtual Coaching Initiative Transformed Leadership</h2>
        <p>
          <strong>Location:</strong> Fiji and Madagascar
        </p>
      </section>

      <section>
        <h3>Client Need</h3>
        <p>
          In 2017–2018, a prominent US government-funded international volunteer
          organisation working across Fiji and Madagascar encountered a unique
          leadership challenge. While the teams were highly capable, the complex
          socio-cultural landscape and remote geographies made consistent
          engagement and stakeholder management difficult.
        </p>
        <p>
          Having personally experienced the impact of coaching, the Country
          Director of the Fiji office sought to extend this developmental
          opportunity to his leadership team. The goal was to enhance
          communication, strengthen leadership capacity, and empower team
          members to support a wide network of field volunteers better. However,
          the effort was complicated by limited internet connectivity,
          especially on the smaller Fijian islands, calling for an innovative
          virtual coaching model that could work despite technological and
          cultural constraints.
        </p>
      </section>

      <section>
        <h3>Solution</h3>
        <p>
          We stepped in as the program designers, project managers, and coaching
          team for this pioneering intervention. In collaboration with the
          Country Director and Director of Training, we developed a fully
          virtual coaching experience via Skype—well before online coaching
          became the norm post-pandemic.
        </p>
        <p>
          <strong>Key components included:</strong>
        </p>
        <ul>
          <li>
            Design and delivery of a culturally sensitive coaching framework
          </li>
          <li>
            Recruitment of a diverse coaching team from India, Thailand, and
            Hong Kong
          </li>
          <li>
            Virtual group launches and orientation sessions that fostered trust
            and cultural awareness
          </li>
          <li>
            Individual coaching sessions delivered in audio-only mode, tailored
            to bandwidth limitations
          </li>
          <li>
            Introduction of a "coaching debrief" method where breakthroughs were
            translated into actionable team strategies
          </li>
        </ul>
      </section>

      <section>
        <h3>Results & Insights</h3>
        <h4>Fiji Outcomes:</h4>
        <ul>
          <li>
            Leaders gained confidence to speak up and engage more directly in
            team settings
          </li>
          <li>
            Increased support for volunteers, with coaching tools being applied
            in real-time
          </li>
          <li>
            Encouraged open conversations that led to better planning and
            execution of large-scale projects
          </li>
          <li>
            Empowered leaders to create coaching moments within their own teams
          </li>
          <li>
            A noticeable boost in team energy, with quiet members stepping into
            visible, inspirational roles
          </li>
        </ul>

        <h4>Madagascar Outcomes:</h4>
        <ul>
          <li>
            Senior team members underwent an application process to participate
          </li>
          <li>Enhanced cross-team collaboration and internal communication</li>
          <li>
            Strengthened capacity for empathic leadership and active listening
          </li>
          <li>
            Remarkable shift in team morale, with leaders stepping into their
            authority with clarity
          </li>
        </ul>
      </section>

      <section>
        <h3>Ripple Effects</h3>
        <ul>
          <li>
            We were invited to coach the Director of Programming and Training in
            Fiji
          </li>
          <li>
            We later mentored the Regional Advisor for Southern and East Africa
            during her credential renewal journey
          </li>
          <li>
            The intervention evolved into a blueprint for grassroots leadership
            coaching, emphasizing accessibility, empathy, and virtual innovation
          </li>
        </ul>
      </section>

      <section>
        <h3>Testimonials</h3>
        <blockquote>
          <p>
            “My team really brings its best selves to your sessions. You make
            them feel safe and interested in sharing, learning, and bettering
            themselves. They also seem more relaxed, present, and hopeful.”
          </p>
          <footer>— Country Director, Madagascar</footer>
        </blockquote>

        <blockquote>
          <p>
            “I loved the methodology you used. The process was clear and
            practical and the insights really drove home the concepts for us.
            Thank you for the time and care you gave to us. We felt heard, seen,
            and loved, and will cherish this experience and grow from it.”
          </p>
          <footer>— Leadership Team Member, Madagascar</footer>
        </blockquote>

        <blockquote>
          <p>
            “You helped me to realize that I don’t have to fix everything in my
            life. You also helped me to listen with my heart. I connected on
            another level with a volunteer in crisis—she said it was the most
            useful conversation she’d ever had.”
          </p>
          <footer>— Coaching Participant, Fiji</footer>
        </blockquote>
      </section>`;
  return (
    <>
      <HeroCopy image={hero_banner} />
      <One data={data} />
    </>
  );
}

export default FirstOne