'use client';

import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'motion/react';
import { FadeIn } from '../Animations';
import Link from 'next/link';

const PROJECTS = [
  {
    id: 1,
    titleLine1: "GRAND",
    titleLine2: "CHÂTEAU",
    image: "/projects/GRAND CHATEAU/1.webp",
    num: "1 / 4",
    href: "/projects/grand-chateau"
  },
  {
    id: 2,
    titleLine1: "JADE",
    titleLine2: "",
    image: "/projects/JADE/1.webp",
    num: "2 / 4",
    href: "/projects/jade"
  },
  {
    id: 3,
    titleLine1: "LITHIC",
    titleLine2: "HOME",
    image: "/projects/LITHIC HOME/1.webp",
    num: "3 / 4",
    href: "/projects/lithic-home"
  },
  {
    id: 4,
    titleLine1: "RENAISSANCE",
    titleLine2: "86",
    image: "/projects/RENAISSANCE 86/1.webp",
    num: "4 / 4",
    href: "/projects/renaissance-86"
  }
];

function StackingCard({ project, index }) {
  const cardRef = useRef(null);

  // Track scroll position of this card relative to the viewport
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  // Parallax effect on the background image
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  // Calculate sticky top offset: e.g. 60px for each subsequent card to stack like files
  const topOffset = index * 60;

  return (
    <div
      ref={cardRef}
      className="sticky w-full h-[85vh] overflow-hidden flex items-center justify-center bg-[#1C1816] border-t border-[#E6DFD4]/10 shadow-[0_-30px_60px_rgba(0,0,0,0.5)]"
      style={{
        top: `${topOffset}px`,
        zIndex: index + 1,
      }}
    >
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <motion.img
          src={project.image}
          alt={`${project.titleLine1} ${project.titleLine2}`}
          style={{ y, scale: 1.2 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlays for readability */}
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-transparent to-black/65" />
      </div>

      {/* Content Area */}
      <div className="relative w-full h-full max-w-7xl mx-auto px-6 sm:px-12 md:px-24 flex flex-col justify-between py-16 md:py-0 md:flex-row md:items-center text-[#E6DFD4] z-10">
        {/* Left Column: Title Info */}
        <div className="flex flex-col justify-center select-none pt-12 md:pt-0">
          <FadeIn y={30} delay={0.1}>
            <span className="text-xs md:text-sm tracking-[0.3em] uppercase mb-4 block font-light text-[#E6DFD4]/80">
              FEATURED PROJECT
            </span>
          </FadeIn>
          <FadeIn y={40} delay={0.2}>
            <h2 className="font-heading text-5xl sm:text-8xl md:text-8xl leading-[0.85] tracking-tight font-light text-[#E6DFD4]">
              {project.titleLine1}
              <br />
              {project.titleLine2}
            </h2>
          </FadeIn>
        </div>

        {/* Right Column: Counter & View Button */}
        <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center gap-8 md:gap-20 w-full md:w-auto mt-auto md:mt-0 md:h-full pt-6 md:pt-16">
          {/* Slide Number */}
          <div className="text-[#E6DFD4] font-light text-4xl sm:text-5xl md:text-6xl tracking-[0.1em] select-none flex items-center gap-4">
            <FadeIn y={20} delay={0.3} className="flex items-center gap-3">
              <span>{project.num}</span>
              {/* Optional small circle matching reference screenshot */}
              <span className="inline-block w-2.5 h-2.5 rounded-full border border-white/50 opacity-60" />
            </FadeIn>
          </div>

          {/* View Button */}
          <div>
            <FadeIn y={20} delay={0.4}>
              <Link
                href={project.href}
                className="px-10 py-3.5 border border-[#E6DFD4]/30 rounded-full text-[#E6DFD4] text-xs sm:text-sm uppercase tracking-[0.2em] bg-black/20 backdrop-blur-sm hover:bg-[#E6DFD4] hover:text-[#2E2824] hover:border-white transition-all duration-500 block text-center"
              >
                VIEW
              </Link>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedSection() {
  return (
    <section className="relative w-full bg-[#1C1816] flex flex-col">
      {PROJECTS.map((project, idx) => (
        <StackingCard
          key={project.id}
          project={project}
          index={idx}
        />
      ))}
    </section>
  );
}
