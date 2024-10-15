import React, { useState, useEffect } from 'react';
import './Navbar.css';
import '../assets/font.css';
import { Link } from 'react-router-dom';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    // Initialize AOS
    AOS.init({ duration: 1200 });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to handle link click
  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu
  };

  return (
    <>
      <nav className={`navbar ${isSticky ? 'sticky' : 'stickyoff navbaroff'}`} data-aos="fade-down">
        <div className="navbar-container">
          <div className="navbar-logo">
            <img src='https://lh3.googleusercontent.com/pw/AP1GczMBzORkIm25f26Gid2rVxQQQhj4MqAWqoppXru3-kcJvVa3NHcMTsyawY3xdMa9cq8ow5yXttKl2NkQftXNplhQurciIXpA3Ta08zcJCLol9HBjQm8VbIVGe4fbiuODXsmRHv7n7HGJ9GzeQQ9fiXE6=w441-h127-s-no-gm?authuser=0' alt="World Environment Day Logo" />
          </div>

          <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
            <Link to="/" onClick={handleLinkClick}>HOME</Link>
            <Link to="/about" onClick={handleLinkClick}>ABOUT</Link>
            <Link to="/contact" onClick={handleLinkClick}>CONTACT</Link>
          </div>
          <div 
            className="hamburger" 
            onClick={() => setIsOpen(!isOpen)} 
            aria-expanded={isOpen} 
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
