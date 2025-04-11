import React from 'react'
import HeroCopy from './HeroCopy'
import One from './One'
import hero_banner from "../assets/2.jpg";
const Second = () => {
  const data = `<section>
  <h2>Scaling with Structure – A Leading Ethnic Wear Brand’s Growth Journey</h2>
</section>

<section>
  <h3>Client Need</h3>
  <p>
    A leading Indian ethnic wear brand experienced explosive growth, expanding from a local market presence to over 400 stores across India. However, the rapid scale exposed critical gaps in internal systems and management structures. The top leadership needed clarity in organisational structure, better-aligned stakeholder communication, and a shift in strategic decision-making capacity to support their ambitious growth trajectory.
  </p>
</section>

<section>
  <h3>Solution</h3>
  <p>We designed and facilitated a comprehensive transformation program that included:</p>
  <ul>
    <li>Clarifying the company’s vision and translating it into a redesigned organisational structure.</li>
    <li>Rebalancing portfolios and responsibilities across departments.</li>
    <li>Facilitating strategic sessions to evolve senior leadership thinking.</li>
    <li>Coaching the Managing Director and senior leadership team to foster direct communication and collaborative leadership.</li>
  </ul>
  <p>We also:</p>
  <ul>
    <li>Developed a second line of leaders through coaching and leadership training.</li>
    <li>Sourced and recruited a values-aligned HR professional to anchor cultural and process shifts.</li>
  </ul>
</section>

<section>
  <h3>Results & Insights</h3>
  <ul>
    <li>Introduced systems that supported employee development, role clarity, and execution.</li>
    <li>Restructured departments under clear Heads of Departments (HoDs).</li>
    <li>Built a strong leadership pipeline to sustain momentum.</li>
    <li>Enhanced strategic thinking and time management across leadership.</li>
    <li>Dissolved power centres and repaired communication breakdowns.</li>
    <li>Empowered managers to lead 10x larger teams, especially within the retail supply chain.</li>
    <li>The new HR manager went on to design and implement nationwide retail excellence training, significantly improving customer experience.</li>
  </ul>
</section>
`;
  return (
   <>
   <HeroCopy image={hero_banner}/>
   <One data={data}/>
   </>
  )
}

export default Second;