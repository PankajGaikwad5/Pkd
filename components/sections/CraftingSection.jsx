import { motion } from 'motion/react';

export default function CraftingSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background image */}
      <img
        src="/images/crafting_bg.png"
        alt="Luxury bathroom interior"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Subtle dark overlay */}
      <div className="absolute w-full h-screen inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 w-full min-h-screen flex flex-col px-8 md:px-10 py-14 md:py-20">

        {/* Top: Logo */}
        <div className="overflow-hidden">
          <motion.div
            initial={{ clipPath: "inset(100% 0 0 0)", y: 15 }}
            whileInView={{ clipPath: "inset(0% 0 0 0)", y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 }}
            className="md:-mb-8"
          >
            {/* ARCA geometric logo */}
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="size-12 md:size-14"
            >
              <rect x="1" y="1" width="58" height="58" stroke="#D6CBBC" strokeWidth="1.5" />
              {/* A */}
              <path d="M10 45 L18 15 L26 45 M13 35 L23 35" stroke="#D6CBBC" strokeWidth="1.5" fill="none" />
              {/* R */}
              <path d="M10 15 L10 7 L20 7 Q25 7 25 11 Q25 15 20 15 L10 15 M20 15 L26 7" stroke="#D6CBBC" strokeWidth="1.2" fill="none" transform="translate(20, 8)" />
              {/* C */}
              <path d="M50 18 Q44 12 38 18 Q32 24 38 30 Q44 36 50 30" stroke="#D6CBBC" strokeWidth="1.5" fill="none" transform="translate(-4, -2)" />
              {/* A bottom */}
              <path d="M38 50 L46 30 L54 50 M41 42 L51 42" stroke="#D6CBBC" strokeWidth="1.5" fill="none" transform="translate(-4, -2)" />
            </svg>
          </motion.div>
        </div>

        {/* Middle: Large heading */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="overflow-hidden pb-1">
            <motion.h2
              initial={{ clipPath: "inset(100% 0 0 0)", y: 30 }}
              whileInView={{ clipPath: "inset(0% 0 0 0)", y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.15 }}
              className="font-heading text-3xl sm:text-4xl md:text-5xl leading-[1.2] text-amber-100 uppercase max-w-3xl"
            >
              Crafting Exceptional Spaces With Unique And Luxurious Designs.
            </motion.h2>
          </div>
        </div>

        {/* Bottom right: Description + Button */}
        <div className="flex justify-end">
          <div className="max-w-xs">
            <div className="overflow-hidden pb-1 mb-6">
              <motion.p
                initial={{ clipPath: "inset(100% 0 0 0)", y: 30 }}
                whileInView={{ clipPath: "inset(0% 0 0 0)", y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.25 }}
                className="text-xs md:text-sm leading-relaxed text-amber-100/85"
              >
                From concept to creation, we tailor every detail
                to your lifestyle and vision.
              </motion.p>
            </div>
            <div className="overflow-hidden pb-1">
              <motion.div
                initial={{ clipPath: "inset(100% 0 0 0)", y: 20 }}
                whileInView={{ clipPath: "inset(0% 0 0 0)", y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.35 }}
              >
                <button className="inline-flex items-center px-7 md:px-9 py-2.5 md:py-3 border border-amber-100/60 text-amber-100 rounded-full text-xs tracking-widest uppercase cursor-pointer hover:bg-amber-100/10 transition-all duration-300 whitespace-nowrap">
                  See All Services
                </button>
              </motion.div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
