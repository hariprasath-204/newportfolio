import React from 'react';
import { ExternalLink, Code2, Image } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'R.K. Bajaj Showroom Website',
      description: 'My final year project. A full-stack website for a local vehicle showroom to showcase inventory and manage inquiries.',
      liveDemo: 'https://bikeindex.onrender.com/',
      github: 'https://github.com/hariprasath-204/BikeIndex',
      tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MySQL', 'Render']
    },
    {
      title: 'Musical Instruments Platform',
      description: 'An internship project featuring a full-stack platform for browsing and managing musical instruments inventory.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MySQL', 'Render']
    },
    {
      title: 'College Debugging Event Platform',
      description: 'A dynamic web platform built to host and manage a competitive college debugging event, successfully deployed on Vercel.',
      liveDemo: 'https://debbuging.vercel.app/',
      tags: ['React', 'Node.js', 'Firebase', 'Wandbox API', 'Vercel']
    },
    {
      title: 'College Codathon Event Platform',
      description: 'A comprehensive web application designed to manage participants, submissions, and live leaderboards for a college Codathon event.',
      liveDemo: 'https://codathan.vercel.app/',
      tags: ['React', 'Node.js', 'Firebase', 'Wandbox API', 'Vercel']
    },
    {
      title: 'College Quiz Event Platform',
      description: 'An interactive real-time quiz application built for college events, featuring live scoring and real-time leaderboards.',
      liveDemo: 'https://softtech-assocation-quiz.vercel.app/',
      tags: ['React', 'Node.js', 'Firebase', 'Vercel']
    },
    {
      title: 'Try-It Online Compiler',
      description: 'A multi-language online code compiler supporting C, C++, Java, and Python, powered by the Wandbox API for robust code execution.',
      liveDemo: 'https://try-it-compiler.vercel.app/',
      tags: ['React', 'Node.js', 'Wandbox API']
    },
    {
      title: 'Calculator App',
      description: 'A fully functional native Android calculator application built with a responsive user interface.',
      tags: ['Java', 'XML', 'Android']
    },
    {
      title: 'Coin Catcher Game',
      description: 'An interactive 2D arcade-style coin catcher game developed using the Unity Engine and C#.',
      screenshots: 'coinCatcher',
      tags: ['Unity', 'C#', 'Game Development']
    },
    {
      title: 'Taskflow UI Design',
      description: 'A clean, modern mobile application UI design for a task and project management application built using Flutter and Dart.',
      screenshots: 'taskFlow',
      tags: ['Flutter', 'Dart', 'UI/UX Design', 'Mobile App']
    }
  ];

  return (
    <section id="projects" className="section container">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '2.5rem' }}>Projects</h2>
        <p style={{ color: 'var(--text-secondary)', marginTop: '1rem', fontSize: '1.1rem' }}>
          Some of the recent projects I've built.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem' }}>
        {projects.map((project, index) => (
          <div key={index} className="glass animate-fade-in" style={{ 
            padding: '2rem', 
            borderRadius: '16px',
            animationDelay: `${index * 0.1}s`,
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 255, 135, 0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
          >
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                {project.title}
              </h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                {project.description}
              </p>
              
              {(project.liveDemo || project.github || project.screenshots) && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem', marginBottom: '1rem' }}>
                  {project.liveDemo && (
                    <a href={project.liveDemo} target="_blank" rel="noreferrer" style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-primary)', fontSize: '0.9rem', fontWeight: '600', textDecoration: 'none'
                    }}>
                      View Project <ExternalLink size={14} />
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-secondary)', fontSize: '0.9rem', fontWeight: '600', textDecoration: 'none'
                    }}>
                      View Code <Code2 size={14} />
                    </a>
                  )}
                  {project.screenshots && (
                    <a href={`https://github.com/hariprasath-204/newportfolio/tree/main/src/assets/${project.screenshots}`} target="_blank" rel="noreferrer" style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#ffb86c', fontSize: '0.9rem', fontWeight: '600', textDecoration: 'none'
                    }}>
                      View Screenshots <Image size={14} />
                    </a>
                  )}
                </div>
              )}
            </div>

            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '0.5rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid var(--glass-border)'
            }}>
              {project.tags.map((tag, i) => (
                <span key={i} style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--glass-border)',
                  color: 'var(--text-secondary)',
                  padding: '0.4rem 0.8rem',
                  borderRadius: '20px',
                  fontSize: '0.85rem',
                  fontWeight: '500'
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
