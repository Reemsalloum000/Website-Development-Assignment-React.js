import React from "react";
import backgroundImage from "../images/bg3.jpg";

function Home() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          filter: "blur(1px)",
        }}
      />

      {/* Overlay box for text */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          padding: "20px",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.85)",
            padding: "40px",
            borderRadius: "12px",
            maxWidth: "900px",
            textAlign: "center",
            boxShadow: "0 0 10px rgba(0,0,0,0.3)",
          }}
        >
          <h1
            style={{
              fontSize: "42px",
              marginBottom: "20px",
              color: "#003366",
            }}
          >
            ⚕️ Welcome to LifeCare Medical Center! ⚕️
          </h1>
          <p style={{ fontSize: "18px", lineHeight: "1.6", color: "#222" }}>
            Welcome to LifeCare Medical Center, where innovation meets compassionate care.
            Our state-of-the-art facility and experienced team are dedicated to providing
            comprehensive, personalized healthcare services. We invite you to explore our
            website and discover how our commitment to excellence can make a positive impact
            on your well-being.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
