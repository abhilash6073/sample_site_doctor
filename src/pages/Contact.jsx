import { booking, contact, clinics as clinicLocations, conversation, doctor } from '../config';

export default function Contact() {
  const waLink = conversation.whatsappEnabled
    ? `https://wa.me/${conversation.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(conversation.whatsappPrefillMessage)}`
    : null;

  return (
    <>
      <section className="page-hero">
        <h1>Contact & Book Appointment</h1>
        <p>We'd love to hear from you. Book a consultation or reach out with any questions.</p>
      </section>
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
            <div>
              <h3 style={{ marginBottom: '24px' }}>Book an Appointment</h3>
              {booking.mode === 'form' ? (
                <form className="booking-form" style={{ maxWidth: '100%' }} onSubmit={e => { e.preventDefault(); alert('Appointment request submitted! We will confirm shortly.'); }}>
                  {booking.formFields.map(f => (
                    <div className="form-group" key={f.name}>
                      <label htmlFor={f.name}>{f.label} {f.required && '*'}</label>
                      {f.type === 'textarea' ? <textarea id={f.name} required={f.required} /> :
                       f.type === 'select' ? <select id={f.name} required={f.required}><option value="">Select...</option>{f.options.map(o => <option key={o} value={o}>{o}</option>)}</select> :
                       <input id={f.name} type={f.type} required={f.required} />}
                    </div>
                  ))}
                  <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>Submit Appointment Request</button>
                </form>
              ) : (
                <div style={{ textAlign: 'center', padding: '40px', background: 'var(--off-white)', borderRadius: 'var(--radius-md)' }}>
                  <p style={{ marginBottom: '20px' }}>Book directly through our scheduling system:</p>
                  <a href={booking.schedulerUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">Open Scheduler</a>
                </div>
              )}
            </div>

            <div>
              <h3 style={{ marginBottom: '24px' }}>Get in Touch</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div className="clinic-card">
                  <h4>📞 Phone</h4>
                  <p style={{ margin: '8px 0' }}>{contact.primaryPhone}</p>
                  {contact.secondaryPhone && <p style={{ fontSize: '0.88rem', color: 'var(--medium-gray)' }}>Alt: {contact.secondaryPhone}</p>}
                </div>
                <div className="clinic-card">
                  <h4>📧 Email</h4>
                  <p style={{ margin: '8px 0' }}><a href={`mailto:${contact.email}`}>{contact.email}</a></p>
                </div>
                {conversation.whatsappEnabled && (
                  <div className="clinic-card" style={{ background: 'rgba(37,211,102,0.05)', borderColor: 'rgba(37,211,102,0.2)' }}>
                    <h4>💬 WhatsApp</h4>
                    <p style={{ margin: '8px 0', fontSize: '0.92rem' }}>Chat with us directly for quick responses</p>
                    <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-sm" style={{ marginTop: '8px' }}>Chat on WhatsApp →</a>
                  </div>
                )}
                <div className="clinic-card">
                  <h4>💳 Accepted Payments</h4>
                  <p style={{ margin: '8px 0', fontSize: '0.88rem' }}>{contact.acceptedPayments.join(' · ')}</p>
                  {contact.insuranceNote && <p style={{ fontSize: '0.82rem', color: 'var(--medium-gray)', fontStyle: 'italic' }}>{contact.insuranceNote}</p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
