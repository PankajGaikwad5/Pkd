import { motion } from 'motion/react';

export default function AboutCollaborativeSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop"
        alt="ARCCA Luxury Staircase"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-black/35 z-0" />

      {/* Content Container */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between p-8 sm:p-12 md:p-16 lg:p-24 text-[#D6CBBC]">
        {/* Top Left: Title */}
        <div className="overflow-hidden pb-1">
          <motion.h2
            initial={{ clipPath: "inset(100% 0 0 0)", y: 30 }}
            whileInView={{ clipPath: "inset(0% 0 0 0)", y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="font-heading text-5xl sm:text-6xl lg:text-[4rem] xl:text-[5rem] tracking-tight leading-[1.0] uppercase"
          >
            AT PKD STUDIO
          </motion.h2>
        </div>

        {/* Bottom Right: Description */}
        <div className="flex justify-end pr-0 lg:pr-12">
          <div className="max-w-md">
            <div className="overflow-hidden pb-1">
              <motion.p
                initial={{ clipPath: "inset(100% 0 0 0)", y: 30 }}
                whileInView={{ clipPath: "inset(0% 0 0 0)", y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.15 }}
                className="text-sm sm:text-[15px] leading-relaxed text-[#D6CBBC]/90 font-light"
              >
                Our collaborative approach ensures open communication and transparency at every step of the process. We prioritize creating environments that offer an exceptional lifestyle, security, and a sense of community for families. From innovative amenities to serene green spaces, we strive to design living spaces that blend luxury with the charm of traditional city living and promote overall wellness.
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
