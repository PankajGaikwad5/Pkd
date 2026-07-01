import { motion } from 'motion/react';
import Link from 'next/link';

export default function AboutMiamiSection() {
  return (
    <section className="w-full min-h-screen bg-[#332820] flex flex-col lg:flex-row items-center py-20 lg:py-28 px-8 sm:px-12 md:px-16 lg:px-0">
      {/* Left Content Area */}
      <div className="w-full lg:w-[45%] flex flex-col justify-center lg:py-12 lg:pl-20 lg:pr-12 xl:pr-20">
        <div className="w-full lg:max-w-[420px] xl:max-w-[400px]">

          {/* Heading */}
          <div className="overflow-hidden pb-1 mb-8">
            <motion.h2
              initial={{ clipPath: "inset(100% 0 0 0)", y: 30 }}
              whileInView={{ clipPath: "inset(0% 0 0 0)", y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              className="font-heading text-2xl md:text-3xl text-[#D6CBBC] tracking-tight"
            >
              BASED IN THE HEART OF MUMBAI, WE CREATE LUXURY INTERIORS AND ARCHITECTURE
            </motion.h2>
          </div>

          {/* Descriptions */}
          <div className="overflow-hidden pb-1 mb-4">
            <motion.p
              initial={{ clipPath: "inset(100% 0 0 0)", y: 30 }}
              whileInView={{ clipPath: "inset(0% 0 0 0)", y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
              className="secondary-text text-[#D6CBBC]/80 font-light mb-4"
            >
              With a thoughtful approach to design and execution, we craft bespoke residential and commercial spaces that balance timeless aesthetics with everyday functionality.
            </motion.p>
            <motion.p
              initial={{ clipPath: "inset(100% 0 0 0)", y: 30 }}
              whileInView={{ clipPath: "inset(0% 0 0 0)", y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.15 }}
              className="secondary-text text-[#D6CBBC]/80 font-light"
            >
              Led by Prachiti Khanvilkar, bringing over 25 years of excellence, our studio delivers refined interiors through meticulous planning, premium materials, and uncompromising attention to detail.
            </motion.p>
          </div>

          {/* Button */}
          <div className="overflow-hidden pb-1">
            <motion.div
              initial={{ clipPath: "inset(100% 0 0 0)", y: 20 }}
              whileInView={{ clipPath: "inset(0% 0 0 0)", y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
            >
              <Link
                href="/contact"
                className="inline-block px-8 py-3 bg-[#D6CBBC] text-[#332820] rounded-full text-[11px] font-medium uppercase tracking-[0.2em] hover:bg-white transition-colors border border-[#D6CBBC]"
              >
                CONTACT
              </Link>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Right Image Area */}
      <div className="w-full lg:w-[55%] h-[50vh] md:h-[60vh] lg:h-[80vh] flex items-center justify-end pr-0 lg:pr-0 pb-12 lg:pb-0">
        <motion.div
          initial={{ clipPath: 'inset(0% 50% 0% 50%)' }}
          whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
          className="w-full h-full lg:h-[75vh] overflow-hidden rounded-sm"
        >
          <img
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
            alt="ARCCA Luxury Home Pool"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
      </div>
    </section>
  );
}
