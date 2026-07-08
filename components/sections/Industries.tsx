import { Laptop, ShoppingCart, Home } from "lucide-react";

const INDUSTRIES = [
  {
    icon: Laptop,
    title: "Freelancers & Consultants",
    desc: "Streamlined tax advice and bookkeeping for independent professionals working in IT, design, and consulting.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce & Retail",
    desc: "Specialist support for online sellers, managing high-volume transactions, inventory accounting, and VAT across borders.",
  },
  {
    icon: Home,
    title: "Property & Landlords",
    desc: "Expert guidance on capital gains, property tax structuring, and compliance for buy-to-let investors and landlords.",
  },
];

export default function Industries() {
  return (
    <section className="w-full bg-white py-16 md:py-24" aria-label="Specialist Industries">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#8A9AAB]" aria-hidden="true" />
            <span className="text-[#8A9AAB] text-xs font-semibold tracking-[0.18em] uppercase font-sans">
              Specialist Sectors
            </span>
            <div className="w-8 h-px bg-[#8A9AAB]" aria-hidden="true" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1B3D] tracking-tight font-heading mb-4">
            Who We Support
          </h2>
          <p className="text-[#4B5563] text-base leading-relaxed font-sans">
            While we support a diverse range of clients, our expertise runs deepest in these key London sectors.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {INDUSTRIES.map((industry) => {
            const Icon = industry.icon;
            return (
              <div 
                key={industry.title}
                className="flex flex-col items-center text-center p-8 bg-white border border-gray-100 rounded-xl hover:border-gray-200 hover:shadow-sm transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-[#0B1B3D]" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-[#0B1B3D] mb-3 font-heading">
                  {industry.title}
                </h3>
                <p className="text-[#4B5563] text-sm leading-relaxed font-sans">
                  {industry.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
