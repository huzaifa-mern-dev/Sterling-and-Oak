"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    id: "james-t",
    quote:
      "Sterling & Oak completely removed my tax season stress. Having a dedicated accountant who actually answers the phone is a game-changer for my consultancy.",
    name: "James T.",
    role: "Sole Trader, IT Consultant",
    initials: "JT",
  },
  {
    id: "sarah-m",
    quote:
      "Professional, extremely responsive, and transparent with their fees. They handle everything for our limited company so we can focus on growth.",
    name: "Sarah M.",
    role: "E-commerce Director",
    initials: "SM",
  },
  {
    id: "david-k",
    quote:
      "Switched from a big firm after 5 years and wish I had done it sooner. The personal touch and fixed pricing is exactly what a growing business needs.",
    name: "David K.",
    role: "Limited Company, Property",
    initials: "DK",
  },
];

function StarRow() {
  return (
    <div className="flex gap-1 mb-6 relative z-10" aria-label="5 stars">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-current text-yellow-400" aria-hidden="true" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const count = TESTIMONIALS.length;

  const prev = () => setActive((a) => (a - 1 + count) % count);
  const next = () => setActive((a) => (a + 1) % count);

  const current = TESTIMONIALS[active];

  return (
    <section
      id="testimonials"
      className="w-full bg-[#f7f8fa] py-16 md:py-24 border-t border-gray-100"
      aria-label="Client testimonials"
    >
      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#8A9AAB]" aria-hidden="true" />
            <span className="text-[#8A9AAB] text-xs font-semibold tracking-[0.18em] uppercase">Client Stories</span>
            <div className="w-8 h-px bg-[#8A9AAB]" aria-hidden="true" />
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#0B1B3D] tracking-tight"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Trusted by London&apos;s Small Businesses
          </h2>
        </div>

        <div
          className="relative bg-white border border-gray-100 rounded-2xl p-8 lg:p-12 shadow-sm transition-all duration-300 overflow-hidden"
          role="region"
          aria-live="polite"
          aria-label={`Testimonial ${active + 1} of ${count}`}
        >
          <Quote className="absolute top-8 right-8 w-32 h-32 text-gray-100 opacity-50 -z-0" aria-hidden="true" />
          
          <StarRow />

          <blockquote className="mb-8 relative z-10">
            <p
              className="text-[#111827] text-xl lg:text-2xl leading-[1.75] italic font-light"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              &ldquo;{current.quote}&rdquo;
            </p>
          </blockquote>

          <footer className="flex items-center gap-4 relative z-10">
            <div className="w-12 h-12 rounded-full bg-[#0B1B3D] flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xs font-bold tracking-wide">{current.initials}</span>
            </div>
            <div>
              <p className="font-semibold text-[#0B1B3D] text-sm" style={{ fontFamily: "var(--font-outfit)" }}>
                {current.name}
              </p>
              <p className="text-[#8A9AAB] text-xs mt-0.5">{current.role}</p>
            </div>
          </footer>

          <div className="hidden md:flex absolute bottom-8 right-8 lg:bottom-12 lg:right-12 gap-3 z-10">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-[#4B5563] hover:text-[#0B1B3D] hover:bg-gray-50 hover:border-[#0B1B3D]/40 hover:-translate-y-0.5 transition-all duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-[#4B5563] hover:text-[#0B1B3D] hover:bg-gray-50 hover:border-[#0B1B3D]/40 hover:-translate-y-0.5 transition-all duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="flex md:hidden justify-center gap-4 mt-8 relative z-10">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-[#4B5563] hover:text-[#0B1B3D] hover:bg-gray-50 hover:border-[#0B1B3D]/40 active:bg-gray-50 transition-all duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-[#4B5563] hover:text-[#0B1B3D] hover:bg-gray-50 hover:border-[#0B1B3D]/40 active:bg-gray-50 transition-all duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-6" role="tablist" aria-label="Testimonial navigation">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === active}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active ? "w-6 bg-[#0B1B3D]" : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        <div className="flex items-center justify-center gap-3 mt-8">
          <div className="flex gap-0.5" aria-hidden="true">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <p className="text-[#4B5563] text-sm">
            <span className="font-semibold text-[#0B1B3D]">4.9 / 5</span> based on 200+ Google Reviews
          </p>
        </div>
      </div>
    </section>
  );
}
