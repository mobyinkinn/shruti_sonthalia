import Image from "next/image";
import culture from "../assets/culture.png";
const Importance = () => {
  return (
    <section className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 pt-12 px-16">
      {/* Text Section */}

      <div className="flex-1">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#E53935] mb-4 underline-offset-4">
          The Importance of Organisational Culture
        </h2>

        <p className="text-gray-800 text-base leading-relaxed mb-4">
          Culture is to organisations what personality is to individuals — it’s
          the expression of values, beliefs, and attitudes in everyday actions.
        </p>
        <p className="text-gray-800 text-base leading-relaxed mb-4">
          And yet, most organisations treat culture as an afterthought — until
          misalignment stalls strategy, disconnects teams, and drives talent
          away.
        </p>
        <div className="text-gray-800 text-base leading-relaxed mb-4">
          Studies reveal the cost of this misalignment:
          <div className="flex ml-6 space-x-2">
            <span className="text-[#151583]">ō</span>
            <p className="text-[#000000]">
              70% of large-scale transformations fail due to poor cultural
              alignment (McKinsey & Co.)
            </p>
          </div>
          <div className="flex ml-6 space-x-2">
            <span className="text-[#151583]">ō</span>
            <p className="text-[#000000]">
              Only 21% of employees feel strongly connected to their company’s
              culture (Gallup)
            </p>
          </div>
          <div className="flex ml-6 space-x-2">
            <span className="text-[#151583]">ō</span>
            <p className="text-[#000000]">
              94% of executives agree that culture is critical to business
              success (Deloitte)
            </p>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-1 rounded-2xl overflow-hidden shadow-md max-w-md w-full">
        <Image
          src={culture}
          alt="Culture"
          width={600}
          height={200}
          className="rounded-2xl"
        />
      </div>
    </section>
  );
};

export default Importance;
