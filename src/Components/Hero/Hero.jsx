import profile_img from "../../assets/profile_img.png";

function Hero() {
  return (
    <section className="flex flex-col items-center gap-9 pt-[100px]" id="home">
      <img src={profile_img} alt="profile" className="h-[200px]" />

      <h1 className="text-center w-[90%] md:w-[70%] text-4xl md:text-6xl font-semibold leading-tight">
        <span className="bg-gradient-to-r from-[rgba(173,15,0,0.88)] to-[#eec9c9e6] bg-clip-text text-transparent">
          I am a Nehu Kashyap
        </span>
        <br />
        Front-end Developer
      </h1>

      <p className="w-[90%] md:w-1/2 text-center text-lg md:text-xl leading-8">
        I am a passionate front-end developer, eager to learn and create amazing web experiences.
      </p>

      <div className="flex items-center gap-6 text-lg font-medium mb-12 flex-wrap justify-center">
        {/* Button 1 */}
        <button className="px-6 py-2 rounded-[20px] bg-gradient-to-r from-[#ad0f00e0] to-[#eec9c9e6] 
          transition-all duration-300 
          hover:border-2 hover:border-white 
          active:scale-95 active:ring-2 active:ring-white">
          Connect With Me
        </button>

        {/* Button 2 */}
        <button className="px-5 py-2 rounded-[20px] border-2 border-white 
          transition-all duration-300 
          hover:border-[#ad0f00e0] 
          active:scale-95 active:border-[#ad0f00e0]">
          My Resume
        </button>
      </div>
    </section>
  );
}

export default Hero;
