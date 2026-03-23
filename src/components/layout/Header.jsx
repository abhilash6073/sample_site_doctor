import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { clinic, conversation, brand } from '../../config';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Treatments', path: '/services' },
  { label: 'Results', path: '/before-after' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'Clinics', path: '/clinics' },
  { label: 'Contact', path: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  const waLink = conversation.whatsappEnabled
    ? `https://wa.me/${conversation.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(conversation.whatsappPrefillMessage)}`
    : null;

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-inner">
          <Link to="/" className="header-logo">
            <img src={brand.logoLight} alt={clinic.name + ' logo'} className="header-logo-img" style={{ objectFit: 'contain', background: 'transparent' }} />
            <div className="header-logo-text">
              {clinic.name}
              <span>{clinic.tagline}</span>
            </div>
          </Link>

          <nav className="nav">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} className={location.pathname === item.path ? 'active' : ''}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="header-ctas">
            {conversation.whatsappEnabled && (
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-sm">
                💬 WhatsApp
              </a>
            )}
            <Link to="/contact" className="btn btn-primary btn-sm">Book Appointment</Link>
          </div>

          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>

      <div className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <Link key={item.path} to={item.path}>{item.label}</Link>
        ))}
        <div className="mobile-nav-ctas">
          {conversation.whatsappEnabled && (
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              💬 Chat on WhatsApp
            </a>
          )}
          <Link to="/contact" className="btn btn-primary">Book Appointment</Link>
        </div>
      </div>
    </>
  );
}
