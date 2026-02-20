import type { Metadata } from "next";
import { Nunito_Sans, Poppins, Inter } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
  metadataBase: new URL('https://lazaevent.com'),
  title: {
    default: "Laza Events | Qatar's Premier Luxury Event Management",
    template: "%s | Laza Events Qatar"
  },
  description: "Laza Events is Qatar's premier luxury event management company. We specialize in bespoke weddings, corporate conferences, stage shows, community events, and premium furniture rentals in Doha. Create unforgettable experiences with the best event planners in Qatar.",
  keywords: [
    "event management qatar", 
    "luxury wedding planner doha", 
    "corporate event organizer qatar", 
    "stage show production qatar", 
    "event furniture rental qatar", 
    "best event company doha", 
    "laza events qatar", 
    "conference management qatar", 
    "exhibition stand builder qatar", 
    "party planner qatar", 
    "vip event services doha",
    "sound and light rental qatar",
    "led screen rental qatar",
    "wedding decoration qatar",
    "product launch event qatar",
    "award ceremony organizer qatar"
  ],
  authors: [{ name: "Laza Events Team", url: "https://lazaevent.com" }],
  category: "Event Management",
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
    url: 'https://lazaevent.com',
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EventPlanner",
    "name": "Laza Events Qatar",
    "alternateName": "Laza Events Doha",
    "url": "https://lazaevent.com",
    "logo": "https://lazaevent.com/logo-web.png",
    "image": "https://lazaevent.com/images/og-image.png",
    "description": "Qatar's premier luxury event management company, specializing in weddings, corporate events, and stage shows.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Doha",
      "addressCountry": "QA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.2854,
      "longitude": 51.5310
    },
    "telephone": "+97470694883",
    "email": "info@lazaevent.com",
    "priceRange": "$$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Saturday",
          "Sunday"
        ],
        "opens": "09:00",
        "closes": "21:00"
      }
    ],
    "sameAs": [
      "https://instagram.com/laza_events_official",
      "https://facebook.com/lazaevents"
    ]
  };export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunitoSans.variable} ${poppins.variable} ${inter.variable} font-sans antialiased bg-white text-gray-900 relative`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LayoutWrapper>{children}</LayoutWrapper>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

