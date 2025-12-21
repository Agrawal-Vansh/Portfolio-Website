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
 
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden noise-bg">
      <ParticleBackground />

      <Navbar/>

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
