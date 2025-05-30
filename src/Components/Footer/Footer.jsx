import user_icon from '../../assets/user_icon.png';

const Footer = () => {
  return (
    <div className="flex flex-col gap-6 my-10 px-4 sm:px-6 lg:px-[80px] text-white overflow-hidden">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-6">
        <div className="max-w-full lg:max-w-[400px]">
          <p className="text-base sm:text-lg">
            I am a passionate front-end developer, eager to learn and create amazing web experiences.
          </p>
        </div>

        <div className="flex items-center">
          <div className="flex items-center gap-3 sm:gap-4 pr-4 sm:pr-6 py-2 px-4 rounded-full bg-[#32323c] hover:scale-105 transition-transform duration-300 w-full sm:w-auto">
            <img src={user_icon} alt="user" className="h-8 sm:h-10" />
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent outline-none border-none text-white text-sm sm:text-base placeholder-white w-full"
            />
          </div>
        </div>
      </div>

      <hr className="border-gray-600 w-full" />

      {/* Bottom Section */}
      <div className="flex flex-col lg:flex-row justify-between text-sm sm:text-base">
        <p className="mb-4 lg:mb-0">© 2025 Neha Kashyap. All rights reserved.</p>
        <div className="flex flex-wrap gap-4 sm:gap-6 mb-6 lg:mb-0">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
