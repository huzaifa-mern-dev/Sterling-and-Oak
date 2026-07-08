"use client";

import { useState } from "react";
import { Check } from "lucide-react";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const PLANS = [
    {
      name: "Starter Plan",
      price: isYearly ? "60" : "75",
      period: "/month",
      audience: "For sole traders (< £90K)",
      buttonLabel: "Get Started",
      buttonStyle: "ghost",
      highlighted: false,
      features: [
        "Dedicated accountant",
        "Free QuickBooks/Xero",
        "Self-Assessment tax return",
        "Quarterly VAT returns",
        "Monthly bookkeeping (up to 50)",
        "HMRC filing",
        "Email & phone support",
      ],
    },
    {
      name: "Growth Plan",
      badge: "🔥 Popular",
      price: isYearly ? "120" : "150",
      period: "/month",
      audience: "For medium SMEs (£90K-£200K)",
      buttonLabel: "Get Started",
      buttonStyle: "solid",
      highlighted: true,
      features: [
        "All Starter features",
        "Monthly management accounts",
        "Companies House annual accounts & CT600",
        "Dedicated relationship manager",
        "Payroll (up to 5)",
        "CIS management",
        "Unlimited advisory calls",
      ],
    },
    {
      name: "Enterprise Plan",
      price: isYearly ? "240" : "300",
      period: "/month",
      audience: "For larger SMEs (> £250K)",
      buttonLabel: "Request A Quote",
      buttonStyle: "ghost",
      highlighted: false,
      features: [
        "All Growth features",
        "Weekly bookkeeping",
        "Advanced management reporting",
        "Tax planning sessions",
        "VAT health checks",
        "Payroll (up to 10)",
        "Fundraising support",
      ],
    },
  ];

  return (
    <section className="w-full bg-[#f7f8fa] py-16 md:py-24 border-t border-gray-100" aria-label="Pricing Packages">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-2xl mx-auto flex flex-col items-center text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1B3D] leading-tight tracking-tight mb-8 font-heading">
            Our Accounting Packages
          </h2>

          <div className="flex items-center p-1 bg-gray-200/60 rounded-full">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                !isYearly ? "bg-[#0B1B3D] text-white shadow-md" : "text-[#4B5563] hover:text-[#0B1B3D]"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                isYearly ? "bg-[#0B1B3D] text-white shadow-md" : "text-[#4B5563] hover:text-[#0B1B3D]"
              }`}
            >
              Yearly <span className="text-emerald-500 ml-1">(Save 20%)</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col bg-white rounded-2xl p-8 transition-all duration-300 ${
                plan.highlighted 
                  ? "border-2 border-[#0B1B3D] shadow-[0_8px_30px_rgb(0,0,0,0.12)] scale-100 lg:scale-105 z-10" 
                  : "border border-gray-200 shadow-sm hover:shadow-md"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0B1B3D] text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">
                  {plan.badge}
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-[#0B1B3D] font-heading mb-1">{plan.name}</h3>
                <p className="text-sm text-[#8A9AAB]">{plan.audience}</p>
              </div>

              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-[#0B1B3D] font-heading">£{plan.price}</span>
                <span className="text-[#8A9AAB] text-sm font-medium">{plan.period}</span>
              </div>

              <button
                className={`w-full py-3.5 rounded-xl text-sm font-semibold mb-8 transition-all duration-300 ${
                  plan.buttonStyle === "solid"
                    ? "bg-[#0B1B3D] text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95"
                    : "bg-gray-50 text-[#0B1B3D] border border-gray-200 hover:border-[#0B1B3D]/30 hover:bg-gray-100 active:scale-95"
                }`}
              >
                {plan.buttonLabel}
              </button>

              <ul className="space-y-4 flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#0B1B3D] shrink-0" />
                    <span className="text-sm text-[#4B5563] leading-snug font-sans">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
