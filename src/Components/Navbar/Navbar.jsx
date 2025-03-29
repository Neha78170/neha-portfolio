import React, { useState } from 'react';
import "./Navbar.css";
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Navbar() {
  const [menu, setMenu] = useState("home");

  return (
    <div className="nav-bar">
      <h3>Portfolio</h3>
      <ul className='item'>
        <li>
          <AnchorLink href='#home' className='anchor-link'>
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
        </li>

        <li>
          <AnchorLink href='#about' className='anchor-link'>
            <p onClick={() => setMenu("about")}>About</p>
          </AnchorLink>
        </li>

        <li>
          <AnchorLink href='#projects' className='anchor-link'>
            <p onClick={() => setMenu("projects")}>Projects</p>
          </AnchorLink>
        </li>

        <li>
          <AnchorLink href='#contact' className='anchor-link'>
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
        </li>

        <button className='connect-nav'>Connect With Me</button>
      </ul>
    </div>
  );
}

export default Navbar;
