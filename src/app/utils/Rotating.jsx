import Image from "next/image";

const RotatingImage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <img src="/video.png" alt="Rotating" className="w-120 h-120 test-spin" />
      <div className="absolute rounded-2xl">
       <Image
            src="/img.png"
            alt="Executive Coaching"
            width={400}
            height={200}
            className="rounded-[200px]"
        />
      </div>
    </div>
  );
};

export default RotatingImage;
