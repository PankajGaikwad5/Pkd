import { motion } from 'motion/react';

export default function AboutInspirationSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
        alt="ARCCA Miami Inspiration Architecture"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Content Container */}
      <div className="relative z-10 w-full h-full flex flex-col justify-end p-8 sm:p-12 md:p-16 lg:p-24 text-[#D6CBBC]">
        {/* Bottom Right: Description */}
        <div className="flex justify-end pr-0 lg:pr-12 mb-6">
          <div className="max-w-2xl">
            <div className="overflow-hidden pb-1">
              <motion.p
                initial={{ clipPath: "inset(100% 0 0 0)", y: 30 }}
                whileInView={{ clipPath: "inset(0% 0 0 0)", y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
                className="text-sm md:text-[15px] xl:text-[16px] leading-relaxed tracking-[0.1em] text-[#D6CBBC] font-medium uppercase font-sans"
              >
                ARCCA GROUP® FINDS INSPIRATION IN THE RICH ARCHITECTURAL HERITAGE OF ITS LOCATION IN MIAMI, ESPECIALLY IN ITS IMPRESSIVE ART DECO STYLE. EVERY BUILDING IN THIS VIBRANT CITY TELLS A STORY OF CREATIVITY AND INNOVATION.
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* Side Circle Indicator */}
      <div className="absolute right-8 sm:right-12 top-1/2 -translate-y-1/2 z-20 hidden md:block">
        <div className="w-3 h-3 rounded-full border border-[#D6CBBC]/40" />
      </div>
    </section>
  );
}
