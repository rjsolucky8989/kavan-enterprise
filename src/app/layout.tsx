import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Illuminate Life: Diyas, Machines & More | Kavan Enterprise",
  description:
    "Discover the epitome of Diyas, futuristic Diya making machines, and exquisite ceramic delights. Revolutionize your festivities now!",
  robots: "index, follow",
  keywords: [
    "Diya Making Machine",
    "Diya Machine",
    "Thangadh Diya Making Machine",
    "foundry filters",
    "Automatic Diya Making Machine",
    "Semi-automatic Diya Making Machine",
    "Deepak/Diya",
    "Manual Diya Making Machine",
    "Electric Diya Making Machine",
    "Hydraulic Diya Making Machine",
    "Candle and Diya Making Machine",
    "Diya Moulding Machine",
    "Kullad",
    "Clay Diya Making Machine",
    "Wax Diya Making Machine",
    "Candle and Diya Moulding Machine",
    "Ceramic",
    "Small-scale Diya Making Machine",
    "Industrial Diya Making Machine",
    "High-speed Diya Making Machine",
    "Low-cost Diya Making Machine",
    "Portable Diya Making Machine",
    "Multi-functional Diya Making Machine",
    "Eco-friendly Diya Making Machine",
    "Custom Diya Making Machine",
    "Kitkat fuse",
    "Affordable Diya Making Machine",
    "Best Diya Making Machine",
    "Reliable Diya Making Machine",
    "Easy-to-use Diya Making Machine",
    "Diya Making Machine Supplier",
    "Diya Making Machine Manufacturer",
    "Diya Making Machine Exporter",
    "Diya Making Machine Dealer",
    "Buy Diya Making Machine Online",
    "Diya Making Machine Price",
    "Diya Making Machine Cost",
    "Diya Making Machine Specifications",
    "Diya Making Machine Features",
    "Diya Making Machine Reviews",
    "Diya Making Machine Comparison",
    "Diya Making Machine Benefits",
    "Diya Making Machine Uses",
    "Diya Making Machine Applications",
    "Diya Making Machine Components",
    "Diya Making Machine Parts",
    "Diya Making Machine Assembly",
    "Diya Making Machine Operation",
    "Diya Making Machine Maintenance",
    "Diya Making Machine Training",
    "Diya Making Machine Manual",
    "Diya Making Machine Warranty",
    "Diya Making Machine Service",
    "Diya Making Machine Repair",
    "Diya Making Machine Installation",
    "Diya Making Machine Consultation",
    "Diya Making Machine Inquiry",
    "Kavan Enterprise",
  ],
  openGraph: {
    type: "website",
    url: "https://kavanenterprise.com",
    title: "Illuminate Life: Diyas, Machines & More | Kavan Enterprise",
    description:
      "Discover the epitome of Diyas, futuristic Diya making machines, and exquisite ceramic delights. Revolutionize your festivities now!",
    siteName: "Kavan Enterprise",
  },
  twitter: {
    site: "https://kavanenterprise.com",
    description:
      "Discover the epitome of Diyas, futuristic Diya making machines, and exquisite ceramic delights. Revolutionize your festivities now!",
    title: "Illuminate Life: Diyas, Machines & More | Kavan Enterprise",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <GoogleTagManager gtmId="G-LHN7121V89" />
    </html>
  );
}
