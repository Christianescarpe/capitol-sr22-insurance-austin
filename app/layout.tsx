import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyCall from "@/components/MobileStickyCall";
import { siteData } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Capitol SR22 Insurance Austin TX | Cheap SR-22 & Non-Owner Insurance",
  description: "Need SR22 insurance in Austin, TX? Learn how Texas financial responsibility works, how to clear license suspensions, and find low-cost coverage fast.",
  icons: {
    icon: "/logo.png",
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
      <body className="min-h-screen flex flex-col bg-white text-slate-900 antialiased selection:bg-amber-200 selection:text-slate-900 pb-16 lg:pb-0">
        <Header services={serviceLinks} locations={locationLinks} />
        <main className="flex-grow">{children}</main>
        <Footer services={serviceLinks} locations={locationLinks} />
        <MobileStickyCall />
      </body>
    </html>
  );
}
