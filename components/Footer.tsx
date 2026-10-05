import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, ShieldCheck, Clock } from 'lucide-react';
import PhoneCTAButton from './PhoneCTAButton';

interface FooterProps {
  services: { title: string; url: string }[];
  locations: { title: string; url: string }[];
}

export default function Footer({ services, locations }: FooterProps) {
  return (
    <footer className="bg-[#090e1a] text-slate-300 border-t border-slate-800">
      {/* Upper Footer: Map & Call CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Company Details & Phone CTA */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative w-14 h-14 bg-white rounded-lg p-1">
                <Image
                  src="/logo.png"
                  alt="Capitol SR22 Insurance Austin"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-white tracking-tight uppercase">
                  Capitol <span className="text-red-500">SR22</span> Insurance
                </h3>
                <p className="text-xs text-amber-400 font-semibold uppercase tracking-wider">
                  Austin, Texas
                </p>
              </div>
            </div>

            {/* Direct Phone Call Box */}
            <div className="p-5 rounded-2xl bg-[#0f172a] border border-slate-800 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase font-bold tracking-wider">
                    Phone
                  </div>
                  <a
                    href="tel:+17373094205"
                    className="text-xl font-bold text-white hover:text-amber-400 transition-colors"
                  >
                    (737) 309-4205
                  </a>
                </div>
              </div>

              <PhoneCTAButton
                label="Call (737) 309-4205"
                variant="primary"
                size="md"
                className="w-full"
              />
            </div>
          </div>

          {/* Interactive Google Map embed (explicitly requested by user) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-[#111c34]">
              <div className="bg-[#111c34] px-4 py-3 border-b border-slate-700 flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-slate-200 font-semibold">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span>Capitol SR22 Insurance Austin Service Location</span>
                </div>
                <a
                  href="https://maps.app.goo.gl/qgKR6DQWxGe3p4eo8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-amber-400 hover:text-amber-300 font-medium underline"
                >
                  Open in Google Maps ↗
                </a>
              </div>
              <div className="relative w-full h-[320px] sm:h-[350px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d263824.0544036639!2d-97.73297004999999!3d30.296113950000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xac670850dfe6e4c5%3A0x6d4604bf7fad8e1f!2sCapitol%20SR22%20Insurance%20Austin!5e1!3m2!1sen!2sph!4v1791183304121!5m2!1sen!2sph"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Capitol SR22 Insurance Austin Map"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Links Navigation Matrix */}
        <div className="mt-14 pt-10 border-t border-slate-800 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
          {/* Col 1: Insurance Services */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-amber-400 pl-2">
              Insurance Services
            </h4>
            <ul className="space-y-2">
              {services.map((svc) => (
                <li key={svc.url}>
                  <Link
                    href={svc.url}
                    className="text-slate-400 hover:text-amber-400 transition-colors block py-0.5 text-xs sm:text-sm"
                  >
                    {svc.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Locations 1-5 */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-amber-400 pl-2">
              Service Areas (East/South)
            </h4>
            <ul className="space-y-2">
              {locations.slice(0, 5).map((loc) => (
                <li key={loc.url}>
                  <Link
                    href={loc.url}
                    className="text-slate-400 hover:text-amber-400 transition-colors block py-0.5 text-xs sm:text-sm"
                  >
                    {loc.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Locations 6-10 */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-amber-400 pl-2">
              Service Areas (North/West)
            </h4>
            <ul className="space-y-2">
              {locations.slice(5).map((loc) => (
                <li key={loc.url}>
                  <Link
                    href={loc.url}
                    className="text-slate-400 hover:text-amber-400 transition-colors block py-0.5 text-xs sm:text-sm"
                  >
                    {loc.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Resources & Blog */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-amber-400 pl-2">
              Helpful Guides
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contact"
                  className="text-slate-400 hover:text-amber-400 transition-colors block py-0.5 text-xs sm:text-sm font-semibold text-white"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-slate-400 hover:text-amber-400 transition-colors block py-0.5 text-xs sm:text-sm"
                >
                  All SR-22 Articles & Texas Guides
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/how-long-do-you-need-sr22-in-texas"
                  className="text-slate-400 hover:text-amber-400 transition-colors block py-0.5 text-xs sm:text-sm"
                >
                  How Long Do You Need SR-22 in Texas?
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/texas-non-owner-sr22-insurance-guide"
                  className="text-slate-400 hover:text-amber-400 transition-colors block py-0.5 text-xs sm:text-sm"
                >
                  Texas Non-Owner SR-22 Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/how-much-does-sr22-insurance-cost-texas"
                  className="text-slate-400 hover:text-amber-400 transition-colors block py-0.5 text-xs sm:text-sm"
                >
                  SR-22 Insurance Cost Breakdown
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Capitol SR22 Insurance Austin. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Austin, Texas</span>
            <a href="tel:+17373094205" className="text-amber-400 hover:underline">
              (737) 309-4205
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
