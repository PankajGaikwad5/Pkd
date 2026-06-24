'use client';
import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import MenuOverlay from './MenuOverlay';
import ContactSection from './sections/ContactSection';
import FooterSection from './sections/FooterSection';

export default function ContactClient() {
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
        <ContactSection />
      </main>

      <FooterSection />
    </>
  );
}
