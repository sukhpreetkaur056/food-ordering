import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-section">
          <h2 className="footer-logo" style={{color:"white"}}>TapToEat</h2>
          <p>Experience the authentic taste of tradition, delivered fresh to your doorstep. Every bite tells a story of flavor and passion.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3 className='footer-head' style={{color:"white"}}>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/menu">Our Menu</a></li>
            <li><a href="/specials">Today's Specials</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3 className='footer-head' style={{color:"white"}}>Get in Touch</h3>
          <ul>
            <li>📍 123 Food Street, Foodie Lane</li>
            <li>📞 +91 98765 43210</li>
            <li>📧 hello@tastybite.in</li>
            <li>⏰ Open: 10:00 AM - 10:00 PM</li>
          </ul>
        </div>

        {/* Social */}
        <div className="footer-section">
          <h3 className='footer-head' style={{color:"white"}}>Connect With Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter size={20} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaYoutube size={20} />
            </a>
          </div>
          <p>Follow us for updates and special offers!</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p style={{color:"white"}}>&copy; {new Date().getFullYear()} TapToEat. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
