'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Loader from './Loader';
import Navbar from './Navbar';
import MenuOverlay from './MenuOverlay';

// Import sections
import HeroSection from './sections/HeroSection';
import WhyFloridaSection from './sections/WhyFloridaSection';
import PortfolioSection from './sections/PortfolioSection';
import FeaturedSection from './sections/FeaturedSection';
import ArchitectureSection from './sections/ArchitectureSection';
import TypographySection from './sections/TypographySection';
import CraftingSection from './sections/CraftingSection';
import TeamSection from './sections/TeamSection';
import TeamCarouselSection from './sections/TeamCarouselSection';
import FooterSection from './sections/FooterSection';

export default function HomeClient() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (loading || menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [loading, menuOpen]);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2400); // Allow more time to appreciate drawing
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      <Navbar onMenuClick={() => setMenuOpen(true)} />
      <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      <main className="w-full relative">
        <HeroSection />
        <WhyFloridaSection />
        <PortfolioSection />
        <FeaturedSection />
        <ArchitectureSection />
        <TypographySection />
        <CraftingSection />
        <TeamSection />
        {/* <TeamCarouselSection /> */}
      </main>

      <FooterSection />
    </>
  );
}
