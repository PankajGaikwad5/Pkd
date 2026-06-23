import { FadeIn } from '../Animations';

export default function TypographySection() {
   return (
      <section className="w-full py-20 md:py-28 px-5 md:px-14 lg:px-20 flex items-center justify-center overflow-hidden min-h-[85vh]">
         <div className="max-w-[1400px] w-full relative">

            {/* Left paragraph text */}
            <FadeIn delay={0.1}>
               <p className="text-[13px]  max-w-[220px] mb-10 md:mb-0 md:absolute md:top-0 md:left-0 z-10">
                  At Arcca Group, every project is
                  conceived as a creation
                  that transcends architecture — a
                  space designed to{' '}
                  <strong>elevate everyday life</strong> through:
                  <br /><br />
                  luxury, exceptional craftsmanship,
                  and thoughtful design.
               </p>
            </FadeIn>

            {/* Big typography */}
            <div className="font-heading w-full">

               {/* Line 1: INSPIRED + dining image — right aligned */}
               <FadeIn delay={0.2}>
                  <div className="flex items-end justify-end text-[clamp(48px,10.3vw,155px)] leading-none tracking-tighter">
                     <span>INSPIRED</span>
                     <img
                        src="/images/typography_dining.png"
                        alt="Luxury dining room"
                        className="w-[clamp(80px,18vw,260px)] h-[clamp(50px,10.7vw,155px)] object-cover ml-2 md:ml-3 rounded-sm flex-shrink-0"
                     />
                  </div>
               </FadeIn>

               {/* Line 2: DESIGN + living image + BY — centered */}
               <FadeIn delay={0.4}>
                  <div className="flex items-center justify-center text-[clamp(48px,10.3vw,155px)] leading-none tracking-tighter mt-1 md:mt-2">
                     <span>DESIGN</span>
                     <img
                        src="/images/typography_living.png"
                        alt="Luxury living room"
                        className="w-[clamp(40px,8.3vw,120px)] h-[clamp(40px,8.3vw,120px)] object-cover mx-1.5 md:mx-2 rounded-sm flex-shrink-0"
                     />
                     <span>BY</span>
                  </div>
               </FadeIn>

               {/* Line 3: ARCCA® + TALK TO US button — centered */}
               <FadeIn delay={0.6}>
                  <div className="flex items-end justify-center text-[clamp(48px,10.3vw,155px)] leading-none tracking-tighter mt-1 md:mt-2">
                     <div className="flex items-start">
                        <span>ARCCA</span>
                        <span className="text-[0.22em] leading-none relative top-[0.1em]">®</span>
                     </div>
                     <button className="inline-flex items-center px-6 md:px-8 py-2.5 md:py-3.5 bg-[#332820] text-[#D6CBBC] rounded-full text-[10px] md:text-[11px] tracking-[0.15em] uppercase cursor-pointer hover:bg-[#1E1A17] transition-colors whitespace-nowrap ml-4 md:ml-6 mb-[0.1em]">
                        TALK TO US
                     </button>
                  </div>
               </FadeIn>
            </div>
         </div>
      </section>
   );
}
