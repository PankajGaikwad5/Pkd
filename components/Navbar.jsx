'use client';
import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';

function MenuButton({ onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button 
      onClick={onClick} 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex flex-col gap-[7px] w-8 py-1 relative group overflow-hidden"
    >
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="w-full h-[1px] relative overflow-hidden bg-transparent">
          {/* Default state line */}
          <motion.div
            className="absolute inset-0 bg-current"
            initial={{ x: '0%' }}
            animate={{ x: isHovered ? '101%' : '0%' }}
            transition={{ duration: 0.5, delay: i * 0.05, ease: [0.76, 0, 0.24, 1] }}
          />
          {/* Hover state line */}
          <motion.div
            className="absolute inset-0 bg-current"
            initial={{ x: '-101%' }}
            animate={{ x: isHovered ? '0%' : '-101%' }}
            transition={{ duration: 0.5, delay: i * 0.05, ease: [0.76, 0, 0.24, 1] }}
          />
        </div>
      ))}
    </button>
  );
}

export default function Navbar({ onMenuClick }) {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHasLoaded(true), 4000);
    return () => clearTimeout(t);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest < 50) {
      setHidden(false);
      setScrolled(false);
    } else {
      setScrolled(true);
      if (latest > lastY && latest > 150) {
        setHidden(true);
      } else if (latest < lastY) {
        setHidden(false);
      }
    }
    setLastY(latest);
  });

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: hidden ? '-100%' : 0, 
        opacity: 1 
      }}
      transition={{ 
        y: { duration: 0.8, ease: [0.83, 0, 0.17, 1] },
        opacity: { duration: 0.8, delay: 3.2 } 
      }}
      className="fixed top-0 left-0 right-0 z-40 text-[#E6DFD4]"
    >
      {/* Blur Background Layer */}
      <div 
        className={`absolute inset-0 transition-all duration-700 ${
          scrolled ? 'backdrop-blur-md bg-[#2E2824]/5' : 'backdrop-blur-none bg-transparent'
        }`}
      />

      {/* Content Layer with Mix Blend Difference */}
      <div className="flex items-center justify-between px-8 py-6 relative mix-blend-difference">
        <div className="flex-1 flex items-center">
          <button className="hidden md:block px-6 py-2 border border-current rounded-full text-[11px] tracking-widest hover:bg-[#E6DFD4] hover:text-[#2E2824] transition-colors duration-300">
            OUR PORTFOLIO
          </button>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex justify-center">
          <h1 className="font-heading text-4xl md:text-5xl tracking-[0.3em] font-light">ARCCA</h1>
        </div>

        <div className="flex-1 flex items-center justify-end gap-10">
          <span className="hidden md:block text-[11px] font-light tracking-widest uppercase">EST &ndash; 2020</span>
          <MenuButton onClick={onMenuClick} />
        </div>
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: hidden ? 0 : 1 }}
        transition={{ 
          duration: 1.4, 
          ease: [0.83, 0, 0.17, 1],
          delay: !hasLoaded ? 3.4 : (hidden ? 0 : 0.3)
        }}
        className={`absolute bottom-0 left-0 right-0 h-[1px] origin-left transition-colors duration-700 ${
          scrolled ? 'bg-[#2E2824] opacity-40' : 'bg-current opacity-30'
        }`}
      />
    </motion.nav>
  );
}
