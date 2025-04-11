import React from 'react'
import HeroCopy from './HeroCopy'
import One from './One'
import hero_banner from "../assets/4.jpg";

const Five = () => {
  const data = `<section>
  <h2>Reclaiming Leadership Authority in a Legacy Business</h2>
</section>

<section>
  <h3>Client Need</h3>
  <p>
    The client, the President of a well-established, third-generation family-run business, approached coaching with a deep desire to grow into his own leadership identity. He faced a complex challenge—asserting his authority while nurturing relationships with senior leaders who had served the business for decades.
  </p>
  <p>
    The delicate balance of leading with influence, not just position, required him to sharpen his leadership presence, develop effective communication strategies, and align more intentionally with his board and senior leadership team.
  </p>
  <p>
    What he sought was more than tactical skills. He was looking for a deeper connection to his leadership essence—how to lead with conviction and compassion.
  </p>
</section>

<section>
  <h3>Solution</h3>
  <p>
    Over six months, we embarked on a coaching journey that unfolded in two phases: weekly one-on-one sessions for the initial months, followed by biweekly check-ins. The coaching focused on:
  </p>
  <ul>
    <li>Uncovering internal blocks that limited his ability to claim his leadership fully.</li>
    <li>Enhancing emotional and relational intelligence.</li>
    <li>Developing influencing strategies rooted in authenticity.</li>
    <li>Practicing boundary-setting and clear, needs-based communication.</li>
    <li>Navigating ambiguity with presence and trust in his authority.</li>
  </ul>
  <p>
    The coaching space was intentionally held as safe, compassionate, and non-judgmental, allowing for deep introspection, emotional exploration, and strategic clarity.
  </p>
</section>

<section>
  <h3>Results & Insights</h3>
  <ul>
    <li>A deepened connection with his leadership stance and authority.</li>
    <li>Greater capacity to deal with ambiguity in both business and personal life.</li>
    <li>A significant shift in communication enabled him to express his needs clearly, connect empathetically with others, and set healthy boundaries.</li>
    <li>Improved collaboration and trust with key stakeholders, including board members and senior leaders.</li>
    <li>A renewed sense of confidence, clarity, and alignment in his leadership approach.</li>
  </ul>
</section>

<section>
  <h3>Testimonial</h3>
  <blockquote>
    <p>
      “My experience during my coaching work with Shruti was transformative for me as a leader. Her approach is very mindful, deeply compassionate, and non-judgmental. Her exceptional ability to hold space created a safe environment that allowed me to introspect and share some of my deepest vulnerabilities.
    </p>
    <p>
      This helped me deeply connect with myself, strengthen my intuition to deal with ambiguities, and develop greater trust in my own authority. One of the tangible outcomes is how my communication has transformed—I now express my needs clearly, connect with others empathetically, and set healthy boundaries. This has reinstated trust in my relationships with key stakeholders in both life and business.”
    </p>
    <footer>— President, Third-Generation Family Business</footer>
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

export default Five