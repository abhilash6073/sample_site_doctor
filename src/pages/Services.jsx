import { Link } from 'react-router-dom';
import { services } from '../config';

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <h1>Our Treatments & Services</h1>
        <p>Comprehensive hair restoration solutions tailored to your individual needs</p>
      </section>
      <section className="section">
        <div className="container">
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
    </>
  );
}
