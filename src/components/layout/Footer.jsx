import { Link } from 'react-router-dom';
import { clinic, doctor, contact } from '../../config';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>{clinic.name}</h3>
            <p>{clinic.aboutShort}</p>
            <div className="footer-social">
              {contact.socialMedia.instagram && <a href={contact.socialMedia.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">📷</a>}
              {contact.socialMedia.facebook && <a href={contact.socialMedia.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">📘</a>}
              {contact.socialMedia.youtube && <a href={contact.socialMedia.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">▶️</a>}
              {contact.socialMedia.linkedin && <a href={contact.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">💼</a>}
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/about">About {doctor.name}</Link></li>
              <li><Link to="/services">Treatments</Link></li>
              <li><Link to="/before-after">Results Gallery</Link></li>
              <li><Link to="/testimonials">Patient Stories</Link></li>
              <li><Link to="/virtual-consult">Virtual Consultation</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Visit Us</h4>
            <ul>
              <li><Link to="/clinics">Clinic Locations</Link></li>
              <li><Link to="/faqs">FAQs</Link></li>
              <li><Link to="/contact">Contact & Booking</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li>📞 {contact.primaryPhone}</li>
              <li>📧 {contact.email}</li>
              {contact.whatsappNumber && <li>💬 WhatsApp Available</li>}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {clinic.name}. All rights reserved.</span>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link to="/terms">Terms</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/disclaimer">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
