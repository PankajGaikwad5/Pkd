import { motion } from 'motion/react';

export default function TeamSection() {
  return (
    <section className="w-full min-h-screen bg-[#D6CBBC] flex flex-col lg:flex-row items-center pt-20 lg:pt-0">
      {/* Left Content Area */}
      <div className="w-full lg:w-[45%] flex flex-col justify-center py-12 lg:py-24 px-6 sm:px-12 md:px-16 lg:px-0">
        <div className="w-full lg:max-w-[400px] xl:max-w-[480px] 2xl:max-w-[800px] ml-0 lg:ml-20 lg:mr-0 lg:pr-12 xl:pr-20 2xl:pr-28">
          <div className="mb-6 lg:mb-8">
            <div className="overflow-hidden">
              <motion.div
                initial={{ clipPath: "inset(100% 0 0 0)", y: 15 }}
                whileInView={{ clipPath: "inset(0% 0 0 0)", y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 }}
              >
                <svg width="36" height="36" viewBox="0 0 48 48" fill="none" stroke="#332820" strokeWidth="1.2" className="mb-2">
                  <rect x="0.6" y="0.6" width="46.8" height="46.8" />
                  <path d="M0 24H48 M24 0V48 M0 0L48 48 M48 0L0 48" />
                  <text x="6" y="18" fontSize="11" fontFamily="sans-serif" fill="#332820" stroke="none">A</text>
                  <text x="33" y="18" fontSize="11" fontFamily="sans-serif" fill="#332820" stroke="none">R</text>
                  <text x="6" y="42" fontSize="11" fontFamily="sans-serif" fill="#332820" stroke="none">C</text>
                  <text x="33" y="42" fontSize="11" fontFamily="sans-serif" fill="#332820" stroke="none">A</text>
                </svg>
              </motion.div>
            </div>
            <h3 className="text-[17px] uppercase tracking-[0.2em] font-light text-[#332820]">
              <div className="overflow-hidden pt-1">
                <motion.div
                  initial={{ clipPath: "inset(100% 0 0 0)", y: 15 }}
                  whileInView={{ clipPath: "inset(0% 0 0 0)", y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
                >
                  ARCCA GROUP®
                </motion.div>
              </div>
            </h3>
          </div>

          <div className="overflow-hidden pb-1 mb-6">
            <motion.h2
              initial={{ clipPath: "inset(100% 0 0 0)", y: 30 }}
              whileInView={{ clipPath: "inset(0% 0 0 0)", y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.15 }}
              className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem] text-[#332820] tracking-tight leading-[0.9] uppercase"
            >
              OUR<br />TEAM
            </motion.h2>
          </div>

          <div className="overflow-hidden pb-1 mb-8">
            <motion.p
              initial={{ clipPath: "inset(100% 0 0 0)", y: 30 }}
              whileInView={{ clipPath: "inset(0% 0 0 0)", y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.25 }}
              className="text-sm md:text-[15px] leading-tight tracking-wide text-[#332820]/80 font-light mb-4"
            >
              At Arcca Group, we don&apos;t simply follow trends — we define the future of luxury living. What began as a family-driven venture has evolved into a firm with international reach, united by a clear vision and an enduring passion for excellence.
            </motion.p>
            <motion.p
              initial={{ clipPath: "inset(100% 0 0 0)", y: 30 }}
              whileInView={{ clipPath: "inset(0% 0 0 0)", y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.3 }}
              className="text-sm md:text-[15px] leading-tight tracking-wide text-[#332820]/80 font-light"
            >
              With deep-rooted expertise in the Miami market, our team sees possibilities where others see obstacles — uncovering unique opportunities through a combination of strategic precision, creative innovation, and an unwavering commitment to quality.
            </motion.p>
          </div>

          <div className="overflow-hidden pb-1">
            <motion.div
              initial={{ clipPath: "inset(100% 0 0 0)", y: 20 }}
              whileInView={{ clipPath: "inset(0% 0 0 0)", y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.35 }}
            >
              <button className="px-8 py-3 w-max bg-[#332820] text-[#D6CBBC] rounded-[50px] text-[11px] font-medium uppercase tracking-[0.2em] hover:bg-[#1E1A17] transition-colors border border-[#332820]">
                OUR TEAM
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Right Image Area */}
      <div className="w-full lg:w-[55%] h-[50vh] md:h-[60vh] lg:h-screen flex items-center justify-end pb-12 lg:pb-0">
        <motion.div
          initial={{ clipPath: 'inset(0% 50% 0% 50%)' }}
          whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
          className="w-full h-full lg:h-[85vh]"
        >
          <img
            src="/images/team.png"
            alt="Arcca Group Team"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
      </div>
    </section>
  );
}
