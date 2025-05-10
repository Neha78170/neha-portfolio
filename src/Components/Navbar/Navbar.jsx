import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="w-full bg-[#161513]  shadow-md fixed t-0 z-10 h-[15vh] flex items-center sm:px-10">
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center">

        <h3 className="text-[30px] font-bold bg-gradient-to-r from-[#ad0f00e0] to-[#eec9c9e6] bg-clip-text text-transparent ">
          Portfolio
        </h3>
        <ul className="hidden md:flex items-center gap-[30px] list-none text-white text-[18px]">
          <li className="hover:text-[#ad0f00e0] hover:border-b border-[#ad0f00e0] pb-[5px] transition-all duration-300">
            <AnchorLink href="#home" className="no-underline text-inherit">Home</AnchorLink>
          </li>
          <li className="hover:text-[#ad0f00e0] hover:border-b border-[#ad0f00e0] pb-[5px] transition-all duration-300">
            <AnchorLink href="#about" className="no-underline text-inherit">About</AnchorLink>
          </li>
          <li className="hover:text-[#ad0f00e0] hover:border-b border-[#ad0f00e0] pb-[5px] transition-all duration-300">
            <AnchorLink href="#projects" className="no-underline text-inherit">Projects</AnchorLink>
          </li>
          <li className="hover:text-[#ad0f00e0] hover:border-b border-[#ad0f00e0] pb-[5px] transition-all duration-300">
            <AnchorLink href="#contact" className="no-underline text-inherit">Contact</AnchorLink>
          </li>
        </ul>
        {/* Hamburger Menu - Mobile Only */}
        <div className="md:hidden text-white text-3xl cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? '✖' : '☰'}
        </div>
        {menuOpen && (
          <ul className="md:hidden absolute top-[15vh] left-0 w-full bg-[#161513] flex flex-col items-center gap-6 py-6 text-white text-[18px] shadow-md z-40 transition-all duration-500 transform ease-in-out translate-y-0 opacity-100">
            <li onClick={closeMenu} className="transition-transform duration-300 transform hover:text-red-400">
              <AnchorLink href="#home" className="no-underline text-inherit">Home</AnchorLink>
            </li>
            <li onClick={closeMenu} className="transition-transform duration-300 transform hover:text-red-400">
              <AnchorLink href="#about" className="no-underline text-inherit">About</AnchorLink>
            </li>
            <li onClick={closeMenu} className="transition-transform duration-300 transform hover:text-red-400">
              <AnchorLink href="#projects" className="no-underline text-inherit">Projects</AnchorLink>
            </li>
            <li onClick={closeMenu} className="transition-transform duration-300 transform hover:text-red-400">
              <AnchorLink href="#contact" className="no-underline text-inherit">Contact</AnchorLink>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
