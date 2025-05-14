import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="w-full bg-[#161513] shadow-md fixed top-0 z-50 py-4 px-5 sm:px-10">
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center">

        {/* Logo */}
        <h3 className="text-[30px] font-bold bg-gradient-to-r from-[#ad0f00e0] to-[#eec9c9e6] bg-clip-text text-transparent">
          Portfolio
        </h3>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-[30px] text-white text-[18px]">
          {['home', 'about', 'projects', 'contact'].map((item) => (
            <li
              key={item}
              className="hover:text-[#ad0f00e0] hover:border-b border-[#ad0f00e0] pb-[5px] transition-all duration-300"
            >
              <AnchorLink href={`#${item}`} className="no-underline text-inherit capitalize">
                {item}
              </AnchorLink>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <div className="md:hidden text-white text-3xl cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? '✖' : '☰'}
        </div>
      </div>

      {/* Slide-in Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-screen w-full bg-[#161513] z-40 flex flex-col items-center justify-center gap-6 text-white text-[18px] transition-transform duration-500 ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {['home', 'about', 'projects', 'contact'].map((item) => (
          <AnchorLink
            key={item}
            href={`#${item}`}
            onClick={closeMenu}
            className="block w-full py-2 text-center no-underline text-white hover:text-red-400 active:text-yellow-300 transition-colors capitalize"
          >
            {item}
          </AnchorLink>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
