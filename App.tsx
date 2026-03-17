
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ExperienceSection from './components/ExperienceSection';
import CertificationsSection from './components/CertificationsSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import GeminiChat from './components/GeminiChat';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className="min-h-screen selection:bg-blue-500 selection:text-white">
      <ScrollProgress />
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <main className="relative">
        <Hero />
        <div className="space-y-12 md:space-y-24">
          <About />
          <Skills />
          <Projects />
          <ExperienceSection />
          <CertificationsSection />
          <Contact />
        </div>
      </main>

      <Footer />
      <GeminiChat />
    </div>
  );
};

export default App;
