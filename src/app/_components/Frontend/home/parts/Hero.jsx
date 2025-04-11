export default function Hero() {
  return (
    <div className="relative flex flex-col items-center justify-center ">
      <div className="w-[100%] h-screen relative ">
        {/* <Image src={hero} alt="" fill objectFit="cover" /> */}
        <video
          width="100%"
          height="100%"
          autoPlay
          loop
          muted
          controls={false}
          style={{ objectFit: "cover" }}
        >
          <source src="/Video.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
