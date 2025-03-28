import Image from "next/image";
import workshop from "../assets/workshop.png";
const Workshop = () => {
  return (
    <section className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 py-12">
      {/* Text Section */}

      <div className="flex-1">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#E22E1B] mb-4 underline-offset-4 uppercase">
          Lead the Change:
        </h2>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#E22E1B] mb-4 underline-offset-4 uppercase">
          A Workshop to Navigate Transitions
        </h2>
        <p className="text-gray-800 text-base leading-relaxed mb-4">
          In today’s fast-paced business environment, 70% of change initiatives
          fail due to poor planning, resistance to change, and lack of
          leadership alignment (McKinsey, 2022). Organizations that successfully
          navigate change, however, are 1.5 times more likely to outperform
          their peers in revenue growth and profitability (BCG, 2022).
          <sup>*</sup>.
        </p>
        <p className="text-gray-800 text-base leading-relaxed mb-4">
          Whether you’re undergoing a digital transformation, merging with
          another company, or shifting to a hybrid work model, effective change
          management is the key to ensuring smooth transitions, engaged
          employees, and sustainable success. In a world where rapid change is
          constant, your organization needs a structured approach to navigating
          change. Our Change Management program is designed to help leaders,
          teams, and organizations implement change seamlessly, reduce
          resistance, drive measurable success and enable leaders to become
          active change champions.
        </p>
      </div>

      {/* Image Section */}
      <div className="flex-1 rounded-2xl overflow-hidden shadow-md max-w-md w-full">
        <Image
          src={workshop}
          alt="Leadership Team Discussion"
          width={600}
          height={400}
          className="rounded-2xl"
        />
      </div>
    </section>
  );
};

export default Workshop;
