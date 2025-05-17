import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";  

function Navbar() {
    
  return (
    <nav style={styles.navbar}>
      <div style={styles.logoContainer}>
        <img src={logo} alt="LifeCare Logo" style={styles.logo} />
        <h1  style={styles.title}>LifeCare Medical Center</h1>
      </div>
      <div style={styles.linksContainer}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/about" style={styles.link}>About</Link>
        <Link to="/services" style={styles.link}>Services</Link>
        <Link to="/portfolio" style={styles.link}>Portfolio</Link>
        <Link to="/album" style={styles.link}>Album</Link>
        <Link to="/privacy" style={styles.link}>Privacy Policy</Link>
        <Link to="/return-policy" style={styles.link}>Return Policy</Link>
        <Link to="/terms" style={styles.link}>Terms</Link>
        <Link to="/faq" style={styles.link}>FAQ</Link>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    background: "#002B5B",
    color: "white",
    padding: "15px 25px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    boxShadow: "0 2px 12px rgba(0, 0, 0, 0.2)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    width: "130px",
    height: "60px",
    marginRight: "15px",
  },
  title: {
    fontSize: "22px",
    margin: 0,
    color: "white",
    fontFamily: "'Times New Roman', serif",
    fontWeight: "bold",
  },
  linksContainer: {
    display: "flex",
    alignItems: "center",
    gap: "18px",
  },
  link: {
    position: "relative",
    color: "white",
    textDecoration: "none",
    fontSize: "17px",
    fontWeight: "500",
    transition: "all 0.3s ease",
    padding: "5px 0",
  },
  linkText: {
    position: "relative",
    display: "inline-block",
  },
};


export default Navbar;
