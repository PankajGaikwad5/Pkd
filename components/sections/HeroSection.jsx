import { motion } from 'motion/react';
import { FadeIn } from '../Animations';

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[#E6DFD4]">
        <img
          src="/home/heroimage.webp"
          alt="Luxury Home"
          className="w-full h-full object-cover"
        />
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="absolute bottom-8 left-6 right-6 md:bottom-12 md:left-12 md:right-12 z-10 flex flex-col md:flex-row items-start md:items-end justify-between text-[#E6DFD4]">
        <FadeIn y={20} delay={3.2} className="max-w-2xl">
          <p className="text-sm md:text-base lg:text-lg leading-relaxed font-light tracking-wide">
            At Arcca Group, we craft more than spaces — we shape the
            essence of living. Our vision is to redefine high-end
            residential development by creating homes that seamlessly
            intertwine beauty, well-being, and purposeful design.
          </p>
        </FadeIn>

        <FadeIn y={20} delay={3.4} className="mt-8 md:mt-0 pb-2">
          <a href="#" className="flex items-center gap-2 text-sm tracking-widest uppercase hover:opacity-70 transition-opacity">
            EXPLORE
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L11 11M11 11V1.5M11 11H1.5" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
