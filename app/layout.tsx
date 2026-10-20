import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyCall from "@/components/MobileStickyCall";
import { siteData } from "@/lib/siteData";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sr22insuranceaustintx.site"),
  title: "Capitol SR22 Insurance Austin TX | Cheap SR-22 & Non-Owner Insurance",
  description: "Need SR22 insurance in Austin, TX? Learn how Texas financial responsibility works, how to clear license suspensions, and find low-cost coverage fast.",
  icons: {
    icon: "/logo.png",
  },
  verification: {
    google: "UDSun_vkmcNDLSYxwJrPpcdlraDwmjX0ocpuR-T63C4",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Capitol SR22 Insurance Austin TX | Cheap SR-22 & Non-Owner Insurance",
    description: "Need SR22 insurance in Austin, TX? Learn how Texas financial responsibility works, how to clear license suspensions, and find low-cost coverage fast.",
    url: "https://www.sr22insuranceaustintx.site",
    siteName: "Capitol SR22 Insurance Austin",
    images: [
      {
        url: "/images/hero-main.webp",
        width: 1200,
        height: 630,
        alt: "Capitol SR22 Insurance Austin TX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Capitol SR22 Insurance Austin TX | Cheap SR-22 & Non-Owner Insurance",
    description: "Need SR22 insurance in Austin, TX? Learn how Texas financial responsibility works, how to clear license suspensions, and find low-cost coverage fast.",
    images: ["/images/hero-main.webp"],
  },
  other: {
    "google-site-verification": "UDSun_vkmcNDLSYxwJrPpcdlraDwmjX0ocpuR-T63C4",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const serviceLinks = siteData.services.map((s) => ({
    title: s.title,
    url: s.url,
  }));

  const locationLinks = siteData.locations.map((l) => ({
    title: l.title,
    url: l.url,
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "InsuranceAgency",
        "@id": "https://www.sr22insuranceaustintx.site/#agency",
        "name": "Capitol SR22 Insurance Austin",
        "url": "https://www.sr22insuranceaustintx.site",
        "logo": "https://www.sr22insuranceaustintx.site/logo.png",
        "image": "https://www.sr22insuranceaustintx.site/images/hero-main.webp",
        "description": "Professional Texas SR-22 certificate and non-owner auto insurance specialists in Austin, TX.",
        "telephone": "+1-737-309-4205",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Austin",
          "addressRegion": "TX",
          "postalCode": "78701",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 30.2672,
          "longitude": -97.7431
        },
        "areaServed": [
          { "@type": "City", "name": "Austin" },
          { "@type": "City", "name": "Pasadena" },
          { "@type": "City", "name": "Pearland" },
          { "@type": "City", "name": "Sugar Land" },
          { "@type": "City", "name": "Katy" },
          { "@type": "City", "name": "The Woodlands" },
          { "@type": "City", "name": "Baytown" },
          { "@type": "City", "name": "Conroe" },
          { "@type": "City", "name": "Spring" },
          { "@type": "City", "name": "League City" },
          { "@type": "City", "name": "Cypress" },
          { "@type": "State", "name": "Texas" }
        ],
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "08:00",
            "closes": "20:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Saturday", "Sunday"],
            "opens": "09:00",
            "closes": "18:00"
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://www.sr22insuranceaustintx.site/#website",
        "url": "https://www.sr22insuranceaustintx.site",
        "name": "Capitol SR22 Insurance Austin",
        "publisher": {
          "@id": "https://www.sr22insuranceaustintx.site/#agency"
        }
      }
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="google-site-verification" content="UDSun_vkmcNDLSYxwJrPpcdlraDwmjX0ocpuR-T63C4" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-slate-900 antialiased selection:bg-amber-200 selection:text-slate-900 pb-16 lg:pb-0">
        <Header services={serviceLinks} locations={locationLinks} />
        <main className="flex-grow">{children}</main>
        <Footer services={serviceLinks} locations={locationLinks} />
        <MobileStickyCall />
      </body>
    </html>
  );
}
