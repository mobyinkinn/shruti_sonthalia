import React from 'react'
import HeroCopy from './HeroCopy'
import One from './One'
import hero_banner from "../assets/3.jpg";

const Four = () => {
  const data = `<section>
  <h2>Navigating Disruption – Reinventing Strategy in the Packaging Ink Sector</h2>
</section>

<section>
  <h3>Client Need</h3>
  <p>
    In the wake of COVID-19, a global packaging ink solutions provider in India faced severe disruptions. The company found itself struggling to retain market share amidst price sensitivity, weakened customer loyalty, and rising competition from nimble SMEs. These competitors offered faster service, localized understanding, and low-cost models—factors that large firms struggled to match.
  </p>
</section>

<section>
  <h3>Solution</h3>
  <p>We partnered with the leadership team to reposition the business for a post-COVID landscape through:</p>
  <ul>
    <li>Facilitated two deep-dive leadership workshops for 40 leaders of the senior leadership team and a few key middle management who form the future leadership pipeline</li>
    <li>The first three-day session focused on vision, which enabled:
      <ul>
        <li>The shift from a product-focused model to a customer-first, service-oriented approach.</li>
        <li>The creation of a three-year strategic vision and roadmap</li>
        <li>Identification and resolution of interdepartmental bottlenecks that impacted collaboration and speed.</li>
      </ul>
    </li>
    <li>The second, two-day strategic session with the senior leadership team to address interdependencies and enable better cross-functional collaboration.</li>
    <li>Exploring what culture shift was required to achieve the organisation’s long-term vision.</li>
    <li>Identify behavioral shifts at the organisational, departmental, and individual levels.</li>
    <li>Surfaced conversations and specific behaviours that would facilitate an ownership mindset across roles.</li>
    <li>Defining how desired behaviours would be embodied, encouraged, rewarded, and reinforced within the organisation. How this would be percolated to all employees at all levels in the organisation.</li>
    <li>Discussed interventions needed to curtail default, undesired behaviours that hinder the desired organisation culture.</li>
  </ul>
  <p>Additionally, we:</p>
  <ul>
    <li>Provided targeted coaching to two sales leaders to support integration and alignment across business units.</li>
    <li>Established a Change Champions Committee to drive sustained momentum and peer accountability.</li>
  </ul>
</section>

<section>
  <h3>Results & Insights</h3>
  <ul>
    <li>Renewed organisational focus on customer centricity and agility.</li>
    <li>Cross-functional collaboration significantly improved.</li>
    <li>Created a shared leadership language around vision, execution, and culture.</li>
    <li>Empowered senior leaders to act as internal change agents.</li>
    <li>Set a foundation for long-term adaptability in an increasingly competitive market.</li>
  </ul>
</section>
`;
  return (
    <>
      <HeroCopy 
      image={hero_banner} />
      <One data={data} />
    </>
  );
}

export default Four