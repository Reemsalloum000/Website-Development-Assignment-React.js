import React, { useState } from 'react';
import doctorsImg from '../images/doctors.jpg';
import hospitalImg from '../images/hospital-interior.jpg';
import labImg from '../images/lab.jpg';
import patientCareImg from '../images/Patient-Care.jpg';
import surgeryImg from '../images/Surgical-Room.jpg';
import emergencyImg from '../images/emergency.jpg';


const Album = () => {
  const images = [
    { src: doctorsImg, title: 'Medical Team' },
    { src: hospitalImg, title: 'Hospital Interior' },
    { src: labImg, title: 'Medical Laboratory' },
    { src: patientCareImg, title: 'Patient Care' },
    { src: surgeryImg, title: 'Surgical Room' },
    { src: emergencyImg, title: 'Emergency Department' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Medical Center Album</h2>
      
      <div style={styles.sliderContainer}>
        <button style={styles.arrowButton} onClick={prevImage}>&lt;</button>
        
        <div style={styles.slide}>
          <img 
            src={images[currentIndex].src} 
            alt={images[currentIndex].title}
            style={styles.image}
          />
          <div style={styles.caption}>
            {images[currentIndex].title} ({currentIndex + 1}/{images.length})
          </div>
        </div>
        
        <button style={styles.arrowButton} onClick={nextImage}>&gt;</button>
      </div>

      <div style={styles.dotsContainer}>
        {images.map((_, index) => (
          <span 
            key={index} 
            style={currentIndex === index ? styles.activeDot : styles.dot}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center'
  },
  title: {
    color: '#2a7fba',
    marginBottom: '30px'
  },
  sliderContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '20px'
  },
  slide: {
    width: '100%',
    maxWidth: '600px',
    position: 'relative'
  },
  image: {
    width: '100%',
    height: '400px',
    objectFit: 'cover',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
  },
  caption: {
    marginTop: '10px',
    color: '#666'
  },
  arrowButton: {
    background: '#2a7fba',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    fontSize: '20px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  dotsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginTop: '20px'
  },
  dot: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    background: '#ccc',
    cursor: 'pointer'
  },
  activeDot: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    background: '#2a7fba',
    cursor: 'pointer'
  }
};

export default Album;
