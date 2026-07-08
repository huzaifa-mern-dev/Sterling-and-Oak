"use client";

import { useState } from "react";
import Navbar from "@/components/ui/Navbar";
import CalendlyModal from "@/components/ui/CalendlyModal";
import Hero from "@/components/sections/Hero";
import ClientLogos from "@/components/sections/ClientLogos";
import AboutUs from "@/components/sections/AboutUs";
import Services from "@/components/sections/Services";
import Industries from "@/components/sections/Industries";
import Pricing from "@/components/sections/Pricing";
import Onboarding from "@/components/sections/Onboarding";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/ui/Footer";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <main className="overflow-x-hidden">
      <Navbar onOpenModal={handleOpenModal} />
      
      <Hero onOpenModal={handleOpenModal} />
      <ClientLogos />
      <AboutUs />
      <Services />
      <Industries />
      <Pricing />
      <Onboarding onOpenModal={handleOpenModal} />
      <Testimonials />
      <FAQ />
      <CTA onOpenModal={handleOpenModal} />
      
      <Footer />
      
      <CalendlyModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </main>
  );
}
