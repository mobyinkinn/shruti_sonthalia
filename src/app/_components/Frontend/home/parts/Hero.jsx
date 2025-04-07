
export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-[100%] relative ">
        {/* <Image src={hero} alt="" fill objectFit="cover" /> */}
        <video
          width="100%"
          height="100%"
          autoPlay
          loop
          muted
          controls={false}
          style={{ objectFit: "cover",borderRadius: "30px" }}
        >
          <source src="/Video.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
