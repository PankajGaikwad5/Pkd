'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './Navbar';
import MenuOverlay from './MenuOverlay';
import FooterSection from './sections/FooterSection';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Maximize, Minimize, X, ArrowLeft } from 'lucide-react';

export default function ProjectDetailClient({ project, images }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const thumbRefs = useRef([]);

  const hasMany = images.length > 12;
  const shouldLimit = hasMany && !isExpanded;

  // Distribute images with their original index to preserve fullscreen lightbox reference
  const imagesWithIndex = images.map((img, idx) => ({ img, idx }));

  const displayImages2 = shouldLimit ? imagesWithIndex.slice(0, 6) : imagesWithIndex;
  const displayImages3 = shouldLimit ? imagesWithIndex.slice(0, 6) : imagesWithIndex;
  const displayImages4 = shouldLimit ? imagesWithIndex.slice(0, 8) : imagesWithIndex;

  const cols2 = [
    displayImages2.filter((_, idx) => idx % 2 === 0),
    displayImages2.filter((_, idx) => idx % 2 === 1)
  ];

  const cols3 = [
    displayImages3.filter((_, idx) => idx % 3 === 0),
    displayImages3.filter((_, idx) => idx % 3 === 1),
    displayImages3.filter((_, idx) => idx % 3 === 2)
  ];

  const cols4 = [
    displayImages4.filter((_, idx) => idx % 4 === 0),
    displayImages4.filter((_, idx) => idx % 4 === 1),
    displayImages4.filter((_, idx) => idx % 4 === 2),
    displayImages4.filter((_, idx) => idx % 4 === 3)
  ];

  const aspectRatios = ['3/2', '3/4', '1/1', '4/3', '2/3', '16/10'];

  const renderCard = ({ img, idx }, isLast) => {
    const aspectRatio = aspectRatios[idx % aspectRatios.length];
    return (
      <div
        key={idx}
        onClick={() => {
          setActiveIndex(idx);
          setIsFullscreen(true);
        }}
        style={{
          aspectRatio,
          ...(isLast ? { flex: '1 1 auto' } : {})
        }}
        className="relative overflow-hidden bg-black/10 cursor-pointer border border-[#D6CBBC]/10 rounded-sm group"
      >
        <img
          src={img}
          alt={`${project.title} - Masonry ${idx + 1}`}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors duration-500 flex items-center justify-center">
          <span className="text-[10px] tracking-widest text-[#D6CBBC] opacity-0 group-hover:opacity-100 transition-opacity duration-300 uppercase border border-[#D6CBBC]/30 px-3 py-1.5 bg-black/25 backdrop-blur-sm">
            VIEW FULL
          </span>
        </div>
      </div>
    );
  };

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Centering active thumbnail in horizontal scroll without scrolling the page
  useEffect(() => {
    const activeThumb = thumbRefs.current[activeIndex];
    if (activeThumb) {
      const container = activeThumb.parentElement;
      if (container) {
        const containerWidth = container.clientWidth;
        const thumbLeft = activeThumb.offsetLeft;
        const thumbWidth = activeThumb.clientWidth;
        container.scrollTo({
          left: thumbLeft - containerWidth / 2 + thumbWidth / 2,
          behavior: 'smooth'
        });
      }
    }
  }, [activeIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen, images.length]);

  // Body overflow locking when menu/fullscreen is open
  useEffect(() => {
    if (menuOpen || isFullscreen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen, isFullscreen]);

  return (
    <>
      <Navbar onMenuClick={() => setMenuOpen(true)} />
      <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Main Container */}
      <main className="w-full relative bg-[#332820] text-[#D6CBBC]">

        {/* Hero Header Section */}
        <section className="w-full pt-32 px-6 sm:px-12 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
          {/* Back button */}
          <div className='w-full flex justify-between'>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-light text-[#D6CBBC]/70 hover:text-[#D6CBBC] transition-colors mb-8 group"
            >
              <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
              BACK TO PROJECTS
            </Link>
            <p className="text-xs md:text-sm tracking-[0.25em] font-light uppercase text-[#D6CBBC]/60">
              {project.category}
            </p>
          </div>

          {/* Title and Metadata */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight uppercase leading-[0.9] font-light mb-4">
              {project.title}
            </h1>
            <p className="text-xs md:text-sm tracking-[0.25em] font-light uppercase text-[#D6CBBC]/60">
              {project.loc}
            </p>
          </motion.div>
        </section>

        {/* Image Slider Section */}
        <section className="w-full pb-16 px-6 sm:px-12 md:px-16 lg:px-24">
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
            className="relative aspect-[16/9] w-full max-w-[1400px] mx-auto overflow-hidden bg-black/35 group/slider rounded-sm border border-[#D6CBBC]/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            <div className="absolute inset-0 select-none flex items-center justify-center p-2 md:p-4">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIndex}
                  src={images[activeIndex]}
                  alt={`${project.title} - Image ${activeIndex + 1}`}
                  className="max-w-full max-h-full object-contain pointer-events-none"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                />
              </AnimatePresence>
            </div>

            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 hover:bg-[#D6CBBC] hover:text-[#332820] text-[#D6CBBC] border border-[#D6CBBC]/10 flex items-center justify-center transition-all cursor-pointer opacity-0 group-hover/slider:opacity-100"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 hover:bg-[#D6CBBC] hover:text-[#332820] text-[#D6CBBC] border border-[#D6CBBC]/10 flex items-center justify-center transition-all cursor-pointer opacity-0 group-hover/slider:opacity-100"
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>

            <button
              onClick={() => setIsFullscreen(true)}
              className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-black/55 hover:bg-[#D6CBBC] hover:text-[#332820] text-[#D6CBBC] border border-[#D6CBBC]/15 flex items-center justify-center transition-all cursor-pointer shadow-lg"
              title="View Fullscreen"
            >
              <Maximize size={18} />
            </button>

            <div className="absolute bottom-4 left-4 bg-black/55 border border-[#D6CBBC]/15 text-[#D6CBBC] text-[10px] tracking-widest px-4 py-2 rounded-full shadow-lg">
              {activeIndex + 1} / {images.length}
            </div>
          </motion.div> */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.5 }}
            className="w-full max-w-[1400px] mx-auto mt-10"
          >
            {/* Height-restricted wrapper for long galleries */}
            {(() => {
              return (
                <div className={`relative ${shouldLimit ? 'overflow-hidden' : ''} transition-all duration-700 ease-in-out`}>
                  {/* Mobile Layout (2 columns, aligned at top and bottom) */}
                  <div className="grid grid-cols-2 gap-4 sm:hidden items-stretch">
                    <div className="flex flex-col gap-4 h-full">
                      {cols2[0].map((item, i) => renderCard(item, i === cols2[0].length - 1))}
                    </div>
                    <div className="flex flex-col gap-4 h-full">
                      {cols2[1].map((item, i) => renderCard(item, i === cols2[1].length - 1))}
                    </div>
                  </div>

                  {/* Tablet Layout (3 columns, aligned at top and bottom) */}
                  <div className="hidden sm:grid md:hidden grid-cols-3 gap-6 items-stretch">
                    <div className="flex flex-col gap-6 h-full">
                      {cols3[0].map((item, i) => renderCard(item, i === cols3[0].length - 1))}
                    </div>
                    <div className="flex flex-col gap-6 h-full">
                      {cols3[1].map((item, i) => renderCard(item, i === cols3[1].length - 1))}
                    </div>
                    <div className="flex flex-col gap-6 h-full">
                      {cols3[2].map((item, i) => renderCard(item, i === cols3[2].length - 1))}
                    </div>
                  </div>

                  {/* Desktop Layout (4 columns, aligned at top and bottom) */}
                  <div className="hidden md:grid grid-cols-4 gap-6 items-stretch">
                    <div className="flex flex-col gap-6 h-full">
                      {cols4[0].map((item, i) => renderCard(item, i === cols4[0].length - 1))}
                    </div>
                    <div className="flex flex-col gap-6 h-full">
                      {cols4[1].map((item, i) => renderCard(item, i === cols4[1].length - 1))}
                    </div>
                    <div className="flex flex-col gap-6 h-full">
                      {cols4[2].map((item, i) => renderCard(item, i === cols4[2].length - 1))}
                    </div>
                    <div className="flex flex-col gap-6 h-full">
                      {cols4[3].map((item, i) => renderCard(item, i === cols4[3].length - 1))}
                    </div>
                  </div>

                  {/* Gradient Blur Overlay & Show More Button */}
                  {shouldLimit && (
                    <div className="absolute bottom-0 left-0 right-0 h-[400px] bg-gradient-to-t from-[#332820] via-[#332820]/95 via-[#332820]/60 to-transparent flex items-end justify-center pb-6 z-10 pointer-events-none">
                      <button
                        onClick={() => setIsExpanded(true)}
                        className="pointer-events-auto bg-transparent border-0 text-[#D6CBBC] text-[10px] md:text-[11px] font-light uppercase tracking-[0.25em] border-b border-[#D6CBBC]/40 pb-1 hover:border-[#D6CBBC] transition-colors duration-300 cursor-pointer mb-2"
                      >
                        SHOW MORE
                      </button>
                    </div>
                  )}
                </div>
              );
            })()}
          </motion.div>
        </section>

        {/* Editorial Text Profile Section */}
        <section className="w-full bg-[#D6CBBC] text-[#332820] py-20 md:py-28 px-6 sm:px-12 md:px-16 lg:px-24">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Sidebar Profile details */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <h2 className="font-heading text-2xl md:text-3xl uppercase tracking-wider font-light mb-1">PROJECT PROFILE</h2>
              <div className="flex flex-col gap-4 border-t border-[#332820]/25 pt-6">
                <div className="flex justify-between items-baseline border-b border-[#332820]/10 pb-3">
                  <span className="text-[10px] tracking-widest font-medium uppercase text-[#332820]/60">LOCATION</span>
                  <span className="text-xs tracking-wider uppercase font-light">{project.loc}</span>
                </div>
                <div className="flex justify-between items-baseline border-b border-[#332820]/10 pb-3">
                  <span className="text-[10px] tracking-widest font-medium uppercase text-[#332820]/60">TYPOLOGY</span>
                  <span className="text-xs tracking-wider uppercase font-light">Residential Architecture</span>
                </div>
                <div className="flex justify-between items-baseline border-b border-[#332820]/10 pb-3">
                  <span className="text-[10px] tracking-widest font-medium uppercase text-[#332820]/60">SCOPE</span>
                  <span className="text-xs tracking-wider uppercase font-light">Architecture & Interior Design</span>
                </div>
                <div className="flex justify-between items-baseline border-b border-[#332820]/10 pb-3">
                  <span className="text-[10px] tracking-widest font-medium uppercase text-[#332820]/60">STATUS</span>
                  <span className="text-xs tracking-wider uppercase font-light">Completed</span>
                </div>
              </div>
            </div>

            {/* Lorem Ipsum paragraphs in editorial layout */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 text-justify">
              <div className="flex flex-col gap-6 font-light tracking-wide text-[#332820]/80 font-sans">
                <p className="text-lg md:text-xl lg:text-[22px] font-light leading-relaxed text-[#332820] font-serif italic mb-2">
                  &ldquo;This design is a synthesis of contextual geometry and material clarity, establishing a serene sanctuary structured by daylight.&rdquo;
                </p>
                <p className="secondary-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <p className="secondary-text">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae hendrerit tellus. Single-minded dedication to architectural excellence guides every phase of this design process.
                </p>
              </div>
              <div className="flex flex-col gap-6 font-light tracking-wide text-[#332820]/80">
                <p className="secondary-text">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                </p>
                <p className="secondary-text">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <FooterSection />
      </main>

      {/* Fullscreen Lightbox Carousel Overlay */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-4 md:p-8 select-none"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between w-full text-[#D6CBBC]">
              <span className="text-xs md:text-sm tracking-widest font-light uppercase">
                {project.title} <span className="opacity-50">— {activeIndex + 1} / {images.length}</span>
              </span>
              <button
                onClick={() => setIsFullscreen(false)}
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#D6CBBC] hover:text-[#332820] flex items-center justify-center transition-all cursor-pointer border border-[#D6CBBC]/10"
                aria-label="Close fullscreen view"
              >
                <X size={20} />
              </button>
            </div>

            {/* Centered Image display */}
            <div className="relative flex-1 flex items-center justify-center w-full h-full my-4 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIndex}
                  src={images[activeIndex]}
                  alt={`${project.title} - Image ${activeIndex + 1}`}
                  className="max-w-full max-h-full object-contain pointer-events-none"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                />
              </AnimatePresence>

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-2 md:left-4 w-12 h-12 rounded-full bg-white/5 hover:bg-[#D6CBBC] hover:text-[#332820] text-[#D6CBBC] flex items-center justify-center transition-all cursor-pointer border border-[#D6CBBC]/5"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 md:right-4 w-12 h-12 rounded-full bg-white/5 hover:bg-[#D6CBBC] hover:text-[#332820] text-[#D6CBBC] flex items-center justify-center transition-all cursor-pointer border border-[#D6CBBC]/5"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Thumbnail Navigation Strip */}
            <div className="w-full max-w-[1000px] mx-auto overflow-hidden">
              <div className="relative flex gap-2 overflow-x-auto py-2 scroll-smooth select-none scrollbar-none" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    ref={(el) => (thumbRefs.current[idx] = el)}
                    onClick={() => setActiveIndex(idx)}
                    className={`relative w-16 h-12 md:w-20 md:h-14 shrink-0 overflow-hidden border transition-all ${idx === activeIndex
                      ? 'border-[#D6CBBC] scale-105 opacity-100'
                      : 'border-transparent opacity-40 hover:opacity-85'
                      }`}
                  >
                    <img src={img} className="w-full h-full object-cover pointer-events-none" alt="" />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
