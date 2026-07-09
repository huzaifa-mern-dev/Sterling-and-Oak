"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, Menu, X, ChevronDown } from "lucide-react";

interface NavbarProps {
  onOpenModal: () => void;
}

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "#about-us" },
  { 
    label: "Services", 
    href: "#services",
    dropdown: [
      { label: "Accounting for Sole Traders", href: "#sole-traders" },
      { label: "Accounting for Limited Companies", href: "#limited-companies" },
      { label: "Tax Planning", href: "#tax-planning" },
      { label: "Bookkeeping", href: "#bookkeeping" },
    ]
  },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ onOpenModal }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 nav-blur border-b border-gray-100/80">
      <div className="max-w-7xl mx-auto px-5 py-3 sm:px-8 lg:px-12">
        <nav className="flex items-center justify-between h-16" aria-label="Main navigation">
          <a href="/" className="flex items-center group" aria-label="Sterling & Oak — Home">
            <Image 
              src="/logo.png" 
              alt="Sterling & Oak Logo" 
              width={180}
              height={60}
              priority
              className="w-[180px] h-[60px] object-contain transition-transform duration-300 group-hover:scale-105" 
            />
          </a>

          <ul className="hidden lg:flex items-center gap-1" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.label} className={link.dropdown ? "relative group/dropdown" : ""}>
                <a
                  href={link.href}
                  className="relative px-4 py-2 text-sm text-[#4B5563] font-medium hover:text-[#0B1B3D] transition-colors duration-200 rounded-lg hover:bg-gray-50 flex items-center gap-1 font-sans group/link"
                >
                  {link.label}
                  {link.dropdown && <ChevronDown className="w-3.5 h-3.5 group-hover/dropdown:rotate-180 transition-transform duration-200" aria-hidden="true" />}
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#0B1B3D] rounded-full transition-all duration-300 group-hover/link:w-4" />
                </a>
                
                {link.dropdown && (
                  <div className="absolute top-full left-0 w-64 pt-2 opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible transition-all duration-300 transform translate-y-2 group-hover/dropdown:translate-y-0">
                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-2 flex flex-col">
                      {link.dropdown.map((subItem) => (
                        <a 
                          key={subItem.label} 
                          href={subItem.href}
                          className="px-4 py-2.5 text-sm text-[#4B5563] hover:text-[#0B1B3D] hover:bg-gray-50 rounded-lg transition-colors duration-150 font-sans"
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenModal}
              id="nav-cta-btn"
              className="inline-flex items-center gap-2 bg-[#0B1B3D] text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95 transition-all duration-300 whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5" aria-hidden="true" />
              Book Free Consultation
            </button>
          </div>

          <button
            id="mobile-menu-btn"
            className="lg:hidden p-2 rounded-lg text-[#4B5563] hover:text-[#0B1B3D] hover:bg-gray-50 transition-colors duration-200"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
          </button>
        </nav>

        {menuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4 animate-fade-up">
            <ul className="space-y-1" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  {!link.dropdown ? (
                    <a
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="block px-4 py-2.5 text-sm text-[#4B5563] font-medium rounded-lg hover:bg-gray-50 hover:text-[#0B1B3D] transition-colors duration-150"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <details className="group">
                      <summary className="flex items-center justify-between px-4 py-2.5 text-sm text-[#4B5563] font-medium rounded-lg hover:bg-gray-50 hover:text-[#0B1B3D] cursor-pointer list-none">
                        {link.label}
                        <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" aria-hidden="true" />
                      </summary>
                      <div className="pl-4 pr-2 pb-2">
                        {link.dropdown.map((sub) => (
                          <a
                            key={sub.label}
                            href={sub.href}
                            onClick={() => setMenuOpen(false)}
                            className="block px-4 py-2 text-sm text-[#4B5563] font-medium rounded-lg hover:bg-gray-50 hover:text-[#0B1B3D]"
                          >
                            {sub.label}
                          </a>
                        ))}
                      </div>
                    </details>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-4 px-4">
              <button
                onClick={() => { setMenuOpen(false); onOpenModal(); }}
                className="w-full flex items-center justify-center gap-2 bg-[#0B1B3D] text-white text-sm font-semibold px-5 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                Book Free Consultation
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
