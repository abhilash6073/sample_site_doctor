import { useState } from 'react';
import { beforeAfterConfig } from '../config';

export default function BeforeAfter() {
  const { enabled, cases } = beforeAfterConfig;
  const types = [...new Set(cases.map(c => c.treatmentType))];
  const [filter, setFilter] = useState('All');

  if (!enabled) return (
    <section className="section" style={{ paddingTop: '140px', textAlign: 'center' }}>
      <div className="container"><h2>Results gallery is not available for this specialty.</h2></div>
    </section>
  );

  const filtered = filter === 'All' ? cases : cases.filter(c => c.treatmentType === filter);

  return (
    <>
      <section className="page-hero">
        <h1>Before & After Results</h1>
        <p>Real results from real patients — all photos published with written consent</p>
      </section>
      <section className="section">
        <div className="container">
          <div className="filter-bar">
            <button className={`filter-btn ${filter === 'All' ? 'active' : ''}`} onClick={() => setFilter('All')}>All</button>
            {types.map(t => <button key={t} className={`filter-btn ${filter === t ? 'active' : ''}`} onClick={() => setFilter(t)}>{t}</button>)}
          </div>
          <div className="ba-grid">
            {filtered.map((c, i) => (
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
        </div>
      </section>
    </>
  );
}
