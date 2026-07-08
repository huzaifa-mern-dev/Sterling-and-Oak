"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/mhuzaifa3737/project-consultation-with-muhammad";

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CalendlyModal({ isOpen, onClose }: CalendlyModalProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Book a free consultation"
    >
      <div
        className="absolute inset-0 bg-[#0B1B3D]/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-fade-up">
        <div className="flex items-center justify-between px-8 pt-7 pb-5 border-b border-gray-100">
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-[#8A9AAB] uppercase mb-1">
              Free Consultation
            </p>
            <h2 className="text-xl font-bold text-[#0B1B3D]">
              Book a Call with Sterling &amp; Oak
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#0B1B3D] hover:border-[#0B1B3D]/30 transition-colors duration-200"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="px-8 py-10">
          <div
            className="w-full min-h-[420px] h-[70vh] max-h-[600px] flex flex-col items-center justify-center rounded-xl overflow-hidden"
            aria-label="Calendly booking widget"
          >
            <iframe
              src={CALENDLY_URL}
              width="100%"
              height="100%"
              frameBorder="0"
              className="w-full h-full"
              title="Schedule a consultation via Calendly"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
