import Image from "next/image";
import img from "../assets/2.png"
import img2 from "../assets/3.png";

const CaseStudy = () => {
  return (
    <section className="py-16 bg-white">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-red-600">
          CASE STUDY
        </h2>
      </div>

      {/* Challenge Section */}
      <div className="md:flex md:items-center mb-12 justify-around">
        {/* Left Column - Text */}
        <div className="mt-6 md:mt-0">
          <Image
            src={img} // Replace with actual image path
            alt="Challenge Image"
            width={400}
            height={200}
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 md:pr-10">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Challenge
          </h3>
          <p className="text-lg text-gray-700 mb-4">
            In the challenging post-COVID market, one of the largest global
            packaging ink companies in India faced significant struggles.
            <br />
            The market landscape had drastically changed, characterized by
            extreme price sensitivity and a noticeable lack of customer loyalty.
            Compounding these challenges was the rapid rise of SMEs and sole
            proprietorship firms. These smaller competitors had a distinct
            advantage as they:
          </p>
          <span className="list-disc pl-6 text-lg text-[#151583]">
            <p>ō Possessed a deep understanding of local geographies</p>
            <p>ō Provided faster service due to fewer required approvals</p>
            <p>ō Operated at lower costs because of reduced overhead</p>
          </span>
          <p className="mt-4 text-lg">
            These dynamics left larger companies at a disadvantage, struggling
            to maintain market share and customer satisfaction.
          </p>
        </div>

        {/* Right Column - Image */}
      </div>
      <div className="flex flex-row justify-around">
        {/* Intervention Section */}
        <div className="text-left flex justify-center flex-col">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Intervention
          </h3>
          <p className="text-lg text-gray-700 mx-auto max-w-3xl">
            This intervention enabled the company to establish a three-year
            vision and roadmap in response to changing business contexts. We
            facilitated the transition from a product-oriented to a
            service-oriented, customer-centric business model by addressing
            interdepartmental bottlenecks and defining the necessary culture and
            behaviors to achieve the vision and roadmap.
          </p>
          <p className="text-lg text-gray-700 mt-6 mx-auto max-w-3xl">
            Our collaboration with 40 key leaders included coaching senior
            leaders and establishing a Change Champions Committee to ensure
            sustained change.
          </p>
        </div>

        {/* Right-aligned Image for Intervention */}
        <div className="text-center mt-12">
          <Image
            src={img2} // Replace with actual image path
            alt="Intervention Image"
            width={400}
            height={200}
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
