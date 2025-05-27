import React from 'react'
import HeroCopy from './HeroCopy'
import One from './One'
import hero_banner from "../assets/8.jpg";
import i22 from "../assets/i22.jpg";

const Ten = () => {
  const data = `<section>
  <h2>Speaking Up with Courage and Confidence</h2>
</section>

<section>
  <h3>Client Need</h3>
  <p>
    An Operations Lead at a global non-profit in Pakistan was navigating complex interpersonal dynamics in a patriarchal workplace. She wanted to improve communication with her team, have courageous conversations, and increase visibility—while learning to speak with authenticity and confidence.
  </p>
</section>

<section>
  <h3>Solution</h3>
  <p>
    Coaching introduced her to the Internal Family Systems (IFS) approach. We worked to identify the inner parts that triggered fear and self-doubt in group settings. Understanding their protective role, she learned to dialogue with these parts and address their concerns, helping her embody a more confident, grounded self.
  </p>
</section>

<section>
  <h3>Results & Insights</h3>
  <ul>
    <li>Developed the ability to speak confidently in groups and share her voice without fear of judgment.</li>
    <li>Built internal emotional intelligence, understanding the root of fear-based reactions.</li>
    <li>Gained insight into the connection between internal narratives and external behavior.</li>
  </ul>
</section>

<section>
  <h3>Testimonial</h3>
  <blockquote>
    <p>
      “Learning about the internal family system gave me the power to understand and address the parts within me. One part was trying to protect me from embarrassment—and once I understood that, I was free to be more of myself. I feel more confident and comfortable in team settings now.”
    </p>
    <footer>— Humanitarian Organisation Operations Lead, Pakistan</footer>
  </blockquote>
</section>
`;
  return (
    <>
      <HeroCopy image={hero_banner} mobile={i22} />
      <One data={data} />
    </>
  );
}

export default Ten