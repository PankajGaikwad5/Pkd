import { FadeIn } from '../Animations';

export default function BlueprintSection() {
  return (
    <section className="relative w-full h-screen">
      <div className="absolute inset-0 overflow-hidden">
        <video src="https://www.pexels.com/download/video/8293312/" muted autoPlay loop className="w-full h-full object-cover opacity-80 mix-blend-multiply"></video>
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <FadeIn>
          <button className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition-all hover:scale-105 active:scale-95 text-white">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </FadeIn>
      </div>
    </section>
  );
}
