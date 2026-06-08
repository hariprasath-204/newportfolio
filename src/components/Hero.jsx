import React from 'react';
import { ArrowRight, Download, MessageSquare } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section id="hero" className="hero container">
      <div className="hero-content">
        <div className="hero-text animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <h1 className="main-title" style={{ marginBottom: '1rem', lineHeight: '1.2', fontWeight: '800' }}>
            Full Stack Software Engineer <br />
            <span className="text-gradient">& App Developer</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '500px', lineHeight: '1.6' }}>
            I am a BCA graduate specializing in building scalable, high-performance web and mobile applications. With expertise in the MEAN stack, React, and Android development, I turn complex ideas into elegant technical solutions.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#projects" style={{ textDecoration: 'none' }}>
              <button className="btn-primary">View My Work</button>
            </a>
            <a href="https://wa.me/919791486908" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <button style={{ 
                padding: '0.8rem 2rem', 
                background: 'transparent', 
                border: '2px solid rgba(255, 255, 255, 0.7)', 
                color: 'var(--text-primary)', 
                borderRadius: '30px', 
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--text-primary)';
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.7)';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
              >
                <MessageSquare size={18} /> WhatsApp
              </button>
            </a>
          </div>
        </div>
        <div className="hero-image animate-fade-in" style={{ animationDelay: '0.2s', display: 'flex', justifyContent: 'center' }}>
          <div style={{ 
            width: '100%', 
            maxWidth: '380px', 
            aspectRatio: '1 / 1', 
            borderRadius: '50%', 
            padding: '5px',
            background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
            boxShadow: '0 0 30px rgba(0, 210, 255, 0.2)'
          }}>
            <img 
              src={profileImg} 
              alt="Hari Prasath S" 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover', 
                borderRadius: '50%',
                border: '6px solid #141729'
              }} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
