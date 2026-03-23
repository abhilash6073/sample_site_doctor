import { Link } from 'react-router-dom';
import { useState } from 'react';
import { doctor, clinic, services, testimonials, stats, clinics as clinicLocations, faqs, conversation, contact, beforeAfterConfig, brand } from '../config';

export default function Home() {
  const waLink = conversation.whatsappEnabled
    ? `https://wa.me/${conversation.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(conversation.whatsappPrefillMessage)}`
    : null;

  const differentiators = [
    { icon: '🏆', title: '16+ Years Experience', desc: 'Over a decade and a half of dedicated hair restoration expertise in Bengaluru' },
    { icon: '✦', title: '5,000+ Procedures', desc: 'Proven track record with thousands of successful transplants and counting' },
    { icon: '🔬', title: 'Latest Technology', desc: 'Advanced FUE, DHI, Choi implanter, and robotic-assisted techniques' },
    { icon: '🎨', title: 'Artistic Precision', desc: 'Every hairline designed to complement your facial structure naturally' },
    { icon: '💚', title: 'Patient-First Care', desc: 'Transparent consultations, honest expectations, and lifelong follow-up' },
  ];

  const topFaqs = faqs.slice(0, 6);
  const [openFaq, setOpenFaq] = useState(null);

  const galleryImages = [
    { src: doctor.photo, alt: doctor.name, label: "Profile" },
    { src: "/images/mbbs-certificate.png", alt: "MBBS Certificate", label: "MBBS" },
    { src: "/images/ms-certificate.png", alt: "MS Certificate", label: "MS" },
    { src: "/images/mch-certificate.jpg", alt: "MCh Certificate", label: "MCh" }
  ];
  const [activeImage, setActiveImage] = useState(galleryImages[0]);

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">✦ Bengaluru's Trusted Hair Restoration Centre</div>
            <h1>Expert <span className="highlight">Hair Transplant</span> & Restoration in Bengaluru</h1>
            <p className="hero-subtitle">
              Regain your confidence with natural-looking, permanent results. {doctor.name} combines {doctor.yearsOfExperience}+ years of surgical precision with an artist's eye for hairlines that look completely natural.
            </p>
            <div className="hero-ctas">
              <Link to="/contact" className="btn btn-primary btn-lg">📅 Book Consultation</Link>
              {conversation.whatsappEnabled && (
                <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-lg">
                  💬 Ask on WhatsApp
                </a>
              )}
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-image-wrapper">
              <img src={doctor.photo} alt={doctor.name} />
            </div>
            <div className="hero-float-card stats">
              <div className="stat-item"><div className="stat-number">{stats.proceduresPerformed.toLocaleString()}+</div><div className="stat-label">Procedures</div></div>
              <div className="stat-item"><div className="stat-number">{stats.yearsInPractice}+</div><div className="stat-label">Years</div></div>
            </div>
            <div className="hero-float-card rating">
              <div className="stars">★★★★★</div>
              <div className="rating-text">4.9/5 on Google</div>
            </div>
          </div>
        </div>
      </section>

      {/* DIFFERENTIATORS */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="badge">Why Choose Us</span>
            <h2>Why Patients Choose {doctor.name}</h2>
            <p>Combining world-class expertise with compassionate, personalised care at {clinic.name}</p>
          </div>
          <div className="diff-grid">
            {differentiators.map((d, i) => (
              <div className="diff-card" key={i}>
                <span className="diff-icon">{d.icon}</span>
                <h4>{d.title}</h4>
                <p>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOCTOR SNAPSHOT */}
      <section className="section section-alt">
        <div className="container">
          <div className="doctor-snapshot">
            <div className="doctor-gallery">
              <div className="doctor-photo-wrapper" style={{ background: 'var(--off-white)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img 
                  src={activeImage.src} 
                  alt={activeImage.alt} 
                  style={{ 
                    width: '100%', height: '100%', 
                    objectFit: activeImage.label === 'Profile' ? 'cover' : 'contain',
                    padding: activeImage.label === 'Profile' ? '0' : '20px'
                  }} 
                />
                <div className="gallery-badge">{activeImage.label}</div>
              </div>
              <div className="gallery-thumbnails">
                {galleryImages.map((img, idx) => (
                  <button 
                    key={idx} 
                    className={`thumb-btn ${activeImage.src === img.src ? 'active' : ''}`}
                    onClick={() => setActiveImage(img)}
                  >
                    <img src={img.src} alt={img.alt} />
                  </button>
                ))}
              </div>
            </div>
            <div className="doctor-info">
              <h3>{doctor.name}</h3>
              <p className="doctor-degrees">{doctor.degrees.join(' | ')}</p>
              <ul className="doctor-credentials">
                {doctor.memberships.slice(0, 3).map((m, i) => <li key={i}>{m}</li>)}
                {doctor.awards.slice(0, 2).map((a, i) => <li key={`a${i}`}>{a}</li>)}
              </ul>
              <blockquote className="doctor-philosophy">"{doctor.treatmentPhilosophy}"</blockquote>
              <div style={{ marginTop: '24px' }}>
                <Link to="/about" className="btn btn-primary">Learn More About {doctor.name} →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="badge">Treatments</span>
            <h2>Our Treatments & Services</h2>
            <p>Comprehensive hair restoration solutions tailored to your needs</p>
          </div>
          <div className="services-grid">
            {services.map((s) => (
              <Link to={`/services/${s.id}`} className="service-card" key={s.id}>
                <span className="icon">{s.icon}</span>
                <h4>{s.title}</h4>
                <p>{s.shortDesc}</p>
                <span className="link">Learn More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE/AFTER PREVIEW */}
      {beforeAfterConfig.enabled && (
        <section className="section section-alt">
          <div className="container">
            <div className="section-header">
              <span className="badge">Real Results</span>
              <h2>Before & After Gallery</h2>
              <p>Verified results from our patients — all photos published with consent</p>
            </div>
            <div className="ba-grid">
              {beforeAfterConfig.cases.slice(0, 3).map((c, i) => (
                <div className="ba-card" key={i}>
                  <div style={{ width: '100%', overflow: 'hidden' }}>
                    <img src={c.imageFile} alt={c.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
                  </div>
                  <div className="ba-content">
                    <h4>{c.title}</h4>
                    <div className="treatment-type">{c.treatmentType}</div>
                    <p>{c.caseSummary}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <Link to="/before-after" className="btn btn-secondary">View Full Results Gallery →</Link>
            </div>
          </div>
        </section>
      )}

      {/* TESTIMONIALS */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="badge">Patient Stories</span>
            <h2>What Our Patients Say</h2>
            <p>Real experiences from real patients</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.slice(0, 4).map((t, i) => (
              <div className="testimonial-card" key={i}>
                <div className="testimonial-stars">{'★'.repeat(t.rating || 5)}</div>
                <div className="testimonial-quote">{t.quote}</div>
                <div className="testimonial-author">
                  <div>
                    <div className="testimonial-name">{t.patientNameOrInitials}</div>
                    <div className="testimonial-treatment">{t.treatmentType}</div>
                  </div>
                  <div className="testimonial-source">{t.source}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/testimonials" className="btn btn-secondary">Read All Patient Stories →</Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card"><div className="stat-number">{stats.yearsInPractice}+</div><div className="stat-label">Years Experience</div></div>
            <div className="stat-card"><div className="stat-number">{stats.patientsTreated.toLocaleString()}+</div><div className="stat-label">Patients Treated</div></div>
            <div className="stat-card"><div className="stat-number">{stats.proceduresPerformed.toLocaleString()}+</div><div className="stat-label">Procedures Done</div></div>
            <div className="stat-card"><div className="stat-number">{stats.successRate}%</div><div className="stat-label">Success Rate</div></div>
            <div className="stat-card"><div className="stat-number">{stats.locationsCount}</div><div className="stat-label">Clinic Locations</div></div>
          </div>
        </div>
      </section>

      {/* CLINICS SUMMARY */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="badge">Visit Us</span>
            <h2>Our Clinic Locations</h2>
            <p>Conveniently located across Bengaluru</p>
          </div>
          <div className="clinics-grid">
            {clinicLocations.map((c, i) => (
              <div className="clinic-card" key={i}>
                <h4>{c.name}</h4>
                <div className="clinic-detail"><span className="label">📍</span><span>{c.addressLine1}, {c.addressLine2}, {c.city} {c.pincode}</span></div>
                <div className="clinic-detail"><span className="label">🕐</span><span>{c.visitingDays} · {c.visitingHours}</span></div>
                <div className="clinic-detail"><span className="label">📞</span><span>{c.phone}</span></div>
                <div className="clinic-actions">
                  <a href={c.mapUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">📍 Directions</a>
                  {conversation.whatsappEnabled && c.whatsapp && (
                    <a href={`https://wa.me/${c.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-sm">💬 WhatsApp</a>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <Link to="/clinics" className="btn btn-primary">View All Locations & Schedule →</Link>
          </div>
        </div>
      </section>

      {/* TOP FAQs */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="badge">FAQs</span>
            <h2>Frequently Asked Questions</h2>
            <p>Quick answers to common questions</p>
          </div>
          <div className="faq-list">
            {topFaqs.map((f, i) => (
              <div className="faq-item" key={i}>
                <button className={`faq-question ${openFaq === i ? 'open' : ''}`} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  {f.question}
                  <span className="toggle">+</span>
                </button>
                <div className={`faq-answer ${openFaq === i ? 'open' : ''}`}>{f.answer}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <Link to="/faqs" className="btn btn-secondary">View All FAQs →</Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="stats-section" style={{ padding: '60px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#fff', marginBottom: '16px' }}>Ready to Start Your Hair Restoration Journey?</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '32px', fontSize: '1.05rem' }}>
            Book a personalised consultation with {doctor.name} at {clinic.name} today.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary btn-lg" style={{ background: 'var(--secondary)', color: 'var(--near-black)' }}>📅 Book Consultation</Link>
            {conversation.whatsappEnabled && (
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-lg">💬 WhatsApp Us</a>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
