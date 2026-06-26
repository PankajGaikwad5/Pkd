'use client';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function AboutJoinUsSection() {
  return (
    <section className="w-full bg-[#D6CBBC] text-[#332820] py-20 lg:py-28 px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 border-b border-[#332820]/10">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.55fr_1.55fr] gap-12 lg:gap-16 items-stretch">

        {/* Column 1: Text Column */}
        <div className="flex flex-col justify-between h-auto lg:h-[80vh] py-2">
          {/* Top Content */}
          <div>
            {/* Logo */}
            <svg
              width="36"
              height="36"
              viewBox="0 0 48 48"
              fill="none"
              stroke="#332820"
              strokeWidth="1.2"
              className="mb-4"
            >
              <rect x="0.6" y="0.6" width="46.8" height="46.8" />
              <path d="M0 24H48 M24 0V48 M0 0L48 48 M48 0L0 48" />
              <text x="6" y="18" fontSize="11" fontFamily="sans-serif" fill="#332820" stroke="none">A</text>
              <text x="33" y="18" fontSize="11" fontFamily="sans-serif" fill="#332820" stroke="none">R</text>
              <text x="6" y="42" fontSize="11" fontFamily="sans-serif" fill="#332820" stroke="none">C</text>
              <text x="33" y="42" fontSize="11" fontFamily="sans-serif" fill="#332820" stroke="none">A</text>
            </svg>

            {/* Subtitle */}
            <h3 className="text-xs md:text-sm uppercase tracking-[0.3em] font-light text-[#332820]/90 mb-6">
              ARCHITECTURE
            </h3>

            {/* Title */}
            <h2 className="font-heading text-5xl sm:text-6xl lg:text-[3.5rem] leading-[0.95] tracking-tight font-light text-[#332820] mb-8">
              JOIN US!
            </h2>

            {/* Paragraph */}
            <div className="text-sm md:text-[15px] leading-relaxed text-[#332820]/80 font-light max-w-[340px] mb-3">
              <p>
                As we continue to set new standards in luxury real estate, creating living spaces that inspire and rejuvenate the senses while ensuring quality and satisfaction.
              </p>
            </div>
          </div>

          {/* Bottom Button */}
          <div className="mt-8 lg:mt-0">
            <Link 
              href="/contact"
              className="inline-block px-8 py-3 bg-[#332820] hover:bg-[#1E1A17] text-[#D6CBBC] rounded-full text-[11px] font-medium uppercase tracking-[0.2em] transition-colors border border-[#332820] w-max"
            >
              CONTACT
            </Link>
          </div>
        </div>

        {/* Column 2: Middle Image Column (Team Image) */}
        <div className="w-full h-[50vh] lg:h-[80vh] overflow-hidden self-end rounded-sm">
          <motion.div
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ clipPath: "inset(0 0% 0 0)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
            className="w-full h-full"
          >
            <img
              src="/images/team.png"
              alt="Arcca Group Team"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </div>

        {/* Column 3: Right Image Column (Luxury Interior) */}
        <div className="w-full h-[50vh] lg:h-[80vh] overflow-hidden self-end rounded-sm">
          <motion.div
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            whileInView={{ clipPath: "inset(0% 0 0 0)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
            className="w-full h-full"
          >
            <img
              src="/images/typography_living.png"
              alt="Luxury Interior Design"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
