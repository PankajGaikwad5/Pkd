'use client';
import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import MenuOverlay from './MenuOverlay';
import FooterSection from './sections/FooterSection';
import { motion } from 'motion/react';

export default function TermsAndConditionsClient() {
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
              Terms & Conditions
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
                Welcome to PKD Studio. By accessing this website or using our contact form, you agree to comply with and be bound by the following Terms and Conditions of use.
              </p>
            </div>

            <section className="space-y-4 pt-4 border-t border-[#D6CBBC]/5">
              <h2 className="text-sm font-semibold tracking-[0.15em] text-[#D6CBBC] uppercase">1. Use of the Contact Form</h2>
              <p>
                By submitting our contact form, you represent and warrant that:
              </p>
              <ul className="list-disc pl-6 space-y-2 normal-case">
                <li>All information provided by you is accurate, current, and complete.</li>
                <li>You will not submit false identity, impersonate any person, or misrepresent your affiliation with any entity.</li>
                <li>You will not submit messages containing spam, commercial solicitations, gibberish, or harmful content.</li>
              </ul>
            </section>

            <section className="space-y-4 pt-4 border-t border-[#D6CBBC]/5">
              <h2 className="text-sm font-semibold tracking-[0.15em] text-[#D6CBBC] uppercase">2. Consent to Data Processing</h2>
              <p>
                By checking the consent box and submitting the contact form, you explicitly authorize PKD Studio to collect, process, and store the submitted personal data (including name, email, phone number, and message content) for the purpose of responding to your inquiry.
              </p>
            </section>

            <section className="space-y-4 pt-4 border-t border-[#D6CBBC]/5">
              <h2 className="text-sm font-semibold tracking-[0.15em] text-[#D6CBBC] uppercase">3. Intellectual Property</h2>
              <p>
                All contents on this website, including but not limited to text, images, designs, logos, graphics, and layout, are the intellectual property of PKD Studio and are protected under copyright laws. You may not copy, reproduce, or distribute any content without our prior written consent.
              </p>
            </section>

            <section className="space-y-4 pt-4 border-t border-[#D6CBBC]/5">
              <h2 className="text-sm font-semibold tracking-[0.15em] text-[#D6CBBC] uppercase">4. Limitation of Liability</h2>
              <p>
                PKD Studio makes reasonable efforts to ensure the security and functionality of this website. However, we do not warrant that our contact form or server will be uninterrupted, error-free, or free of viruses. We shall not be liable for any direct or indirect damages resulting from your use of, or inability to use, our website or contact form.
              </p>
            </section>

            <section className="space-y-4 pt-4 border-t border-[#D6CBBC]/5">
              <h2 className="text-sm font-semibold tracking-[0.15em] text-[#D6CBBC] uppercase">5. Changes to These Terms</h2>
              <p>
                We reserve the right to revise these Terms & Conditions at any time without notice. By continuing to use this website, you agree to be bound by the then-current version of these Terms & Conditions.
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
