import React from 'react'
import HeroCopy from './HeroCopy'
import One from './One'
import hero_banner from "../assets/7.jpg";

const Nine = () => {
  const data = `<section>
  <h2>Reclaiming Self Through Creativity and Boundaries</h2>
</section>

<section>
  <h3>Client Need</h3>
  <p>
    The client, Deputy Head of Leadership and Talent Development at a prominent Indian multinational, came to coaching at a time of significant personal and professional upheaval. She was exploring new possibilities, grappling with self-esteem issues, setting boundaries, and managing stress-induced health challenges. Beneath the surface lay a desire to rediscover herself and reconnect with her creativity.
  </p>
</section>

<section>
  <h3>Solution</h3>
  <p>
    Over four months, through biweekly coaching sessions, we explored themes of embracing the shadow, expanding perspective, and honoring inner truth. The coaching space allowed her to untangle deep-seated discomfort around saying “no,” helped her tune into her creative aspirations, and surfaced patterns that were draining her well-being.
  </p>
</section>

<section>
  <h3>Results & Insights</h3>
  <ul>
    <li>She made the courageous decision to quit her full-time job.</li>
    <li>She took full responsibility for publishing her book, a long-held dream.</li>
    <li>She gained confidence in setting boundaries and navigating difficult interpersonal dynamics.</li>
    <li>Her physical well-being improved as a by-product of emotional clarity.</li>
  </ul>
</section>

<section>
  <h3>Testimonial</h3>
  <blockquote>
    <p>
      “As a coach, Shruti was kind, asked insightful questions, and gave strong, helpful feedback. I felt both held and helped. Her presence, ability to reflect, and compassion made a real difference. I was lucky to have had her as my coach.”
    </p>
    <footer>— Deputy Head, Leadership & Talent Development</footer>
  </blockquote>
</section>
`;
  return (
    <>
      <HeroCopy image={hero_banner} />
      <One data={data} />
    </>
  );
}

export default Nine