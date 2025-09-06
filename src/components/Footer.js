import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/antboxx-logo.jpeg';

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-content">
        {/* Left Section - Logo & Tagline */}
        <div className="footer-left">
          <div className="footer-logo">
            <img src={logo} alt="Antboxx Logo" className="footer-logo-image" />
            <span className="footer-logo-text">Antboxx</span>
          </div>
          <p className="footer-tagline">
            AI-powered tools for business growth, seamless scaling, and proven results.
          </p>
          <div className="social-icons">
            <a href="javascript:void(0)" className="social-icon facebook-icon" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="javascript:void(0)" className="social-icon instagram-icon" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="javascript:void(0)" className="social-icon linkedin-icon" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="javascript:void(0)" className="social-icon twitter-icon" aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="javascript:void(0)" className="social-icon youtube-icon" aria-label="YouTube">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>

        {/* Right Section - Company Links */}
        <div className="footer-right">
          <div className="footer-column">
            <h4 className="footer-column-title">Company</h4>
            <ul className="footer-links">
              <li><a href="#homepage">Homepage</a></li>
              <li><a href="#solution">Solution</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-column">
          <h4 className="footer-column-title">QuickLinks</h4>
            <ul className="footer-links">
              <li><a href="#homepage">Home</a></li>
              <li><a href="#solution">About</a></li>
              <li><a href="#about">Pricing</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-column">
          <h4 className="footer-column-title">Pricing</h4>
            <ul className="footer-links">
              <li><a href="#homepage">Personal</a></li>
              <li><a href="#solution">Expert</a></li>
              <li><a href="#about">Enterprise</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="copyright">Copyright © 2025 Antboxx</p>
          <div className="legal-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
