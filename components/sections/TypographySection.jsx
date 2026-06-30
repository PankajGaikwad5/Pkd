import { FadeIn } from '../Animations';
import Link from 'next/link';

export default function TypographySection() {
   return (
      <section className="w-full py-20 md:py-28 px-5 md:px-14 lg:px-20 flex items-center justify-center overflow-hidden min-h-[85vh]">
         <div className="max-w-[1400px] w-full relative">

            {/* Left paragraph text */}
            <FadeIn delay={0.1}>
               <p className="text-[13px] max-w-[220px] mb-10 md:mb-0 md:absolute md:top-0 md:left-0 z-10 text-center mx-auto md:text-left md:mx-0">
                  At PKD Studio, every project is
                  conceived as a creation
                  that transcends architecture a
                  space designed to{' '}
                  <strong>elevate everyday life</strong> through:
                  <br /><br />
                  luxury, exceptional craftsmanship,
                  and thoughtful design.
               </p>
            </FadeIn>

            {/* Big typography */}
            <div className="font-heading w-full">

               {/* Line 1: INSPIRED + dining image — centered on mobile, right aligned on desktop */}
               <FadeIn delay={0.2}>
                  <div className="flex items-end justify-center md:justify-end text-4xl sm:text-7xl lg:text-[9.25rem] leading-none tracking-tighter">
                     <span>INSPIRED</span>
                     <img
                        src="/sections/inspired1.webp"
                        alt="Luxury dining room"
                        className="w-14 h-10 sm:w-28 sm:h-20 lg:w-64 lg:h-40 object-cover ml-2 md:ml-3 rounded-sm flex-shrink-0"
                     />
                     {/* <img
                        src="/images/typography_dining.png"
                        alt="Luxury dining room"
                        className="w-14 h-10 sm:w-28 sm:h-20 lg:w-64 lg:h-40 object-cover ml-2 md:ml-3 rounded-sm flex-shrink-0"
                     /> */}
                  </div>
               </FadeIn>

               {/* Line 2: DESIGN + living image + BY — centered */}
               <FadeIn delay={0.4}>
                  <div className="flex items-center justify-center text-4xl sm:text-7xl lg:text-[9.25rem] leading-none tracking-tighter mt-1 md:mt-2">
                     <span>DESIGN</span>
                     <img
                        src="/sections/inspired2.webp"
                        alt="Luxury living room"
                        className="w-8 h-8 sm:w-16 sm:h-16 lg:w-30 lg:h-30 object-cover mx-1.5 md:mx-2 rounded-sm flex-shrink-0"
                     />
                     {/* <img
                        src="/images/typography_living.png"
                        alt="Luxury living room"
                        className="w-8 h-8 sm:w-16 sm:h-16 lg:w-30 lg:h-30 object-cover mx-1.5 md:mx-2 rounded-sm flex-shrink-0"
                     /> */}
                     <span>BY</span>
                  </div>
               </FadeIn>

               {/* Line 3: ARCCA® + TALK TO US button — centered */}
               <FadeIn delay={0.6}>
                  <div className="flex items-end justify-center text-4xl sm:text-7xl lg:text-[9.25rem] leading-none tracking-tighter mt-1 md:mt-2">
                     <div className="flex items-start">
                        <span>PKD STUDIO</span>
                     </div>
                     <Link href="/contact" className="inline-block px-10 py-[14px] w-max bg-[#352D26] text-[#E6DFD4] rounded-[50px] text-[11px] font-medium uppercase tracking-[0.2em] hover:bg-[#201b17] transition-colors text-center">
                        Talk to us
                     </Link>
                  </div>
               </FadeIn>
            </div>
         </div>
      </section>
   );
}
