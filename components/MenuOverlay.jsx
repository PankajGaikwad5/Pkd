'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';

const MotionLink = motion(Link);

function MenuItem({ item, i, onClose }) {
  const [isHovered, setIsHovered] = useState(false);

  const href = item === 'HOME' ? '/' : item === 'ABOUT US' ? '/about-us' : item === 'CONTACT' ? '/contact' : item === 'PROJECTS' ? '/projects' : '#';

  return (
    <MotionLink
      href={href}
      onClick={onClose}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex-1 flex items-center px-12 overflow-hidden group w-full"
    >
      {/* Background slide up */}
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: isHovered ? '0%' : '100%' }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        className="absolute inset-0 bg-[#332820]/20 z-0"
      />
      
      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 + i * 0.05, ease: [0.76, 0, 0.24, 1] }}
        className="relative z-10 text-[1.4rem] lg:text-[1.8rem] xl:text-[2.2rem] font-light tracking-[0.15em] uppercase text-[#332820]"
      >
        {item}
      </motion.div>

      {/* Initial load line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.5 + i * 0.05, ease: [0.76, 0, 0.24, 1] }}
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#332820] opacity-30 origin-left z-10"
      />

      {/* Hover thicker line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        className="absolute bottom-[-2px] left-0 right-0 h-[8px] bg-[#332820] origin-left z-20"
      />
    </MotionLink>
  );
}

export default function MenuOverlay({
  isOpen,
  onClose,
}) {
  const menuItems = ['HOME', 'ABOUT US', 'VISION', 'TEAM', 'SERVICES', 'PROJECTS', 'CONTACT'];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex"
        >
          {/* Left Panel (Beige) */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="w-1/2 h-full bg-[#D6CBBC] flex flex-col pt-8 relative border-r border-[#332820]/10"
          >
            {/* Top Left Text/Branding (Matches Navbar Height) */}
            <div className="absolute top-8 left-12 z-20">
              <span className="text-[11px] font-light tracking-widest uppercase text-[#332820]">EST &ndash; 2020</span>
            </div>

            <nav className="flex flex-col h-full w-full justify-center text-[#332820] pt-16">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
                className="w-full h-[1px] bg-[#332820] opacity-30 origin-left"
              />
              {menuItems.map((item, i) => (
                <MenuItem key={item} item={item} i={i} onClose={onClose} />
              ))}
            </nav>
          </motion.div>

          {/* Right Panel (Dark) */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="w-1/2 h-full bg-[#332820] text-[#D6CBBC] relative border-l border-[#D6CBBC]/10 border-r-[12px] border-[#332820]"
          >
            {/* CLOSE Button */}
            <div className="absolute top-8 right-12 z-20">
              <button 
                onClick={onClose}
                className="text-[11px] uppercase tracking-widest hover:text-white transition-colors flex items-center font-light cursor-pointer"
              >
                CLOSE
              </button>
            </div>

            <div className="flex flex-col h-full pt-20">
               {/* Logo Area */}
               <div className="flex-1 flex justify-center items-start pt-8">
                 <h2 className="font-heading text-8xl lg:text-[9rem] tracking-[0.1em] font-light leading-none text-[#D6CBBC]">
                    ARCCA<sup className="text-3xl ml-2">&reg;</sup>
                 </h2>
               </div>

               {/* Contact Area */}
               <div className="px-24 pb-16 w-full mx-auto">
                 <div className="grid grid-cols-2 gap-y-16 gap-x-8 font-sans text-[10px] lg:text-[11px] tracking-widest uppercase text-[#D6CBBC]">
                   <div>
                     <p className="mb-4 opacity-100 font-medium tracking-[0.15em]">Email</p>
                     <p className="opacity-70 font-light">info@arccagp.com</p>
                   </div>
                   <div>
                     <p className="mb-4 opacity-100 font-medium tracking-[0.15em]">Address</p>
                     <p className="opacity-70 font-light leading-relaxed">
                       194 Isla Dorada Blvd,<br/>Coral Gables, FL, 33143
                     </p>
                   </div>
                   <div>
                     <p className="mb-4 opacity-100 font-medium tracking-[0.15em]">Phone</p>
                     <p className="opacity-70 font-light">786 901 1622</p>
                   </div>
                   <div>
                     <p className="mb-4 opacity-100 font-medium tracking-[0.15em]">Monday to Friday:</p>
                     <p className="opacity-70 font-light leading-relaxed">
                       9:00 AM - 6:00 PM
                     </p>
                   </div>
                   <div className="col-span-2">
                     <p className="mb-4 opacity-100 font-medium tracking-[0.15em]">Social</p>
                     <ul className="space-y-3 opacity-70 font-light">
                       <li><a href="#" className="hover:opacity-100 transition-opacity">Instagram</a></li>
                       <li><a href="#" className="hover:opacity-100 transition-opacity">Facebook</a></li>
                       <li><a href="#" className="hover:opacity-100 transition-opacity">LinkedIn</a></li>
                     </ul>
                   </div>
                 </div>
               </div>

               {/* Footer Area */}
               <div className="w-full relative mt-auto">
                 <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#D6CBBC]/20" />
                 <div className="pt-8 pb-12 px-24 text-[10px] tracking-widest uppercase opacity-70 flex justify-between font-light">
                   <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
                   <p>&copy; 2025 ARCCA</p>
                 </div>
               </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
