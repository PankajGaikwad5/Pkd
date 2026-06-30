'use client';
import { motion } from 'motion/react';

export default function Loader() {
  const ease = [0.83, 0, 0.17, 1]; // Stronger easing for luxurious feel

  return (
    <motion.div
      exit={{ opacity: 0, transition: { duration: 0.1, delay: 1.6 } }}
      className="fixed inset-0 z-50 flex pointer-events-none overflow-hidden"
    >
      {/* Left Curtain */}
      <motion.div
        initial={{ x: 0 }}
        exit={{ x: '-100%' }}
        transition={{ duration: 1.6, ease }}
        className="w-1/2 h-full bg-[#E6DFD4] relative"
      >
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.6, ease, delay: 0.2 }}
          className="absolute left-[5vw] top-0 h-full w-[1px] bg-[#2E2824] origin-top"
        />
        {/* Center line (top half) attached to right edge of left curtain */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.4, ease, delay: 0.8 }}
          className="absolute right-0 bottom-[calc(50%+2.75rem)] h-[50vh] w-[1px] bg-[#2E2824] origin-bottom"
        />
        {/* Center line (bottom half) attached to right edge of left curtain */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.4, ease, delay: 0.8 }}
          className="absolute right-0 top-[calc(50%+2.75rem)] h-[50vh] w-[1px] bg-[#2E2824] origin-top"
        />
      </motion.div>

      {/* Right Curtain */}
      <motion.div
        initial={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ duration: 1.6, ease }}
        className="w-1/2 h-full bg-[#E6DFD4] relative"
      >
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.6, ease, delay: 0.2 }}
          className="absolute right-[5vw] top-0 h-full w-[1px] bg-[#2E2824] origin-bottom"
        />
      </motion.div>

      {/* Left Logo Half */}
      <motion.div
        initial={{ x: '-50%', y: '-50%' }}
        exit={{ x: 'calc(-50vw - 50%)', y: '-50%' }}
        transition={{ duration: 1.6, ease }}
        className="absolute top-1/2 left-1/2 z-10"
        style={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' }}
      >
        <LogoContent />
      </motion.div>

      {/* Right Logo Half */}
      <motion.div
        initial={{ x: '-50%', y: '-50%' }}
        exit={{ x: 'calc(50vw - 50%)', y: '-50%' }}
        transition={{ duration: 1.6, ease }}
        className="absolute top-1/2 left-1/2 z-10"
        style={{ clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)' }}
      >
        <LogoContent />
      </motion.div>
    </motion.div>
  );
}

function LogoContent() {
  const ease = [0.83, 0, 0.17, 1];
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease, delay: 0.6 }}
      className="w-[5.5rem] h-[5.5rem] border border-[#2E2824] bg-[#E6DFD4] relative flex flex-col font-heading text-[#2E2824] leading-none"
    >
      <div className="flex w-full h-1/2 border-b border-[#2E2824]">
        <div className="w-1/2 h-full border-r border-[#2E2824] flex justify-center items-center text-[1.5rem] pt-1">P</div>
        <div className="w-1/2 h-full flex justify-center items-center text-[1.5rem] pt-1">K</div>
      </div>
      <div className="flex w-full h-1/2">
        <div className="w-1/2 h-full border-r border-[#2E2824] flex justify-center items-center text-[1.5rem] pt-1">D</div>
        <div className="w-1/2 h-full flex justify-center items-center text-[1.5rem] pt-1">S</div>
      </div>
    </motion.div>
  );
}
