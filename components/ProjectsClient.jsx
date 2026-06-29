'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './Navbar';
import MenuOverlay from './MenuOverlay';
import FooterSection from './sections/FooterSection';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ArrowDownRight } from 'lucide-react';

const projects = [
  {
    title: "CASA RAVELLO",
    loc: "High Pines Miami",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80",
    href: "/"
  },
  {
    title: "CASA LUME",
    loc: "Coral Gables",
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80",
    href: "/"
  },
  {
    title: "CASA DOHA",
    loc: "Pinecrest",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80",
    href: "/"
  },
  {
    title: "CASA ANTIBES",
    loc: "Key Biscayne",
    img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80",
    href: "/"
  },
  {
    title: "CASA VISTA",
    loc: "Coconut Grove",
    img: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80",
    href: "/"
  }
];

const gridProjects = [
  {
    id: 1,
    title: "CASA LUME",
    category: "In development",
    loc: "Coral Gables",
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80",
    href: "/"
  },
  {
    id: 2,
    title: "CASA 88",
    category: "In development",
    loc: "Miami Dade",
    img: "https://images.unsplash.com/photo-1600607688969-a5bfcd64bd11?q=80",
    href: "/"
  },
  {
    id: 3,
    title: "CASA MARSI",
    category: "Current projects",
    loc: "In the heart of Pinecrest",
    img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80",
    href: "/"
  },
  {
    id: 4,
    title: "CASA MALTA",
    category: "Current projects",
    loc: "Miami",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80",
    href: "/"
  },
  {
    id: 5,
    title: "CASA ALMERIA",
    category: "Sold",
    loc: "Coral Gables",
    img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80",
    href: "/"
  },
  {
    id: 6,
    title: "CASA LANCIO",
    category: "Sold",
    loc: "Miami",
    img: "https://images.unsplash.com/photo-1613490908836-e87a2ea042b4?q=80",
    href: "/"
  }
];

export default function ProjectsClient() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next/right, -1 for prev/left
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
    ? gridProjects
    : gridProjects.filter(p => p.category.toLowerCase() === activeFilter.toLowerCase());

  const containerRef = useRef(null);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen]);

  // Paginate handler (Elegant, smooth 1.2s timing lock)
  const paginate = useCallback((newDirection) => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setDirection(newDirection);
    setActiveIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = projects.length - 1;
      if (nextIndex >= projects.length) nextIndex = 0;
      return nextIndex;
    });

    setTimeout(() => {
      setIsTransitioning(false);
    }, 1200); // 1.2s timeout lock matching transition duration
  }, [isTransitioning]);

  // Autoplay functionality: rotates every 4 seconds unless transitioning or menu open
  useEffect(() => {
    if (menuOpen || isTransitioning) return;

    const autoplayTimer = setInterval(() => {
      paginate(1);
    }, 4000);

    return () => clearInterval(autoplayTimer);
  }, [menuOpen, isTransitioning, paginate]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (menuOpen) return;
      if (e.key === 'ArrowRight') {
        paginate(1);
      } else if (e.key === 'ArrowLeft') {
        paginate(-1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen, paginate]);

  // Drag handler for mobile & desktop swiping
  const handleDragEnd = (e, info) => {
    if (isTransitioning) return;
    const swipeThreshold = 80;
    if (info.offset.x < -swipeThreshold) {
      paginate(1); // Swiped Left -> Next
    } else if (info.offset.x > swipeThreshold) {
      paginate(-1); // Swiped Right -> Prev
    }
  };

  return (
    <>
      <Navbar onMenuClick={() => setMenuOpen(true)} />
      <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Main Container - Scrollable page body */}
      <main className="w-full relative bg-[#332820] text-[#D6CBBC]">

        {/* Fullscreen Carousel Section */}
        <section
          ref={containerRef}
          className="w-full h-screen relative overflow-hidden select-none"
        >
          {/* Background sliding image wrapper - GPU Accelerated Filmstrip */}
          <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
            <motion.div
              className="absolute inset-0 flex transform-gpu will-change-transform"
              style={{ width: `${projects.length * 100}%` }}
              animate={{ x: `-${activeIndex * (100 / projects.length)}%` }}
              transition={{
                duration: 1.2,
                ease: [0.76, 0, 0.24, 1], // Signature fluid ease-in-out curve
              }}
            >
              {projects.map((proj, idx) => (
                <div key={idx} className="w-screen h-screen relative shrink-0 overflow-hidden">
                  <img
                    src={`${proj.img}&w=1200&auto=format&fit=crop`}
                    alt={proj.title}
                    className="w-full h-full object-cover scale-105 pointer-events-none select-none"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Blurred & darkened background overlay layer */}
          {/* <div className="absolute inset-0 bg-[#332820]/65 backdrop-blur-[6px] z-[1] pointer-events-none" /> */}
          <div className="absolute inset-0 bg-black/60  z-[1] pointer-events-none" />

          {/* Centered Interactive Foreground Card - GPU Stacked */}
          {/* <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
            <div className="relative w-[82vw] max-w-[370px] h-[60vh] md:h-[68vh] xl:h-[72vh] aspect-[9/16] pointer-events-auto">
              {projects.map((proj, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <motion.div
                    key={idx}
                    className="absolute inset-0 w-full h-full transform-gpu will-change-[transform,opacity] overflow-hidden shadow-[0_25px_65px_rgba(0,0,0,0.65)] border border-[#D6CBBC]/10 select-none cursor-grab active:cursor-grabbing"
                    style={{
                      pointerEvents: isActive ? 'auto' : 'none',
                      zIndex: isActive ? 10 : 1,
                    }}
                    initial={false}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      scale: isActive ? 1 : 0.88, // Subtle scaling from 0.88 to 1.0
                    }}
                    transition={{
                      duration: 1.2,
                      ease: [0.76, 0, 0.24, 1],
                    }}
                    drag={isActive ? "x" : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.25}
                    onDragEnd={handleDragEnd}
                    whileDrag={{ scale: 0.95 }}
                  >
                    <img
                      src={`${proj.img}&w=600&auto=format&fit=crop`}
                      alt={proj.title}
                      className="w-full h-full object-cover pointer-events-none select-none"
                    />
                  </motion.div>
                );
              })}
            </div>
          </div> */}

          {/* Navigation Buttons (Desktop & Tablet) */}
          <button
            onClick={() => paginate(-1)}
            className="hidden md:flex absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#D6CBBC]/30 flex items-center justify-center text-[#D6CBBC] bg-black/25 hover:bg-[#D6CBBC] hover:text-[#332820] hover:border-[#D6CBBC] transition-all duration-300 cursor-pointer"
            aria-label="Previous Project"
          >
            <ArrowLeft size={16} />
          </button>

          <button
            onClick={() => paginate(1)}
            className="hidden md:flex absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#D6CBBC]/30 flex items-center justify-center text-[#D6CBBC] bg-black/25 hover:bg-[#D6CBBC] hover:text-[#332820] hover:border-[#D6CBBC] transition-all duration-300 cursor-pointer"
            aria-label="Next Project"
          >
            <ArrowRight size={16} />
          </button>

          {/* Bottom Left Title Text Overlay - Stacked & GPU Translated */}
          <div className="absolute bottom-16 left-6 md:bottom-20 md:left-16 z-20 text-[#D6CBBC] pointer-events-none w-[80vw] md:w-[320px] h-[160px] md:h-[180px] overflow-hidden">
            {projects.map((proj, idx) => {
              const isActive = idx === activeIndex;
              return (
                <motion.div
                  key={idx}
                  className="absolute bottom-0 left-0 flex flex-col items-start transform-gpu will-change-[transform,opacity]"
                  style={{
                    pointerEvents: isActive ? 'auto' : 'none',
                    zIndex: isActive ? 10 : 1,
                  }}
                  initial={false}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    x: isActive ? 0 : (direction > 0 ? -80 : 80), // Subtle 80px parallax slide
                  }}
                  transition={{
                    duration: 1.2,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                >
                  {proj.title.split(' ').map((word, wIdx) => (
                    <span
                      key={wIdx}
                      className="block font-heading text-4xl md:text-6xl xl:text-7xl font-light tracking-[0.05em] uppercase leading-[0.9]"
                    >
                      {word}
                    </span>
                  ))}
                  <span className="block mt-3 md:mt-4 text-[10px] md:text-[11px] tracking-[0.25em] font-light uppercase text-[#D6CBBC]/70">
                    {proj.loc}
                  </span>

                  {/* Mobile-only project links to avoid overlay overlap */}
                  <div className="flex items-center gap-4 mt-3 md:hidden">
                    <a
                      href={proj.href}
                      className="pointer-events-auto text-[11px] tracking-[0.15em] font-light uppercase border-b border-[#D6CBBC]/40 pb-0.5 hover:border-[#D6CBBC] transition-colors duration-300 flex items-center gap-1 text-[#D6CBBC]"
                    >
                      VIEW PROJECT <ArrowDownRight size={10} className="inline-block" />
                    </a>
                    <Link
                      href="/"
                      className="pointer-events-auto text-[9px] tracking-[0.25em] font-light uppercase text-[#D6CBBC]/70 hover:text-[#D6CBBC] transition-colors duration-300"
                    >
                      ALL PROJECTS
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Right Project Links Overlay - GPU Translated */}
          <div className="hidden md:flex absolute bottom-16 right-6 md:bottom-20 md:right-16 z-20 text-right pointer-events-none w-[320px] h-[120px] md:h-[180px] overflow-hidden justify-end">
            {projects.map((proj, idx) => {
              const isActive = idx === activeIndex;
              return (
                <motion.div
                  key={idx}
                  className="absolute bottom-0 right-0 flex flex-col items-end gap-1.5 transform-gpu will-change-[transform,opacity]"
                  style={{
                    pointerEvents: isActive ? 'auto' : 'none',
                    zIndex: isActive ? 10 : 1,
                  }}
                  initial={false}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    x: isActive ? 0 : (direction > 0 ? -80 : 80),
                  }}
                  transition={{
                    duration: 1.2,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                >
                  <a
                    href={proj.href}
                    className="pointer-events-auto text-[12px] md:text-[13px] xl:text-[14px] tracking-[0.15em] font-light uppercase border-b border-[#D6CBBC]/40 pb-1 hover:border-[#D6CBBC] transition-colors duration-300 flex items-center gap-1.5 text-[#D6CBBC]"
                  >
                    VIEW PROJECT <ArrowDownRight size={11} className="inline-block" />
                  </a>
                  <Link
                    href="/"
                    className="pointer-events-auto text-[9px] md:text-[10px] xl:text-[11px] tracking-[0.25em] font-light uppercase text-[#D6CBBC]/70 hover:text-[#D6CBBC] transition-colors duration-300 mt-2"
                  >
                    ALL PROJECTS
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Aesthetic bottom border block (matching the beige strip in mockup) */}
          <div className="absolute bottom-0 left-0 right-0 h-6 md:h-8 bg-[#D6CBBC] z-30" />
        </section>

        {/* Grid Projects Section with Filters */}
        <section className="w-full bg-[#D6CBBC] text-[#332820] py-20 md:py-28 px-6 sm:px-12 md:px-16 lg:px-24">
          <div className="max-w-[1400px] mx-auto">
            {/* Section Title */}
            <div className="overflow-hidden pb-1 mb-8">
              <motion.h2
                initial={{ clipPath: "inset(100% 0 0 0)", y: 50 }}
                whileInView={{ clipPath: "inset(0% 0 0 0)", y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
                className="font-heading text-5xl md:text-7xl lg:text-8xl tracking-tight uppercase leading-[0.9] font-light"
              >
                PROJECTS
              </motion.h2>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2.5 md:gap-3 mb-12">
              {['Coming Soon', 'Current projects', 'In development', 'Sold'].map((filter) => {
                const isActive = activeFilter === filter;
                return (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(isActive ? 'All' : filter)}
                    className={`px-6 py-2 rounded-full border text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer ${isActive
                      ? 'border-[#332820] bg-[#332820] text-[#D6CBBC]'
                      : 'border-[#332820]/30 text-[#332820] hover:border-[#332820] bg-transparent'
                      }`}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>

            {/* Projects Grid */}
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((proj) => (
                  <motion.div
                    layout
                    key={proj.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                    className="group relative aspect-[3/2] w-full overflow-hidden rounded-sm cursor-pointer"
                  >
                    <Link href={proj.href} className="block w-full h-full">
                      {/* Image */}
                      <img
                        src={`${proj.img}&w=800&auto=format&fit=crop`}
                        alt={proj.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />

                      {/* Gradient Overlay for Text legibility */}
                      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

                      {/* Slight Dark Overlay on Hover */}
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/35 transition-colors duration-500 pointer-events-none" />

                      {/* Category Badge */}
                      <div className="absolute top-4 right-4 bg-[#332820] text-[#D6CBBC] px-3.5 py-1.5 text-[9px] tracking-widest uppercase font-medium">
                        {proj.category}
                      </div>

                      {/* Project Text Overlay */}
                      <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 text-[#D6CBBC] pointer-events-none">
                        <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase leading-none mb-1 md:mb-2">
                          {proj.title}
                        </h3>
                        <p className="text-[11px] md:text-xs tracking-widest font-light opacity-80 uppercase">
                          {proj.loc}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Empty State */}
            {filteredProjects.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-full text-center py-20 text-[#332820]/60 font-light tracking-wide"
              >
                No projects in this category at the moment. Check back soon.
              </motion.div>
            )}

            {/* CONTACT US Button */}
            <div className="mt-12 md:mt-16">
              <Link
                href="/contact"
                className="inline-block px-8 py-3 bg-[#332820] text-[#D6CBBC] rounded-full text-[11px] font-medium uppercase tracking-[0.2em] hover:bg-[#201b17] transition-all duration-300"
              >
                CONTACT US
              </Link>
            </div>
          </div>
        </section>

        {/* Footer section (making the page normally scrollable downwards) */}
        <FooterSection />
      </main>
    </>
  );
}
