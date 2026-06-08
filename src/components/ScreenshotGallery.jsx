import React from 'react';
import { ArrowLeft } from 'lucide-react';

const ScreenshotGallery = ({ projectId }) => {
  let images = [];
  let title = 'Project Screenshots';
  let gridStyle = { display: 'flex', flexDirection: 'column', gap: '3rem', alignItems: 'center' };
  
  if (projectId === 'coinCatcher') {
    title = 'Coin Catcher Game - Screenshots';
    const rawImages = import.meta.glob('../assets/coinCatcher/*.{png,jpg,jpeg,svg,PNG,JPG,JPEG}', { eager: true, import: 'default' });
    images = Object.values(rawImages);
    gridStyle = { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem', maxWidth: '1200px', margin: '0 auto' };
  } else if (projectId === 'taskFlow') {
    title = 'Taskflow UI Design - Screenshots';
    const rawImages = import.meta.glob('../assets/taskFlow/*.{png,jpg,jpeg,svg,PNG,JPG,JPEG}', { eager: true, import: 'default' });
    images = Object.values(rawImages);
    gridStyle = { display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1.5rem', maxWidth: '1400px', margin: '0 auto' };
  }

  return (
    <div style={{ padding: '2rem 0', minHeight: '100vh', background: 'var(--bg-primary)' }}>
      <div className="container">
        <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-primary)', marginBottom: '2rem', textDecoration: 'none', fontWeight: 'bold' }}>
          <ArrowLeft size={20} /> Back to Portfolio
        </a>
        
        <h1 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
          {title}
        </h1>

        {images.length === 0 ? (
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>No screenshots found in the assets folder.</p>
        ) : (
          <div style={gridStyle}>
            {images.map((src, index) => (
              <div key={index} className="glass animate-fade-in" style={{ padding: '1rem', borderRadius: '16px', width: '100%', height: '100%', animationDelay: `${index * 0.1}s` }}>
                <img 
                  src={src} 
                  alt={`${title} screenshot ${index + 1}`} 
                  style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '8px', display: 'block' }} 
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ScreenshotGallery;
