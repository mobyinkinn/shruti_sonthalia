import React from 'react'
import HeroCopy from './HeroCopy'
import One from './One'
import hero_banner from "../assets/i7.png";

const Seven = () => {
  const data = `<section>
  <h2>Unlocking Strategic Focus and Accountability</h2>
</section>

<section>
  <h3>Client Need</h3>
  <p>
    A senior telecom leader (AVP) was seeking to build high-performing teams. He wanted to drive accountability, gain clarity, and allocate intentional time to work he was deeply passionate about. However, he often found it challenging to approach problems without personal bias and needed a more grounded perspective.
  </p>
</section>

<section>
  <h3>Solution</h3>
  <p>Through a structured coaching engagement, we worked on:</p>
  <ul>
    <li>Defining clear KPIs and aligning them with team goals.</li>
    <li>Encouraging reflective thinking and objective analysis.</li>
    <li>Challenging the client’s tendency to externalize problems by encouraging ownership and neutral assessment of situations.</li>
  </ul>
</section>

<section>
  <h3>Results & Insights</h3>
  <ul>
    <li>Greater accountability and clarity on what success looks like for his team.</li>
    <li>Learned to pause, reflect, and separate emotion from problem-solving.</li>
    <li>Created space to pursue meaningful work while driving results across the team.</li>
  </ul>
</section>

<section>
  <h3>Testimonial</h3>
  <blockquote>
    <p>
      “It helped me analyze things from a neutral standpoint and understand that externalising the problem does not lead to a solution. There was a lot of patience to hear me out and offer a perspective I wouldn’t have thought of myself.”
    </p>
    <footer>— Senior Leader, Telecom (Anonymous)</footer>
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

export default Seven