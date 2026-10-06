import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Phone, 
  MapPin, 
  Clock, 
  FileText,
  ArrowRight
} from 'lucide-react';
import PhoneCTAButton from '@/components/PhoneCTAButton';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/Animations';
import { siteData } from '@/lib/siteData';

export const metadata = {
  title: "Contact Capitol SR22 Insurance Austin | (737) 309-4205",
  description: "Contact Capitol SR22 Insurance Austin at +17373094205 for immediate support, free quote comparison, and rapid electronic Texas DPS filing.",
  alternates: {
    canonical: "/contact",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  const { services, locations, company } = siteData;

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. HERO SECTION (Dark Navy matching Design Mockup) */}
      <section className="relative bg-[#0d1527] text-white pt-12 pb-20 sm:pt-20 sm:pb-28 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <FadeIn direction="up">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-semibold tracking-wide">
                  <span>Capitol SR22 Insurance Austin</span>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.1}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                  Contact Capitol SR22 <br />
                  <span className="text-[#f5c32c]">Insurance Austin</span>
                </h1>
              </FadeIn>

              <FadeIn direction="up" delay={0.2}>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                  Contact Capitol SR22 Insurance Austin at +17373094205 for immediate support. Drivers across Austin can compare free quotes and obtain instant electronic Texas DPS filing.
                </p>
              </FadeIn>

              {/* Phone CTA Button ONLY (Strictly No Form) */}
              <FadeIn direction="up" delay={0.3}>
                <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <PhoneCTAButton
                    label="Call (737) 309-4205"
                    variant="primary"
                    size="lg"
                    pulse={true}
                  />
                </div>
              </FadeIn>
            </div>

            {/* Right Column: Insurance Hero Image */}
            <div className="lg:col-span-5 relative">
              <FadeIn direction="left" delay={0.2}>
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  <div className="relative h-[380px] sm:h-[460px] rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-700/50">
                    <Image
                      src="/images/hero-main.webp"
                      alt="Contact Capitol SR22 Insurance Austin"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  </div>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* 2. DIRECT PHONE CALL & LOCATION SECTION (Strictly No Forms) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Col: Direct Phone Call Information */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  Direct Phone Assistance
                </h2>
                <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
                  Contact Capitol SR22 Insurance Austin at +17373094205 right now to request your fast, free quote.
                </p>
              </div>

              {/* Direct Phone Highlight Card */}
              <div className="p-8 rounded-3xl bg-[#0d1527] text-white space-y-6 shadow-xl border border-slate-700">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-amber-400/20 text-amber-400 flex items-center justify-center">
                    <Phone className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="text-xs text-amber-400 font-bold uppercase tracking-wider">
                      Telephone
                    </div>
                    <a
                      href="tel:+17373094205"
                      className="text-2xl sm:text-3xl font-black text-white hover:text-amber-400 transition-colors"
                    >
                      (737) 309-4205
                    </a>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-700/80 space-y-3">
                  <div className="flex items-center gap-3 text-sm text-slate-300">
                    <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0" />
                    <span>Austin, Texas</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-300">
                    <Clock className="w-5 h-5 text-amber-400 flex-shrink-0" />
                    <span>Texas DPS Electronic Filing</span>
                  </div>
                </div>

                <div className="pt-2">
                  <PhoneCTAButton
                    label="Call (737) 309-4205"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    pulse={true}
                  />
                </div>
              </div>

              {/* Nearby Texas Locations from sheet */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <h3 className="font-bold text-sm text-slate-900 uppercase tracking-wider">
                  Texas Service Areas:
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {locations.map((loc) => (
                    <Link
                      key={loc.slug}
                      href={loc.url}
                      className="px-2.5 py-1 text-xs rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300 transition-colors"
                    >
                      {loc.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Col: Google Map (Visible Map from prompt) */}
            <div className="lg:col-span-7 space-y-4">
              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Austin Location Map
                </h3>
                <p className="text-slate-600 text-sm">
                  Capitol SR22 Insurance Austin location on Google Maps.
                </p>
              </div>

              <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100">
                <div className="relative w-full h-[450px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d263824.0544036639!2d-97.73297004999999!3d30.296113950000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xac670850dfe6e4c5%3A0x6d4604bf7fad8e1f!2sCapitol%20SR22%20Insurance%20Austin!5e1!3m2!1sen!2sph!4v1791183304121!5m2!1sen!2sph"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="Capitol SR22 Insurance Austin Location"
                  ></iframe>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION (The 4 Services from Sheet) */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Capitol SR22 Insurance Austin Services
            </h2>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc, idx) => {
              const serviceImages = [
                '/images/service-1.webp',
                '/images/service-2.webp',
                '/images/service-3.webp',
                '/images/service-4.webp'
              ];
              const img = serviceImages[idx % serviceImages.length];

              return (
                <StaggerItem key={svc.slug} className="h-full">
                  <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group hover:-translate-y-1">
                    <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                      <Image
                        src={img}
                        alt={svc.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                      <div className="absolute bottom-3 left-4 w-10 h-10 rounded-full bg-[#f5c32c] flex items-center justify-center text-slate-900 font-bold shadow-lg">
                        <FileText className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                      <div className="space-y-2">
                        <h3 className="font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                          {svc.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                          {svc.metaDesc}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                        <Link
                          href={svc.url}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 group-hover:text-blue-800 transition-colors"
                        >
                          <span>{svc.title}</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <a
                          href="tel:+17373094205"
                          className="p-2 rounded-full bg-amber-100 text-amber-800 hover:bg-amber-200 transition-colors"
                          title="Call"
                          aria-label={`Call for ${svc.title}`}
                        >
                          <Phone className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

        </div>
      </section>

      {/* 4. BRIGHT YELLOW CTA BANNER (Phone Call CTA from Sheet) */}
      <section className="bg-[#f5c32c] text-slate-900 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="space-y-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                Capitol SR22 Insurance Austin
              </h2>
              <p className="text-slate-800 text-sm sm:text-base font-medium">
                Call Capitol SR22 Insurance Austin at +17373094205 right now.
              </p>
            </div>

            <div className="flex-shrink-0">
              <PhoneCTAButton
                label="Call (737) 309-4205"
                variant="navy"
                size="lg"
                pulse={false}
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
