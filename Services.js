import React, { useState } from "react";

function Services() {
  const [showServices, setShowServices] = useState(false);

  const medicalServices = [
    { title: "General Checkup", icon: "🩺", description: "Comprehensive health assessments to monitor your overall well-being." },
    { title: "Dental Care", icon: "🦷", description: "Professional dental treatments, including cleaning, fillings, and orthodontics." },
    { title: "Laboratory Tests", icon: "🧪", description: "Accurate blood tests and diagnostics with fast results." },
    { title: "Emergency Care", icon: "🚑", description: "24 hours emergency services for urgent medical conditions." },
    { title: "Pharmacy", icon: "💊", description: "Full-service pharmacy with a wide range of medications and consultations." },
    { title: "Doctors", icon: "👨‍⚕️", description: "Our team of experienced medical professionals is dedicated to your health." }
  ];

  const pricingData = [
    ["General Checkup", "$50", "30 min", "Dr. John Doe"],
    ["Dental Cleaning", "$80", "45 min", "Dr. Sarah Smith"],
    ["Laboratory Blood Test", "$30", "20 min", "Dr. Michael Brown"],
    ["Emergency Care", "$150", "Immediate", "Available 24/7"],
    ["Pharmacy Consultation", "$20", "15 min", "Dr. Emily Johnson"]
  ];

  const workingHours = [
    { day: "Monday - Friday", hours: "8 AM - 8 PM" },
    { day: "Saturday", hours: "9 AM - 5 PM" },
    { day: "Sunday", hours: "Closed" }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.contentWrapper}>
        <header style={styles.header}>
          <h1 style={styles.mainTitle}>🩺 Our Medical Services 🩺</h1>
          <p style={styles.subtitle}>
            At LifeCare Medical Center, we provide high-quality healthcare services to ensure your well-being.
          </p>
        </header>

        {/* Services Toggle Button */}
        <div style={styles.toggleContainer}>
          <button 
            style={styles.toggleButton}
            onClick={() => setShowServices(!showServices)}
          >
            {showServices ? "Hide Services" : "Show Services"}
          </button>
        </div>

        {/* Collapsible Services Section */}
        {showServices && (
          <section style={styles.section}>
            <div style={styles.servicesGrid}>
              {medicalServices.map((service, index) => (
                <div key={index} style={styles.serviceCard}>
                  <span style={styles.serviceIcon}>{service.icon}</span>
                  <h3 style={styles.serviceTitle}>{service.title}</h3>
                  <p style={styles.serviceDescription}>{service.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Pricing Table (Always visible) */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>💰 Service Pricing & Details</h2>
          <div style={styles.tableContainer}>
            <table style={styles.pricingTable}>
              <thead>
                <tr style={styles.tableHeaderRow}>
                  <th style={styles.tableHeader}>Service</th>
                  <th style={styles.tableHeader}>Price</th>
                  <th style={styles.tableHeader}>Duration</th>
                  <th style={styles.tableHeader}>Doctor</th>
                </tr>
              </thead>
              <tbody>
                {pricingData.map((row, i) => (
                  <tr key={i} style={i % 2 === 0 ? styles.tableRowEven : styles.tableRowOdd}>
                    {row.map((cell, j) => (
                      <td key={j} style={styles.tableCell}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Working Hours (Always visible) */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>⏳ Working Hours</h2>
          <ul style={styles.hoursList}>
            {workingHours.map((item, index) => (
              <li key={index} style={styles.hoursItem}>
                <strong>{item.day}:</strong> {item.hours}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

// Styles
const styles = {
  container: {
    backgroundColor: "#f9f9f9",
    padding: "60px 20px",
    minHeight: "100vh"
  },
  contentWrapper: {
    maxWidth: "1100px",
    margin: "0 auto"
  },
  header: {
    textAlign: "center",
    marginBottom: "40px"
  },
  mainTitle: {
    fontSize: "36px",
    color: "#2c3e50",
    marginBottom: "20px"
  },
  subtitle: {
    fontSize: "18px",
    lineHeight: "1.6",
    color: "#555"
  },
  toggleContainer: {
    textAlign: "center",
    margin: "30px 0"
  },
  toggleButton: {
    backgroundColor: "#1266C7",
    color: "white",
    border: "none",
    padding: "12px 24px",
    borderRadius: "5px",
    fontSize: "20px",
    cursor: "pointer",
    transition: "background-color 0.3s",
    ":hover": {
      backgroundColor: "#0d4d9f"
    }
  },
  section: {
    marginBottom: "60px"
  },
  sectionTitle: {
    fontSize: "28px",
    color: "#2c3e50",
    marginBottom: "20px"
  },
  servicesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "30px",
    margin: "30px 0"
  },
  serviceCard: {
    backgroundColor: "#fff",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    textAlign: "center"
  },
  serviceIcon: {
    fontSize: "40px",
    marginBottom: "15px",
    display: "block"
  },
  serviceTitle: {
    color: "#1266C7",
    fontSize: "20px",
    marginBottom: "10px"
  },
  serviceDescription: {
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#555"
  },
  tableContainer: {
    overflowX: "auto",
    marginTop: "20px"
  },
  pricingTable: {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: "16px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)"
  },
  tableHeaderRow: {
    backgroundColor: "#1266C7",
    color: "#fff"
  },
  tableHeader: {
    padding: "12px",
    border: "1px solid #ddd",
    textAlign: "center"
  },
  tableRowEven: {
    backgroundColor: "#fff"
  },
  tableRowOdd: {
    backgroundColor: "#f2f2f2"
  },
  tableCell: {
    padding: "12px",
    border: "1px solid #ddd",
    textAlign: "center"
  },
  hoursList: {
    fontSize: "18px",
    lineHeight: "1.8",
    listStyleType: "none",
    paddingLeft: "0"
  },
  hoursItem: {
    marginBottom: "10px",
    paddingLeft: "20px",
    position: "relative",
    ":before": {
      content: "'•'",
      color: "#1266C7",
      fontWeight: "bold",
      position: "absolute",
      left: "0"
    }
  }
};

export default Services;