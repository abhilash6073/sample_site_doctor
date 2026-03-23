import { Link } from 'react-router-dom';
import { conversation, contact } from '../../config';

export default function MobileBottomBar() {
  const waLink = conversation.whatsappEnabled
    ? `https://wa.me/${conversation.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(conversation.whatsappPrefillMessage)}`
    : null;

  return (
    <div className="mobile-bottom-bar">
      <div className="mobile-bottom-bar-inner">
        <Link to="/contact" className="btn btn-primary">📅 Book</Link>
        <a href={`tel:${contact.primaryPhone}`} className="btn btn-secondary">📞 Call</a>
        {conversation.whatsappEnabled && (
          <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">💬 Chat</a>
        )}
      </div>
    </div>
  );
}
