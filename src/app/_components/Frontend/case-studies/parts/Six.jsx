import React from "react";
import HeroCopy from "./HeroCopy";
import One from "./One";
import hero_banner from "../assets/6.jpg";

const Six = () => {
  const data = `<section>
  <h2>From Email Wars to Collaborative Wins</h2>
</section>

<section>
  <h3>Client Need</h3>
  <p>
    The client, the International Business Development Head at one of the world’s largest renewable energy companies, was a trusted performer known for delivering high-stakes business results. However, behind this success was a persistent leadership challenge—he frequently received feedback about poor collaboration with peers, an issue that had begun to affect the organisational culture.
  </p>
  <p>
    His role demanded constant coordination across functions, but unresolved interpersonal tensions occasionally escalated into heated email exchanges. For a leader of his seniority, this pattern was not only unsustainable but also damaging to his effectiveness and the cohesion of his team.
  </p>
</section>

<section>
  <h3>Solution</h3>
  <p>
    Our coaching engagement began with a clear diagnostic: a 360-degree feedback and Hogan psychometric assessment, which highlighted areas for growth in emotional and social intelligence.
  </p>
  <p>
    In the first two sessions, we unpacked the real cost of these gaps—not just for the business, but for his own leadership potential. A turning point came when he fully owned the need to shift.
  </p>
  <p>Our coaching then focused on:</p>
  <ul>
    <li>Introducing the principles of Nonviolent Communication (NVC) to help him recognise emotional triggers and take responsibility for his reactions.</li>
    <li>Deepening self-awareness and empathy to understand others' needs and perspectives.</li>
    <li>Building conscious communication habits, including open dialogue, active listening, and collaborative problem-solving.</li>
    <li>Exploring vulnerability as strength, and learning to share power and space with peers.</li>
  </ul>
  <p>
    The sessions became a space of transformation—not just of skills, but of mindset.
  </p>
</section>

<section>
  <h3>Results & Insights</h3>
  <ul>
    <li>A clear shift in peer collaboration and interpersonal dynamics, as reflected in a final pulse survey.</li>
    <li>Greater ease and effectiveness in working cross-functionally.</li>
    <li>Smoother power-sharing, more open and vulnerable conversations, and improved empathetic listening.</li>
    <li>The resolution of unproductive patterns like reactive email responses and combative communication.</li>
    <li>A deeper connection with his role—not just as a business driver but as a culture shaper.</li>
  </ul>
</section>

<section>
  <h3>Testimonial</h3>
  <blockquote>
    <p>
      “The coaching journey became a life-changing experience for me. It helped smoothen rough edges in areas like sharing power with peers, understanding vulnerability, open communication, and empathetic listening. I was finally able to see how my behaviour was impacting others and, more importantly, how I could change it.
    </p>
    <p>
      What started as feedback turned into an opportunity to evolve. The transformation wasn’t just visible to me—it was felt and acknowledged by my colleagues.”
    </p>
    <footer>— International Business Development Head, Middle East</footer>
  </blockquote>
</section>
`;
  return (
    <>
      <HeroCopy image={hero_banner} />
      <One data={data} />
    </>
  );
};

export default Six;
