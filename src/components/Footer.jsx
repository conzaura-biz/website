import { Link } from 'react-router-dom';
import Icon from './Icon';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-main">
        <div className="footer-intro">
          <h2>We're here to help</h2>
          <p>Mon - Sun, 09:00 - 19:00</p>
          <a href="tel:+911234567895"><Icon name="phone" size={14} />1234567895</a>
          <a href="mailto:info@conzaura.co"><Icon name="mail" size={14} />info@conzaura.co</a>
          <div className="socials" aria-label="Social media">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">f</a>
            <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X">𝕏</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">◎</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
          </div>
        </div>

        <div className="footer-links">
          <div>
            <Link to="/about">About Us</Link>
            <Link to="/#services-preview">Our Services</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
          <div>
            <Link to="/#services-preview">Private Limited Company</Link>
            <Link to="/#services-preview">LLP Registration</Link>
            <Link to="/#services-preview">OPC Registration</Link>
            <Link to="/contact?service=Business%20Consultation#contact-form">Business Consultation</Link>
          </div>
          <div>
            <Link to="/contact#consultation">Free Consultation</Link>
            <Link to="/contact#consultation">Talk to an Expert</Link>
            <Link to="/contact">Get in Touch</Link>
          </div>
        </div>

        <div className="footer-location"><Icon name="pin" size={16} /><a href="https://maps.google.com/?q=Bangalore,India" target="_blank" rel="noreferrer">Bangalore, India</a></div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 Conzaura Pvt Ltd. All rights reserved</span>
        <div>
          <Link to="/contact">Terms</Link>
          <Link to="/#privacy-policy">Privacy</Link>
          <Link to="/contact">Cookies</Link>
          <Link to="/">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
}
