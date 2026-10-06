import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, BookOpen, Clock, FileText, Phone, ShieldCheck } from 'lucide-react';
import PhoneCTAButton from '@/components/PhoneCTAButton';
import { siteData } from '@/lib/siteData';

export const metadata = {
  title: "Texas SR-22 Insurance Blog & Guides | Capitol SR22 Insurance Austin",
  description: "Comprehensive guides, Texas DPS filing rules, reinstatement advice, cost breakdowns, and expert tips on SR22 and FR44 insurance.",
  alternates: {
    canonical: "/blog",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BlogIndexPage() {
  const { blogs } = siteData;

  const blogImageMap: Record<string, string> = {
    'how-long-do-you-need-sr22-in-texas': '/images/insurance/car-insurance-form-on-clipboard-pen-desk-2026-01-08-06-24-10-utc.webp',
    'texas-non-owner-sr22-insurance-guide': '/images/insurance/car-insurance-and-finance-with-blue-toy-car-2026-03-17-20-04-52-utc.webp',
    'sr22-vs-fr44-texas-difference': '/images/insurance/car-insurance-concept-with-toy-car-and-umbrella-2026-01-08-08-12-26-utc.webp',
    'how-to-reinstate-license-texas-sr22': '/images/insurance/signing-auto-insurance-document-with-car-key-and-c-2026-01-06-09-05-16-utc.webp',
    'how-much-does-sr22-insurance-cost-texas': '/images/insurance/car-insurance-form-on-a-tablet-device-2026-01-08-07-15-09-utc.webp',
    'what-happens-if-sr22-lapses-texas': '/images/insurance/insurance-adjuster-inspecting-damage-after-car-cra-2026-01-05-05-08-40-utc.webp',
    'can-you-switch-carriers-with-sr22-texas': '/images/insurance/insurance-agent-reviewing-car-coverage-with-custom-2026-01-08-07-32-47-utc.webp',
    'texas-sr22-first-offense-dwi': '/images/insurance/insurance-adjuster-inspecting-damage-on-wrecked-ca-2026-03-27-02-57-59-utc.webp',
    'sr22-motorcycle-insurance-texas': '/images/insurance/car-and-motorcycle-crash-on-a-city-street-2026-03-10-04-00-40-utc.webp',
    'top-sr22-insurance-mistakes-texas': '/images/insurance/woman-inspecting-damage-car-after-auto-accident-2026-03-27-03-00-53-utc.webp',
  };

  const featured = blogs[0];
  const regularBlogs = blogs.slice(1);

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Blog Hero (Dark navy) */}
      <section className="bg-[#0d1527] text-white pt-12 pb-16 sm:pt-20 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-semibold tracking-wide">
              <BookOpen className="w-4 h-4 text-amber-400" />
              <span>Texas DPS Regulatory & Insurance Guides</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              SR22 Insurance Blog & Guides
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              In-depth articles explaining Texas financial responsibility laws, driver license reinstatement procedures, cost breakdowns, and avoidance of common filing pitfalls.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Blog Post */}
      {featured && (
        <section className="py-12 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-6 relative h-64 sm:h-80 lg:h-96 w-full">
                <Image
                  src={blogImageMap[featured.slug] || '/images/blog-1.webp'}
                  alt={featured.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute top-4 left-4 bg-[#f5c32c] text-slate-900 text-xs font-black uppercase px-3 py-1 rounded-full shadow">
                  Featured Guide
                </div>
              </div>

              <div className="lg:col-span-6 p-6 sm:p-10 space-y-4">
                <div className="flex items-center gap-2 text-xs text-amber-600 font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Essential Texas Reading</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  <Link href={featured.url} className="hover:text-blue-600 transition-colors">
                    {featured.title}
                  </Link>
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {featured.metaDesc}
                </p>
                <div className="pt-2 flex items-center gap-4">
                  <Link
                    href={featured.url}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0d1527] text-white hover:bg-slate-800 text-sm font-bold transition-colors shadow"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <PhoneCTAButton
                    label="Call (737) 309-4205"
                    variant="primary"
                    size="sm"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              All Texas SR-22 Articles
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Read our step-by-step guides on reinstating your license, switching carriers, and saving on high-risk insurance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularBlogs.map((blog) => {
              const img = blogImageMap[blog.slug] || '/images/blog-1.webp';

              return (
                <article
                  key={blog.slug}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
                >
                  <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                    <Image
                      src={img}
                      alt={blog.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-[#f5c32c] text-slate-900 text-[11px] font-extrabold uppercase px-3 py-1 rounded-full shadow">
                      Texas Guide
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-bold text-base sm:text-lg text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                        <Link href={blog.url}>
                          {blog.title}
                        </Link>
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                        {blog.metaDesc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                      <Link
                        href={blog.url}
                        className="font-bold text-blue-600 group-hover:text-blue-800 inline-flex items-center gap-1"
                      >
                        <span>Read Full Guide</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <a
                        href="tel:+17373094205"
                        className="text-slate-400 hover:text-amber-500 p-1"
                        title="Call agent"
                        aria-label="Call agent"
                      >
                        <Phone className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

        </div>
      </section>

      {/* Yellow CTA Banner */}
      <section className="bg-[#f5c32c] text-slate-900 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="space-y-1">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Need Help Understanding Texas SR-22 Rules?
              </h2>
              <p className="text-slate-800 text-sm sm:text-base font-medium">
                Our Austin-based insurance professionals are ready to answer your questions over the phone.
              </p>
            </div>

            <div className="flex-shrink-0">
              <PhoneCTAButton
                label="Call (737) 309-4205"
                variant="navy"
                size="lg"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
