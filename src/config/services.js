const services = [
  {
    id: 'fue-hair-transplant',
    title: 'FUE Hair Transplant',
    icon: '✦',
    shortDesc: 'Minimally invasive follicular unit extraction for natural, permanent hair restoration with no linear scarring.',
    longDesc: `Follicular Unit Extraction (FUE) is the gold standard in modern hair transplantation. Dr. Vikram Patel extracts individual hair follicles from the donor area and transplants them to thinning or balding regions, creating a completely natural-looking result.

**Who is it for?**
- Men and women with androgenetic alopecia (pattern hair loss)
- Patients seeking a scar-free, minimally invasive procedure
- Those wanting natural density restoration

**What to expect:**
- Procedure takes 6–8 hours under local anaesthesia
- Resume normal activities within 3–5 days
- Initial growth visible at 3–4 months, full results by 12 months

**Recovery:**
- Mild redness and tiny scabs in the transplant area for 7–10 days
- No heavy exercise for 2 weeks
- Follow-up visits at 1 week, 1 month, and 6 months`,
    faqs: [
      { question: 'Is FUE painful?', answer: 'The procedure is performed under local anaesthesia, so you feel no pain during the transplant. Mild discomfort in the first 2–3 days is managed with simple painkillers.' },
      { question: 'How many grafts do I need?', answer: 'This depends on your grade of hair loss, donor quality, and desired density. Dr. Vikram Patel will provide an exact graft estimate during your personalised consultation.' },
      { question: 'Will the results look natural?', answer: 'Absolutely. Dr. Patel designs each hairline individually, considering your facial structure, age, and natural growth patterns to ensure the most natural appearance.' },
    ],
  },
  {
    id: 'dhi-hair-transplant',
    title: 'DHI Hair Transplant',
    icon: '◈',
    shortDesc: 'Direct Hair Implantation for maximum density and precision placement — ideal for hairline refinement.',
    longDesc: `Direct Hair Implantation (DHI) uses a specialised Choi implanter pen to extract and implant follicles in a single step. This technique allows Dr. Patel precise control over the angle, depth, and direction of each graft — ideal for high-density restoration and hairline work.

**Who is it for?**
- Patients requiring high-density coverage
- Hairline refinement and lowering cases
- Those wanting minimal graft handling for maximum survival

**What to expect:**
- Procedure takes 5–7 hours
- Local anaesthesia with optional sedation
- Results visible from 4 months, full results by 12–14 months`,
    faqs: [
      { question: 'What is the difference between FUE and DHI?', answer: 'In FUE, grafts are extracted and placed separately. In DHI, extraction and implantation happen simultaneously using a Choi pen, reducing graft handling time and potentially improving survival rates.' },
      { question: 'Is DHI more expensive than FUE?', answer: 'DHI is typically slightly higher due to the specialised instruments and technique involved. We provide transparent pricing during your consultation at Mane Restore.' },
    ],
  },
  {
    id: 'prp-therapy',
    title: 'PRP Hair Therapy',
    icon: '💎',
    shortDesc: 'Platelet-Rich Plasma therapy that stimulates dormant follicles and strengthens existing hair for visibly thicker growth.',
    longDesc: `PRP (Platelet-Rich Plasma) therapy harnesses your body's own growth factors to rejuvenate hair follicles. At Mane Restore, we use advanced double-spin centrifuge technology to concentrate platelets for optimal results.

**Who is it for?**
- Early-stage hair thinning (Grade 1–3)
- Post-transplant patients (to accelerate graft survival and growth)
- Those seeking a non-surgical, lunch-break treatment

**What to expect:**
- 30–45 minute session, no downtime
- Usually 4 sessions spaced 4 weeks apart
- Maintenance sessions every 4–6 months
- Visible improvement in hair thickness within 3–6 months`,
    faqs: [
      { question: 'Does PRP hurt?', answer: 'You may feel mild prickling during injections. We apply a topical numbing cream beforehand to minimise any discomfort — most patients describe it as very tolerable.' },
      { question: 'Can PRP replace a hair transplant?', answer: 'PRP is excellent for early thinning and as a complement to transplants, but it cannot recreate hair in completely bald areas where follicles are permanently lost.' },
    ],
  },
  {
    id: 'scalp-micropigmentation',
    title: 'Scalp Micropigmentation',
    icon: '◉',
    shortDesc: 'Medical-grade tattooing that creates the appearance of a full, closely-cropped head or adds density to thinning areas.',
    longDesc: `Scalp Micropigmentation (SMP) uses precision micro-needles to deposit pigment into the scalp dermis, replicating the look of natural hair follicles. At Mane Restore, we use medical-grade organic pigments matched to your hair colour.

**Who is it for?**
- Patients who want a buzz-cut/shaved-head look with a defined hairline
- Women with diffuse thinning seeking visual density
- Scar camouflage from previous transplant or accident scars

**What to expect:**
- 2–3 sessions of 2–4 hours each
- Results visible immediately after Session 1
- Touch-up every 3–5 years to maintain vibrancy`,
    faqs: [
      { question: 'Is SMP permanent?', answer: 'SMP is semi-permanent. The organic pigment fades gradually over 3–5 years and can be refreshed with a quick touch-up session.' },
    ],
  },
  {
    id: 'beard-transplant',
    title: 'Beard & Eyebrow Transplant',
    icon: '✧',
    shortDesc: 'Precision facial hair transplantation for fuller beards, moustaches, and natural eyebrow restoration.',
    longDesc: `Facial hair transplantation uses follicles from the scalp donor area to create or enhance beard, moustache, sideburn, or eyebrow density. Dr. Patel places each graft with meticulous attention to natural growth direction and angle.

**Who is it for?**
- Patchy or thin beard/moustache
- Eyebrow restoration (scarring, over-plucking, medical conditions)
- Gender-affirming facial hair procedures

**What to expect:**
- Procedure takes 3–5 hours under local anaesthesia
- Transplanted hair sheds at 2–4 weeks, then regrows permanently
- Results visible from 3 months, full growth by 9–12 months`,
    faqs: [
      { question: 'Will the transplanted beard hair grow like normal beard hair?', answer: 'Initially the texture may be slightly different since grafts come from the scalp, but over time the hair adapts and can be trimmed and groomed just like natural beard hair.' },
    ],
  },
  {
    id: 'hair-loss-consultation',
    title: 'Hair Loss Consultation',
    icon: '🔍',
    shortDesc: 'Comprehensive evaluation including digital trichoscopy, blood work review, and a personalised treatment roadmap.',
    longDesc: `A thorough hair loss consultation is the critical first step. Dr. Vikram Patel personally evaluates your hair loss pattern, scalp condition, donor area quality, and overall health using advanced digital trichoscopy at Mane Restore.

**What's included:**
- Detailed medical and family history review
- Digital trichoscopy and scalp analysis with magnified imaging
- Discussion of all treatment options with realistic timelines
- Personalised treatment plan document
- Transparent cost estimate with EMI options

**Duration:** 30–45 minutes
**Consultation Fee:** ₹500 (adjustable against procedure cost)`,
    faqs: [
      { question: 'Do I need a consultation before a transplant?', answer: 'Yes. A consultation is essential to determine candidacy, set realistic expectations, plan the graft count, and design the hairline correctly.' },
      { question: 'Can I do a virtual consultation?', answer: 'Yes! We offer virtual consultations where you can share photos and discuss options with Dr. Patel from the comfort of your home. Visit our Virtual Consultation page to get started.' },
    ],
  },
];

export default services;
