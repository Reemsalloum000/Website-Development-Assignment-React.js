import React from "react";

function FAQCard({ borderColor, iconBg, emoji, title, description }) {
  return (
    <div style={{
      backgroundColor: "white",
      borderRadius: "10px",
      padding: "30px",
      boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
      borderTop: `4px solid ${borderColor}`,
      display: "flex",
      flexDirection: "column",
      gap: "15px"
    }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "10px"
      }}>
        <div style={{
          width: "50px",
          height: "50px",
          backgroundColor: iconBg,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginRight: "15px",
          flexShrink: "0"
        }}>
          <span style={{ fontSize: "1.5rem", color: borderColor }}>{emoji}</span>
        </div>
        <h2 style={{
          color: "#2c3e50",
          fontSize: "1.4rem",
          margin: "0"
        }}>{title}</h2>
      </div>
      <p style={{
        lineHeight: "1.7",
        color: "#34495e",
        fontSize: "1rem"
      }}>
        {description}
      </p>
    </div>
  );
}

function FAQ() {
  return (
    <div style={{
      backgroundColor: "#f8fafc",
      padding: "40px 20px",
      minHeight: "100vh",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>

      <div style={{
        maxWidth: "900px",
        margin: "0 auto 50px",
        textAlign: "center",
        position: "relative"
      }}>
        <div style={{
          position: "absolute",
          top: "-20px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "100px",
          height: "4px",
          backgroundColor: "#2a7fba",
          borderRadius: "2px"
        }}></div>
        <h1 style={{
          fontSize: "2.3rem",
          color: "#2c3e50",
          marginBottom: "15px",
          fontWeight: "600",
          letterSpacing: "0.5px"
        }}>
          ❓ Frequently Asked Questions ❓
        </h1>
        <p style={{
          fontSize: "1.1rem",
          color: "#7f8c8d",
          maxWidth: "700px",
          margin: "0 auto",
          lineHeight: "1.6"
        }}>
          Find quick answers to the most common questions about LifeCare Medical Center.
        </p>
      </div>

      <div style={{
        maxWidth: "900px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
        gap: "25px"
      }}>
        <FAQCard 
          borderColor="#3498db" iconBg="#e8f4fc" emoji="🩺"
          title="What medical services do you provide?"
          description="We offer general checkups, dental care, laboratory tests, emergency care, and more." 
        />
        <FAQCard 
          borderColor="#2ecc71" iconBg="#e8f8f0" emoji="📅"
          title="What are your working hours?"
          description="Our clinic is open Monday to Friday from 8 AM - 8 PM. Saturdays from 9 AM - 5 PM. Closed on Sundays." 
        />
        <FAQCard 
          borderColor="#e67e22" iconBg="#fef0e6" emoji="💳"
          title="Do you accept insurance?"
          description="Yes, we accept various insurance plans. Please check with our reception for details." 
        />
        <FAQCard 
          borderColor="#9b59b6" iconBg="#f4ecf7" emoji="📞"
          title="How can I book an appointment?"
          description="You can book an appointment online or call us at +970 599 123 456." 
        />
      </div>
    </div>
  );
}

export default FAQ;
