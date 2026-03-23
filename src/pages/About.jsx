import { Link } from 'react-router-dom';
import { doctor, clinic } from '../config';

export default function About() {
  return (
    <>
      <section className="page-hero">
        <h1>About {doctor.name}</h1>
        <p>{doctor.specialties.join(' · ')} — {clinic.name}, Bengaluru</p>
      </section>
      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div>
              <div className="doctor-photo-wrapper">
                <img src={doctor.photo} alt={doctor.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ marginTop: '30px' }}>
                <h3 style={{ marginBottom: '8px' }}>Qualifications</h3>
                {doctor.degrees.map((d, i) => <div key={i} className="membership-tag" style={{ marginBottom: '8px', display: 'inline-block', marginRight: '8px' }}>{d}</div>)}
              </div>
              <div style={{ marginTop: '24px' }}>
                <h3 style={{ marginBottom: '12px' }}>Memberships</h3>
                <div className="membership-list">
                  {doctor.memberships.map((m, i) => <div key={i} className="membership-tag">{m}</div>)}
                </div>
              </div>
            </div>
            <div>
              <h2 style={{ marginBottom: '20px' }}>{doctor.name}</h2>
              <p className="doctor-degrees" style={{ marginBottom: '24px' }}>{doctor.degrees.join(' | ')}</p>
              {doctor.bioLong.split('\n\n').map((para, i) => <p key={i} style={{ marginBottom: '16px', fontSize: '0.95rem', lineHeight: '1.8', color: 'var(--dark-gray)' }}>{para}</p>)}
              <blockquote className="doctor-philosophy" style={{ margin: '32px 0' }}>"{doctor.treatmentPhilosophy}"</blockquote>
              <h3 style={{ marginTop: '32px', marginBottom: '16px' }}>Awards & Recognition</h3>
              <ul className="doctor-credentials">
                {doctor.awards.map((a, i) => <li key={i}>{a}</li>)}
              </ul>
              <h3 style={{ marginTop: '32px', marginBottom: '16px' }}>Academic & Research</h3>
              <ul className="doctor-credentials">
                {doctor.academicRoles.map((r, i) => <li key={i}>{r}</li>)}
              </ul>
              <div style={{ marginTop: '40px' }}>
                <Link to="/contact" className="btn btn-primary btn-lg">Book a Consultation with {doctor.name} →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
