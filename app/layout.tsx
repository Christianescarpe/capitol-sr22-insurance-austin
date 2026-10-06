import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyCall from "@/components/MobileStickyCall";
import { siteData } from "@/lib/siteData";

export const metadata: Metadata = {
  metadataBase: new URL("https://sr22insuranceaustintx.site"),
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

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="google-site-verification" content="UDSun_vkmcNDLSYxwJrPpcdlraDwmjX0ocpuR-T63C4" />
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
