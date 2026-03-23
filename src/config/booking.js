const booking = {
  mode: 'form', // 'scheduler' | 'form'
  schedulerUrl: '', // e.g., 'https://calendly.com/doctor-name'
  formFields: [
    { name: 'fullName', label: 'Full Name', type: 'text', required: true },
    { name: 'phone', label: 'Phone Number', type: 'tel', required: true },
    { name: 'email', label: 'Email Address', type: 'email', required: false },
    { name: 'preferredDate', label: 'Preferred Date', type: 'date', required: true },
    { name: 'preferredTime', label: 'Preferred Time', type: 'select', required: true, options: ['Morning (10–12)', 'Afternoon (12–3)', 'Evening (3–6)'] },
    { name: 'location', label: 'Preferred Location', type: 'select', required: true, options: ['Indiranagar', 'Koramangala', 'Whitefield'] },
    { name: 'reason', label: 'Reason for Visit', type: 'select', required: true, options: ['Hair Transplant Consultation', 'PRP Therapy', 'Scalp Micropigmentation', 'Follow-up Visit', 'Other'] },
    { name: 'message', label: 'Additional Notes', type: 'textarea', required: false },
  ],
};

export default booking;
