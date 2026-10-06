import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  Phone, 
  ArrowRight, 
  FileText
} from 'lucide-react';
import PhoneCTAButton from '@/components/PhoneCTAButton';
import ContentRenderer from '@/components/ContentRenderer';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/Animations';
import { siteData, getPageBySlug } from '@/lib/siteData';
import { parseSheetContent } from '@/lib/contentParser';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return siteData.allPages
    .filter((p) => p.slug && p.slug !== '')
    .map((p) => ({
      slug: p.slug,
    }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const page = getPageBySlug(slug);
  if (!page) return {};

  return {
    title: page.seoTitle,
    description: page.metaDesc,
    alternates: {
      canonical: `/${page.slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ServiceOrLocationPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getPageBySlug(slug);

  if (!page) {
    notFound();
  }

  const { services, locations, blogs } = siteData;
  const isService = page.type === 'service';
  const parsed = parseSheetContent(page.content, page.title);

  // Sourced insurance images
  const serviceImageMap: Record<string, string> = {
    'non-owner-sr22-insurance-austin-tx': '/images/service-1.webp',
    'sr22-insurance-quotes-austin-tx': '/images/service-2.webp',
    'sr22-insurance-requirements-austin-tx': '/images/service-3.webp',
    'cheap-fr44-insurance-company-austin-tx': '/images/service-4.webp',
  };

  const heroImg = serviceImageMap[page.slug] || '/images/hero-main.webp';
  const featuredBlogs = blogs.slice(0, 3);

  const blogImageMap: Record<string, string> = {
    'how-long-do-you-need-sr22-in-texas': '/images/insurance/car-insurance-form-on-clipboard-pen-desk-2026-01-08-06-24-10-utc.webp',
    'texas-non-owner-sr22-insurance-guide': '/images/insurance/car-insurance-and-finance-with-blue-toy-car-2026-03-17-20-04-52-utc.webp',
    'sr22-vs-fr44-texas-difference': '/images/insurance/car-insurance-concept-with-toy-car-and-umbrella-2026-01-08-08-12-26-utc.webp',
  };

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. HERO SECTION (Dark Navy matching design with ONLY Sheet Content) */}
      <section className="relative bg-[#0d1527] text-white pt-12 pb-20 sm:pt-20 sm:pb-28 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Target Keyword eyebrow, exact H1 from sheet, intro from sheet, Phone CTA */}
            <div className="lg:col-span-7 space-y-6">
              <FadeIn direction="up">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-semibold tracking-wide">
                  <span>{page.keyword}</span>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.1}>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                  {parsed.h1}
                </h1>
              </FadeIn>

              <FadeIn direction="up" delay={0.2}>
                <div 
                  className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl prose-content [&>p]:text-slate-300 [&>p]:mb-3 [&_a]:text-amber-400 [&_a]:underline"
                  dangerouslySetInnerHTML={{ __html: parsed.intro }}
                />
              </FadeIn>

              {/* Phone CTA Button */}
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

            {/* Right Column: Hero Image from Insurance folder */}
            <div className="lg:col-span-5 relative">
              <FadeIn direction="left" delay={0.2}>
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  <div className="relative h-[380px] sm:h-[460px] rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-700/50">
                    <Image
                      src={heroImg}
                      alt={parsed.h1}
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

      {/* 2. SECTION 2: Overview (First H2 Section directly from Sheet) */}
      {parsed.firstSection && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left side: Feature Image */}
              <div className="lg:col-span-6 relative">
                <FadeIn direction="right">
                  <div className="relative">
                    <div className="absolute -top-4 -left-4 w-64 h-64 bg-[#f5c32c]/20 rounded-3xl -z-10"></div>
                    <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-xl border border-slate-200">
                      <Image
                        src="/images/about-feature.webp"
                        alt={parsed.firstSection.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </FadeIn>
              </div>

              {/* Right side: First H2 Heading and Body from Sheet */}
              <div className="lg:col-span-6 space-y-6">
                <FadeIn direction="up">
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    {parsed.firstSection.title}
                  </h2>
                </FadeIn>

                <FadeIn direction="up" delay={0.1}>
                  <div 
                    className="prose-content text-slate-600 text-base leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: parsed.firstSection.body }}
                  />
                </FadeIn>

                <FadeIn direction="up" delay={0.2}>
                  <div className="pt-2">
                    <PhoneCTAButton
                      label="Call (737) 309-4205"
                      variant="primary"
                      size="md"
                    />
                  </div>
                </FadeIn>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* 3. SECTION 3: SERVICES GRID (The 4 Services from Sheet) */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/70">
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
                  <div className={`bg-white rounded-2xl overflow-hidden border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group hover:-translate-y-1 ${svc.slug === page.slug ? 'ring-2 ring-amber-400 border-amber-300' : 'border-slate-200'}`}>
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

      {/* 4. SECTION 4: DARK BANNER (Phone Call CTA from Sheet) */}
      <section className="bg-[#0b132b] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="space-y-3 max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                {page.title}
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Contact Capitol SR22 Insurance Austin at +17373094205 right now to request your fast, free quote.
              </p>
            </div>

            <div className="flex-shrink-0">
              <PhoneCTAButton
                label="Call (737) 309-4205"
                variant="primary"
                size="lg"
                pulse={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION 5: COMPLETE REMAINING SHEET CONTENT (with All Headings, Paragraphs, Lists & Anchors) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Primary Content Column */}
            <div className="lg:col-span-8 space-y-8">
              <div className="bg-slate-50/60 p-6 sm:p-10 rounded-3xl border border-slate-200/80">
                <ContentRenderer content={parsed.remainingContent} />
              </div>
            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-4 space-y-6">
              
              <div className="bg-[#0d1527] text-white p-7 rounded-3xl shadow-xl border border-slate-700 sticky top-28 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-white leading-tight">
                    Capitol SR22 Insurance Austin
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    Contact Capitol SR22 Insurance Austin at +17373094205.
                  </p>
                </div>

                <PhoneCTAButton
                  label="Call (737) 309-4205"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  pulse={true}
                />

                {/* Related Links from sheet */}
                <div className="pt-4 border-t border-slate-700 space-y-3">
                  <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    {isService ? 'Other Insurance Options:' : 'Texas Service Areas:'}
                  </div>
                  <div className="space-y-1.5">
                    {(isService ? services : locations)
                      .filter((item) => item.slug !== page.slug)
                      .slice(0, 6)
                      .map((item) => (
                        <Link
                          key={item.slug}
                          href={item.url}
                          className="block px-3 py-2 text-xs font-medium rounded-lg bg-slate-800 text-slate-300 hover:text-amber-400 hover:bg-slate-700 transition-colors"
                        >
                          {item.title} →
                        </Link>
                      ))}
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 6. SECTION 6: BLOG ARTICLES (Directly from blogs sheet) */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Texas SR-22 Guides & Articles
              </h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 text-slate-800 font-bold text-xs sm:text-sm hover:bg-slate-100 transition-colors shadow-sm self-start md:self-auto"
            >
              <span>View All Articles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredBlogs.map((blog) => {
              const img = blogImageMap[blog.slug] || '/images/blog-1.webp';

              return (
                <div
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
                  </div>

                  <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-bold text-base sm:text-lg text-slate-900 group-hover:text-blue-600 transition-colors leading-snug line-clamp-2">
                        {blog.title}
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
                        <span>{blog.title}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <a
                        href="tel:+17373094205"
                        className="text-slate-400 hover:text-amber-500"
                        title="Call"
                        aria-label="Call"
                      >
                        <Phone className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 7. SECTION 7: GALLERY GRID (Insurance images from folder) */}
      <section className="py-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {[1, 2, 3, 4, 5].map((num) => (
              <div
                key={num}
                className="relative h-44 rounded-2xl overflow-hidden border border-slate-200 shadow-sm group"
              >
                <Image
                  src={`/images/gallery-${num}.webp`}
                  alt={`Insurance Gallery ${num}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SECTION 8: BRIGHT YELLOW CTA BANNER (Phone Call CTA from Sheet) */}
      <section className="bg-[#f5c32c] text-slate-900 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="space-y-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                {page.title}
              </h2>
              <p className="text-slate-800 text-sm sm:text-base font-medium">
                Call Capitol SR22 Insurance Austin at +17373094205.
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
