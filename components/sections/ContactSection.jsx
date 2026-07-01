'use client';
import { useState } from 'react';
import { motion } from 'motion/react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
    agreeSms: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) {
      alert('Please fill out all required fields.');
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      alert('Thank you for your message! We will be in touch shortly.');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        message: '',
        agreeSms: false,
      });
      setSubmitted(false);
    }, 1000);
  };

  return (
    <section className="w-full min-h-screen bg-[#332820] text-[#D6CBBC] pt-32 pb-24 px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_1.4fr] gap-12 lg:gap-20 items-start">

        {/* Left Column */}
        <div className="flex flex-col justify-between h-auto py-2">
          <div>
            {/* Title */}
            <div className="overflow-hidden pb-1 mb-8 lg:mb-12">
              <motion.h2
                initial={{ clipPath: "inset(100% 0 0 0)", y: 40 }}
                whileInView={{ clipPath: "inset(0% 0 0 0)", y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1], delay: 0.15 }}
                className="font-heading text-5xl sm:text-6xl lg:text-[4rem] xl:text-[4.6rem] tracking-tight leading-[1.0] uppercase font-light text-[#D6CBBC]"
              >
                LET&apos;S
                <br />
                WORK
                <br />
                TOGETHER
              </motion.h2>
            </div>

            {/* Paragraph Description */}
            <div className="flex items-center justify-between gap-8 max-w-md border-t border-[#D6CBBC]/10 pt-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="font-sans text-xs md:text-sm tracking-[0.15em] leading-relaxed text-[#D6CBBC]/85 uppercase"
              >
                INTERESTED IN WORKING TOGETHER? FILL OUT SOME INFO AND WE WILL BE IN TOUCH SHORTLY! WE CAN&apos;T WAIT TO HEAR FROM YOU!
              </motion.p>

            </div>
          </div>
        </div>

        {/* Right Column (Form) */}
        <div className="w-full max-w-xl">
          <form onSubmit={handleSubmit} className="flex flex-col gap-10 md:gap-12">

            {/* Full Name */}
            <div className="flex flex-col">
              <label htmlFor="fullName" className="text-[10px] tracking-[0.2em] font-medium text-[#D6CBBC]/65 uppercase mb-2">
                FULL NAME <span className="text-red-500 ml-1 font-sans">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-[#D6CBBC]/30 focus:border-[#D6CBBC] text-[#D6CBBC] focus:outline-none py-2 text-sm transition-colors duration-300"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label htmlFor="email" className="text-[10px] tracking-[0.2em] font-medium text-[#D6CBBC]/65 uppercase mb-2">
                EMAIL <span className="text-red-500 ml-1 font-sans">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-[#D6CBBC]/30 focus:border-[#D6CBBC] text-[#D6CBBC] focus:outline-none py-2 text-sm transition-colors duration-300"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col">
              <label htmlFor="phone" className="text-[10px] tracking-[0.2em] font-medium text-[#D6CBBC]/65 uppercase mb-2">
                PHONE <span className="text-red-500 ml-1 font-sans">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-[#D6CBBC]/30 focus:border-[#D6CBBC] text-[#D6CBBC] focus:outline-none py-2 text-sm transition-colors duration-300"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label htmlFor="message" className="text-[10px] tracking-[0.2em] font-medium text-[#D6CBBC]/65 uppercase mb-2">
                MESSAGE
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-transparent border-b border-[#D6CBBC]/30 focus:border-[#D6CBBC] text-[#D6CBBC] focus:outline-none py-2 text-sm transition-colors duration-300 resize-none"
              />
            </div>

            {/* Checkbox & Button Wrapper */}
            <div className="flex flex-col gap-6 mt-2">
              <label className="flex items-center gap-3 cursor-pointer select-none text-[11px] tracking-widest text-[#D6CBBC]/80 font-sans leading-tight">
                <input
                  type="checkbox"
                  name="agreeSms"
                  checked={formData.agreeSms}
                  onChange={handleChange}
                  className="rounded border-[#D6CBBC]/30 bg-transparent text-[#332820] focus:ring-0 focus:ring-offset-0 size-4 cursor-pointer"
                />
                <span>Yes, I agree to receive SMS updates from Arcca Group.</span>
              </label>

              <button
                type="submit"
                disabled={submitted}
                className="px-8 py-3 bg-[#D6CBBC] text-[#332820] hover:bg-white active:scale-[0.98] transition-all duration-300 rounded-full text-xs font-semibold uppercase tracking-[0.2em] border border-[#D6CBBC] w-max cursor-pointer mt-4"
              >
                {submitted ? 'SENDING...' : 'SUBMIT MESSAGE'}
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}
