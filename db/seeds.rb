

# Doctors' seed data
doctor_names = [
    { name: "Meredith Grey", department: "General Surgery" , image_url: "https://upload.wikimedia.org/wikipedia/en/5/53/Greys-Anatomy-Season-7-Promo-9.jpg", description: "Dr. Meredith Grey is a highly skilled and compassionate general surgeon. With her exceptional surgical expertise and unwavering dedication, she strives to provide the highest standard of care for her patients. Driven by a deep sense of empathy, she goes above and beyond to ensure her patients feel heard, supported, and well-informed throughout their medical journey. Her commitment to excellence and genuine concern for the well-being of others make her a trusted and respected physician."},
    { name: "Derek Shepherd", department: "Neurosurgery" , image_url: "https://upload.wikimedia.org/wikipedia/en/b/b4/Dr._Derek_Shepherd.jpg", description: "Dr. Derek Shepherd is a renowned neurosurgeon known for his brilliance and surgical precision. With his extensive knowledge and expertise in the field of neurosurgery, he tackles complex cases with confidence and determination. Dr. Shepherd's genuine compassion for his patients is evident in his ability to connect with them on a personal level, providing reassurance and support. His innovative approach to treatment and unwavering commitment to advancing medical knowledge make him a leading figure in the field of neurosurgery."},
    { name: "Cristina Yang", department: "Cardiothoracic Surgery" , image_url: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Cristina_Yang.jpg", description: "Dr. Cristina Yang is an exceptional cardiothoracic surgeon with an unwavering focus on achieving the best possible outcomes for her patients. With her razor-sharp intellect and exceptional technical skills, she fearlessly takes on challenging cases in the operating room. Dr. Yang's relentless pursuit of excellence and her passion for pushing the boundaries of medical knowledge make her a true trailblazer in the field of cardiothoracic surgery. Her unwavering dedication to her craft and unyielding determination set her apart as a remarkable physician."},
    { name: "Alex Karev", department: "Pediatric Surgery" , image_url: "https://upload.wikimedia.org/wikipedia/en/f/f3/Dr._Alex_Karev.jpg", description: "Dr. Alex Karev is a dedicated and compassionate pediatric surgeon who provides exceptional care to his young patients. With his gentle demeanor and ability to connect with children, he creates a comforting and safe environment for his patients and their families. Dr. Karev's unwavering commitment to advocating for his patients' well-being and his determination to find innovative solutions make him a trusted and reliable physician. His journey from a troubled intern to a skilled and empathetic surgeon is a testament to his growth and passion for making a positive impact on the lives of children."},
    { name: "Miranda Bailey", department: "General Surgery" , image_url: "https://upload.wikimedia.org/wikipedia/en/8/87/Dr._Miranda_Bailey.jpg", description: "Dr. Miranda Bailey is a highly efficient and detail-oriented general surgeon who approaches every patient case with utmost precision. Known for her no-nonsense attitude, Dr. Bailey sets high standards in patient care and expects nothing less than excellence from herself and her team. Despite her no-nonsense demeanor, she genuinely cares about her patients' well-being, ensuring they receive the best possible care. Dr. Bailey's exceptional organizational skills and unwavering commitment to her profession make her an invaluable asset to the medical team."},
    { name: "Richard Webber", department: "General Surgery" , image_url: "https://upload.wikimedia.org/wikipedia/en/3/34/Dr._Richard_Webber.jpg", description: "Dr. Richard Webber is a highly experienced and respected attending physician. With his vast medical knowledge and wisdom, he serves as a mentor to the younger doctors, guiding them in their professional development. Dr. Webber's dedication to teaching, combined with his compassionate and patient-centered approach, make him a highly respected and admired figure in the medical community."},
    { name: "Callie Torres", department: "Orthopedic Surgery" , image_url: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2f/CallieTorres.jpg/220px-CallieTorres.jpg", description: "Dr. Callie Torres is a talented and passionate orthopedic surgeon. With her expertise in musculoskeletal conditions and surgical techniques, she strives to improve her patients' quality of life. Dr. Torres' dedication to innovation and her compassionate approach to patient care make her a trusted advocate for her patients. Her ability to connect with people on a personal level and her unwavering determination make her an invaluable asset to the medical team."},
    { name: "Arizona Robbins", department: "Pediatric Surgery" , image_url: "https://upload.wikimedia.org/wikipedia/en/d/d3/Dr._Arizona_Robbins.jpg", description: "Dr. Arizona Robbins is a skilled pediatric surgeon with a vibrant and compassionate personality. Known for her positive energy and ability to create a warm and friendly environment, she puts her young patients and their families at ease. Dr. Robbins' expertise in pediatric medicine, coupled with her genuine care for her patients' well-being, make her a highly sought-after physician. Her commitment to making a difference in the lives of children is truly inspiring."},
    { name: "Owen Hunt", department: "Trauma Surgery" , image_url: "https://upload.wikimedia.org/wikipedia/en/6/60/Dr._Owen_Hunt.jpg", description: "Dr. Owen Hunt is a dedicated trauma surgeon with a strong sense of duty and a compassionate heart. Known for his calm and composed demeanor in high-pressure situations, he is skilled at managing critical cases and providing life-saving interventions. Dr. Hunt's commitment to his patients extends beyond the operating room, as he strives to provide holistic care and support for their emotional well-being. His leadership skills and unwavering dedication to his profession make him a respected and influential figure in the hospital."},
    { name: "Jackson Avery", department: "Plastic Surgery" , image_url: "https://upload.wikimedia.org/wikipedia/en/4/45/Jesse-williams-greys.jpg", description: "Dr. Jackson Avery is a talented and innovative plastic surgeon. With his artistic eye and meticulous attention to detail, he helps his patients achieve their desired aesthetic outcomes. Driven by a desire to make a positive impact, he combines his surgical skills with a compassionate approach, ensuring his patients feel confident and comfortable throughout their transformative journeys. Dr. Avery's dedication to his craft and his commitment to pushing the boundaries of plastic surgery make him a respected and sought-after physician."},
    { name: "April Kepner", department: "Trauma Surgery" , image_url: "https://tv-fanatic-res.cloudinary.com/iu/s--qCN2q8ww--/t_xlarge_p/cs_srgb,f_auto,fl_strip_profile.lossy,q_auto:420/v1371236286/sarah-drew-as-dr-april-kepner.png", description: "Dr. April Kepner is a compassionate and detail-oriented surgeon known for her unwavering dedication to patient care. With a meticulous approach to medicine, she leaves no stone unturned in her pursuit of providing the highest quality treatment to her patients. Dr. Kepner's attention to detail and thoroughness ensure accurate diagnoses and tailored treatment plans that address the specific needs of each individual."},
    { name: "Amelia Shepherd", department: "Neurosurgery" , image_url: "https://upload.wikimedia.org/wikipedia/en/e/e9/Amelia_s11.jpg", description: "Dr. Amelia Shepherd is an exceptional neurosurgeon who possesses a remarkable combination of expertise and compassion. With her extensive knowledge and specialized training in neurosurgical procedures, she is highly skilled in diagnosing and treating complex neurological conditions. Dr. Shepherd's commitment to staying at the forefront of advancements in her field ensures that her patients receive the most advanced and innovative treatments available."},
    { name: "Mark Sloan", department: "Plastic Surgery" , image_url: "https://upload.wikimedia.org/wikipedia/en/9/9a/Dr._Mark_Sloan.jpg", description: "Dr. Mark Sloan is a charismatic and highly skilled plastic surgeon. With his expertise in cosmetic and reconstructive procedures, he helps his patients restore their confidence and overcome physical challenges. Dr. Sloan's charming personality and ability to connect with people on a personal level make him a trusted and sought-after surgeon. His unwavering commitment to his patients' well-being and his passion for his craft make him a true asset to the medical team"},
    { name: "Addison Montgomery", department: "Obstetrics and Gynecology" , image_url: "https://s.yimg.com/ny/api/res/1.2/LvGU3VLc0oLxLzzeqw_EXg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTEwMzQ-/https://media.zenfs.com/en/e__181/f0e00ae1cc440ab07e68721720937c0f", description: "Dr. Addison Montgomery is a renowned obstetrician-gynecologist with a wealth of knowledge and expertise in her field. Known for her strong-willed nature and unwavering dedication to her patients, she provides compassionate and comprehensive care for women's health. Dr. Montgomery's exceptional surgical skills and ability to navigate complex medical cases make her a trusted advocate for her patients. Her commitment to patient-centered care and her strong advocacy for women's reproductive health make her a respected and influential figure in the medical community."},
    { name: "Teddy Altman", department: "Cardiothoracic Surgery" , image_url: "https://akns-images.eonline.com/eol_images/Entire_Site/2017520/rs_634x1024-170620093959-634.kim-raver.cm.62017.jpg?fit=around%7C634:1024&output-quality=90&crop=634:1024;center,top", description: "Dr. Teddy Altman is a compassionate and highly skilled cardiothoracic surgeon. Known for her unwavering dedication to her patients, she goes above and beyond to provide the best possible care for those with heart and lung conditions. Dr. Altman's expertise in complex surgical procedures and her ability to handle high-pressure situations make her a trusted and respected physician. Her genuine empathy and commitment to her patients' well-being set her apart as a compassionate and remarkable surgeon."},
    { name: "Nathan Riggs", department: "Cardiothoracic Surgery" , image_url: "https://www.who.com.au/media/12964/greys-anatomy-martin-henderson.jpg", description: "Dr. Nathan Riggs is a skilled and dedicated cardiothoracic surgeon. With his expertise in the field of heart and lung surgeries, he saves lives and provides hope to his patients. Driven by a tragic past and a desire for redemption, he is committed to making a difference in the lives of those he treats. Dr. Riggs' determination, technical proficiency, and unwavering dedication to his patients' well-being make him a valued member of the medical team."},
    { name: "Izzie Stevens", department: "Surgical Oncology" , image_url: "https://upload.wikimedia.org/wikipedia/en/9/94/Dr._Isobel_Stevens.jpg", description: "Dr. Izzie Stevens is a compassionate and talented surgical oncologist. Known for her empathetic approach and strong connection with her patients, she goes above and beyond to provide personalized care and emotional support. Dr. Stevens' exceptional surgical skills, coupled with her deep understanding of the emotional toll of cancer, make her a trusted and respected physician. Her unwavering dedication to her patients' well-being and her ability to find joy and hope even in challenging circumstances set her apart as a remarkable doctor."},
    { name: "George O'Malley", department: "Trauma Surgery" , image_url: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7f/T.R._Knight_as_George_O%27Malley.jpg/215px-T.R._Knight_as_George_O%27Malley.jpg", description: "
      Dr. George O'Malley is a highly skilled and compassionate surgical resident who consistently delivers exceptional patient care. With his attention to detail and commitment to excellence, he approaches each case with the utmost professionalism and dedication. Dr. O'Malley's empathetic nature and strong communication skills allow him to establish a trusting and supportive relationship with his patients. He takes the time to listen to their concerns and ensures they feel heard and understood throughout their treatment journey. Dr. O'Malley's commitment to continuous learning and growth in his medical practice enables him to provide the highest standard of care to his patients. Patients can have confidence in his expertise, knowing that he will go above and beyond to ensure their well-being and comfort during their medical experience."},
    { name: "Preston Burke", department: "Cardiothoracic Surgery" , image_url: "https://upload.wikimedia.org/wikipedia/en/9/91/Preston_Burke.jpg", description: "Dr. Preston Burke is a highly accomplished cardiothoracic surgeon who brings a wealth of knowledge and expertise to his practice. With his extensive experience in complex cardiac procedures, he is known for delivering exceptional outcomes and providing the highest quality of care to his patients. Dr. Burke's meticulous attention to detail and unwavering commitment to excellence set him apart as a trusted and respected physician."},
    { name: "Levi Schmitt", department: "General Surgery" , image_url: "https://upload.wikimedia.org/wikipedia/en/6/60/Jake_Borelli_as_Levi_Schmitt_15x03.png", description: "Dr. Levi Schmitt is a dedicated and compassionate physician who brings a strong commitment to patient care to his practice. As a surgical resident, he demonstrates a deep passion for medicine and a genuine desire to make a positive impact on the lives of his patients.
      Dr. Schmitt's enthusiasm and eagerness to learn translate into a meticulous and detail-oriented approach to patient treatment. He takes the time to thoroughly assess each case, ensuring accurate diagnoses and personalized treatment plans. Patients can trust in his attention to detail, knowing that he is dedicated to providing the highest standard of care."}
  ]
  
  doctor_names.each do |doctor|
    Doctor.create(name: doctor[:name], department: doctor[:department], image_url: doctor[:image_url], description: doctor[:description], email: doctor[:name].sub(/^(\w)\w*\s(\w+)/, '\1\2@doc.sgh.com').downcase, password_digest: BCrypt::Password.create("1234"))
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
    Patient.create(name: patient[:name], age: patient[:age], history: patient[:history], email: patient[:name].sub(/^(\w)\w*\s(\w+)/, '\1\2@ptn.sgh.com').downcase,
    password_digest: BCrypt::Password.create("1234") )
  end
  
  
  appointments_data = [
    { date: Date.today, time: "10", reason_for_visit: "Annual check-up", patient_id: 1 , doctor_id: ""},
    { date: Date.today, time: "11", reason_for_visit: "Follow-up for medication", patient_id: 2 , doctor_id: ""},
    { date: Date.tomorrow, time: "14", reason_for_visit: "Initial consultation", patient_id: 3 , doctor_id: ""},
    { date: Date.tomorrow, time: "9", reason_for_visit: "Blood test results review", patient_id: 4 , doctor_id: ""},
    { date: Date.today + 3.days, time: "16", reason_for_visit: "Joint pain evaluation", patient_id: 5 , doctor_id: ""},
    { date: Date.today + 4.days, time: "11", reason_for_visit: "Mental health counseling", patient_id: 6 , doctor_id: ""},
    { date: Date.today + 5.days, time: "15", reason_for_visit: "Diabetes management", patient_id: 7 , doctor_id: ""},
    { date: Date.today + 6.days, time: "13", reason_for_visit: "Headache and dizziness", patient_id: 8 , doctor_id: ""},
    { date: Date.today + 7.days, time: "10", reason_for_visit: "Post-surgery follow-up", patient_id: 9 , doctor_id: ""},
    { date: Date.today + 8.days, time: "14", reason_for_visit: "Hypertension monitoring", patient_id: 10, doctor_id: ""},
    # Additional appointment data
    { date: Date.today, time: "15", reason_for_visit: "Allergy consultation", patient_id: 11, doctor_id: "" },
    { date: Date.today, time: "16", reason_for_visit: "Physical therapy session", patient_id: 12, doctor_id: "" },
    { date: Date.tomorrow, time: "10", reason_for_visit: "Gastroenterology follow-up", patient_id: 13, doctor_id: "" },
    { date: Date.tomorrow, time: "13", reason_for_visit: "Dental cleaning", patient_id: 14, doctor_id: "" },
    { date: Date.today + 3.days, time: "9", reason_for_visit: "Orthopedic evaluation", patient_id: 15, doctor_id: "" },
    { date: Date.today + 3.days, time: "14", reason_for_visit: "Counseling session", patient_id: 16, doctor_id: "" },
    { date: Date.today + 4.days, time: "11", reason_for_visit: "Dermatology consultation", patient_id: 17, doctor_id: "" },
    { date: Date.today + 4.days, time: "15", reason_for_visit: "Eye examination", patient_id: 18, doctor_id: "" },
    { date: Date.today + 5.days, time: "9", reason_for_visit: "Cardiology follow-up", patient_id: 19, doctor_id: "" },
    { date: Date.today + 5.days, time: "14", reason_for_visit: "Nutrition counseling", patient_id: 20, doctor_id: "" },
    { date: Date.today + 6.days, time: "10", reason_for_visit: "Psychiatry session", patient_id: 21, doctor_id: "" },
    { date: Date.today + 6.days, time: "15", reason_for_visit: "Physical therapy session", patient_id: 22, doctor_id: "" },
    { date: Date.today + 7.days, time: "9", reason_for_visit: "Dental check-up", patient_id: 23, doctor_id: "" },
    { date: Date.today + 7.days, time: "13", reason_for_visit: "Orthodontic consultation", patient_id: 24, doctor_id: "" },
    { date: Date.today + 8.days, time: "11", reason_for_visit: "Pulmonology follow-up", patient_id: 25, doctor_id: "" },
    { date: Date.today + 8.days, time: "15", reason_for_visit: "Endocrinology consultation", patient_id: 26, doctor_id: "" },
    { date: Date.today + 9.days, time: "10", reason_for_visit: "Ophthalmology appointment", patient_id: 27, doctor_id: "" },
    { date: Date.today + 9.days, time: "14", reason_for_visit: "ENT consultation", patient_id: 28, doctor_id: "" },
    { date: Date.today + 10.days, time: "9", reason_for_visit: "Gynecology check-up", patient_id: 29, doctor_id: "" },
    { date: Date.today + 10.days, time: "13", reason_for_visit: "Physical therapy session", patient_id: 30, doctor_id: "" },
    { date: Date.today + 11.days, time: "15", reason_for_visit: "Urology consultation", patient_id: 31, doctor_id: "" },
    { date: Date.today + 11.days, time: "16", reason_for_visit: "Dental extraction", patient_id: 32, doctor_id: "" },
    { date: Date.today + 12.days, time: "11", reason_for_visit: "Physical therapy session", patient_id: 33, doctor_id: "" },
    { date: Date.today + 12.days, time: "14", reason_for_visit: "Pediatric check-up", patient_id: 34, doctor_id: "" },
    { date: Date.today + 13.days, time: "9", reason_for_visit: "Psychology session", patient_id: 35, doctor_id: "" },
    { date: Date.today + 13.days, time: "13", reason_for_visit: "Dermatology follow-up", patient_id: 36, doctor_id: "" },
    { date: Date.today + 14.days, time: "10", reason_for_visit: "Orthopedic consultation", patient_id: 37, doctor_id: "" },
    { date: Date.today + 14.days, time: "15", reason_for_visit: "Cardiology check-up", patient_id: 38, doctor_id: "" },
    { date: Date.today + 15.days, time: "9", reason_for_visit: "ENT follow-up", patient_id: 39, doctor_id: "" },
    { date: Date.today + 15.days, time: "13", reason_for_visit: "Nutrition counseling", patient_id: 40, doctor_id: "" },
    { date: Date.today + 16.days, time: "11", reason_for_visit: "Gynecology consultation", patient_id: 41, doctor_id: "" },
    { date: Date.today + 16.days, time: "14", reason_for_visit: "Ophthalmology appointment", patient_id: 42, doctor_id: "" },
    { date: Date.today + 17.days, time: "10", reason_for_visit: "Dental cleaning", patient_id: 43, doctor_id: "" },
    { date: Date.today + 17.days, time: "15", reason_for_visit: "Psychiatry session", patient_id: 44, doctor_id: "" },
    { date: Date.today + 18.days, time: "9", reason_for_visit: "Physical therapy session", patient_id: 45, doctor_id: "" }
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
  

