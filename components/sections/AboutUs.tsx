import { ArrowRight } from "lucide-react";
import Image from "next/image";

const STATS = [
  { value: "500+", label: "Businesses Served" },
  { value: "£500k", label: "Max Turnover Focus" },
  { value: "CIMA", label: "Regulated & Certified" },
  { value: "1-to-1", label: "Personal Accountant" },
];

export default function AboutUs() {
  return (
    <section
      id="about-us"
      className="w-full bg-white py-16 md:py-24"
      aria-label="About Sterling & Oak"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="accent-line" aria-hidden="true" />
              <span className="text-[#8A9AAB] text-xs font-semibold tracking-[0.18em] uppercase">
                Who We Are
              </span>
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1B3D] leading-tight tracking-tight mb-6"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              London&apos;s Trusted
              <br />
              Accounting Partner
            </h2>

            <div className="w-10 h-px bg-gray-200 mb-6" aria-hidden="true" />

            <p className="text-[#4B5563] text-base leading-[1.85] mb-5">
              We don&apos;t compete on price — we compete on reliability and personal
              service. Founded in London, Sterling &amp; Oak provides dedicated tax,
              bookkeeping, and self-assessment services exclusively to sole traders
              and limited companies turning over under £500k.
            </p>
            <p className="text-[#4B5563] text-base leading-[1.85] mb-10">
              You&apos;re never just a number. You&apos;re assigned a single, dedicated
              accountant who knows your business by name and is always reachable.
            </p>

            <div className="grid grid-cols-2 gap-5 mb-10 p-6 bg-[#f7f8fa] rounded-2xl">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <p
                    className="text-2xl font-bold text-[#0B1B3D] leading-none"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-[#8A9AAB] text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <a
              href="#services"
              className="inline-flex items-center gap-2 text-[#0B1B3D] font-semibold text-sm border-b-2 border-[#0B1B3D]/20 pb-0.5 hover:border-[#0B1B3D] transition-colors duration-200 group"
            >
              Explore Our Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
            </a>
          </div>

          <div className="relative">
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-[#dde3ea] shadow-2xl shadow-[#0B1B3D]/8">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80&auto=format&fit=crop"
                alt="Sterling & Oak accountants in a professional London office"
                width={800}
                height={1000}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3D]/20 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-7 -left-7 bg-[#0B1B3D] text-white rounded-2xl p-6 max-w-[230px] shadow-xl">
              <svg className="w-5 h-5 text-white/30 mb-2.5" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H7c0-1.7 1.3-3 3-3V8zm18 0c-3.3 0-6 2.7-6 6v10h10V14h-7c0-1.7 1.3-3 3-3V8z" />
              </svg>
              <p className="text-sm leading-relaxed text-white/85 font-light">
                &ldquo;One accountant, always yours — who knows your business by name.&rdquo;
              </p>
            </div>

            <div
              className="absolute -top-5 -right-5 w-32 h-32 rounded-2xl border-2 border-[#8A9AAB]/20 -z-10"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
