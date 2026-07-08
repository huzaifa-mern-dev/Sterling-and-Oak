"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const FAQS = [
  {
    id: "who",
    q: "Who do you work with?",
    a: "We exclusively support sole traders and limited companies with a turnover under £500k. This focus allows us to provide a deeply personalised, expert service to every client.",
  },
  {
    id: "hidden-fees",
    q: "Are there any hidden fees?",
    a: "None whatsoever. We operate on a fixed-fee model agreed upfront. You will never receive an unexpected bill or a retroactive hourly charge.",
  },
  {
    id: "location",
    q: "Do I need to be based in London?",
    a: "Our office is in London, but we operate a fully cloud-based practice and serve clients across the UK. Everything is handled digitally and securely.",
  },
  {
    id: "switch",
    q: "How do I switch from my current accountant?",
    a: "We handle the entire process — professional clearance, HMRC authorisation, and data migration. You do nothing except sign a single digital document.",
  },
  {
    id: "software",
    q: "What accounting software do you use?",
    a: "We work primarily with Xero and QuickBooks, both included at no extra cost. We set up your account, connect your bank feeds, and train you on the basics.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section
      id="faq"
      className="w-full bg-white py-16 md:py-24 border-t border-gray-100"
      aria-label="Frequently asked questions"
    >
      <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#8A9AAB]" aria-hidden="true" />
            <span className="text-[#8A9AAB] text-xs font-semibold tracking-[0.18em] uppercase">FAQ</span>
            <div className="w-8 h-px bg-[#8A9AAB]" aria-hidden="true" />
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#0B1B3D] tracking-tight"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Common Questions
          </h2>
        </div>

        <dl className="border-t border-gray-200">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                id={`faq-${faq.id}`}
                className={`border-b border-gray-200 transition-colors duration-200 ${isOpen ? "bg-gray-50" : "bg-white"}`}
              >
                <dt>
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="w-full flex items-center justify-between gap-4 px-4 py-5 text-left group focus:outline-none"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                  >
                    <span
                      className="font-semibold text-[#0B1B3D] text-lg leading-snug group-hover:text-[#0d2147] transition-colors duration-150 font-heading"
                    >
                      {faq.q}
                    </span>
                    <span className="flex-shrink-0 flex items-center justify-center">
                      <Plus
                        className={`w-5 h-5 text-[#0B1B3D] transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                        aria-hidden="true"
                      />
                    </span>
                  </button>
                </dt>
                <dd
                  id={`faq-answer-${faq.id}`}
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-4 pb-6 pt-1 text-[#4B5563] text-base leading-relaxed font-sans">
                    {faq.a}
                  </p>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
