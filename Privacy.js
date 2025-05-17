import React from "react";

function Privacy() {
  return (
    <div style={{
      backgroundColor: "#f5f9fc",
      padding: "40px 20px",
      minHeight: "100vh",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      <div style={{
        maxWidth: "900px",
        margin: "0 auto 40px",
        textAlign: "center"
      }}>
        <h1 style={{
          fontSize: "2.5rem",
          color: "#2a7fba",
          marginBottom: "20px",
          position: "relative",
          display: "inline-block"
        }}>
          <span style={{
            position: "absolute",
            left: "-40px",
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: "1.8rem"
          }}>🔒</span>
          Privacy Policy
          <span style={{
            position: "absolute",
            right: "-40px",
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: "1.8rem"
          }}>🔒</span>
        </h1>
        
        <p style={{
          fontSize: "1.1rem",
          lineHeight: "1.8",
          color: "#555"
        }}>
          At <strong style={{color: "#2a7fba"}}>LifeCare Medical Center</strong>, we take your privacy seriously 
          and handle your data with the highest security and confidentiality standards.
        </p>
      </div>

      <div style={{
        maxWidth: "900px",
        margin: "0 auto 40px",
        backgroundColor: "white",
        padding: "30px",
        borderRadius: "10px",
        boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
        borderTopColor: "rgba(202, 140, 7, 0.1)"
      }}>
        <h2 style={{
          color: "#2E2B81",
          fontSize: "1.8rem",
          marginBottom: "20px",
          borderBottom: "2px solid #eee",
          paddingBottom: "10px"
        }}>Information We Collect</h2>
        
        <p style={{lineHeight: "1.8", fontSize: "1.1rem"}}>
          We may collect personal information including your name, email address, 
          phone number, and medical history when you use our services.
        </p>
      </div>

      <div style={{
        maxWidth: "900px",
        margin: "0 auto 40px",
        backgroundColor: "white",
        padding: "30px",
        borderRadius: "10px",
        boxShadow: "0 3px 10px rgba(0, 0, 0, 0.1)",
        borderTop: "rgba(202, 140, 7, 0.1)"
      }}>
        <h2 style={{
          color: "#2E2B81",
          fontSize: "1.8rem",
          marginBottom: "20px",
          borderBottom: "2px solid #eee",
          paddingBottom: "10px"
        }}>Sharing of Information</h2>
        
        <p style={{lineHeight: "1.8", fontSize: "1.1rem"}}>
          We do not sell or share your personal information with third parties 
          unless required by law or with your explicit consent.
        </p>
      </div>

      <div style={{
        maxWidth: "900px",
        margin: "0 auto 40px",
        backgroundColor: "white",
        padding: "30px",
        borderRadius: "10px",
        boxShadow: "0 3px 10px rgba(0,0,0,0.1)"
      }}>
        <h2 style={{
          color: "#2E2B81",
          fontSize: "1.8rem",
          marginBottom: "20px",
          borderBottom: "2px solid #eee",
          paddingBottom: "10px"
        }}>Data Protection Measures</h2>
        
        <p style={{lineHeight: "1.8", fontSize: "1.1rem"}}>
          We use advanced encryption systems and strict access controls to protect your data,
          with staff trained on best data protection practices.
        </p>
      </div>

      <div style={{
        maxWidth: "900px",
        margin: "0 auto",
        backgroundColor: "#e6f2ff",
        padding: "30px",
        borderRadius: "10px",
        boxShadow: "0 3px 10px rgba(0,0,0,0.1)"
      }}>
        <h2 style={{
          color: "#2E2B81",
          fontSize: "1.8rem",
          marginBottom: "20px",
          textAlign: "center"
        }}>Contact Information</h2>
        
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
          justifyContent: "center"
        }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "10px"
          }}>
            <span style={{fontSize: "1.5rem"}}>📧</span>
            <span style={{fontSize: "1.1rem"}}>privacy@lifecare.com</span>
          </div>
          
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "10px"
          }}>
            <span style={{fontSize: "1.5rem"}}>📞</span>
            <span style={{fontSize: "1.1rem"}}>+970 599 123 456</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Privacy;