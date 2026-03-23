const virtualConsult = {
  enabled: true,
  title: 'Virtual Hair Loss Consultation',
  subtitle: 'Get expert advice from the comfort of your home',
  description: `Can't visit us in person? Our virtual consultation is designed for patients who want a preliminary assessment and treatment recommendations from Dr. [Doctor_Name] without travelling to the clinic.`,
  whoIsItFor: [
    'Patients outside Bengaluru or India',
    'Busy professionals with limited time',
    'Those wanting an initial opinion before committing to travel',
    'Follow-up patients who need a quick review',
  ],
  whatHappens: [
    'Submit your photos and medical history through our secure form',
    'Dr. [Doctor_Name] personally reviews your case within 48 hours',
    'You receive a detailed video or written consultation report',
    'Treatment plan with cost estimates and next steps',
    'Option to schedule an in-person visit if needed',
  ],
  responseTime: '48 hours',
  formFields: [
    { name: 'fullName', label: 'Full Name', type: 'text', required: true },
    { name: 'phone', label: 'Phone Number (with country code)', type: 'tel', required: true },
    { name: 'email', label: 'Email Address', type: 'email', required: true },
    { name: 'age', label: 'Age', type: 'number', required: true },
    { name: 'gender', label: 'Gender', type: 'select', required: true, options: ['Male', 'Female', 'Other'] },
    { name: 'concern', label: 'Primary Concern', type: 'select', required: true, options: ['Hair Thinning', 'Receding Hairline', 'Bald Patch / Crown', 'Beard / Eyebrow', 'Post-transplant Review', 'Other'] },
    { name: 'duration', label: 'How long have you had this concern?', type: 'select', required: true, options: ['Less than 1 year', '1–3 years', '3–5 years', 'More than 5 years'] },
    { name: 'previousTreatment', label: 'Any previous treatments?', type: 'textarea', required: false },
    { name: 'photos', label: 'Upload Photos (top, front, sides)', type: 'file', required: false },
    { name: 'message', label: 'Additional Information', type: 'textarea', required: false },
  ],
};

export default virtualConsult;
