"use client";

import { ArrowRight } from "lucide-react";

interface HeroProps {
  onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  return (
    <section
      id="home"
      className="relative w-full bg-white pt-16 overflow-hidden"
      aria-label="Hero"
    >
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#f7f8fa] hidden lg:block" aria-hidden="true" />
      <div className="absolute top-0 right-[49.8%] h-full w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent hidden lg:block" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-4rem)] py-14 lg:py-0">

          <div className="order-1 text-center lg:text-left flex flex-col items-center lg:items-start pt-4 lg:pt-0">
            <div className="inline-flex items-center gap-3 bg-[#0B1B3D]/5 border border-[#0B1B3D]/10 px-4 py-2 rounded-full mb-8 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
              <span className="text-sm font-semibold text-[#0B1B3D] tracking-wide">
                Welcome to Sterling & Oak
              </span>
            </div>

            <h1
              className="text-3xl leading-tight md:text-4xl lg:text-5xl font-bold text-[#0B1B3D] tracking-tight mb-6 animate-fade-up-delay-1"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Dedicated London{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Accountants</span>
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  height="6"
                  viewBox="0 0 200 6"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path d="M0 5 Q50 1 100 4 Q150 7 200 3" stroke="#8A9AAB" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </span>
              <br />
              for Growing Businesses.
            </h1>

            <p className="text-[#4B5563] text-lg leading-relaxed mb-8 max-w-lg animate-fade-up-delay-2">
              Reliable, responsive, and personal accounting for sole traders and
              limited companies across London. One accountant, always yours.
            </p>

            <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4 animate-fade-up-delay-3">
              <button
                onClick={onOpenModal}
                id="hero-primary-cta"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0B1B3D] text-white font-semibold px-8 py-4 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95 transition-all duration-300 text-base"
              >
                Book a Free Consultation
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
              <a
                href="#services"
                id="hero-secondary-cta"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-gray-200 text-[#0B1B3D] font-semibold px-8 py-4 rounded-xl hover:border-[#0B1B3D]/40 hover:bg-gray-50 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 text-base"
              >
                Our Services
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 mt-10 animate-fade-in">
              {[
                { value: "500+", label: "Clients Served" },
                { value: "4.9★", label: "Google Rating" },
                { value: "CIMA", label: "Regulated" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-lg font-bold text-[#0B1B3D]" style={{ fontFamily: "var(--font-outfit)" }}>
                    {stat.value}
                  </span>
                  <span className="text-xs text-[#8A9AAB]">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="order-2 animate-fade-in">
            <div className="relative w-full aspect-[1/1] lg:aspect-[3/4] max-h-[580px] rounded-2xl overflow-hidden bg-[#0B1B3D] shadow-2xl">
              <video src="/hero-video.mp4"loop playsInline controls className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
