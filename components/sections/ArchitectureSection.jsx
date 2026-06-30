'use client';

import { motion } from 'motion/react';

export default function ArchitectureSection() {
  return (
    <section className="w-full border-b-[3px] border-spacing-y-4 border-[#2e2824e3] text-[#2E2824] py-20 lg:py-28 px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.55fr_1.55fr] gap-12 lg:gap-16 items-stretch">

        {/* Column 1: Text Column */}
        <div className="flex flex-col justify-between h-auto lg:h-[80vh] py-2">
          {/* Top Content */}
          <div>
            {/* Logo */}
            {/* <svg
              width="36"
              height="36"
              viewBox="0 0 48 48"
              fill="none"
              stroke="#2E2824"
              strokeWidth="1.2"
              className="mb-4"
            >
              <rect x="0.6" y="0.6" width="46.8" height="46.8" />
              <path d="M0 24H48 M24 0V48 M0 0L48 48 M48 0L0 48" />
              <text x="6" y="18" fontSize="11" fontFamily="sans-serif" fill="#2E2824" stroke="none">A</text>
              <text x="33" y="18" fontSize="11" fontFamily="sans-serif" fill="#2E2824" stroke="none">R</text>
              <text x="6" y="42" fontSize="11" fontFamily="sans-serif" fill="#2E2824" stroke="none">C</text>
              <text x="33" y="42" fontSize="11" fontFamily="sans-serif" fill="#2E2824" stroke="none">A</text>
            </svg> */}

            {/* Subtitle */}
            <h3 className="text-xs md:text-sm uppercase tracking-[0.3em] font-light text-[#2E2824]/90 mb-6">
              ARCHITECTURE
            </h3>

            {/* Title */}
            <h2 className="font-heading text-5xl sm:text-6xl lg:text-[3.5rem] xl:text-[4.2rem] 2xl:text-[4.8rem] leading-[0.95] tracking-tight font-light text-[#2E2824] mb-8">
              INSPIRED
              <br />
              BY NOW
            </h2>

            {/* Paragraphs (Static) */}
            <div className="space-y-3 text-sm md:text-[15px] leading-tight text-[#2E2824]/80 font-light max-w-[340px] mb-3">
              <p>
                At PKD Studio, we believe design transforms the everyday into something extraordinary.
              </p>
              <p>
                Each project begins with a vision where aesthetics, functionality, and emotion coexist in perfect balance.
              </p>
              {/* <p>
                Inspired by icons like Fallingwater, Ghost House, and Capital Hill Residence, we see architecture as a living dialogue with its surroundings.
              </p> */}
            </div>
          </div>

          {/* Bottom Button */}
          <div className="mt-4 lg:mt-0">
            <button className="px-4 py-1 bg-[#2E2824] hover:bg-[#1E1A17] text-[#E6DFD4] rounded-[50px] text-lg font-medium uppercase transition-colors border border-[#2E2824] w-max">
              ABOUT US
            </button>
          </div>
        </div>

        {/* Column 2: Middle Image Column (Modern Stairs) */}
        <div className="w-full h-[50vh] lg:h-[80vh] overflow-hidden self-end">
          <motion.div
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ clipPath: "inset(0 0% 0 0)" }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
            className="w-full h-full"
          >
            <img
              src="/sections/inspirednow1.webp"
              alt="Luxury Architectural Staircase"
              className="w-full h-full object-cover"
            />
            {/* <img
              src="https://arccagroup.us/wp-content/uploads/2025/09/Antibes-Stair-Hall-2nd-Floor-Cortada-e1758903352789.png"
              alt="Luxury Architectural Staircase"
              className="w-full h-full object-cover"
            /> */}
          </motion.div>
        </div>

        {/* Column 3: Right Image Column (Pantry / Wine Bar) */}
        <div className="w-full h-[50vh] lg:h-[80vh] overflow-hidden self-end">
          <motion.div
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            whileInView={{ clipPath: "inset(0% 0 0 0)" }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
            className="w-full h-full"
          >
            <img
              src="/sections/inspirednow2.webp"
              alt="Luxury Modern Pantry and Wine Cellar"
              className="w-full h-full object-cover"
            />
            {/* <img
              src="https://arccagroup.us/wp-content/uploads/2025/04/Pantry.jpeg"
              alt="Luxury Modern Pantry and Wine Cellar"
              className="w-full h-full object-cover"
            /> */}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
