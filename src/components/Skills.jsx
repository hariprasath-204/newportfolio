import React from 'react';
import { Layers, Database, Smartphone, Code, Server, AppWindow, Gamepad2 } from 'lucide-react';

const Skills = () => {
  const skills = [
    { name: 'MEAN Stack', category: 'Full Stack', icon: <Layers size={24} />, desc: 'MongoDB, Express, Angular, Node' },
    { name: 'React.js', category: 'Frontend', icon: <AppWindow size={24} />, desc: 'Frontend Development' },
    { name: 'Node.js', category: 'Backend', icon: <Server size={24} />, desc: 'Backend Development' },
    { name: 'Firebase', category: 'Database', icon: <Database size={24} />, desc: 'BaaS & Realtime DB' },
    { name: 'MySQL', category: 'Database', icon: <Database size={24} />, desc: 'Relational Database' },
    { name: 'Android Studio', category: 'Mobile', icon: <Smartphone size={24} />, desc: 'Native App Development' },
    { name: 'Flutter', category: 'Mobile', icon: <Smartphone size={24} />, desc: 'Cross-platform Apps' },
    { name: 'Dart', category: 'Language', icon: <Code size={24} />, desc: 'UI Toolkit Language' },
    { name: 'Java', category: 'Language', icon: <Code size={24} />, desc: 'Object Oriented Programming' },
    { name: 'XML', category: 'Markup', icon: <Code size={24} />, desc: 'Layout & Structuring' },
    { name: 'Unity', category: 'Game Engine', icon: <Gamepad2 size={24} />, desc: 'Game Development' },
    { name: 'C#', category: 'Language', icon: <Code size={24} />, desc: 'Game Scripting' },
  ];

  return (
    <section id="skills" className="section container">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '2.5rem' }}>Technical Skills</h2>
        <p style={{ color: 'var(--text-secondary)', marginTop: '1rem', fontSize: '1.1rem' }}>
          Technologies I work with to bring ideas to life.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem', maxWidth: '1000px', margin: '0 auto' }}>
        {skills.map((skill, index) => (
          <div key={index} className="glass animate-fade-in" style={{ 
            padding: '2rem 1.5rem', 
            borderRadius: '16px',
            animationDelay: `${index * 0.1}s`,
            transition: 'all 0.3s ease',
            cursor: 'default',
            position: 'relative',
            overflow: 'hidden',
            borderTop: '3px solid var(--accent-primary)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(168, 85, 247, 0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1rem' }}>
              <div style={{ 
                color: 'var(--accent-primary)', 
                background: 'rgba(168, 85, 247, 0.1)',
                padding: '1rem',
                borderRadius: '50%'
              }}>
                {skill.icon}
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>{skill.name}</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>{skill.desc}</p>
              </div>
              <div style={{ 
                backgroundColor: 'var(--bg-secondary)', 
                color: 'var(--text-secondary)', 
                padding: '0.3rem 0.8rem', 
                borderRadius: '20px', 
                fontSize: '0.8rem',
                fontWeight: '500',
                marginTop: '0.5rem'
              }}>
                {skill.category}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
