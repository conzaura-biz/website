import { Link } from 'react-router-dom';
import Icon from './Icon';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-main">
        <div className="footer-intro">
          <h2>We're here to help</h2>
          <p>Mon - Sun, 09:00 - 19:00</p>
          <a href="tel:+917558854049"><Icon name="phone" size={14} />+91 75588 54049</a>
          <a href="mailto:info@conzaura.co"><Icon name="mail" size={14} />info@conzaura.co</a>
          <div style={{ display: 'flex', gap: '8px', marginTop: '12px', fontSize: '13px', lineHeight: '1.4', color: 'rgba(255,255,255,0.76)', maxWidth: '280px' }}>
            <Icon name="pin" size={14} style={{ flexShrink: 0, marginTop: '2px', color: '#fff' }} />
            <span>TC No. 46/3173, Santhi Nivas, Near IDBI Bank, Karamana PO, Trivandrum - 695002</span>
          </div>
          <div className="socials" aria-label="Social media">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">f</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter"><Icon name="twitter" size={14} /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><Icon name="instagram" size={14} /></a>
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
      </div>

      <div className="container footer-bottom">
        <span>© 2026 Conzaura Business Solution. All rights reserved</span>
        <div>
          <Link to="/terms">Terms</Link>
          <Link to="/privacy-policy">Privacy</Link>
          <Link to="/contact">Cookies</Link>
          <Link to="/">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
}
