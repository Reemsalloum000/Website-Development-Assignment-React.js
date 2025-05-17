import React from "react";

function TermsAndConditions() {
  return (
    <div style={{
      backgroundColor: "#f8fafc",
      padding: "40px 20px",
      minHeight: "100vh",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      {/* Header with Decorative Elements */}
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
          Terms and Conditions
        </h1>
        <p style={{
          fontSize: "1.1rem",
          color: "#7f8c8d",
          maxWidth: "700px",
          margin: "0 auto",
          lineHeight: "1.6"
        }}>
          Welcome to LifeCare Medical Center. Please read these terms carefully before using our services.
        </p>
      </div>

      {/* Terms Cards */}
      <div style={{
        maxWidth: "900px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
        gap: "25px"
      }}>
        {/* Acceptance of Terms */}
        <div style={{
          backgroundColor: "white",
          borderRadius: "10px",
          padding: "30px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
          borderTop: "4px solid #3498db"
        }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px"
          }}>
            <div style={{
              width: "50px",
              height: "50px",
              backgroundColor: "#e8f4fc",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "15px",
              flexShrink: "0"
            }}>
              <span style={{ fontSize: "1.5rem", color: "#3498db" }}>📝</span>
            </div>
            <h2 style={{
              color: "#2c3e50",
              fontSize: "1.4rem",
              margin: "0"
            }}>Acceptance of Terms</h2>
          </div>
          <p style={{
            lineHeight: "1.7",
            color: "#34495e",
            fontSize: "1rem"
          }}>
            By accessing or using this website, you agree to be bound by these terms and conditions. 
            If you disagree with any part, you may not use our services.
          </p>
        </div>

        {/* Legal Compliance */}
        <div style={{
          backgroundColor: "white",
          borderRadius: "10px",
          padding: "30px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
          borderTop: "4px solid #e74c3c"
        }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px"
          }}>
            <div style={{
              width: "50px",
              height: "50px",
              backgroundColor: "#fdedec",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "15px",
              flexShrink: "0"
            }}>
              <span style={{ fontSize: "1.5rem", color: "#e74c3c" }}>⚖️</span>
            </div>
            <h2 style={{
              color: "#2c3e50",
              fontSize: "1.4rem",
              margin: "0"
            }}>Legal Compliance</h2>
          </div>
          <p style={{
            lineHeight: "1.7",
            color: "#34495e",
            fontSize: "1rem"
          }}>
            You agree to comply with all applicable medical regulations, laws, and ethical guidelines 
            when using our services or products.
          </p>
        </div>

        {/* Payments & Refunds */}
        <div style={{
          backgroundColor: "white",
          borderRadius: "10px",
          padding: "30px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
          borderTop: "4px solid #2ecc71"
        }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px"
          }}>
            <div style={{
              width: "50px",
              height: "50px",
              backgroundColor: "#e8f8f0",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "15px",
              flexShrink: "0"
            }}>
              <span style={{ fontSize: "1.5rem", color: "#2ecc71" }}>💳</span>
            </div>
            <h2 style={{
              color: "#2c3e50",
              fontSize: "1.4rem",
              margin: "0"
            }}>Payments & Refunds</h2>
          </div>
          <p style={{
            lineHeight: "1.7",
            color: "#34495e",
            fontSize: "1rem"
          }}>
            Full payment is required before services are rendered. Refund policies follow our 
            published Return Policy guidelines.
          </p>
        </div>

        {/* Limitation of Liability */}
        <div style={{
          backgroundColor: "white",
          borderRadius: "10px",
          padding: "30px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
          borderTop: "4px solid #f39c12"
        }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px"
          }}>
            <div style={{
              width: "50px",
              height: "50px",
              backgroundColor: "#fef5e7",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "15px",
              flexShrink: "0"
            }}>
              <span style={{ fontSize: "1.5rem", color: "#f39c12" }}>⚠️</span>
            </div>
            <h2 style={{
              color: "#2c3e50",
              fontSize: "1.4rem",
              margin: "0"
            }}>Limitation of Liability</h2>
          </div>
          <p style={{
            lineHeight: "1.7",
            color: "#34495e",
            fontSize: "1rem"
          }}>
            LifeCare Medical Center is not liable for misuse of medical information, services, 
            or products beyond our direct control.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div style={{
        maxWidth: "900px",
        margin: "40px auto 0",
        backgroundColor: "#2a7fba",
        padding: "30px",
        borderRadius: "10px",
        textAlign: "center",
        color: "white"
      }}>
        <h2 style={{
          fontSize: "1.6rem",
          marginBottom: "20px"
        }}>Need Help?</h2>
        <p style={{
          fontSize: "1.1rem",
          lineHeight: "1.6",
          marginBottom: "25px",
          maxWidth: "700px",
          marginLeft: "auto",
          marginRight: "auto"
        }}>
          Contact our support team for any questions about these terms
        </p>
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
            <span style={{fontSize: "1.3rem"}}>📧</span>
            <span style={{fontSize: "1.1rem"}}>support@lifecare.com</span>
          </div>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "10px"
          }}>
            <span style={{fontSize: "1.3rem"}}>📞</span>
            <span style={{fontSize: "1.1rem"}}>+970 599 123 456</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsAndConditions;