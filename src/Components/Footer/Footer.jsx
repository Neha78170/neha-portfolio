import user_icon from '../../assets/user_icon.png'

const Footer = () => {
  return (
    <div className="flex flex-col gap-[30px] my-[40px] mx-[80px] text-white">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-5">
        <div className="max-w-[400px]">
          <p className="text-[18px]">
            I am Passionate front-end developer, eager to learn and create amazing web experience.
          </p>
        </div>

        <div className="flex items-center gap-[30px]">
          <div className="flex items-center gap-[20px] pr-[80px] py-[5px] px-[10px] rounded-full bg-[#32323c] hover:scale-110 transition-transform duration-300">
            <img src={user_icon} alt="" className="h-[50px]" />
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent outline-none border-none text-white text-[16px] font-[Outfit] placeholder-white"
            />
          </div>
        </div>
      </div>

      <hr className="border-gray-600" />

      {/* Bottom Section */}
      <div className="flex flex-col lg:flex-row justify-between text-[16px]">
        <p className="mb-5 lg:mb-0">© 2025 Neha Kashyap. All rights reserved.</p>
        <div className="flex gap-[50px] mb-[50px]">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
