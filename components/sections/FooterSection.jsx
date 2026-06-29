'use client';
import { motion } from 'motion/react';
import { FadeIn } from '../Animations';
import Link from 'next/link';

const logoLetters = ['P', 'K', 'D', ' ', 'S', 'T', 'U', 'D', 'I', 'O'];

function AnimatedLogo() {
  return (
    <div className="flex justify-between items-center w-full select-none pb-6">
      {logoLetters.map((char, index) => (
        <div key={index} className="overflow-hidden py-1 px-1">
          <motion.span
            initial={{ y: '100%', opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.4,
              delay: 0.1 + index * 0.12,
              ease: [0.19, 1, 0.22, 1],
            }}
            className="block  text-[clamp(3.5rem,8vw,8.5rem)] font-light leading-none text-[#D6CBBC] tracking-normal"
          >
            {char}
          </motion.span>
        </div>
      ))}
    </div>
  );
}

export default function FooterSection() {
  return (
    <footer className="w-full bg-[#332820] text-[#D6CBBC] py-24 px-8 md:px-16 lg:px-24 flex flex-col lg:flex-row justify-between items-stretch gap-16 lg:gap-8">
      {/* Left container - Navigation Menu */}
      <div className="w-full lg:w-[30%] flex flex-col justify-start">
        <nav className="flex flex-col gap-4 text-4xl sm:text-5xl lg:text-[3.2rem] font-light leading-tight">
          <FadeIn delay={0.05}><Link href="/" className="hover:opacity-60 transition-opacity duration-300 tracking-wide font-sans block">HOME</Link></FadeIn>
          <FadeIn delay={0.1}><Link href="/about-us" className="hover:opacity-60 transition-opacity duration-300 tracking-wide font-sans block">ABOUT US</Link></FadeIn>
          <FadeIn delay={0.3}><Link href="/projects" className="hover:opacity-60 transition-opacity duration-300 tracking-wide font-sans block">PROJECTS</Link></FadeIn>
          <FadeIn delay={0.35}><Link href="/contact" className="hover:opacity-60 transition-opacity duration-300 tracking-wide font-sans block">CONTACT</Link></FadeIn>
        </nav>
      </div>

      {/* Middle Separator - Vertical centering circle */}
      <div className="hidden lg:flex items-center justify-center px-4 self-stretch">
        <div className="w-2 h-2 rounded-full border border-[#D6CBBC]/30" />
      </div>

      {/* Right container - Brand & Columns */}
      <div className="w-full lg:w-[60%] flex flex-col justify-start pt-2">
        <AnimatedLogo />

        {/* Info Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-16 mt-8 w-full">
          {/* Column 1 */}
          <div className="flex flex-col gap-10">
            <FadeIn delay={0.4}>
              <div>
                <h4 className="text-[10px] text-[#D6CBBC]/50 tracking-[0.2em] font-medium mb-3 font-sans">ADDRESS</h4>
                <p className="text-[13px] text-[#D6CBBC]/90 font-light leading-relaxed normal-case font-sans">
                  317, Vasan Udyog Bhavan, Senapati Bapat Marg, opp. PALLADIUM MALL, Lower Parel West, Lower Parel, Mumbai, Maharashtra 400013
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div>
                <h4 className="text-[10px] text-[#D6CBBC]/50 tracking-[0.2em] font-medium mb-3 font-sans">PHONE</h4>
                <p className="text-[13px] text-[#D6CBBC]/90 font-light normal-case font-sans">
                  786 901 1622
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div>
                <h4 className="text-[10px] text-[#D6CBBC]/50 tracking-[0.2em] font-medium mb-3 font-sans">FOLLOW US</h4>
                <ul className="space-y-2 text-[13px] text-[#D6CBBC]/90 font-light normal-case font-sans">
                  <li><a href="https://www.instagram.com/pkdstudio_/" className="hover:opacity-60 transition-opacity duration-300">Instagram</a></li>
                  <li><a href="#" className="hover:opacity-60 transition-opacity duration-300">Facebook</a></li>
                  <li><a href="http://www.linkedin.com/in/prachiti-khanvilkar-412874114" className="hover:opacity-60 transition-opacity duration-300">LinkedIn</a></li>
                </ul>
              </div>
            </FadeIn>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-10">
            <FadeIn delay={0.45}>
              <div>
                <h4 className="text-[10px] text-[#D6CBBC]/50 tracking-[0.2em] font-medium mb-3 font-sans">EMAIL</h4>
                <p className="text-[13px] text-[#D6CBBC]/90 font-light normal-case font-sans">
                  <a href="mailto:enquires@teampkd.in" className="hover:opacity-60 transition-opacity duration-300">enquires@teampkd.in</a>
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.55}>
              <div>
                <p className="text-[13px] text-[#D6CBBC]/90 font-light normal-case leading-relaxed font-sans">
                  Monday to Friday:<br />
                  10:00 AM - 6:30 PM
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.65}>
              <div>
                <h4 className="text-[10px] text-[#D6CBBC]/50 tracking-[0.2em] font-medium mb-3 font-sans">LEGAL</h4>
                <ul className="space-y-2 text-[13px] text-[#D6CBBC]/90 font-light normal-case font-sans">
                  <li><a href="#" className="hover:opacity-60 transition-opacity duration-300">Terms & Conditions</a></li>
                  <li><a href="#" className="hover:opacity-60 transition-opacity duration-300">Privacy Policy</a></li>
                  <li><a href="#" className="hover:opacity-60 transition-opacity duration-300">Accessibility Policy</a></li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </footer>
  );
}
