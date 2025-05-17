import React, { useState } from 'react';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Gallery data
  const galleryItems = [
    {
      id: 1,
      category: 'operations',
      title: 'Operation Rooms',
      description: 'State-of-the-art operation theaters with advanced technology',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=500&auto=format&fit=crop'
    },
    {
      id: 2,
      category: 'doctors',
      title: 'Medical Team',
      description: 'Highly qualified specialist doctors',
      image: 'https://images.unsplash.com/photo-1550831107-1553da8c8464?w=500&auto=format&fit=crop'
    },
    {
      id: 3,
      category: 'labs',
      title: 'Medical Labs',
      description: 'Advanced diagnostic laboratory equipment',
      image: 'https://copenspace.dk/wp-content/uploads/2023/04/Laboratory-1024x576-1.jpg'
    },
    {
      id: 4,
      category: 'rooms',
      title: 'Patient Rooms',
      description: 'Comfortable recovery rooms for patients',
      image: 'https://mcdmag.com/wp-content/uploads/2017/06/Jun17_MCDeNews_Feature1-1000x600.jpg'
    }
  ];

  // Filter items by selected category
  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div style={styles.pageContainer}>
      <header style={styles.header}>
        <h1 style={styles.title}>Medical Center Portfolio</h1>
        <p style={styles.subtitle}>Explore our facilities and services</p>
      </header>

      <div style={styles.filterButtons}>
        <button 
          onClick={() => setActiveCategory('all')}
          style={activeCategory === 'all' ? styles.activeButton : styles.button}
        >
          All
        </button>
        <button 
          onClick={() => setActiveCategory('operations')}
          style={activeCategory === 'operations' ? styles.activeButton : styles.button}
        >
          Operation Rooms
        </button>
        <button 
          onClick={() => setActiveCategory('doctors')}
          style={activeCategory === 'doctors' ? styles.activeButton : styles.button}
        >
          Doctors
        </button>
        <button 
          onClick={() => setActiveCategory('labs')}
          style={activeCategory === 'labs' ? styles.activeButton : styles.button}
        >
          Labs
        </button>
        <button 
          onClick={() => setActiveCategory('rooms')}
          style={activeCategory === 'rooms' ? styles.activeButton : styles.button}
        >
          Patient Rooms
        </button>
      </div>

      <div style={styles.gallery}>
        {filteredItems.map(item => (
          <div key={item.id} style={styles.card}>
            <div style={styles.imageContainer}>
              <img 
                src={item.image} 
                alt={item.title}
                style={styles.image}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/500x300?text=Medical+Image';
                }}
              />
            </div>
            <div style={styles.cardContent}>
              <h3 style={styles.cardTitle}>{item.title}</h3>
              <p style={styles.cardDescription}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Styles
const styles = {
  pageContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif'
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px'
  },
  title: {
    color: '#2c7be5',
    fontSize: '2.2rem',
    marginBottom: '10px'
  },
  subtitle: {
    color: '#666',
    fontSize: '1.1rem'
  },
  filterButtons: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '10px',
    marginBottom: '30px'
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#f0f4f8',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'all 0.3s'
  },
  activeButton: {
    padding: '10px 20px',
    backgroundColor: '#2c7be5',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px'
  },
  gallery: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '25px'
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s',
    ':hover': {
      transform: 'translateY(-5px)'
    }
  },
  imageContainer: {
    height: '200px',
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s',
    ':hover': {
      transform: 'scale(1.05)'
    }
  },
  cardContent: {
    padding: '20px'
  },
  cardTitle: {
    color: '#2c7be5',
    marginTop: '0',
    marginBottom: '10px'
  },
  cardDescription: {
    color: '#555',
    margin: '0'
  }
};

export default Portfolio;