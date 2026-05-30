import React from 'react';
import { Mail, Phone, Code2, Link, MapPin, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section container" style={{ paddingBottom: '3rem' }}>
      <div className="glass animate-fade-in" style={{ padding: '4rem 2rem', borderRadius: '24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 className="text-gradient" style={{ fontSize: '2.5rem' }}>Get In Touch</h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '1rem', fontSize: '1.1rem' }}>
            Feel free to reach out for collaborations or just a friendly hello.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Contact Information</h3>
            
            <div className="contact-item">
              <Mail className="contact-icon" size={24} />
              <div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Email</p>
                <a href="mailto:hprasath204@gmail.com" style={{ fontWeight: '500' }}>hprasath204@gmail.com</a>
              </div>
            </div>

            <div className="contact-item">
              <Phone className="contact-icon" size={24} />
              <div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Mobile</p>
                <a href="tel:9791486908" style={{ fontWeight: '500' }}>+91 9791486908</a>
              </div>
            </div>

            <div className="contact-item">
              <MapPin className="contact-icon" size={24} />
              <div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Location</p>
                <span style={{ fontWeight: '500' }}>Sivakasi, Virudhunagar, Tamil Nadu</span>
              </div>
            </div>
          </div>

          <div className="contact-socials" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', justifyContent: 'center' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Social Profiles</h3>
            <a href="https://github.com/hariprasath-204" target="_blank" rel="noreferrer" className="glass" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 1.5rem', transition: 'all 0.3s ease' }}>
              <Code2 color="var(--accent-primary)" size={28} />
              <div>
                <h4 style={{ margin: 0 }}>GitHub</h4>
                <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>github.com/hariprasath-204</p>
              </div>
            </a>

            <a href="https://wa.me/919791486908" target="_blank" rel="noreferrer" className="glass" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 1.5rem', transition: 'all 0.3s ease', borderLeft: '4px solid #25D366' }}>
              <MessageCircle color="#25D366" size={28} />
              <div>
                <h4 style={{ margin: 0 }}>WhatsApp</h4>
                <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Message me directly</p>
              </div>
            </a>

            <a href="https://www.linkedin.com/public-profile/settings/" target="_blank" rel="noreferrer" className="glass" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 1.5rem', transition: 'all 0.3s ease' }}>
              <Link color="var(--accent-primary)" size={28} />
              <div>
                <h4 style={{ margin: 0 }}>LinkedIn</h4>
                <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Connect with me</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      
      <div style={{ textAlign: 'center', marginTop: '3rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
        <p>&copy; {new Date().getFullYear()} Hari Prasath S. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Contact;
