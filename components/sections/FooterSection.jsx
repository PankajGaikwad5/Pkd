import { FadeIn } from '../Animations';

export default function FooterSection() {
  return (
    <footer className="w-full bg-[#2E2824] text-[#E6DFD4] py-24 px-12 md:px-24 flex flex-col md:flex-row gap-20 items-stretch">
      <div className="md:w-1/2 flex flex-col justify-between">
        <nav className="flex flex-col gap-6 text-4xl lg:text-5xl font-light">
           <FadeIn delay={0.1}><a href="#" className="hover:opacity-70 transition-opacity">ABOUT US</a></FadeIn>
           <FadeIn delay={0.2}><a href="#" className="hover:opacity-70 transition-opacity">VISION</a></FadeIn>
           <FadeIn delay={0.3}><a href="#" className="hover:opacity-70 transition-opacity">TEAM</a></FadeIn>
           <FadeIn delay={0.4}><a href="#" className="hover:opacity-70 transition-opacity">SERVICES</a></FadeIn>
           <FadeIn delay={0.5}><a href="#" className="hover:opacity-70 transition-opacity">PROJECTS</a></FadeIn>
           <FadeIn delay={0.6}><a href="#" className="hover:opacity-70 transition-opacity">CONTACT</a></FadeIn>
        </nav>
      </div>

      <div className="md:w-1/2 flex flex-col justify-between pt-4 relative">
         <FadeIn delay={0.4} className="absolute right-0 -top-8 -mt-20 opacity-90 hidden lg:block pointer-events-none w-full max-w-2xl blur-[14px]">
            {/* The blurry huge text behind */}
             <h2 className="font-heading text-[12rem] tracking-[0.2em] leading-none whitespace-nowrap overflow-hidden">
                ARCCA
             </h2>
         </FadeIn>

         <FadeIn delay={0.4} className="absolute right-0 -top-8 -mt-20 opacity-90 hidden lg:block pointer-events-none">
             <h2 className="font-heading text-[8rem] tracking-[0.2em] leading-none">
                ARCCA
             </h2>
         </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 font-sans text-xs tracking-widest uppercase opacity-80 mt-auto pt-24 z-10 relative">
          <FadeIn delay={0.7}>
            <p className="mb-4 text-[#E6DFD4]/50">Address</p>
            <p className="leading-relaxed normal-case">194 Isla Dorada Blvd,<br/>Coral Gables, FL, 33143</p>
          </FadeIn>

          <FadeIn delay={0.8}>
            <p className="mb-4 text-[#E6DFD4]/50">Email</p>
            <p className="normal-case">info@arccagroup.us</p>
          </FadeIn>

          <FadeIn delay={0.9}>
            <p className="mb-4 text-[#E6DFD4]/50">Phone</p>
            <p>786 901 1622</p>
            <p className="mt-8 mb-4 text-[#E6DFD4]/50 normal-case tracking-normal">Monday to Friday:<br/>9:00 AM - 6:00 PM</p>
          </FadeIn>

          <FadeIn delay={1.0}>
             <p className="mb-4 text-[#E6DFD4]/50">Follow Us</p>
             <ul className="space-y-2 normal-case">
               <li><a href="#" className="hover:underline">Instagram</a></li>
               <li><a href="#" className="hover:underline">Facebook</a></li>
               <li><a href="#" className="hover:underline">LinkedIn</a></li>
             </ul>

             <div className="mt-12 space-y-2 normal-case opacity-70 border-t border-white/20 pt-4">
                <a href="#" className="block hover:underline">Terms & Conditions</a>
                <a href="#" className="block hover:underline">Privacy Policy</a>
                <a href="#" className="block hover:underline">Accessibility Policy</a>
             </div>
          </FadeIn>
        </div>
      </div>
    </footer>
  );
}
