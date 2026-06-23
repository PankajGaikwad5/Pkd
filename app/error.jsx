'use client';
export default function Error() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-[#D6CBBC] text-[#332820]">
      <div className="text-center">
        <h2 className="text-4xl font-light mb-4 tracking-widest uppercase">500</h2>
        <p className="tracking-wide">Something went wrong.</p>
      </div>
    </div>
  );
}