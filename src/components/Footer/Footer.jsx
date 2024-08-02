import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src="/y men.png" alt="Nairobi Y's Men Club Logo" className="footer-logo-img" />
          <h2 className="footer-title">Nairobi Y's Men Club</h2>
        </div>
        <div className="footer-links">
          <p className="footer-text">
            Follow us on:
            <a className="footer-link" href="https://www.facebook.com/nairobiysmen" target="_blank" rel="noopener noreferrer">
              <FaFacebook /> Facebook
            </a>
            <a className="footer-link" href="https://www.instagram.com/nairobi_ysmen" target="_blank" rel="noopener noreferrer">
              <FaInstagram /> Instagram
            </a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-text">
          &copy; 2024 Nairobi Y's Men Club. All Rights Reserved.
        </p>
        <p className="footer-text">
          Contact us: <a className="footer-link" href="mailto:info@nairobiysmen.org">info@nairobiysmen.org</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
