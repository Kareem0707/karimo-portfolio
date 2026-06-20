import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroSection from './sections/HeroSection';
import MarqueeSection from './sections/MarqueeSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import ProjectsSection from './sections/ProjectsSection';
import StatsSection from './sections/StatsSection';
import ContactSection from './sections/ContactSection';

function App() {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    // Prevent browser from restoring scroll position on reload
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    // Force scroll to top
    window.scrollTo(0, 0);
  }, []);

  return (
    <div 
      className="bg-black w-full min-h-screen" 
      style={{ 
        perspective: '1500px', 
        overflow: isAnimating ? 'hidden' : 'visible' 
      }}
    >
      <motion.div
        className="main-wrapper bg-[#0C0C0C] origin-bottom"
        initial={{ rotateX: -80, scale: 0.85, y: 150, opacity: 0 }}
        animate={{ rotateX: 0, scale: 1, y: 0, opacity: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        onAnimationComplete={() => setIsAnimating(false)}
      >
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <StatsSection />
        <ContactSection />
      </motion.div>
    </div>
  );
}

export default App;
