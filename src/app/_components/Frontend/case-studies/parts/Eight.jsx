import React from 'react'
import HeroCopy from './HeroCopy'
import One from './One'
import hero_banner from "../assets/5.jpg";
import i16 from "../assets/i16.jpg";

const Eight = () => {
  const data = `<section>
  <h2>Overcoming Inertia and Creating Career Clarity</h2>
</section>

<section>
  <h3>Client Need</h3>
  <p>
    A senior leader in the digital experience (Telecom sector) was experiencing inertia around progressing in his career. He lacked clarity on how to move ahead and wasn’t engaging in the necessary conversations with HR or leadership to express his aspirations or challenges.
  </p>
</section>

<section>
  <h3>Solution</h3>
  <p>In coaching, we explored:</p>
  <ul>
    <li>Self-introspection as a tool to identify limiting beliefs.</li>
    <li>Structured conversations around building personal brand visibility.</li>
    <li>Practical steps to initiate open dialogues with leadership and HR.</li>
  </ul>
</section>

<section>
  <h3>Results & Insights</h3>
  <ul>
    <li>Gained clarity on key focus areas for growth: personal branding and advocacy.</li>
    <li>Built confidence to initiate conversations with internal stakeholders.</li>
    <li>Developed a clear action plan for navigating career transitions.</li>
  </ul>
</section>

<section>
  <h3>Testimonial</h3>
  <blockquote>
    <p>
      “The interaction helped me introspect and identify clear steps like building visibility and overcoming hesitation to talk to leadership. Your way of interacting made it easy to open up and explore these things. Thank you.”
    </p>
    <footer>— Head of Digital Experience, Telecom (Anonymous)</footer>
  </blockquote>
</section>
`;
  return (
    <>
      <HeroCopy image={hero_banner} mobile={i20}/>
      <One data={data} />
    </>
  );
}

export default Eight