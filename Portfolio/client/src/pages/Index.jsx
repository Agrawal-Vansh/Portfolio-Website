import { useState, useEffect } from 'react';
import ParticleBackground from '../components/ParticleBackground';
import Navbar from '../\/components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import TimelineSection from '../components/TimelineSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add('dark');
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden noise-bg">
      <ParticleBackground />

      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <TimelineSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
