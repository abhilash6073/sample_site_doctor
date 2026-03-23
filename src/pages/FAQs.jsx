import { useState } from 'react';
import { faqs } from '../config';

export default function FAQs() {
  const categories = [...new Set(faqs.map(f => f.category))];
  const [filter, setFilter] = useState('All');
  const [openFaq, setOpenFaq] = useState(null);
  const filtered = filter === 'All' ? faqs : faqs.filter(f => f.category === filter);

  return (
    <>
      <section className="page-hero">
        <h1>Frequently Asked Questions</h1>
        <p>Answers to the most common questions about hair restoration</p>
      </section>
      <section className="section">
        <div className="container">
          <div className="filter-bar">
            <button className={`filter-btn ${filter === 'All' ? 'active' : ''}`} onClick={() => setFilter('All')}>All</button>
            {categories.map(c => <button key={c} className={`filter-btn ${filter === c ? 'active' : ''}`} onClick={() => setFilter(c)}>{c}</button>)}
          </div>
          <div className="faq-list">
            {filtered.map((f, i) => (
              <div className="faq-item" key={i}>
                <button className={`faq-question ${openFaq === i ? 'open' : ''}`} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  {f.question}<span className="toggle">+</span>
                </button>
                <div className={`faq-answer ${openFaq === i ? 'open' : ''}`}>{f.answer}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
