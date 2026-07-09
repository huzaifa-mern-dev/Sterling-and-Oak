"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, Play, Pause } from "lucide-react";

interface HeroProps {
  onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlayPause = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

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
                href="https://aliceblue-hummingbird-768181.hostingersite.com/"
                id="hero-secondary-cta"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-gray-200 text-[#0B1B3D] font-semibold px-8 py-4 rounded-xl hover:border-[#0B1B3D]/40 hover:bg-gray-50 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 text-base"
              >
                Our Services
              </a>
            </div>

            <div className="flex items-center gap-6 mt-8 animate-fade-in">
              <Image
                src="/google-badge.webp"
                alt="Google Customer Reviews"
                width={150}
                height={60}
                className="h-15 md:h-20 w-auto object-contain"
              />
              <Image
                src="/trustpilot-badge.png"
                alt="Trustpilot 5 Star Reviews"
                width={150}
                height={60}
                className="h-15 md:h-20 w-auto object-contain"
              />
            </div>
          </div>

          <div className="order-2 animate-fade-in">
            <div className="relative w-full aspect-[1/1] lg:aspect-[3/4] max-h-[580px] rounded-2xl overflow-hidden bg-[#0B1B3D] shadow-2xl">
              <video
                ref={videoRef}
                src="/hero-video.mp4"
                playsInline
                autoPlay
                muted
                loop
                preload="none"
                poster="/video-poster.jpg"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              <button
                onClick={togglePlayPause}
                aria-label={isPlaying ? "Pause video" : "Play video"}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all border border-white/30 shadow-lg"
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6 text-white" aria-hidden="true" />
                ) : (
                  <Play className="w-6 h-6 text-white ml-0.5" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
