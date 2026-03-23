import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { services, conversation } from '../config';

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const service = services.find(s => s.id === serviceId);
  const [openFaq, setOpenFaq] = useState(null);

  if (!service) return (
    <section className="section" style={{ paddingTop: '140px', textAlign: 'center' }}>
      <div className="container"><h2>Service not found</h2><Link to="/services" className="btn btn-primary" style={{ marginTop: '20px' }}>View All Services</Link></div>
    </section>
  );

  const waLink = conversation.whatsappEnabled
    ? `https://wa.me/${conversation.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hi, I'm interested in ${service.title}. Please share more details.`)}`
    : null;

  return (
    <>
      <section className="service-detail-hero">
        <div className="container" style={{ textAlign: 'center' }}>
          <span style={{ fontSize: '3rem', display: 'block', marginBottom: '16px' }}>{service.icon}</span>
          <h1>{service.title}</h1>
          <p style={{ color: 'var(--medium-gray)', fontSize: '1.05rem', maxWidth: '600px', margin: '12px auto 0' }}>{service.shortDesc}</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="service-detail-content">
            {service.image && (
              <img 
                src={service.image.replace('w=600', 'w=1200').replace('h=400', 'h=600')} 
                alt={service.title} 
                style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: 'var(--radius-lg)', marginBottom: '40px', boxShadow: 'var(--shadow-md)' }} 
              />
            )}
            {service.longDesc.split('\n\n').map((block, i) => {
              if (block.startsWith('**') && block.endsWith('**')) {
                return <h3 key={i} style={{ marginTop: '32px', marginBottom: '12px' }}>{block.replace(/\*\*/g, '')}</h3>;
              }
              if (block.startsWith('- ')) {
                return <ul key={i} style={{ paddingLeft: '20px', marginBottom: '16px' }}>{block.split('\n').map((line, j) => <li key={j} style={{ marginBottom: '6px', fontSize: '0.95rem' }}>{line.replace('- ', '')}</li>)}</ul>;
              }
              return <p key={i}>{block.replace(/\*\*/g, '')}</p>;
            })}

            {service.faqs && service.faqs.length > 0 && (
              <div style={{ marginTop: '50px' }}>
                <h3 style={{ marginBottom: '20px' }}>Common Questions About {service.title}</h3>
                <div className="faq-list">
                  {service.faqs.map((f, i) => (
                    <div className="faq-item" key={i}>
                      <button className={`faq-question ${openFaq === i ? 'open' : ''}`} onClick={() => setOpenFaq(openFaq === i ? null : i)}>{f.question}<span className="toggle">+</span></button>
                      <div className={`faq-answer ${openFaq === i ? 'open' : ''}`}>{f.answer}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div style={{ marginTop: '50px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary btn-lg">📅 Book Consultation for {service.title}</Link>
              {waLink && <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-lg">💬 Ask on WhatsApp</a>}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
