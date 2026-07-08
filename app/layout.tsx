import type { Metadata } from "next";
import { Outfit, Poppins } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["500", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sterling & Oak | Dedicated London Accountants for Growing Businesses",
  description:
    "Reliable, responsive, and personal accounting services for sole traders and limited companies across London. CIMA regulated, 4.9/5 on Google Reviews.",
  keywords:
    "London accountants, accounting firm, sole trader accountant, limited company accountant, tax services, bookkeeping London",
  openGraph: {
    title: "Sterling & Oak | London Accounting Firm",
    description:
      "Dedicated accountants for growing businesses across London. Personal, reliable, and responsive service.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${outfit.variable} ${poppins.variable} scroll-smooth`}>
      <body className="min-h-full antialiased bg-white text-[#111827] font-sans overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
