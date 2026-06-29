import { motion } from 'motion/react';

export default function CraftingSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background image */}
      <img
        src="/sections/craft.webp"
        alt="Luxury bathroom interior"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Subtle dark overlay */}
      <div className="absolute w-full h-full inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 w-full min-h-screen flex flex-col px-8 md:px-10 py-14 md:py-20">



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
