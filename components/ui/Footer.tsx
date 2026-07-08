import { Star, Shield, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="w-full bg-gray-50 border-t border-gray-200"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-16 pb-8">
        {/* 4-col grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Col 1 — Brand */}
          <div className="lg:col-span-1">
            <a
              href="/"
              className="inline-flex items-center gap-2.5 mb-4 group"
              aria-label="Sterling & Oak home"
            >
              <div className="w-8 h-8 rounded-full bg-[#0B1B3D] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-[10px] font-bold tracking-wider leading-none">
                  S&amp;O
                </span>
              </div>
              <span 
                className="text-[#0B1B3D] font-semibold text-sm tracking-[0.12em] uppercase leading-none"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                Sterling &amp; Oak
              </span>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed max-w-[220px]">
              Reliable, responsive, and personal accounting for London&apos;s
              small businesses.
            </p>
            <div className="flex gap-1 mt-5" aria-label="4.9 stars on Google">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                  aria-hidden="true"
                />
              ))}
              <span className="text-gray-400 text-xs ml-1.5 self-center">
                4.9 / 5
              </span>
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h3 
              className="text-[#0B1B3D] font-semibold text-sm mb-5 tracking-wide"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Quick Links
            </h3>
            <ul className="space-y-3">
              {["Home", "About Us", "Services", "Insights", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-gray-500 text-sm hover:text-[#0B1B3D] transition-colors duration-150"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div>
            <h3 
              className="text-[#0B1B3D] font-semibold text-sm mb-5 tracking-wide"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Services
            </h3>
            <ul className="space-y-3">
              {[
                "Sole Traders",
                "Limited Companies",
                "Tax Planning",
                "Bookkeeping",
                "Payroll",
              ].map((svc) => (
                <li key={svc}>
                  <a
                    href="#services"
                    className="text-gray-500 text-sm hover:text-[#0B1B3D] transition-colors duration-150"
                  >
                    {svc}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h3 
              className="text-[#0B1B3D] font-semibold text-sm mb-5 tracking-wide"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2.5">
                <MapPin
                  className="w-4 h-4 text-[#8A9AAB] flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span className="text-gray-500 text-sm leading-snug">
                  20 Fenchurch Street,
                  <br />
                  London, EC3M 3BY
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone
                  className="w-4 h-4 text-[#8A9AAB] flex-shrink-0"
                  aria-hidden="true"
                />
                <a
                  href="tel:+442071234567"
                  className="text-gray-500 text-sm hover:text-[#0B1B3D] transition-colors duration-150"
                >
                  +44 (0) 207 123 4567
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail
                  className="w-4 h-4 text-[#8A9AAB] flex-shrink-0"
                  aria-hidden="true"
                />
                <a
                  href="mailto:hello@sterlingandoak.co.uk"
                  className="text-gray-500 text-sm hover:text-[#0B1B3D] transition-colors duration-150"
                >
                  hello@sterlingandoak.co.uk
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-xs text-center sm:text-left">
            &copy; {currentYear} Sterling &amp; Oak Accountancy Ltd. All rights
            reserved.
          </p>
          <p className="text-gray-400 text-xs flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-[#8A9AAB]" aria-hidden="true" />
            CIMA Regulated Firm
          </p>
        </div>
      </div>
    </footer>
  );
}
