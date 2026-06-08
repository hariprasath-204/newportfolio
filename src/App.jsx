import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import ScreenshotGallery from './components/ScreenshotGallery';

function App() {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  if (hash.startsWith('#screenshots-')) {
    const projectId = hash.replace('#screenshots-', '');
    return (
      <>
        <CustomCursor />
        <ScreenshotGallery projectId={projectId} />
      </>
    );
  }

  return (
    <>
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
    </>
  );
}

export default App;
