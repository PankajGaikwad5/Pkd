'use client';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import Loader from './Loader';
import Navbar from './Navbar';
import MenuOverlay from './MenuOverlay';
import ContactSection from './sections/ContactSection';
import FooterSection from './sections/FooterSection';

export default function ContactClient() {
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
    const t = setTimeout(() => setLoading(false), 2400);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      <Navbar onMenuClick={() => setMenuOpen(true)} />
      <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      <main className="w-full relative bg-[#332820] text-[#D6CBBC]">
        <ContactSection />
      </main>

      <FooterSection />
    </>
  );
}
