'use client';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Navbar from './Navbar';
import MenuOverlay from './MenuOverlay';

// Import about sections
import AboutHeroSection from './sections/AboutHeroSection';
import AboutMiamiSection from './sections/AboutMiamiSection';
import AboutCollaborativeSection from './sections/AboutCollaborativeSection';
import AboutInspirationSection from './sections/AboutInspirationSection';
import AboutLivingExperienceSection from './sections/AboutLivingExperienceSection';
import AboutJoinUsSection from './sections/AboutJoinUsSection';
import FooterSection from './sections/FooterSection';

export default function AboutClient() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen]);

  return (
    <>

      <Navbar onMenuClick={() => setMenuOpen(true)} />
      <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      <main className="w-full relative bg-[#332820] text-[#D6CBBC]">
        <AboutHeroSection />
        
        {/* Horizontal Line Splitting Sections */}
        <div className="w-full py-12 md:py-16 bg-[#332820] relative flex items-center overflow-hidden">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
            className="w-full h-[1px] bg-[#D6CBBC] origin-left"
          />
        </div>

        <AboutMiamiSection />
        <AboutCollaborativeSection />
        <AboutInspirationSection />
        <AboutLivingExperienceSection />
        <AboutJoinUsSection />
      </main>

      <FooterSection />
    </>
  );
}
