import Image from "next/image";

export default function ClientLogos() {
  return (
    <section className="w-full bg-white py-12 border-b border-gray-100" aria-label="Our Clients">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-32">
          <Image src="/logos/01.png" alt="Client Logo 1" width={150} height={72} className="lg:h-18 h-12 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300" />
          <Image src="/logos/02.png" alt="Client Logo 2" width={150} height={72} className="lg:h-18 h-12 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300" />
          <Image src="/logos/03.png" alt="Client Logo 3" width={150} height={72} className="lg:h-18 h-12 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300" />
          <Image src="/logos/04.png" alt="Client Logo 4" width={150} height={72} className="lg:h-18 h-12 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300" />
          <Image src="/logos/05.png" alt="Client Logo 5" width={150} height={72} className="lg:h-18 h-12 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
    </section>
  );
}
