'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, ChevronDown, Menu, X, ShieldCheck } from 'lucide-react';
import PhoneCTAButton from './PhoneCTAButton';

interface HeaderProps {
  services: { title: string; url: string }[];
  locations: { title: string; url: string }[];
}

export default function Header({ services, locations }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all">
      {/* Top micro bar */}
      <div className="bg-[#0b132b] text-slate-300 text-xs py-2 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-medium text-white">Capitol SR22 Insurance Austin</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="tel:+17373094205"
              className="flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-semibold tracking-wide transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>(737) 309-4205</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 transition-transform group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="Capitol SR22 Insurance Austin"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl text-slate-900 leading-tight tracking-tight uppercase group-hover:text-blue-900 transition-colors">
                Capitol <span className="text-red-600">SR22</span> Insurance
              </span>
              <span className="text-xs text-slate-500 font-semibold tracking-wider uppercase">
                Austin, Texas
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            <Link
              href="/"
              className="text-slate-700 hover:text-blue-600 font-semibold text-sm transition-colors"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-slate-700 hover:text-blue-600 font-semibold text-sm py-2 transition-colors"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180 text-blue-600' : ''}`} />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-xl shadow-xl border border-slate-100 py-3 px-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="text-[11px] font-bold text-slate-400 px-3 py-1 uppercase tracking-wider">
                    Our Insurance Services
                  </div>
                  {services.map((svc) => (
                    <Link
                      key={svc.url}
                      href={svc.url}
                      className="block px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors"
                      onClick={() => setServicesOpen(false)}
                    >
                      {svc.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Locations Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setLocationsOpen(true)}
              onMouseLeave={() => setLocationsOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-slate-700 hover:text-blue-600 font-semibold text-sm py-2 transition-colors"
                onClick={() => setLocationsOpen(!locationsOpen)}
              >
                <span>Locations</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${locationsOpen ? 'rotate-180 text-blue-600' : ''}`} />
              </button>

              {locationsOpen && (
                <div className="absolute top-full -left-20 w-96 bg-white rounded-xl shadow-xl border border-slate-100 py-3 px-3 z-50 grid grid-cols-2 gap-1 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="col-span-2 text-[11px] font-bold text-slate-400 px-2 py-1 uppercase tracking-wider">
                    Texas Service Areas
                  </div>
                  {locations.map((loc) => (
                    <Link
                      key={loc.url}
                      href={loc.url}
                      className="block px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors truncate"
                      onClick={() => setLocationsOpen(false)}
                    >
                      {loc.title.replace('SR22 Insurance ', '')}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Blog Link */}
            <Link
              href="/blog"
              className="text-slate-700 hover:text-blue-600 font-semibold text-sm transition-colors"
            >
              Blog & Guides
            </Link>

            {/* Contact Link */}
            <Link
              href="/contact"
              className="text-slate-700 hover:text-blue-600 font-semibold text-sm transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Phone Button CTA */}
          <div className="hidden lg:flex items-center">
            <PhoneCTAButton
              label="Call (737) 309-4205"
              variant="primary"
              size="md"
              pulse={true}
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="tel:+17373094205"
              className="p-2.5 rounded-full bg-[#f5c32c] text-slate-900 shadow hover:bg-[#eab308]"
              aria-label="Call Now"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-4 duration-200">
          <Link
            href="/"
            className="block px-3 py-2 rounded-md font-semibold text-slate-800 hover:bg-slate-50"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>

          <div>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="w-full flex items-center justify-between px-3 py-2 rounded-md font-semibold text-slate-800 hover:bg-slate-50"
            >
              <span>Services</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {servicesOpen && (
              <div className="pl-4 space-y-1 mt-1 border-l-2 border-slate-200">
                {services.map((svc) => (
                  <Link
                    key={svc.url}
                    href={svc.url}
                    className="block px-3 py-1.5 text-sm text-slate-600 hover:text-blue-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {svc.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => setLocationsOpen(!locationsOpen)}
              className="w-full flex items-center justify-between px-3 py-2 rounded-md font-semibold text-slate-800 hover:bg-slate-50"
            >
              <span>Locations</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${locationsOpen ? 'rotate-180' : ''}`} />
            </button>
            {locationsOpen && (
              <div className="pl-4 space-y-1 mt-1 border-l-2 border-slate-200 max-h-60 overflow-y-auto">
                {locations.map((loc) => (
                  <Link
                    key={loc.url}
                    href={loc.url}
                    className="block px-3 py-1.5 text-sm text-slate-600 hover:text-blue-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {loc.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/blog"
            className="block px-3 py-2 rounded-md font-semibold text-slate-800 hover:bg-slate-50"
            onClick={() => setMobileMenuOpen(false)}
          >
            Blog & Guides
          </Link>

          <Link
            href="/contact"
            className="block px-3 py-2 rounded-md font-semibold text-slate-800 hover:bg-slate-50"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>

          <div className="pt-2">
            <PhoneCTAButton
              label="Call (737) 309-4205"
              variant="primary"
              size="lg"
              className="w-full"
            />
          </div>
        </div>
      )}
    </header>
  );
}
