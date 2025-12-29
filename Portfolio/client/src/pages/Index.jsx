import { useState, useEffect } from 'react';
import ParticleBackground from '../components/ParticleBackground';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import TimelineSection from '../components/TimelineSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import PageLoader from '../components/PageLoader';

const Index = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <PageLoader>
    <div
      className="
        relative min-h-screen 
        bg-white text-gray-900
        dark:bg-gray-900 dark:text-white
      "
    >
    <ParticleBackground/>
      <Navbar
        isDark={isDark}
        toggleTheme={() => setIsDark((prev) => !prev)}
      />

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
    </PageLoader>
  );
};

export default Index;
