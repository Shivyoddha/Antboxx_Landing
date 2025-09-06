import React, { useState } from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/antboxx-logo.jpeg';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.header 
      className="header"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        duration: 0.8, 
        ease: "easeOut",
        delay: 0.2 
      }}
      role="banner"
      aria-label="Main navigation header"
    >
      <div className="header-container">
        <div className="logo">
          <img src={logo} alt="Antboxx Logo" className="logo-image" />
        </div>
        
        {/* Desktop Navigation */}
        <nav role="navigation" aria-label="Main navigation">
          <ul className="nav-links">
            <li><a href="#home" aria-label="Go to home section">Home</a></li>
            <li><a href="#features" aria-label="Go to features section">Features</a></li>
            <li><a href="#pricing" aria-label="Go to pricing section">Pricing</a></li>
            <li><a href="#faq" aria-label="Go to FAQ section">FAQ</a></li>
          </ul>
        </nav>
        
        <a href="#footer" className="contact-btn" aria-label="Go to contact section">Contact</a>
        
        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
          aria-expanded={isMobileMenuOpen}
        >
          <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <motion.div 
        className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isMobileMenuOpen ? 1 : 0, 
          height: isMobileMenuOpen ? 'auto' : 0 
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        role="navigation"
        aria-label="Mobile navigation menu"
        aria-hidden={!isMobileMenuOpen}
      >
        <ul className="mobile-nav-links">
          <li><a href="#home" onClick={() => setIsMobileMenuOpen(false)} aria-label="Go to home section">Home</a></li>
          <li><a href="#features" onClick={() => setIsMobileMenuOpen(false)} aria-label="Go to features section">Features</a></li>
          <li><a href="#pricing" onClick={() => setIsMobileMenuOpen(false)} aria-label="Go to pricing section">Pricing</a></li>
          <li><a href="#faq" onClick={() => setIsMobileMenuOpen(false)} aria-label="Go to FAQ section">FAQ</a></li>
          <li>
            <a 
              href="#footer"
              className="mobile-contact-btn"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Go to contact section"
            >
              Contact
            </a>
          </li>
        </ul>
      </motion.div>
    </motion.header>
  );
};

export default Header;
