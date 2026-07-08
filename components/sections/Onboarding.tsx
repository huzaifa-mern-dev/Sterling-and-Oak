"use client";

import { ArrowRight, CalendarCheck, FileText, RefreshCw } from "lucide-react";

const STEPS = [
  {
    num: "01",
    icon: CalendarCheck,
    title: "Book a Free Call",
    desc: "Tell us about your business and current setup. Zero commitment — just a friendly conversation.",
  },
  {
    num: "02",
    icon: FileText,
    title: "Transparent Proposal",
    desc: "Receive a written proposal with a clear, fixed monthly fee. Sign digitally in minutes.",
  },
  {
    num: "03",
    icon: RefreshCw,
    title: "We Handle the Switch",
    desc: "We contact your previous accountant and migrate your data. You do absolutely nothing.",
  },
];

interface OnboardingProps {
  onOpenModal: () => void;
}

export default function Onboarding({ onOpenModal }: OnboardingProps) {
  return (
    <section
      id="get-started"
      className="w-full bg-white py-16 md:py-24 border-t border-gray-100"
      aria-label="How to get started"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-2xl mx-auto flex flex-col items-center text-center mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#8A9AAB]" aria-hidden="true" />
            <span className="text-[#8A9AAB] text-xs font-semibold tracking-[0.18em] uppercase font-sans">
              Getting Started
            </span>
            <div className="w-8 h-px bg-[#8A9AAB]" aria-hidden="true" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1B3D] leading-tight tracking-tight mb-4 font-heading">
            Switching is Seamless
          </h2>
          <p className="text-[#4B5563] text-base leading-relaxed font-sans">
            We handle the entire transition from your previous accountant,
            including HMRC authorisation.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 relative max-w-5xl mx-auto mt-16">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            const isLast = idx === STEPS.length - 1;
            return (
              <div
                key={step.num}
                id={`step-${step.num}`}
                className="flex flex-row md:flex-col items-start md:items-center relative w-full group"
              >
                {!isLast && (
                  <>
                    <div className="absolute top-16 bottom-[-32px] left-8 w-[2px] bg-gray-200 md:hidden" />
                    <div className="hidden md:block absolute top-8 left-[50%] w-full h-[2px] bg-gray-200" />
                  </>
                )}

                <div className="flex flex-col items-center mr-6 md:mr-0 md:mb-6 relative z-10 shrink-0">
                  <div className="w-16 h-16 rounded-full bg-[#0B1B3D] text-white flex items-center justify-center shadow-md">
                    <Icon className="w-7 h-7 text-white" aria-hidden="true" />
                  </div>
                </div>

                <div className="flex flex-col text-left md:text-center pt-2 md:pt-0 pb-10 md:pb-0">
                  <p className="text-sm font-bold text-[#8A9AAB] uppercase tracking-wider mb-2">
                    Step {step.num}
                  </p>
                  <h3 className="text-xl font-heading font-bold text-[#0B1B3D] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 font-sans text-sm md:text-base leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-12 md:mt-16">
          <button
            onClick={onOpenModal}
            id="onboarding-cta"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-[#0B1B3D] text-white font-semibold px-9 py-4 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95 transition-all duration-300 text-base"
          >
            Book a Free Consultation
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
