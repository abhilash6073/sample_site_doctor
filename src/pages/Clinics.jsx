import { clinics as clinicLocations, conversation } from '../config';

export default function Clinics() {
  return (
    <>
      <section className="page-hero">
        <h1>Clinic Locations & Schedule</h1>
        <p>Visit us at any of our conveniently located clinics across Bengaluru</p>
      </section>
      <section className="section">
        <div className="container">
          <div className="clinics-grid">
            {clinicLocations.map((c, i) => (
              <div className="clinic-card" key={i}>
                <h4>{c.name}</h4>
                <div className="clinic-detail"><span className="label">📍</span><span>{c.addressLine1}, {c.addressLine2}, {c.city} {c.pincode}</span></div>
                <div className="clinic-detail"><span className="label">🕐</span><span>{c.visitingDays} · {c.visitingHours}</span></div>
                <div className="clinic-detail"><span className="label">📞</span><span>{c.phone}</span></div>
                <div className="clinic-detail"><span className="label">📋</span><span>Booking: {c.bookingMethod}</span></div>
                <div className="clinic-actions">
                  <a href={c.mapUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">📍 Get Directions</a>
                  <a href={`tel:${c.phone}`} className="btn btn-secondary btn-sm">📞 Call</a>
                  {conversation.whatsappEnabled && c.whatsapp && (
                    <a href={`https://wa.me/${c.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-sm">💬 WhatsApp</a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
