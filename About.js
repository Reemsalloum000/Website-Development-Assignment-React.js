import React from "react";

function About() {
  return (
    
    <div style={{
        backgroundColor: "#f0f8ff", 
        padding: "50px 20px",
        minHeight: "100vh",
      }}>
        
              <h1 style={{ fontSize: "36px", color: "#2c3e50", marginBottom: "20px", textAlign: "center" }}>
        🌐 About Us 🌐
      </h1>

      <p style={{ fontSize: "18px", lineHeight: "1.8", marginBottom: "30px", textAlign: "justify" }}>
        Founded in 2025, LifeCare Medical Center has been committed to providing exceptional healthcare services to our community.
        Our state-of-the-art facility, combined with our team of highly skilled doctors and medical professionals, ensures that
        every patient receives personalized and comprehensive care.
      </p>
<hr></hr>
      <h2 style={{ color: "#16a085", fontSize: "24px", marginTop: "30px" }}>Our Mission and Vision:</h2>
      <ul style={{ fontSize: "18px", lineHeight: "1.8", paddingLeft: "20px" }}>
        <li><strong>★ Mission:</strong> To deliver outstanding medical care with compassion and professionalism, ensuring every patient feels valued and understood.</li>
        <li><strong>★ Vision:</strong> To be a leading medical center renowned for excellence, innovation, and patient-centered services, setting new standards in healthcare.</li>
      </ul>
<hr></hr>
      <h2 style={{ color: "#16a085", fontSize: "24px", marginTop: "30px" }}>Our Values:</h2>
      <ul style={{ fontSize: "18px", lineHeight: "1.8", paddingLeft: "20px" }}>
        <li><strong>✔ Professionalism:</strong> Upholding the highest standards in medical practice and ethical care.</li>
        <li><strong>✔ Transparency:</strong> Maintaining clear, honest communication with our patients.</li>
        <li><strong>✔ Compassion:</strong> Treating every patient with empathy, respect, and individualized attention.</li>
        <li><strong>✔ Innovation:</strong> Embracing the latest medical technologies and methodologies to continually improve patient outcomes.</li>
      </ul>
    </div>
  );
}

export default About;
