import { FiUserCheck, FiActivity, FiHeart, FiAward } from "react-icons/fi";

const departmentsData = [
  // 1. Cardiology (already done)
  {
    id: 1,
    name: "Cardiology",
    slug: "cardiology",
    image: "/images/departments/cardiology.jpg",
    overview:
      "The Cardiology Department provides advanced cardiac care, diagnosis, and treatment for all heart-related conditions. Our experienced cardiologists specialize in preventive cardiology, interventional procedures, and long-term heart disease management.",
    services: [
      "ECG, Echo, TMT",
      "Hypertension & cholesterol management",
      "Heart attack treatment",
      "Interventional cardiology procedures",
      "Holter monitoring",
      "Cardiac rehabilitation"
    ],
    conditions: ["Heart attack", "Arrhythmia", "Heart failure", "Coronary artery disease", "Valve disorders"],
    doctors: [
      { name: "Dr. Rahul Sharma", designation: "Senior Cardiologist", about: "Expert in interventional cardiology with 15+ years experience. Dedicated to preventive heart care and personalized treatment plans.", photo: "/images/doctors/rahul.jpg" },
      { name: "Dr. Priya Verma", designation: "Cardiology Consultant", about: "Specializes in complex cardiac cases, heart failure management, and patient-centric treatment approaches.", photo: "/images/doctors/priya.jpg" }
    ],
    highlights: [
      { title: "Expert Cardiologists", description: "Our cardiology team is led by senior specialists with years of experience in interventional and preventive cardiac care.", icon: FiUserCheck },
      { title: "Advanced Cardiac Equipment", description: "ECG, Echo, TMT, Holter monitoring, and more ensure precise diagnostics and effective treatment.", icon: FiActivity },
      { title: "Personalized Heart Care", description: "Individualized treatment and rehabilitation programs for long-term heart health.", icon: FiHeart },
      { title: "Proven Treatment Success", description: "Thousands of patients successfully treated, earning trust and confidence in our cardiac care.", icon: FiAward }
    ]
  },

  // 2. General Medicine
  {
    id: 2,
    name: "General Medicine",
    slug: "general-medicine",
    image: "/images/departments/general-medicine.jpg",
    overview:
      "Our General Medicine Department addresses a wide range of adult illnesses and health concerns, providing preventive, diagnostic, and therapeutic care.",
    services: ["Routine health check-ups", "Chronic disease management", "Infections treatment", "Vaccinations", "Lifestyle counseling"],
    conditions: ["Diabetes", "Hypertension", "Infections", "Thyroid disorders", "Respiratory illnesses"],
    doctors: [
      { name: "Dr. Anil Kumar", designation: "General Physician", about: "Experienced in treating a wide range of adult health conditions and promoting preventive care.", photo: "/images/doctors/anil.jpg" },
      { name: "Dr. Meera Singh", designation: "Consultant Physician", about: "Focuses on accurate diagnosis and personalized treatment plans for patients of all ages.", photo: "/images/doctors/meera.jpg" }
    ],
    highlights: [
      { title: "Comprehensive Care", description: "Covers a broad spectrum of adult health issues for early detection and management.", icon: FiUserCheck },
      { title: "Advanced Diagnostics", description: "Modern lab and imaging facilities to ensure accurate diagnosis.", icon: FiActivity },
      { title: "Patient-Centered Approach", description: "Focus on personalized treatment plans and preventive care.", icon: FiHeart },
      { title: "Trusted Expertise", description: "Highly skilled physicians with years of clinical experience.", icon: FiAward }
    ]
  },

  // 3. Diabetology
  {
    id: 3,
    name: "Diabetology",
    slug: "diabetology",
    image: "/images/departments/diabetology.jpg",
    overview:
      "Our Diabetology Department specializes in the management of diabetes, including Type 1, Type 2, and gestational diabetes, with a focus on lifestyle intervention and medication.",
    services: ["Blood sugar monitoring", "Insulin therapy", "Diet and lifestyle management", "Diabetes education", "Complications management"],
    conditions: ["Type 1 Diabetes", "Type 2 Diabetes", "Gestational Diabetes", "Diabetic neuropathy", "Diabetic retinopathy"],
    doctors: [
      { name: "Dr. Suresh Reddy", designation: "Senior Diabetologist", about: "Expert in diabetes management, patient education, and long-term lifestyle counseling.", photo: "/images/doctors/suresh.jpg" },
      { name: "Dr. Anjali Gupta", designation: "Consultant Diabetologist", about: "Specializes in individualized diabetes treatment and monitoring.", photo: "/images/doctors/anjali.jpg" }
    ],
    highlights: [
      { title: "Specialized Diabetes Care", description: "Expert team providing personalized diabetes management plans.", icon: FiUserCheck },
      { title: "Advanced Monitoring", description: "State-of-the-art blood sugar and insulin monitoring systems.", icon: FiActivity },
      { title: "Lifestyle Support", description: "Dietary, exercise, and lifestyle guidance for long-term health.", icon: FiHeart },
      { title: "Proven Results", description: "Significant improvement in patient outcomes through structured care.", icon: FiAward }
    ]
  },

  // 4. Gastroenterology
  {
    id: 4,
    name: "Gastroenterology",
    slug: "gastroenterology",
    image: "/images/departments/gastroenterology.jpg",
    overview:
      "Our Gastroenterology Department focuses on the diagnosis and treatment of digestive system disorders, including liver, stomach, and intestinal diseases.",
    services: ["Endoscopy", "Colonoscopy", "Liver disease management", "Digestive health check-ups", "IBS and GERD treatment"],
    conditions: ["Ulcers", "Gastroesophageal reflux disease", "Hepatitis", "Inflammatory bowel disease", "Liver cirrhosis"],
    doctors: [
      { name: "Dr. Rajesh Kumar", designation: "Gastroenterologist", about: "Experienced in advanced GI procedures and digestive health management.", photo: "/images/doctors/rajesh.jpg" },
      { name: "Dr. Kavita Mehta", designation: "Senior Gastroenterologist", about: "Focuses on liver and GI tract disorders, providing patient-centric treatment.", photo: "/images/doctors/kavita.jpg" }
    ],
    highlights: [
      { title: "Expert Gastroenterologists", description: "Specialized team for all digestive system disorders.", icon: FiUserCheck },
      { title: "Advanced Diagnostics", description: "Modern endoscopy and colonoscopy facilities.", icon: FiActivity },
      { title: "Personalized Treatment", description: "Customized care plans for digestive health and liver management.", icon: FiHeart },
      { title: "High Success Rate", description: "Effective treatment for complex gastrointestinal conditions.", icon: FiAward }
    ]
  },

  // 5. Pediatrics
  {
    id: 5,
    name: "Pediatrics",
    slug: "pediatrics",
    image: "/images/departments/pediatrics.jpg",
    overview:
      "Our Pediatrics Department provides comprehensive healthcare for infants, children, and adolescents, focusing on preventive care, growth monitoring, and treatment of childhood illnesses.",
    services: ["Vaccinations", "Growth monitoring", "Neonatal care", "Pediatric nutrition counseling", "Childhood disease management"],
    conditions: ["Common infections", "Asthma", "Allergies", "Growth and developmental disorders", "Congenital conditions"],
    doctors: [
      { name: "Dr. Nisha Patel", designation: "Pediatrician", about: "Specialist in child healthcare, vaccinations, and preventive pediatrics.", photo: "/images/doctors/nisha.jpg" },
      { name: "Dr. Arjun Rao", designation: "Senior Pediatrician", about: "Experienced in treating complex childhood illnesses and neonatal care.", photo: "/images/doctors/arjun.jpg" }
    ],
    highlights: [
      { title: "Child Healthcare Experts", description: "Dedicated pediatricians providing compassionate care.", icon: FiUserCheck },
      { title: "Advanced Pediatric Facilities", description: "Neonatal ICU, vaccination programs, and growth monitoring.", icon: FiActivity },
      { title: "Preventive Care Focus", description: "Focus on child nutrition, immunization, and early detection.", icon: FiHeart },
      { title: "Trusted Pediatric Services", description: "Reliable care for children ensuring long-term health.", icon: FiAward }
    ]
  },

  // 6. Neurology
  {
    id: 6,
    name: "Neurology",
    slug: "neurology",
    image: "/images/departments/neurology.jpg",
    overview:
      "Our Neurology Department diagnoses and treats disorders of the nervous system including brain, spinal cord, and peripheral nerves, using advanced techniques and personalized care.",
    services: ["Stroke management", "EEG and EMG", "Neurodegenerative disease care", "Headache and migraine management", "Neurological rehabilitation"],
    conditions: ["Stroke", "Epilepsy", "Parkinson's disease", "Multiple sclerosis", "Neuropathy"],
    doctors: [
      { name: "Dr. Vivek Sharma", designation: "Neurologist", about: "Expert in diagnosing and managing neurological disorders.", photo: "/images/doctors/vivek.jpg" },
      { name: "Dr. Suman Joshi", designation: "Senior Neurologist", about: "Focuses on complex neurological conditions and patient-centered treatment.", photo: "/images/doctors/suman.jpg" }
    ],
    highlights: [
      { title: "Expert Neurologists", description: "Specialists in managing complex nervous system disorders.", icon: FiUserCheck },
      { title: "Modern Neurodiagnostics", description: "EEG, EMG, and neuroimaging for precise diagnosis.", icon: FiActivity },
      { title: "Patient-Centered Care", description: "Personalized treatment plans for neurological health.", icon: FiHeart },
      { title: "Proven Clinical Success", description: "High success rate in managing neurological disorders.", icon: FiAward }
    ]
  },

  // 7. Pulmonology
  {
    id: 7,
    name: "Pulmonology",
    slug: "pulmonology",
    image: "/images/departments/pulmonology.jpg",
    overview:
      "The Pulmonology Department treats respiratory system diseases, including lungs and airway disorders, focusing on accurate diagnosis and advanced therapies.",
    services: ["Asthma management", "COPD treatment", "Sleep apnea care", "Pulmonary function tests", "Smoking cessation programs"],
    conditions: ["Asthma", "Chronic bronchitis", "Pneumonia", "COPD", "Sleep disorders"],
    doctors: [
      { name: "Dr. Rakesh Bhatia", designation: "Pulmonologist", about: "Specializes in respiratory care and pulmonary rehabilitation.", photo: "/images/doctors/rakesh.jpg" },
      { name: "Dr. Pooja Reddy", designation: "Senior Pulmonologist", about: "Experienced in treating lung diseases and respiratory emergencies.", photo: "/images/doctors/pooja.jpg" }
    ],
    highlights: [
      { title: "Expert Pulmonologists", description: "Specialized team for respiratory health.", icon: FiUserCheck },
      { title: "Advanced Respiratory Care", description: "Pulmonary tests and therapies using modern equipment.", icon: FiActivity },
      { title: "Personalized Lung Care", description: "Tailored treatment plans for each patient.", icon: FiHeart },
      { title: "Proven Results", description: "Effective management of chronic and acute respiratory conditions.", icon: FiAward }
    ]
  },

  // 8. Orthopedics
  {
    id: 8,
    name: "Orthopedics",
    slug: "orthopedics",
    image: "/images/departments/orthopedics.jpg",
    overview:
      "Our Orthopedics Department provides comprehensive care for musculoskeletal conditions, injuries, and joint problems, focusing on mobility restoration and pain relief.",
    services: ["Joint replacement", "Fracture management", "Arthroscopy", "Sports injury care", "Physiotherapy support"],
    conditions: ["Fractures", "Arthritis", "Sports injuries", "Back pain", "Joint disorders"],
    doctors: [
      { name: "Dr. Manoj Desai", designation: "Orthopedic Surgeon", about: "Expert in joint replacement and musculoskeletal surgery.", photo: "/images/doctors/manoj.jpg" },
      { name: "Dr. Shweta Agarwal", designation: "Senior Orthopedic Surgeon", about: "Specializes in trauma care, arthritis management, and sports injuries.", photo: "/images/doctors/shweta.jpg" }
    ],
    highlights: [
      { title: "Expert Orthopedic Team", description: "Experienced surgeons providing advanced orthopedic care.", icon: FiUserCheck },
      { title: "State-of-the-Art Facilities", description: "Modern operation theaters and rehabilitation units.", icon: FiActivity },
      { title: "Patient-Focused Care", description: "Tailored treatment plans for quick recovery.", icon: FiHeart },
      { title: "Proven Surgical Success", description: "High success rate in joint replacement and trauma care.", icon: FiAward }
    ]
  },

  // 9. Nephrology
  {
    id: 9,
    name: "Nephrology",
    slug: "nephrology",
    image: "/images/departments/nephrology.jpg",
    overview:
      "The Nephrology Department specializes in kidney health, managing acute and chronic kidney diseases, dialysis, and preventive care.",
    services: ["Dialysis", "Kidney transplant support", "Blood pressure management", "Chronic kidney disease management", "Electrolyte monitoring"],
    conditions: ["Chronic kidney disease", "Kidney stones", "Hypertension", "Glomerulonephritis", "Acute kidney injury"],
    doctors: [
      { name: "Dr. Amit Chawla", designation: "Nephrologist", about: "Expert in kidney disease management and dialysis care.", photo: "/images/doctors/amit.jpg" },
      { name: "Dr. Rekha Menon", designation: "Senior Nephrologist", about: "Focuses on chronic kidney care and transplantation support.", photo: "/images/doctors/rekha.jpg" }
    ],
    highlights: [
      { title: "Kidney Health Experts", description: "Specialized team for all kidney-related conditions.", icon: FiUserCheck },
      { title: "Advanced Dialysis & Care", description: "State-of-the-art dialysis and monitoring services.", icon: FiActivity },
      { title: "Personalized Kidney Care", description: "Tailored treatment plans to maintain kidney health.", icon: FiHeart },
      { title: "Proven Clinical Excellence", description: "Trusted nephrology care with successful patient outcomes.", icon: FiAward }
    ]
  },

  // 10. General Surgery
  {
    id: 10,
    name: "General Surgery",
    slug: "general-surgery",
    image: "/images/departments/general-surgery.jpg",
    overview:
      "Our General Surgery Department performs a wide range of surgical procedures, including emergency, elective, and minimally invasive surgeries, ensuring patient safety and optimal outcomes.",
    services: ["Laparoscopic surgery", "Hernia repair", "Appendectomy", "Gallbladder surgery", "Post-operative care"],
    conditions: ["Hernias", "Gallstones", "Appendicitis", "Abdominal tumors", "Trauma injuries"],
    doctors: [
      { name: "Dr. Rohit Verma", designation: "General Surgeon", about: "Expert in minimally invasive and complex surgical procedures.", photo: "/images/doctors/rohit.jpg" },
      { name: "Dr. Neha Joshi", designation: "Senior Surgeon", about: "Experienced in elective and emergency surgeries with patient-centric care.", photo: "/images/doctors/neha.jpg" }
    ],
    highlights: [
      { title: "Experienced Surgeons", description: "Specialists in laparoscopic and traditional surgeries.", icon: FiUserCheck },
      { title: "Advanced Surgical Facilities", description: "Modern operation theaters and post-op care units.", icon: FiActivity },
      { title: "Patient Safety Focus", description: "Strict protocols and personalized surgical plans.", icon: FiHeart },
      { title: "Proven Surgical Success", description: "High success rate across complex and routine surgeries.", icon: FiAward }
    ]
  },

  // 11. Anesthesiology
  {
    id: 11,
    name: "Anesthesiology",
    slug: "anesthesiology",
    image: "/images/departments/anesthesiology.jpg",
    overview:
      "The Anesthesiology Department provides expert anesthesia care for surgeries and critical care, ensuring patient comfort and safety during procedures.",
    services: ["General anesthesia", "Regional anesthesia", "Pain management", "Critical care support", "Pre-operative evaluation"],
    conditions: ["Surgical anesthesia", "Chronic pain", "Post-operative pain", "ICU sedation", "Emergency anesthesia"],
    doctors: [
      { name: "Dr. Kiran Sharma", designation: "Anesthesiologist", about: "Experienced in perioperative anesthesia and critical care management.", photo: "/images/doctors/kiran.jpg" },
      { name: "Dr. Priya Nair", designation: "Senior Anesthesiologist", about: "Focuses on patient safety and pain management during surgeries.", photo: "/images/doctors/priya_nair.jpg" }
    ],
    highlights: [
      { title: "Expert Anesthesiologists", description: "Specialized in perioperative and pain management care.", icon: FiUserCheck },
      { title: "Advanced Monitoring", description: "State-of-the-art monitoring and anesthesia techniques.", icon: FiActivity },
      { title: "Patient Safety & Comfort", description: "Ensuring smooth and safe procedures.", icon: FiHeart },
      { title: "Proven Excellence", description: "Trusted anesthesia services with high patient satisfaction.", icon: FiAward }
    ]
  },

  // 12. Pathology
  {
    id: 12,
    name: "Pathology",
    slug: "pathology",
    image: "/images/departments/pathology.jpg",
    overview:
      "Our Pathology Department provides diagnostic testing for accurate detection of diseases, guiding timely treatment with modern lab technology.",
    services: ["Blood tests", "Biopsies", "Histopathology", "Cytology", "Microbiology tests"],
    conditions: ["Infections", "Cancer detection", "Blood disorders", "Hormonal disorders", "Genetic conditions"],
    doctors: [
      { name: "Dr. Sameer Gupta", designation: "Pathologist", about: "Specializes in laboratory diagnostics and disease detection.", photo: "/images/doctors/sameer.jpg" },
      { name: "Dr. Ananya Rao", designation: "Senior Pathologist", about: "Experienced in clinical pathology and diagnostic services.", photo: "/images/doctors/ananya.jpg" }
    ],
    highlights: [
      { title: "Expert Pathologists", description: "Accurate diagnostics for timely treatment.", icon: FiUserCheck },
      { title: "Modern Lab Facilities", description: "State-of-the-art equipment for precise tests.", icon: FiActivity },
      { title: "Reliable Reports", description: "Quick and accurate lab results for patient care.", icon: FiHeart },
      { title: "Trusted Diagnostics", description: "High standard laboratory services for healthcare.", icon: FiAward }
    ]
  },

  // 13. Urology
  {
    id: 13,
    name: "Urology",
    slug: "urology",
    image: "/images/departments/urology.jpg",
    overview:
      "The Urology Department specializes in urinary tract and male reproductive system disorders, providing surgical and non-surgical treatments.",
    services: ["Kidney stone treatment", "Prostate care", "Urinary incontinence management", "Laparoscopic urology", "Male infertility treatment"],
    conditions: ["Kidney stones", "Prostate disorders", "Urinary tract infections", "Bladder problems", "Male infertility"],
    doctors: [
      { name: "Dr. Vikas Jain", designation: "Urologist", about: "Expert in urinary tract and prostate disorders.", photo: "/images/doctors/vikas.jpg" },
      { name: "Dr. Priyanka Shah", designation: "Senior Urologist", about: "Specializes in kidney stones, male infertility, and laparoscopic procedures.", photo: "/images/doctors/priyanka.jpg" }
    ],
    highlights: [
      { title: "Expert Urologists", description: "Specialized care for urinary and reproductive health.", icon: FiUserCheck },
      { title: "Advanced Urology Care", description: "Modern diagnostics and minimally invasive treatments.", icon: FiActivity },
      { title: "Personalized Treatment", description: "Tailored plans for male and female urology patients.", icon: FiHeart },
      { title: "Proven Outcomes", description: "Successful treatment of complex urological conditions.", icon: FiAward }
    ]
  },

  // 14. Dermatology
  {
    id: 14,
    name: "Dermatology",
    slug: "dermatology",
    image: "/images/departments/dermatology.jpg",
    overview:
      "The Dermatology Department treats skin, hair, and nail disorders with advanced medical and cosmetic dermatology services.",
    services: ["Acne treatment", "Psoriasis management", "Skin cancer screening", "Cosmetic procedures", "Hair and nail care"],
    conditions: ["Acne", "Eczema", "Psoriasis", "Skin infections", "Hair loss"],
    doctors: [
      { name: "Dr. Ritu Malhotra", designation: "Dermatologist", about: "Specialist in skin, hair, and nail disorders with cosmetic expertise.", photo: "/images/doctors/ritu.jpg" },
      { name: "Dr. Kunal Verma", designation: "Senior Dermatologist", about: "Experienced in medical and aesthetic dermatology.", photo: "/images/doctors/kunal.jpg" }
    ],
    highlights: [
      { title: "Skin Health Experts", description: "Specialized dermatologists for all skin conditions.", icon: FiUserCheck },
      { title: "Advanced Skin Treatments", description: "Modern equipment for medical and cosmetic dermatology.", icon: FiActivity },
      { title: "Personalized Care", description: "Tailored skin care plans for every patient.", icon: FiHeart },
      { title: "Proven Results", description: "Effective treatment for skin, hair, and nail conditions.", icon: FiAward }
    ]
  },

  // 15. Physiotherapy
  {
    id: 15,
    name: "Physiotherapy",
    slug: "physiotherapy",
    image: "/images/departments/physiotherapy.jpg",
    overview:
      "Our Physiotherapy Department provides rehabilitation and therapeutic care for injury recovery, mobility improvement, and pain management.",
    services: ["Post-surgical rehab", "Sports injury therapy", "Pain management", "Exercise therapy", "Manual therapy"],
    conditions: ["Back pain", "Joint injuries", "Post-surgical rehabilitation", "Sports injuries", "Mobility disorders"],
    doctors: [
      { name: "Dr. Sunil Rao", designation: "Physiotherapist", about: "Expert in rehabilitation and mobility improvement through exercise therapy.", photo: "/images/doctors/sunil.jpg" },
      { name: "Dr. Neeta Sharma", designation: "Senior Physiotherapist", about: "Specializes in sports injuries and post-operative recovery.", photo: "/images/doctors/neeta.jpg" }
    ],
    highlights: [
      { title: "Expert Physiotherapists", description: "Specialized in rehabilitation and mobility improvement.", icon: FiUserCheck },
      { title: "Advanced Therapy Facilities", description: "Modern equipment for effective physiotherapy sessions.", icon: FiActivity },
      { title: "Personalized Rehab Plans", description: "Customized therapy plans for each patient.", icon: FiHeart },
      { title: "Proven Rehabilitation Success", description: "Effective recovery programs for faster healing.", icon: FiAward }
    ]
  }
];

export default departmentsData;
