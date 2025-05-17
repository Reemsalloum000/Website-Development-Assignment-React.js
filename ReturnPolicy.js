import React from "react";

function ReturnPolicy() {
  return (
    <div style={{
      backgroundColor: "#f5f9fc",
      padding: "40px 20px",
      minHeight: "100vh",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      {/* Header Section */}
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
          }}>🔄</span>
          Return Policy
          <span style={{
            position: "absolute",
            right: "-40px",
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: "1.8rem"
          }}>🔄</span>
        </h1>
        
        <p style={{
          fontSize: "1.1rem",
          lineHeight: "1.8",
          color: "#555"
        }}>
          At <strong style={{color: "#2a7fba"}}>LifeCare Medical Center</strong>, we stand behind our products and services with a fair return policy.
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
          color: "#1F118F",
          fontSize: "1.8rem",
          marginBottom: "20px",
          borderBottom: "2px solid #eee",
          paddingBottom: "10px",
          display: "flex",
          alignItems: "center",
          gap: "10px"
        }}>
          <span>🔄</span> Eligibility for Returns
        </h2>
        
        <p style={{lineHeight: "1.8", fontSize: "1.1rem"}}>
          Returns are accepted within 14 days of purchase, provided that:
        </p>
        <ul style={{lineHeight: "1.8", fontSize: "1.1rem", paddingLeft: "20px"}}>
          <li>Product is unused and in original condition</li>
          <li>Original packaging is intact</li>
          <li>Proof of purchase (receipt) is provided</li>
        </ul>
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
          color: "#1F118F",
          fontSize: "1.8rem",
          marginBottom: "20px",
          borderBottom: "2px solid #eee",
          paddingBottom: "10px",
          display: "flex",
          alignItems: "center",
          gap: "10px"
        }}>
          <span>🔄</span> Refund Process
        </h2>
        
        <p style={{lineHeight: "1.8", fontSize: "1.1rem"}}>
          Refunds will be processed within 7 business days after we receive and inspect your return. 
          The refund will be issued to your original payment method.
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
          color: "#1F118F",
          fontSize: "1.8rem",
          marginBottom: "20px",
          borderBottom: "2px solid #eee",
          paddingBottom: "10px",
          display: "flex",
          alignItems: "center",
          gap: "10px"
        }}>
          <span>↩️</span> Service Refunds
        </h2>
        
        <p style={{lineHeight: "1.8", fontSize: "1.1rem"}}>
          If you're unsatisfied with a service, please contact us within 48 hours of your appointment. 
          Service refunds are evaluated on a case-by-case basis.
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
          color: "#e74c3c",
          fontSize: "1.8rem",
          marginBottom: "20px",
          borderBottom: "2px solid #eee",
          paddingBottom: "10px",
          display: "flex",
          alignItems: "center",
          gap: "10px"
        }}>
          <span>🚫</span> Non-Returnable Items
        </h2>
        
        <p style={{lineHeight: "1.8", fontSize: "1.1rem"}}>
          For health and safety reasons, we cannot accept returns of:
        </p>
        <ul style={{lineHeight: "1.8", fontSize: "1.1rem", paddingLeft: "20px"}}>
          <li>Opened medications or supplements</li>
          <li>Personalized medical devices</li>
          <li>Diagnostic kits and used medical supplies</li>
          <li>Any product that has been installed or used</li>
        </ul>
      </div>

      {/* Contact Section */}
      <div style={{
        maxWidth: "900px",
        margin: "0 auto",
        backgroundColor: "#e6f2ff",
        padding: "30px",
        borderRadius: "10px",
        boxShadow: "0 3px 10px rgba(0,0,0,0.1)"
      }}>
        <h2 style={{
          color: "#2a7fba",
          fontSize: "1.8rem",
          marginBottom: "20px",
          textAlign: "center"
        }}>How to Initiate a Return</h2>
        
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
          justifyContent: "center",
          marginTop: "20px"
        }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "10px"
          }}>
            <span style={{fontSize: "1.5rem"}}>📧</span>
            <span style={{fontSize: "1.1rem"}}>returns@lifecare.com</span>
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

export default ReturnPolicy;