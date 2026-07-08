import { ArrowRight, Briefcase, Landmark, UserCheck, ShieldCheck, CreditCard, Cloud, CheckCircle } from "lucide-react";

const SERVICES = [
  {
    id: "sole-traders",
    icon: Briefcase,
    title: "For Sole Traders",
    description:
      "Comprehensive tax, bookkeeping, and self-assessment services designed to keep you compliant and stress-free.",
    highlights: [
      "Self-Assessment Tax Returns",
      "VAT Registration & Returns",
      "Bookkeeping & Expenses",
      "HMRC Correspondence",
    ],
    cta: "Explore Sole Trader Services",
    href: "#sole-traders",
  },
  {
    id: "limited-companies",
    icon: Landmark,
    title: "For Limited Companies",
    description:
      "End-to-end accounting for businesses turning over under £500k — from corporation tax to payroll.",
    highlights: [
      "Corporation Tax Returns",
      "Annual Accounts Filing",
      "Payroll & Auto-Enrolment",
      "Directors' Tax Planning",
    ],
    cta: "Explore Company Services",
    href: "#limited-companies",
  },
];

const DIFFERENTIATORS = [
  { icon: UserCheck, title: "One Accountant. Always.", body: "You are never passed around a helpdesk. Your dedicated accountant is always reachable." },
  { icon: ShieldCheck, title: "CIMA Regulated", body: "Large-firm standards with the personal attention of an independent practice." },
  { icon: CreditCard, title: "Fixed Pricing", body: "Everything agreed upfront. No hourly billing. No unexpected invoices. Ever." },
  { icon: Cloud, title: "Cloud Software Included", body: "Xero or QuickBooks included at no extra charge, set up and managed for you." },
];

export default function Services() {
  return (
    <section
      id="services"
      className="w-full bg-[#f7f8fa] py-16 md:py-24"
      aria-label="Our services"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-2xl mx-auto flex flex-col items-center text-center mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#8A9AAB]" aria-hidden="true" />
            <span className="text-[#8A9AAB] text-xs font-semibold tracking-[0.18em] uppercase font-sans">
              What We Do
            </span>
            <div className="w-8 h-px bg-[#8A9AAB]" aria-hidden="true" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1B3D] leading-tight tracking-tight mb-4 font-heading">
            Tailored Accounting Services
          </h2>
          <p className="text-[#4B5563] text-base leading-relaxed font-sans">
            We specialise in supporting small businesses with straightforward,
            reliable financial management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {SERVICES.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.id}
                id={`service-card-${svc.id}`}
                className="group relative flex flex-col bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105 flex-shrink-0">
                  <Icon className="w-6 h-6 text-[#0B1B3D]" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-[#0B1B3D] mb-3 font-heading">
                  {svc.title}
                </h3>
                <p className="text-[#4B5563] text-sm leading-relaxed mb-5 font-sans">
                  {svc.description}
                </p>
                <ul className="space-y-3 mb-7 flex-1">
                  {svc.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-[#4B5563] font-sans">
                      <CheckCircle className="w-4 h-4 text-[#0B1B3D] mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={svc.href}
                  id={`service-cta-${svc.id}`}
                  className="inline-flex items-center gap-2 text-[#0B1B3D] font-semibold text-sm border-b border-[#0B1B3D]/20 pb-0.5 w-fit hover:border-[#0B1B3D] transition-colors duration-200 group/link"
                >
                  {svc.cta}
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform duration-200" aria-hidden="true" />
                </a>
              </div>
            );
          })}
        </div>

        <div className="bg-[#0B1B3D] rounded-2xl p-8 lg:p-12">
          <div className="max-w-2xl mx-auto flex flex-col items-center text-center mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-px bg-white/30" aria-hidden="true" />
              <span className="text-white/50 text-xs font-semibold tracking-[0.18em] uppercase font-sans">Our Difference</span>
              <div className="w-10 h-px bg-white/30" aria-hidden="true" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug font-heading">
              Why London Businesses Choose Us
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-px bg-white/10 rounded-xl overflow-hidden">
            {DIFFERENTIATORS.map((pt) => {
              const Icon = pt.icon;
              return (
                <div key={pt.title} className="bg-[#0B1B3D] p-7 group hover:bg-white/[0.04] transition-colors duration-300">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-105">
                    <Icon className="w-5 h-5 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2" style={{ fontFamily: "var(--font-outfit)" }}>
                    {pt.title}
                  </h3>
                  <p className="text-white/55 text-sm leading-relaxed">{pt.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
