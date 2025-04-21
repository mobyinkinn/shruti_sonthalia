import React from 'react'
import HeroCopy from './HeroCopy'
import One from './One'
import hero_banner from "../assets/3.jpg";

const Third = () => {
  const data = `<section>
  <h2>From Legacy to Leadership – A Traditional Manufacturing Firm’s Evolution</h2>
</section>

<section>
  <h3>Client Need</h3>
  <p>
    A 35-year-old, family-owned manufacturing firm in the chemical sector was ready for transformation. Despite their legacy, the promoter-director recognized the need for stronger systems in evaluation, delegation, and reporting to support business growth and innovation. There was a need to renew the organisation’s vision and better align leadership with long-term goals.
  </p>
</section>

<section>
  <h3>Solution</h3>
  <p>We facilitated a deep, organisation-wide transformation that included:</p>
  <ul>
    <li>Visioning workshops with the leadership team to craft a five-year growth roadmap.</li>
    <li>Clarifying strategic dimensions like green tech, waste management, certifications, and quality standards.</li>
    <li>Designing a new organisational structure, including portfolio realignment.</li>
    <li>Conducting “clarity conversations” to define outputs, accountability, and expectations for each leadership role.</li>
  </ul>
  <p>We also:</p>
  <ul>
    <li>Developed a leadership competency framework and ran an in-house 360-degree feedback process.</li>
    <li>Coached functional heads to step into leadership, including one leader at risk of being let go.</li>
    <li>Created Individual Development Plans (IDPs) to guide long-term leadership capacity building.</li>
  </ul>
</section>

<section>
  <h3>Results & Insights</h3>
  <ul>
    <li>5x increase in revenue over five years.</li>
    <li>20x increase in share price, driven by clear goals, leadership alignment, and accountability.</li>
    <li>Improved time management, internal communication, and strategic execution.</li>
    <li>The promoter-CEO, recognizing his constraints, appointed a new CEO, ensuring sustained growth.</li>
    <li>Reinforced the value of enabling legacy-driven, purpose-aligned businesses to scale through people and planet-focused strategies.</li>
  </ul>
</section>
`;
  return (
    <>
      <HeroCopy image={hero_banner} />
      <One data={data} />
    </>
  );
}

export default Third