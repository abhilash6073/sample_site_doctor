import { useState } from 'react';
import { conversation, faqs, clinics, doctor, clinic } from '../../config';

const quickOptions = [
  'Clinic timings',
  'Treatments offered',
  'How to book',
  'Cost & pricing',
  'Location & directions',
  'Talk to someone',
];

function findAnswer(query) {
  const q = query.toLowerCase();
  if (q.includes('timing') || q.includes('hour') || q.includes('when') || q.includes('open')) {
    const info = clinics.map(c => `${c.name}: ${c.visitingDays}, ${c.visitingHours}`).join('\n');
    return `Here are our clinic timings:\n\n${info}`;
  }
  if (q.includes('treatment') || q.includes('service') || q.includes('offer')) {
    return `${doctor.name} specialises in: ${doctor.specialties.join(', ')}. Visit our Treatments page for full details!`;
  }
  if (q.includes('book') || q.includes('appointment')) {
    return 'You can book an appointment through our Contact page, or chat with us directly on WhatsApp for quick scheduling!';
  }
  if (q.includes('cost') || q.includes('price') || q.includes('fee')) {
    return 'Treatment costs vary based on individual needs. We provide transparent pricing after a consultation. Book a free initial assessment to get a personalised quote!';
  }
  if (q.includes('location') || q.includes('direction') || q.includes('address') || q.includes('where')) {
    const info = clinics.map(c => `${c.name}: ${c.addressLine1}, ${c.addressLine2}, ${c.city} ${c.pincode}`).join('\n');
    return `Our clinic locations:\n\n${info}`;
  }
  if (q.includes('talk') || q.includes('human') || q.includes('person') || q.includes('someone')) {
    return 'HANDOFF_TO_WHATSAPP';
  }
  const match = faqs.find(f => {
    const faqQ = f.question.toLowerCase();
    const words = q.split(/\s+/).filter(w => w.length > 3);
    return words.some(w => faqQ.includes(w));
  });
  if (match) return match.answer;
  return 'HANDOFF_TO_WHATSAPP';
}

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: `Hi! 👋 Welcome to ${clinic.name}. I can help with clinic timings, treatments, booking, and common questions. How can I help?` },
  ]);
  const [input, setInput] = useState('');
  const [showOptions, setShowOptions] = useState(true);

  if (!conversation.webChatbotEnabled) return null;

  const waLink = conversation.whatsappEnabled
    ? `https://wa.me/${conversation.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(conversation.whatsappPrefillMessage)}`
    : null;

  const handleSend = (text) => {
    const userMsg = text || input.trim();
    if (!userMsg) return;
    setMessages(prev => [...prev, { type: 'user', text: userMsg }]);
    setInput('');
    setShowOptions(false);

    setTimeout(() => {
      const answer = findAnswer(userMsg);
      if (answer === 'HANDOFF_TO_WHATSAPP') {
        setMessages(prev => [...prev, {
          type: 'bot',
          text: waLink
            ? 'For detailed help, it\'s best to continue on WhatsApp where our team can assist you personally.'
            : 'Please call us or visit the Contact page for personalised assistance.',
          hasWhatsAppLink: !!waLink,
        }]);
      } else {
        setMessages(prev => [...prev, { type: 'bot', text: answer }]);
      }
      setShowOptions(true);
    }, 600);
  };

  return (
    <>
      <button className="chatbot-bubble" onClick={() => setIsOpen(!isOpen)} aria-label="Open chat assistant" title="Ask a Question">
        {isOpen ? '✕' : '🤖'}
      </button>

      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h4>💬 Quick Help</h4>
            <button className="chatbot-close" onClick={() => setIsOpen(false)}>✕</button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-msg ${msg.type}`}>
                {msg.text}
                {msg.hasWhatsAppLink && waLink && (
                  <div style={{ marginTop: '10px' }}>
                    <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-sm" style={{ display: 'inline-flex', fontSize: '0.8rem', padding: '8px 16px' }}>
                      Continue on WhatsApp →
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
          {showOptions && (
            <div className="chat-options">
              {quickOptions.map((opt) => (
                <button key={opt} className="chat-option-btn" onClick={() => handleSend(opt)}>
                  {opt}
                </button>
              ))}
            </div>
          )}
          <div className="chatbot-input">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              placeholder="Type your question..."
            />
            <button onClick={() => handleSend()} aria-label="Send">➤</button>
          </div>
        </div>
      )}
    </>
  );
}
