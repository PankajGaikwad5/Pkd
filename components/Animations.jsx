'use client';
import { motion } from 'motion/react';

export function FadeIn({
  children,
  delay = 0,
  y = 40,
  className = '',
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function AppearBottomToTop({
  children,
  delay = 0,
  duration = 1.8,
  className = '',
}) {
  return (
    <motion.div
      initial={{ clipPath: 'inset(100% 0 0 0)' }}
      whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
      viewport={{ once: true }}
      transition={{ duration, delay, ease: [0.42, 0, 0.58, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ParallaxImage({
  src,
  alt,
  className = '',
}) {
  // A simple structured wrapper, framer useScroll could be added here for true parallax
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />
    </div>
  );
}
