import { motion } from 'motion/react';
import Image from 'next/image';

export default function AboutHeroSection() {
  return (
    <section className="w-full min-h-screen bg-[#332820] flex flex-col lg:flex-row items-stretch pt-24">
      {/* Left Content Column */}
      <div className="w-full lg:w-[45%] flex flex-col justify-between py-12 lg:py-24 px-8 sm:px-12 md:px-16 lg:pl-20 lg:pr-12 xl:pr-20">

        {/* Top Branding Area */}
        <div className="mb-12 lg:mb-0">
          <motion.div
            initial={{ clipPath: "inset(100% 0 0 0)", y: 15 }}
            whileInView={{ clipPath: "inset(0% 0 0 0)", y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            {/* Logo Grid */}
            <svg width="36" height="36" viewBox="0 0 48 48" fill="none" stroke="#D6CBBC" strokeWidth="1.2" className="mb-4">
              <rect x="0.6" y="0.6" width="46.8" height="46.8" />
              <path d="M0 24H48 M24 0V48 M0 0L48 48 M48 0L0 48" />
              <text x="6" y="18" fontSize="11" fontFamily="sans-serif" fill="#D6CBBC" stroke="none"></text>
              <text x="33" y="18" fontSize="11" fontFamily="sans-serif" fill="#D6CBBC" stroke="none"></text>
              <text x="6" y="42" fontSize="11" fontFamily="sans-serif" fill="#D6CBBC" stroke="none"></text>
              <text x="33" y="42" fontSize="11" fontFamily="sans-serif" fill="#D6CBBC" stroke="none"></text>
            </svg>

          </motion.div>

          {/* Subtitle */}
          <div className="overflow-hidden">
            <motion.h3
              initial={{ clipPath: "inset(100% 0 0 0)", y: 15 }}
              whileInView={{ clipPath: "inset(0% 0 0 0)", y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
              className="text-sm md:text-base uppercase tracking-[0.3em] font-light text-[#D6CBBC]/90"
            >
              ABOUT US
            </motion.h3>
          </div>
        </div>

        {/* Bottom Text Area */}
        <div className="mt-auto lg:max-w-[480px] xl:max-w-[560px]">
          <div className="overflow-hidden pb-1">
            <motion.h2
              initial={{ clipPath: "inset(100% 0 0 0)", y: 40 }}
              whileInView={{ clipPath: "inset(0% 0 0 0)", y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
              className="font-heading text-2xl md:text-3xl lg:text-4xl xl:text-[2.8rem] text-[#D6CBBC] tracking-tight"
            >
              WELCOME TO PKD STUDIO, WHERE LUXURY MEETS LIFESTYLE IN THE HEART OF MUMBAI
            </motion.h2>
          </div>
        </div>
      </div>

      {/* Right Image Column */}
      <div className="w-full lg:w-[55%] flex items-center justify-end px-8 lg:px-0 py-8 lg:py-0">
        <div className="w-full h-[50vh] sm:h-[60vh] lg:h-[85vh] lg:mr-8 overflow-hidden rounded-sm relative">
          <motion.img
            initial={{ scale: 1.15, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: [0.76, 0, 0.24, 1] }}
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop"
            alt="ARCCA Luxury Architecture"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
