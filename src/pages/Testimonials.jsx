import { useState } from 'react';
import { testimonials } from '../config';

export default function Testimonials() {
  const sources = [...new Set(testimonials.map(t => t.source))];
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? testimonials : testimonials.filter(t => t.source === filter);

  return (
    <>
      <section className="page-hero">
        <h1>Patient Stories & Testimonials</h1>
        <p>Hear from patients who've experienced life-changing results</p>
      </section>
      <section className="section">
        <div className="container">
          <div className="filter-bar">
            <button className={`filter-btn ${filter === 'All' ? 'active' : ''}`} onClick={() => setFilter('All')}>All</button>
            {sources.map(s => <button key={s} className={`filter-btn ${filter === s ? 'active' : ''}`} onClick={() => setFilter(s)}>{s}</button>)}
          </div>
          <div className="testimonials-grid">
            {filtered.map((t, i) => (
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
        </div>
      </section>
    </>
  );
}
