import { motion } from 'motion/react';
import Link from 'next/link';

export default function AboutLivingExperienceSection() {
  return (
    <section className="w-full min-h-screen bg-[#332820] flex flex-col lg:flex-row items-center py-20 lg:py-28 px-8 sm:px-12 md:px-16 lg:px-0">
      {/* Left Content Area */}
      <div className="w-full lg:w-[45%] flex flex-col justify-center lg:py-12 lg:pl-20 lg:pr-12 xl:pr-20">
        <div className="w-full lg:max-w-[420px] xl:max-w-[500px]">
          
          {/* Heading */}
          <div className="overflow-hidden pb-1 mb-8">
            <motion.h2
              initial={{ clipPath: "inset(100% 0 0 0)", y: 30 }}
              whileInView={{ clipPath: "inset(0% 0 0 0)", y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              className="font-heading text-2xl md:text-3xl lg:text-4xl xl:text-[2.8rem] text-[#D6CBBC] tracking-tight"
            >
              MIAMI OFFERS A UNIQUE LIVING EXPERIENCE WHERE CULTURAL DIVERSITY, EDUCATIONAL OPTIONS, AND OUTDOOR LIFESTYLE CONVERGE.
            </motion.h2>
          </div>

          {/* Button */}
          <div className="overflow-hidden pb-1">
            <motion.div
              initial={{ clipPath: "inset(100% 0 0 0)", y: 20 }}
              whileInView={{ clipPath: "inset(0% 0 0 0)", y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.15 }}
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
            src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2069&auto=format&fit=crop"
            alt="ARCCA Luxury Arched Villa"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
      </div>
    </section>
  );
}
