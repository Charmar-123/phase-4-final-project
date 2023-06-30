# Doctors' seed data
doctor_names = [
    { name: "Meredith Grey", department: "General Surgery" , image_url: "https://upload.wikimedia.org/wikipedia/en/5/53/Greys-Anatomy-Season-7-Promo-9.jpg"},
    { name: "Derek Shepherd", department: "Neurosurgery" , image_url: "https://upload.wikimedia.org/wikipedia/en/b/b4/Dr._Derek_Shepherd.jpg"},
    { name: "Cristina Yang", department: "Cardiothoracic Surgery" , image_url: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Cristina_Yang.jpg"},
    { name: "Alex Karev", department: "Pediatric Surgery" , image_url: "https://upload.wikimedia.org/wikipedia/en/f/f3/Dr._Alex_Karev.jpg"},
    { name: "Miranda Bailey", department: "General Surgery" , image_url: "https://upload.wikimedia.org/wikipedia/en/8/87/Dr._Miranda_Bailey.jpg"},
    { name: "Richard Webber", department: "General Surgery" , image_url: "https://upload.wikimedia.org/wikipedia/en/3/34/Dr._Richard_Webber.jpg"},
    { name: "Callie Torres", department: "Orthopedic Surgery" , image_url: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2f/CallieTorres.jpg/220px-CallieTorres.jpg"},
    { name: "Arizona Robbins", department: "Pediatric Surgery" , image_url: "https://upload.wikimedia.org/wikipedia/en/d/d3/Dr._Arizona_Robbins.jpg"},
    { name: "Owen Hunt", department: "Trauma Surgery" , image_url: "https://upload.wikimedia.org/wikipedia/en/6/60/Dr._Owen_Hunt.jpg"},
    { name: "Jackson Avery", department: "Plastic Surgery" , image_url: "https://upload.wikimedia.org/wikipedia/en/4/45/Jesse-williams-greys.jpg"},
    { name: "April Kepner", department: "Trauma Surgery" , image_url: "https://tv-fanatic-res.cloudinary.com/iu/s--qCN2q8ww--/t_xlarge_p/cs_srgb,f_auto,fl_strip_profile.lossy,q_auto:420/v1371236286/sarah-drew-as-dr-april-kepner.png"},
    { name: "Amelia Shepherd", department: "Neurosurgery" , image_url: "https://upload.wikimedia.org/wikipedia/en/e/e9/Amelia_s11.jpg"},
    { name: "Mark Sloan", department: "Plastic Surgery" , image_url: "https://upload.wikimedia.org/wikipedia/en/9/9a/Dr._Mark_Sloan.jpg"},
    { name: "Addison Montgomery", department: "Obstetrics and Gynecology" , image_url: "https://s.yimg.com/ny/api/res/1.2/LvGU3VLc0oLxLzzeqw_EXg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTEwMzQ-/https://media.zenfs.com/en/e__181/f0e00ae1cc440ab07e68721720937c0f"},
    { name: "Teddy Altman", department: "Cardiothoracic Surgery" , image_url: "https://static.wikia.nocookie.net/greysanatomyxo/images/2/21/Teddy_Altman.png/revision/latest?cb=20120825165247"},
    { name: "Nathan Riggs", department: "Cardiothoracic Surgery" , image_url: "https://www.who.com.au/media/12964/greys-anatomy-martin-henderson.jpg"},
    { name: "Izzie Stevens", department: "Surgical Oncology" , image_url: "https://upload.wikimedia.org/wikipedia/en/9/94/Dr._Isobel_Stevens.jpg"},
    { name: "George O'Malley", department: "Trauma Surgery" , image_url: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7f/T.R._Knight_as_George_O%27Malley.jpg/215px-T.R._Knight_as_George_O%27Malley.jpg"},
    { name: "Preston Burke", department: "Cardiothoracic Surgery" , image_url: "https://upload.wikimedia.org/wikipedia/en/9/91/Preston_Burke.jpg"},
    { name: "Levi Schmitt", department: "General Surgery" , image_url: "https://upload.wikimedia.org/wikipedia/en/6/60/Jake_Borelli_as_Levi_Schmitt_15x03.png"}
  ]
  
  doctor_names.each do |doctor|
    Doctor.create(name: doctor[:name], department: doctor[:department], image_url: doctor[:image_url])
  end
  
  
  # Patient seed data
  
  patients_data = [
    { name: "John Doe", age: 35, history: "Hypertension, Diabetes" },
    { name: "Jane Smith", age: 42, history: "Asthma, Allergies" },
    { name: "Michael Johnson", age: 28, history: "None" },
    { name: "Emily Davis", age: 50, history: "Heart Disease, High Cholesterol" },
    { name: "David Wilson", age: 65, history: "Arthritis, Hypothyroidism" },
    { name: "Sophia Brown", age: 19, history: "Anxiety, Depression" },
    { name: "Oliver Taylor", age: 56, history: "Type 2 Diabetes, Obesity" },
    { name: "Ava Martinez", age: 32, history: "Migraines, Insomnia" },
    { name: "Emma Anderson", age: 47, history: "Cancer Survivor" },
    { name: "Liam Thomas", age: 70, history: "Hypertension, Osteoporosis" },
    { name: "Olivia Wilson", age: 25, history: "PCOS, Thyroid Disorders" },
    { name: "Noah Davis", age: 31, history: "Celiac Disease" },
    { name: "Isabella Lee", age: 14, history: "Allergies, Asthma" },
    { name: "James Martinez", age: 62, history: "Chronic Obstructive Pulmonary Disease (COPD)" },
    { name: "Sophia Miller", age: 38, history: "Rheumatoid Arthritis, Fibromyalgia" },
    { name: "Ethan Johnson", age: 47, history: "Type 1 Diabetes" },
    { name: "Mia Clark", age: 29, history: "Anemia" },
    { name: "Aiden Young", age: 8, history: "ADHD" },
    { name: "Charlotte Lewis", age: 60, history: "Osteoarthritis" },
    { name: "Henry Moore", age: 46, history: "Depression, Anxiety" },
    { name: "Lily Davis", age: 33, history: "Asthma, allergies." },
    { name: "Jacob Thompson", age: 67, history: "Type 2 diabetes, hypertension." },
    { name: "Grace White", age: 52, history: "Migraine headaches, depression." },
    { name: "Benjamin Martin", age: 41, history: "Gastroesophageal reflux disease (GERD)." },
    { name: "Abigail Turner", age: 24, history: "Anxiety disorder, panic attacks." },
    { name: "Elijah Harris", age: 37, history: "High cholesterol, obesity." },
    { name: "Elizabeth Walker", age: 61, history: "Hypothyroidism, osteoarthritis." },
    { name: "Carter Allen", age: 31, history: "Crohn's disease, ulcerative colitis." },
    { name: "Sofia Young", age: 26, history: "Depression, eating disorder." },
    { name: "Sebastian Rodriguez", age: 39, history: "Hypertension, sleep apnea." },
    { name: "Avery Lopez", age: 49, history: "Rheumatoid arthritis, fibromyalgia." },
    { name: "Scarlett Hill", age: 29, history: "Endometriosis, polycystic ovary syndrome (PCOS)." },
    { name: "Grayson Green", age: 45, history: "Asthma, allergies." },
    { name: "Zoe Adams", age: 32, history: "Migraine headaches, anxiety." },
    { name: "Jackson Mitchell", age: 57, history: "Type 2 diabetes, hypertension." },
    { name: "Luna Carter", age: 28, history: "Depression, bipolar disorder." },
    { name: "Elijah Turner", age: 43, history: "Obesity, sleep apnea." },
    { name: "Mila Rivera", age: 33, history: "Thyroid disorder, osteoporosis." },
    { name: "Aiden Powell", age: 50, history: "High cholesterol, heart disease." },
    { name: "Aria Collins", age: 36, history: "Anxiety disorder, panic attacks." },
    { name: "Matthew Stewart", age: 62, history: "Osteoarthritis, hypertension." },
    { name: "Layla Murphy", age: 30, history: "Asthma, allergies." },
    { name: "Lucas Rivera", age: 47, history: "Type 2 diabetes, obesity." },
    { name: "Camila Thompson", age: 25, history: "Depression, anxiety." },
    { name: "Henry Adams", age: 41, history: "High blood pressure, high cholesterol." },
    { name: "Penelope Campbell", age: 35, history: "Migraine headaches, depression." },
    { name: "Gabriel Hill", age: 53, history: "Hypothyroidism, rheumatoid arthritis." },
    { name: "Victoria Turner", age: 38, history: "Irritable bowel syndrome (IBS), acid reflux." }
  ]
  
  patients_data.each do |patient|
    Patient.create(name: patient[:name], age: patient[:age], history: patient[:history])
  end
  
  
  appointments_data = [
    { date: Date.today, time: "10:00 AM", reason_for_visit: "Annual check-up", patient_id: 1 , doctor_id: ""},
    { date: Date.today, time: "11:30 AM", reason_for_visit: "Follow-up for medication", patient_id: 2 , doctor_id: ""},
    { date: Date.tomorrow, time: "2:15 PM", reason_for_visit: "Initial consultation", patient_id: 3 , doctor_id: ""},
    { date: Date.tomorrow, time: "9:45 AM", reason_for_visit: "Blood test results review", patient_id: 4 , doctor_id: ""},
    { date: Date.today + 3.days, time: "4:30 PM", reason_for_visit: "Joint pain evaluation", patient_id: 5 , doctor_id: ""},
    { date: Date.today + 4.days, time: "11:00 AM", reason_for_visit: "Mental health counseling", patient_id: 6 , doctor_id: ""},
    { date: Date.today + 5.days, time: "3:30 PM", reason_for_visit: "Diabetes management", patient_id: 7 , doctor_id: ""},
    { date: Date.today + 6.days, time: "1:45 PM", reason_for_visit: "Headache and dizziness", patient_id: 8 , doctor_id: ""},
    { date: Date.today + 7.days, time: "10:30 AM", reason_for_visit: "Post-surgery follow-up", patient_id: 9 , doctor_id: ""},
    { date: Date.today + 8.days, time: "2:00 PM", reason_for_visit: "Hypertension monitoring", patient_id: 10, doctor_id: ""},
    # Additional appointment data
    { date: Date.today, time: "3:00 PM", reason_for_visit: "Allergy consultation", patient_id: 11, doctor_id: "" },
    { date: Date.today, time: "4:30 PM", reason_for_visit: "Physical therapy session", patient_id: 12, doctor_id: "" },
    { date: Date.tomorrow, time: "10:30 AM", reason_for_visit: "Gastroenterology follow-up", patient_id: 13, doctor_id: "" },
    { date: Date.tomorrow, time: "1:15 PM", reason_for_visit: "Dental cleaning", patient_id: 14, doctor_id: "" },
    { date: Date.today + 3.days, time: "9:00 AM", reason_for_visit: "Orthopedic evaluation", patient_id: 15, doctor_id: "" },
    { date: Date.today + 3.days, time: "2:30 PM", reason_for_visit: "Counseling session", patient_id: 16, doctor_id: "" },
    { date: Date.today + 4.days, time: "11:30 AM", reason_for_visit: "Dermatology consultation", patient_id: 17, doctor_id: "" },
    { date: Date.today + 4.days, time: "3:00 PM", reason_for_visit: "Eye examination", patient_id: 18, doctor_id: "" },
    { date: Date.today + 5.days, time: "9:45 AM", reason_for_visit: "Cardiology follow-up", patient_id: 19, doctor_id: "" },
    { date: Date.today + 5.days, time: "2:15 PM", reason_for_visit: "Nutrition counseling", patient_id: 20, doctor_id: "" },
    { date: Date.today + 6.days, time: "10:00 AM", reason_for_visit: "Psychiatry session", patient_id: 21, doctor_id: "" },
    { date: Date.today + 6.days, time: "3:30 PM", reason_for_visit: "Physical therapy session", patient_id: 22, doctor_id: "" },
    { date: Date.today + 7.days, time: "9:30 AM", reason_for_visit: "Dental check-up", patient_id: 23, doctor_id: "" },
    { date: Date.today + 7.days, time: "1:45 PM", reason_for_visit: "Orthodontic consultation", patient_id: 24, doctor_id: "" },
    { date: Date.today + 8.days, time: "11:00 AM", reason_for_visit: "Pulmonology follow-up", patient_id: 25, doctor_id: "" },
    { date: Date.today + 8.days, time: "3:30 PM", reason_for_visit: "Endocrinology consultation", patient_id: 26, doctor_id: "" },
    { date: Date.today + 9.days, time: "10:15 AM", reason_for_visit: "Ophthalmology appointment", patient_id: 27, doctor_id: "" },
    { date: Date.today + 9.days, time: "2:45 PM", reason_for_visit: "ENT consultation", patient_id: 28, doctor_id: "" },
    { date: Date.today + 10.days, time: "9:30 AM", reason_for_visit: "Gynecology check-up", patient_id: 29, doctor_id: "" },
    { date: Date.today + 10.days, time: "1:00 PM", reason_for_visit: "Physical therapy session", patient_id: 30, doctor_id: "" },
    { date: Date.today + 11.days, time: "3:00 PM", reason_for_visit: "Urology consultation", patient_id: 31, doctor_id: "" },
    { date: Date.today + 11.days, time: "4:30 PM", reason_for_visit: "Dental extraction", patient_id: 32, doctor_id: "" },
    { date: Date.today + 12.days, time: "11:30 AM", reason_for_visit: "Physical therapy session", patient_id: 33, doctor_id: "" },
    { date: Date.today + 12.days, time: "2:00 PM", reason_for_visit: "Pediatric check-up", patient_id: 34, doctor_id: "" },
    { date: Date.today + 13.days, time: "9:45 AM", reason_for_visit: "Psychology session", patient_id: 35, doctor_id: "" },
    { date: Date.today + 13.days, time: "1:30 PM", reason_for_visit: "Dermatology follow-up", patient_id: 36, doctor_id: "" },
    { date: Date.today + 14.days, time: "10:00 AM", reason_for_visit: "Orthopedic consultation", patient_id: 37, doctor_id: "" },
    { date: Date.today + 14.days, time: "3:15 PM", reason_for_visit: "Cardiology check-up", patient_id: 38, doctor_id: "" },
    { date: Date.today + 15.days, time: "9:30 AM", reason_for_visit: "ENT follow-up", patient_id: 39, doctor_id: "" },
    { date: Date.today + 15.days, time: "1:45 PM", reason_for_visit: "Nutrition counseling", patient_id: 40, doctor_id: "" },
    { date: Date.today + 16.days, time: "11:00 AM", reason_for_visit: "Gynecology consultation", patient_id: 41, doctor_id: "" },
    { date: Date.today + 16.days, time: "2:30 PM", reason_for_visit: "Ophthalmology appointment", patient_id: 42, doctor_id: "" },
    { date: Date.today + 17.days, time: "10:15 AM", reason_for_visit: "Dental cleaning", patient_id: 43, doctor_id: "" },
    { date: Date.today + 17.days, time: "3:30 PM", reason_for_visit: "Psychiatry session", patient_id: 44, doctor_id: "" },
    { date: Date.today + 18.days, time: "9:30 AM", reason_for_visit: "Physical therapy session", patient_id: 45, doctor_id: "" }
    # Add more appointment data here
  ]
  
  appointments_data.each do |appointment|
      doctor_id = rand(21)
    Appointment.create(
      date: appointment[:date],
      time: appointment[:time],
      reason_for_visit: appointment[:reason_for_visit],
      patient_id: appointment[:patient_id],
      doctor_id: doctor_id)
  end
  