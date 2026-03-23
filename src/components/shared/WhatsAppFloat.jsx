import { conversation } from '../../config';

export default function WhatsAppFloat() {
  if (!conversation.whatsappEnabled) return null;

  const waLink = `https://wa.me/${conversation.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(conversation.whatsappPrefillMessage)}`;

  return (
    <a href={waLink} target="_blank" rel="noopener noreferrer" className="whatsapp-float" aria-label="Chat on WhatsApp" title="Chat on WhatsApp">
      💬
    </a>
  );
}
