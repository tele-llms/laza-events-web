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
  metadataBase: new URL('https://laza-events-web.vercel.app'), // Replace with your production domain
  title: {
    default: "Laza Events | Qatar's Premier Luxury Event Management",
    template: "%s | Laza Events Qatar"
  },
  description: "Bringing Your Vision to Life. Exceptional Corporate Events, Weddings, Stage Shows & Celebrations in Doha, Qatar. Full-service event planning and management.",
  keywords: ["event management qatar", "wedding planner doha", "corporate events qatar", "stage show qatar", "event rentals qatar", "laza events"],
  authors: [{ name: "Laza Events Team" }],
  creator: "Laza Events",
  publisher: "Laza Events",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Laza Events | Premier Event Management in Qatar",
    description: "Exceptional event planning for corporate, weddings, and celebrations in Qatar.",
    url: 'https://laza-events-web.vercel.app',
    siteName: 'Laza Events',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Laza Events - Premier Event Management',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Laza Events Qatar",
    description: "Premier event management services in Doha, Qatar.",
    images: ['/images/og-image.png'],
    // creator: '@lazaevents', // Add your handle if you have one
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "I-vpYTCaZaqPCfWvdTpy0V0x_RkOY46RhIv3FfFeE7g",
    // yandex: "YOUR_YANDEX_VERIFICATION_TOKEN", // Optional
    other: {
      "msvalidate.01": "9DA34659D62A07F0A701EA94A2E2CB41",
    },
  },
  alternates: {
    canonical: '/',
  },
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

