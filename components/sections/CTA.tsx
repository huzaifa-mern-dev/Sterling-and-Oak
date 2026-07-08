"use client";

import { Phone, Mail, Star } from "lucide-react";

interface CTAProps {
  onOpenModal: () => void;
}

export default function CTA({ onOpenModal }: CTAProps) {
  return (
    <section
      id="contact"
      className="w-full bg-[#0B1B3D] py-16 md:py-28 relative overflow-hidden"
      aria-label="Book a consultation"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/[0.05]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-white/[0.03]" />
      </div>

      <div className="relative max-w-3xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
        <div className="flex justify-center gap-1 mb-8" aria-hidden="true">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
          ))}
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-tight tracking-tight mb-6 font-heading">
          Ready for
          <br />
          Peace of Mind?
        </h2>

        <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-xl mx-auto font-sans">
          Join the London businesses that trust Sterling &amp; Oak with their
          finances. Your dedicated accountant is ready to start.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onOpenModal}
            id="cta-book-btn"
            className="inline-flex items-center justify-center gap-2.5 bg-white text-[#0B1B3D] font-bold px-10 py-4 rounded-xl text-base hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:-translate-y-0.5 active:scale-95 transition-all duration-300 font-sans"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            Book Your Free Consultation
          </button>

          <a
            href="mailto:hello@sterlingandoak.co.uk"
            id="cta-email-btn"
            className="inline-flex items-center justify-center gap-2.5 border border-white/25 text-white font-semibold px-10 py-4 rounded-xl hover:bg-white/10 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 text-base"
          >
            <Mail className="w-4 h-4" aria-hidden="true" />
            Send an Email
          </a>
        </div>

        <p className="text-white/30 text-sm mt-8 tracking-wide">
          CIMA Regulated &nbsp;·&nbsp; Fixed Fees &nbsp;·&nbsp; No Commitment Required
        </p>
      </div>
    </section>
  );
}
