import React from 'react';
import { ChevronRight } from 'lucide-react';

const Certificates = () => {
  const certificateInfo = [
    { title: '1st Prize in Debugging', event: 'BYTEWARS State Level Meet', issuer: 'Saiva Bhanu Kshatriya College', date: 'March 2025' },
    { title: '1st Prize in Debugging', event: 'DIGITS\'25 State Level Tech Competition', issuer: 'V.H.N. Senthikumara Nadar College', date: 'August 2025' },
    { title: '1st Place in Web Development', event: 'One Day Intra Hackathon 2K26', issuer: 'Ayya Nadar Janaki Ammal College', date: 'April 2026' },
    { title: '1st Place in Application Development', event: 'One Day Intra Hackathon 2K26', issuer: 'Ayya Nadar Janaki Ammal College', date: 'April 2026' },
    { title: '1st Prize in Treasure Hunt App', event: 'Talent Expo QMAZE 2K26', issuer: 'Ayya Nadar Janaki Ammal College', date: 'February 2026' },
    { title: '2nd Prize in HTML Classroom Games', event: 'Talent Expo QMAZE 2K25', issuer: 'Ayya Nadar Janaki Ammal College', date: 'January 2025' },
    { title: '1st Prize in Legacy of Code', event: 'Softech Association Event', issuer: 'Ayya Nadar Janaki Ammal College', date: 'December 2024' },
    { title: '1st Prize in Bug Maze', event: 'Softech Association Event', issuer: 'Ayya Nadar Janaki Ammal College', date: 'December 2024' },
    { title: 'First Class with Distinction in Web Designing', event: 'Certificate Course', issuer: 'Ayya Nadar Janaki Ammal College', date: 'April 2024' },
    { title: 'Crash Course on IoT Applications Development', event: 'Real Time Applications Development', issuer: 'Ayya Nadar Janaki Ammal College', date: 'February 2025' },
    { title: 'Participation in Debugging', event: 'GEN5 2K26 Intercollegiate Meet', issuer: 'The American College', date: 'February 2026' },
    { title: 'Participation in Coding Contest', event: 'NEXFUSE 2K26 Intercollegiate Symposium', issuer: 'Thiagarajar College', date: 'February 2026' },
    { title: 'Treasurer', event: 'Softech Association (Academic Year 2025-2026)', issuer: 'Ayya Nadar Janaki Ammal College', date: '2025-2026' }
  ];

  return (
    <section id="certificates" className="section container">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '2.5rem' }}>Certifications</h2>
        <p style={{ color: 'var(--text-secondary)', marginTop: '1rem', fontSize: '1.1rem' }}>
          A list of my achievements and professional certifications.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
        {certificateInfo.map((cert, index) => (
          <div key={index} className="glass animate-fade-in" style={{ 
            padding: '2rem 1.5rem', 
            borderRadius: '16px',
            display: 'flex', 
            alignItems: 'flex-start', 
            gap: '1rem', 
            animationDelay: `${index * 0.05}s`,
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
          >
            <ChevronRight color="var(--accent-primary)" size={28} style={{ flexShrink: 0, marginTop: '4px' }} />
            <div>
              <h4 style={{ fontSize: '1.15rem', marginBottom: '0.5rem', fontWeight: '600', lineHeight: '1.3' }}>{cert.title}</h4>
              <p style={{ color: 'var(--text-primary)', fontSize: '0.95rem', marginBottom: '0.5rem', fontWeight: '500', opacity: '0.9' }}>{cert.event}</p>
              <div style={{ display: 'inline-block', backgroundColor: 'var(--bg-secondary)', padding: '0.3rem 0.6rem', borderRadius: '8px', marginTop: '0.5rem' }}>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', margin: 0 }}>{cert.issuer}</p>
                <p style={{ color: 'var(--accent-secondary)', fontSize: '0.8rem', fontWeight: '600', margin: 0, marginTop: '0.2rem' }}>{cert.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
