import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  ArrowLeft, 
  ArrowRight, 
  BookOpen, 
  CheckCircle2, 
  Clock, 
  FileText, 
  Phone, 
  ShieldCheck 
} from 'lucide-react';
import PhoneCTAButton from '@/components/PhoneCTAButton';
import ContentRenderer from '@/components/ContentRenderer';
import { siteData, getBlogBySlug } from '@/lib/siteData';

interface BlogPostProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return siteData.blogs.map((b) => ({
    slug: b.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostProps) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) return {};

  return {
    title: blog.seoTitle,
    description: blog.metaDesc,
  };
}

export default async function BlogPostPage({ params }: BlogPostProps) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const relatedBlogs = siteData.blogs
    .filter((b) => b.slug !== blog.slug)
    .slice(0, 3);

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
  const heroImg = blogImageMap[blog.slug] || '/images/blog-1.webp';

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Blog Article Header (Dark Navy) */}
      <section className="bg-[#0d1527] text-white pt-12 pb-16 sm:pt-20 sm:pb-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Texas Guides</span>
          </Link>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Texas SR-22 Regulatory Guide</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            {blog.title}
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {blog.metaDesc}
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <PhoneCTAButton
              label="Call (737) 309-4205"
              subtext="Speak with a Texas SR22 Agent"
              variant="primary"
              size="md"
              pulse={true}
            />
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="relative h-64 sm:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
          <Image
            src={heroImg}
            alt={blog.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Article Content & Sidebar */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Primary Article Content */}
            <div className="lg:col-span-8 space-y-8">
              <div className="bg-slate-50/70 p-6 sm:p-10 rounded-3xl border border-slate-200/80 shadow-sm">
                <ContentRenderer content={blog.content} />
              </div>

              {/* In-article Phone CTA Card */}
              <div className="p-8 rounded-3xl bg-[#0d1527] text-white space-y-4">
                <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">
                  Direct DPS Guidance
                </span>
                <h3 className="text-2xl font-black text-white">
                  Have Specific Questions About Your License Status?
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Avoid costly errors that can restart mandatory DPS filing terms. Call Capitol SR22 Insurance Austin directly at (737) 309-4205.
                </p>
                <div className="pt-2">
                  <PhoneCTAButton
                    label="Call (737) 309-4205"
                    variant="primary"
                    size="md"
                  />
                </div>
              </div>
            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Phone CTA Widget */}
              <div className="bg-[#0d1527] text-white p-7 rounded-3xl shadow-xl border border-slate-700 sticky top-28 space-y-6">
                <div className="space-y-2">
                  <div className="inline-block px-3 py-1 rounded-full bg-amber-400/20 text-amber-400 font-bold text-xs uppercase tracking-wide">
                    Austin Service Center
                  </div>
                  <h3 className="text-xl font-black text-white leading-tight">
                    Instant License Reinstatement
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    Same-day electronic filing sent directly to Texas DPS database in Austin.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#14203a] border border-slate-700 space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Texas 30/60/25 Compliance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    <span>Electronic DPS Receipt</span>
                  </div>
                </div>

                <PhoneCTAButton
                  label="Call (737) 309-4205"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  pulse={true}
                />

                {/* Related Articles */}
                <div className="pt-4 border-t border-slate-700 space-y-3">
                  <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Related Texas SR-22 Guides:
                  </div>
                  <div className="space-y-2">
                    {relatedBlogs.map((item) => (
                      <Link
                        key={item.slug}
                        href={item.url}
                        className="block p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 transition-colors text-xs text-slate-200 hover:text-amber-300 leading-snug"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Yellow CTA Banner */}
      <section className="bg-[#f5c32c] text-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Ready to Reinstate Your Driver&apos;s License?
            </h2>
            <p className="text-slate-800 text-sm font-medium">
              Call Capitol SR22 Insurance Austin today at (737) 309-4205.
            </p>
          </div>
          <PhoneCTAButton
            label="Call (737) 309-4205"
            variant="navy"
            size="lg"
          />
        </div>
      </section>

    </div>
  );
}
