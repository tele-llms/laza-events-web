import type { Metadata } from "next";
import { Nunito_Sans, Poppins, Inter } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";

// Main Headings - Industry standard, refined (Proxima Nova alternative)
const nunitoSans = Nunito_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

// Subheadings - Geometric with warmth (Metropolis alternative)
const poppins = Poppins({
  variable: "--font-subheading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Body Text - Clean, modern, approachable (Sailec alternative)
const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Laza Events | Qatar's Premier Luxury Event Management",
  description: "Bringing Your Vision to Life. Exceptional Corporate Events, Weddings, Stage Shows & Celebrations in Qatar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunitoSans.variable} ${poppins.variable} ${inter.variable} font-sans antialiased bg-white text-gray-900 relative`}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}

