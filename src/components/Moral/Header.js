import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useHeaderScroll from './hooks/useHeaderScroll.js';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerBgColor = useHeaderScroll();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <section id="header">
      <div className="header container" style={{ backgroundColor: headerBgColor }}>
        <div className="nav-bar">
          <div className="brand">
            <a href="#hero">
              <h1><span>P</span>roject <span>N</span>ame</h1>
            </a>
          </div>
          <div className="nav-list">
            <div 
              className={`hamburger ${isMenuOpen ? 'active' : ''}`}
              onClick={toggleMenu}
            >
              <div className="bar"></div>
            </div>
            <ul className={isMenuOpen ? 'active' : ''}>
              <li><a href="#hero" data-after="Home" onClick={closeMenu}>Home</a></li>
              <li><a href="#projects" data-after="Projects" onClick={closeMenu}>Features</a></li>
              <li><a href="#about" data-after="About" onClick={closeMenu}>About</a></li>
              <li><a href="#contact" data-after="Contact" onClick={closeMenu}>Contact</a></li>
              <li><Link to="/Login" onClick={closeMenu}>Login</Link></li>
              <li><Link to="/Signup" onClick={closeMenu}>Signup</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;