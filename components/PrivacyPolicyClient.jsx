'use client';
import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import MenuOverlay from './MenuOverlay';
import FooterSection from './sections/FooterSection';
import { motion } from 'motion/react';

export default function PrivacyPolicyClient() {
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

      <main className="w-full relative bg-[#332820] text-[#D6CBBC] pt-40 pb-24 px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24">
        <div className="max-w-[800px] mx-auto">
          {/* Page Title */}
          <div className="overflow-hidden pb-2 mb-12 border-b border-[#D6CBBC]/10">
            <motion.h1
              initial={{ clipPath: 'inset(100% 0 0 0)', y: 45 }}
              animate={{ clipPath: 'inset(0% 0 0 0)', y: 0 }}
              transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1] }}
              className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] tracking-tight leading-[1.1] uppercase font-light text-[#D6CBBC]"
            >
              Privacy Policy
            </motion.h1>
          </div>

          {/* Policy Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-sans text-xs md:text-sm tracking-[0.08em] leading-relaxed text-[#D6CBBC]/85 space-y-10 uppercase"
          >
            <div className="space-y-4">
              <p>
                At PKD Studio, we are committed to protecting and respecting your privacy. This Privacy Policy explains when and why we collect personal information, how we use it, the conditions under which we may disclose it to others, and how we keep it secure.
              </p>
            </div>

            <section className="space-y-4 pt-4 border-t border-[#D6CBBC]/5">
              <h2 className="text-sm font-semibold tracking-[0.15em] text-[#D6CBBC] uppercase">1. Information We Collect</h2>
              <p>
                When you use our Contact Form, we collect the following personal information that you choose to provide:
              </p>
              <ul className="list-disc pl-6 space-y-2 normal-case">
                <li>Full Name</li>
                <li>Email Address</li>
                <li>Phone Number</li>
                <li>Message content</li>
              </ul>
              <p>
                We also collect basic technical data like your IP address (which we use for spam prevention and approximate geographical location detection to tailor our services).
              </p>
            </section>

            <section className="space-y-4 pt-4 border-t border-[#D6CBBC]/5">
              <h2 className="text-sm font-semibold tracking-[0.15em] text-[#D6CBBC] uppercase">2. How We Use Your Information</h2>
              <p>
                We use the information collected from our contact form for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 normal-case">
                <li>To respond to your inquiries, questions, and requests for design consultations.</li>
                <li>To verify that submissions are legitimate and prevent spam or malicious activity on our website.</li>
                <li>To improve our website&apos;s user experience and services.</li>
              </ul>
            </section>

            <section className="space-y-4 pt-4 border-t border-[#D6CBBC]/5">
              <h2 className="text-sm font-semibold tracking-[0.15em] text-[#D6CBBC] uppercase">3. Data Retention & Security</h2>
              <p>
                We take appropriate security measures to prevent unauthorized access, disclosure, modification, or unauthorized destruction of your personal data. We only retain your information for as long as necessary to fulfill the purposes for which it was collected, or as required by law.
              </p>
            </section>

            <section className="space-y-4 pt-4 border-t border-[#D6CBBC]/5">
              <h2 className="text-sm font-semibold tracking-[0.15em] text-[#D6CBBC] uppercase">4. Sharing Your Information</h2>
              <p>
                We do not sell, rent, or trade your personal information to third parties. We may share your data with trusted email service providers (such as Gmail, which we use to transmit your contact messages) solely for the purpose of processing your inquiry.
              </p>
            </section>

            <section className="space-y-4 pt-4 border-t border-[#D6CBBC]/5">
              <h2 className="text-sm font-semibold tracking-[0.15em] text-[#D6CBBC] uppercase">5. Your Rights</h2>
              <p>
                You have the right to request access to the personal information we hold about you, request corrections to any inaccuracies, or request the deletion of your personal data. To exercise these rights, please contact us at:
              </p>
              <p className="normal-case">
                <a href="mailto:enquires@teampkd.in" className="underline hover:opacity-70 transition-opacity">enquires@teampkd.in</a>
              </p>
            </section>

            <p className="pt-8 border-t border-[#D6CBBC]/10 text-[10px] tracking-widest text-[#D6CBBC]/40 font-light">
              LAST UPDATED: JULY 2026
            </p>
          </motion.div>
        </div>
      </main>

      <FooterSection />
    </>
  );
}
