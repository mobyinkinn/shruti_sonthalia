import React from 'react'
import HeroCopy from './HeroCopy';
import One from './One';
import hero_banner from "../assets/10.jpg";
import i24 from "../assets/i24.jpg";
const Twelve = () => {
    const data = `<section>
  <h2>From Burnout to Vitality</h2>
</section>

<section>
  <h3>Client Need</h3>
  <p>
    An Associate Director at a renowned education-focused international non-profit was facing burnout. Balancing strategic leadership expectations with personal well-being had become unsustainable. She sought support to reconnect with her energy and reprioritize her life.
  </p>
</section>

<section>
  <h3>Solution</h3>
  <p>
    Over seven months of biweekly coaching sessions, we worked on reframing her time, energy, and leadership through a lens of vitality, purpose, and personal agency. She began attending to what mattered—beyond the urgent—and reclaimed her space as a leader.
  </p>
</section>

<section>
  <h3>Results & Insights</h3>
  <ul>
    <li>Transitioned from daily burnout to a renewed sense of vitality and well-being.</li>
    <li>Became more assertive and clear in prioritization.</li>
    <li>Started focusing on the “important but not urgent”—like her own health and long-term strategic needs of the department.</li>
    <li>Accepted the loneliness of senior leadership, and actively built a community of practice to meet her emotional needs.</li>
  </ul>
</section>
`;
  return (
    <>
      <HeroCopy image={hero_banner} mobile={i24}/>
      <One data={data} />
    </>
  );
}

export default Twelve