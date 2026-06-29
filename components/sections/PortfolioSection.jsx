import { FadeIn } from "../Animations";
import { useRef, useState } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const maskTransition = { duration: 1, ease: [0.76, 0, 0.24, 1] };

export default function PortfolioSection() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const projects = [
    {
      title: "CASA DOHA",
      loc: "Pinecrest",
      img: "https://images.unsplash.com/photo-1613490908836-e87a2ea042b4?q=80&w=2070&auto=format&fit=crop",
      badge: "CURRENT PROJECTS",
    },
    {
      title: "CASA ANTIBES",
      loc: "Coral Gables",
      img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop",
      badge: "",
    },
    {
      title: "CASA 88",
      loc: "Miami Dade",
      img: "https://images.unsplash.com/photo-1600607688969-a5bfcd64bd11?q=80&w=2070&auto=format&fit=crop",
      badge: "IN DEVELOPMENT",
    },
  ];

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const amount = scrollRef.current.clientWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full bg-[#DED6C8] flex flex-col xl:flex-row pb-24 xl:pb-0">
      {/* Left Content Area */}
      <div className="w-full xl:w-[40%] flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:pl-20 xl:pl-24 2xl:pl-32 xl:pr-12 py-12 xl:py-32">
        <div className="mb-10">
          {/* <div className="overflow-hidden">
            <motion.div
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              whileInView={{ clipPath: "inset(0% 0 0 0)" }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1],
                delay: 0.05,
              }}
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                stroke="#2E2824"
                strokeWidth="1.2"
                className="mb-4"
              >
                <rect x="0.6" y="0.6" width="46.8" height="46.8" />
                <path d="M0 24H48 M24 0V48 M0 0L48 48 M48 0L0 48" />
                <text
                  x="6"
                  y="18"
                  fontSize="11"
                  fontFamily="sans-serif"
                  fill="#2E2824"
                  stroke="none"
                >
                  A
                </text>
                <text
                  x="33"
                  y="18"
                  fontSize="11"
                  fontFamily="sans-serif"
                  fill="#2E2824"
                  stroke="none"
                >
                  R
                </text>
                <text
                  x="6"
                  y="42"
                  fontSize="11"
                  fontFamily="sans-serif"
                  fill="#2E2824"
                  stroke="none"
                >
                  C
                </text>
                <text
                  x="33"
                  y="42"
                  fontSize="11"
                  fontFamily="sans-serif"
                  fill="#2E2824"
                  stroke="none"
                >
                  A
                </text>
              </svg>
            </motion.div>
          </div> */}

          <div className="mt-4 text-xl md:text-2xl lg:text-3xl xl:text-[22px] uppercase tracking-[0.05em] font-light text-[#2E2824] leading-[1.3]">
            <div className="overflow-hidden pb-1">
              <motion.div
                initial={{ clipPath: "inset(100% 0 0 0)" }}
                whileInView={{ clipPath: "inset(0% 0 0 0)" }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  ease: [0.76, 0, 0.24, 1],
                  delay: 0.1,
                }}
              >
                DESIGN,
              </motion.div>
            </div>
            <div className="overflow-hidden pb-1">
              <motion.div
                initial={{ clipPath: "inset(100% 0 0 0)" }}
                whileInView={{ clipPath: "inset(0% 0 0 0)" }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  ease: [0.76, 0, 0.24, 1],
                  delay: 0.15,
                }}
              >
                ARCHITECTURE,
              </motion.div>
            </div>
            <div className="overflow-hidden pb-1">
              <motion.div
                initial={{ clipPath: "inset(100% 0 0 0)" }}
                whileInView={{ clipPath: "inset(0% 0 0 0)" }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  ease: [0.76, 0, 0.24, 1],
                  delay: 0.2,
                }}
              >
                INTERIOR DESIGN
              </motion.div>
            </div>
          </div>
        </div>

        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-[4.5rem] 2xl:text-[5rem] leading-[1.05] mb-6 text-[#2E2824] tracking-tight">
          <div className="overflow-hidden pb-2">
            <motion.div
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              whileInView={{ clipPath: "inset(0% 0 0 0)" }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1],
                delay: 0.25,
              }}
            >
              PORTFOLIO
            </motion.div>
          </div>
        </h2>

        {/* Paragraph description for mobile/tablet */}
        <p className="block xl:hidden mb-10 text-sm md:text-[14px] leading-[1.6] tracking-wide text-[#2E2824]/80 max-w-[360px] font-light animate-fade-in">
          We create refined, functional spaces where aesthetics meet purpose. Each project is a dialogue between form and feeling crafted with precision, shaped by context, and inspired by timeless design principles.
        </p>

        {/* Paragraph description for desktop (retains line-by-line animations) */}
        <div className="hidden xl:flex flex-col gap-0 mb-10 text-sm md:text-[14px] leading-[1.6] tracking-wide text-[#2E2824]/80 max-w-[360px] font-light">
          <div className="overflow-hidden pb-1">
            <motion.div
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              whileInView={{ clipPath: "inset(0% 0 0 0)" }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1],
                delay: 0.35,
              }}
            >
              We create refined, functional spaces where
            </motion.div>
          </div>
          <div className="overflow-hidden pb-1">
            <motion.div
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              whileInView={{ clipPath: "inset(0% 0 0 0)" }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1],
                delay: 0.4,
              }}
            >
              aesthetics meet purpose. Each project is a
            </motion.div>
          </div>
          <div className="overflow-hidden pb-1">
            <motion.div
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              whileInView={{ clipPath: "inset(0% 0 0 0)" }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1],
                delay: 0.45,
              }}
            >
              dialogue between form and feeling
            </motion.div>
          </div>
          <div className="overflow-hidden pb-1">
            <motion.div
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              whileInView={{ clipPath: "inset(0% 0 0 0)" }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1],
                delay: 0.5,
              }}
            >
              crafted with precision, shaped by context,
            </motion.div>
          </div>
          <div className="overflow-hidden pb-1">
            <motion.div
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              whileInView={{ clipPath: "inset(0% 0 0 0)" }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1],
                delay: 0.55,
              }}
            >
              and inspired by timeless design principles.
            </motion.div>
          </div>
        </div>

        <div>
          <Link href="/projects" className="inline-block px-10 py-[14px] w-max bg-[#352D26] text-[#E6DFD4] rounded-[50px] text-[11px] font-medium uppercase tracking-[0.2em] hover:bg-[#201b17] transition-colors text-center">
            VIEW ALL
          </Link>
        </div>
      </div>

      {/* Right Carousel Area */}
      <div className="w-full xl:w-[60%] flex items-center relative pl-6 sm:pl-12 md:pl-16 xl:pl-0 2xl:pl-8 xl:py-32">
        {/* Navigation Arrows overlay */}
        <div className="absolute inset-y-0 left-6 sm:left-12 md:left-16 xl:left-0 2xl:left-8 right-0 z-10 hidden xl:flex items-center justify-between pointer-events-none px-4 md:px-6">
          <button
            onClick={() => scroll("left")}
            className={`w-9 h-9 rounded-full bg-[#E6DFD4]/90 shadow-md flex items-center justify-center text-[#2E2824] pointer-events-auto transition-opacity duration-300 hover:bg-white ${canScrollLeft ? "opacity-100" : "opacity-0"}`}
            aria-label="Scroll left"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => scroll("right")}
            className={`w-9 h-9 mr-6 sm:mr-12 rounded-full bg-[#E6DFD4]/90 shadow-md flex items-center justify-center text-[#2E2824] pointer-events-auto transition-opacity duration-300 hover:bg-white ${canScrollRight ? "opacity-100" : "opacity-0"}`}
            aria-label="Scroll right"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-4 xl:gap-6 overflow-x-auto w-full snap-x snap-mandatory hide-scroll scroll-smooth pr-6 sm:pr-12 md:pr-16"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ clipPath: "inset(0% 50% 0% 50%)" }}
              whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
              viewport={{ once: true }}
              transition={{
                duration: 1.2,
                ease: [0.76, 0, 0.24, 1],
                delay: 0.1 + i * 0.1,
              }}
              className="w-[85vw] md:w-[60vw] xl:w-[32vw] 2xl:w-[28vw] aspect-[4/3] shrink-0 snap-start relative group cursor-pointer overflow-hidden bg-black/10"
            >
              <img
                src={proj.img}
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                alt={proj.title}
              />

              {/* Gradient overlay on bottom */}
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              {/* Hover dark overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500 pointer-events-none" />

              {proj.badge && (
                <div className="absolute top-0 right-0 bg-[#352D26] text-[#E6DFD4] px-4 py-1.5 text-[11px] tracking-widest uppercase shadow-sm">
                  {proj.badge}
                </div>
              )}

              <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 text-[#E6DFD4] pointer-events-none">
                <h3 className="font-heading text-3xl lg:text-4xl xl:text-5xl mb-1">
                  {proj.title}
                </h3>
                <p className="text-[13px] tracking-wide font-light opacity-90">
                  {proj.loc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
