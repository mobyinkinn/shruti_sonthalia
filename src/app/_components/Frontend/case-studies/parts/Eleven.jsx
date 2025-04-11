import React from 'react'
import HeroCopy from './HeroCopy'
import One from './One'
import hero_banner from "../assets/9.jpg";

const Eleven = () => {
  const data = `<section>
  <h2>Listening with the Heart</h2>
</section>

<section>
  <h3>Client Need</h3>
  <p>
    A seasoned medical officer with a global humanitarian organisation in the Pacific Islands was seeking to reconnect with her children, boost her well-being, and foster deeper relationships at work. She tended to be hard on herself when stressed and wanted to break out of cycles of judgment and procrastination.
  </p>
</section>

<section>
  <h3>Solution</h3>
  <p>
    Over six deeply reflective coaching sessions, we used humor, compassion, and powerful questioning to invite more self-awareness and self-love. While we didn’t directly address weight loss, the coaching organically led her toward joyful movement, improved self-talk, and self-compassion.
  </p>
</section>

<section>
  <h3>Results & Insights</h3>
  <ul>
    <li>Improved relationships with her children—learning to let go and allow them space.</li>
    <li>Developed the ability to listen with her heart, bringing more empathy to professional and personal relationships.</li>
    <li>Reconnected with joy and movement, she began dancing again and surprisingly, lost 10 pounds as a side effect of emotional healing.</li>
  </ul>
</section>

<section>
  <h3>Testimonial</h3>
  <blockquote>
    <p>
      “You made me feel important and understood. I learned I don’t have to fix everything—especially my kids! I now show myself love and listen with my heart. A colleague who was struggling opened up to me, and she said it was the most helpful talk she’d ever had. I truly connected on another level—thank you!”
    </p>
    <footer>— Medical Officer, Peace Corps Fiji</footer>
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

export default Eleven