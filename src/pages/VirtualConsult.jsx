import { virtualConsult, conversation } from '../config';

export default function VirtualConsult() {
  if (!virtualConsult.enabled) return (
    <section className="section" style={{ paddingTop: '140px', textAlign: 'center' }}>
      <div className="container"><h2>Virtual consultations are not currently offered.</h2></div>
    </section>
  );

  const waLink = conversation.whatsappEnabled
    ? `https://wa.me/${conversation.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent("Hi, I'm interested in a virtual consultation.")}`
    : null;

  return (
    <>
      <section className="page-hero">
        <h1>{virtualConsult.title}</h1>
        <p>{virtualConsult.subtitle}</p>
      </section>
      <section className="section">
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '32px' }}>{virtualConsult.description}</p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginBottom: '50px' }}>
            <div>
              <h3 style={{ marginBottom: '16px' }}>Who Is It For?</h3>
              <ul style={{ paddingLeft: '20px' }}>
                {virtualConsult.whoIsItFor.map((item, i) => <li key={i} style={{ marginBottom: '8px', fontSize: '0.92rem' }}>{item}</li>)}
              </ul>
            </div>
            <div>
              <h3 style={{ marginBottom: '16px' }}>What Happens?</h3>
              <ol style={{ paddingLeft: '20px' }}>
                {virtualConsult.whatHappens.map((item, i) => <li key={i} style={{ marginBottom: '8px', fontSize: '0.92rem' }}>{item}</li>)}
              </ol>
            </div>
          </div>

          <div style={{ padding: '24px', background: 'var(--off-white)', borderRadius: 'var(--radius-md)', marginBottom: '40px', textAlign: 'center' }}>
            <span style={{ fontSize: '2rem' }}>⏱️</span>
            <p style={{ fontSize: '1.1rem', fontWeight: '600', marginTop: '8px' }}>Response within {virtualConsult.responseTime}</p>
          </div>

          <h3 style={{ marginBottom: '24px' }}>Request a Virtual Consultation</h3>
          <form className="booking-form" onSubmit={e => { e.preventDefault(); alert('Virtual consultation request submitted! We will contact you within ' + virtualConsult.responseTime + '.'); }}>
            {virtualConsult.formFields.filter(f => f.type !== 'file').map(f => (
              <div className="form-group" key={f.name}>
                <label htmlFor={f.name}>{f.label} {f.required && '*'}</label>
                {f.type === 'textarea' ? <textarea id={f.name} required={f.required} /> :
                 f.type === 'select' ? <select id={f.name} required={f.required}><option value="">Select...</option>{f.options.map(o => <option key={o} value={o}>{o}</option>)}</select> :
                 <input id={f.name} type={f.type} required={f.required} />}
              </div>
            ))}
            <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>Submit Virtual Consultation Request</button>
          </form>

          {waLink && (
            <div style={{ textAlign: 'center', marginTop: '24px' }}>
              <p style={{ color: 'var(--medium-gray)', marginBottom: '12px' }}>Or reach out directly on WhatsApp</p>
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">💬 WhatsApp Us</a>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
