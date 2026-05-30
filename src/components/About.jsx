import React from 'react';
import { BookOpen, GraduationCap, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section container">
      <div className="about-grid">
        <div className="about-image animate-fade-in" style={{ padding: '2rem' }}>
          <div className="glass" style={{ width: '100%', height: '100%', minHeight: '400px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, rgba(0,240,255,0.1), rgba(255,0,60,0.1))' }}>
            <GraduationCap size={120} color="var(--accent-primary)" opacity={0.8} />
          </div>
        </div>
        <div className="about-text animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-gradient">About Me</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
            I am a passionate Full Stack Developer with a strong foundation in building modern, scalable web and mobile applications. My journey in tech is driven by a constant desire to learn and create impactful solutions.
          </p>
          
          <div className="glass" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--accent-primary)' }}>
              <BookOpen size={24} /> Education
            </h3>
            
            <div style={{ marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid var(--glass-border)' }}>
              <p style={{ fontWeight: 'bold', fontSize: '1.1rem', color: 'var(--text-primary)' }}>B.C.A. Degree</p>
              <p style={{ color: 'var(--accent-secondary)', fontSize: '0.9rem', marginBottom: '0.2rem' }}>CGPA 7.90</p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Ayya Nadar Janaki Ammal College • Nov 2025</p>
            </div>

            <div>
              <p style={{ fontWeight: 'bold', fontSize: '1.1rem', color: 'var(--text-primary)' }}>Higher Secondary Course</p>
              <p style={{ color: 'var(--accent-secondary)', fontSize: '0.9rem', marginBottom: '0.2rem' }}>12th Grade State Board</p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Nadar Higher Secondary School, Rajapalayam • Mar 2023</p>
            </div>
          </div>

          <div className="about-stats">
            <div className="stat-card glass">
              <div className="stat-number">13+</div>
              <div style={{ color: 'var(--text-secondary)' }}>Certifications</div>
            </div>
            <div className="stat-card glass">
              <div className="stat-number">Multiple</div>
              <div style={{ color: 'var(--text-secondary)' }}>Tech Stacks</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
