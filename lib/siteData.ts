import rawSiteData from '@/data/siteData.json';

export interface AnchorItem {
  text: string;
  url: string;
  isExt: boolean;
}

export interface PageItem {
  title: string;
  keyword: string;
  slug: string;
  url: string;
  seoTitle: string;
  metaDesc: string;
  type: 'home' | 'service' | 'location';
  rawContent: string;
  content: string;
  anchors: AnchorItem[];
}

export interface BlogItem {
  title: string;
  keyword: string;
  slug: string;
  url: string;
  seoTitle: string;
  metaDesc: string;
  rawContent: string;
  content: string;
  anchors: AnchorItem[];
}

export interface SiteData {
  company: {
    name: string;
    phone: string;
    phoneDisplay: string;
    tel: string;
    mapIframe: string;
    mapLink: string;
  };
  home: PageItem;
  services: PageItem[];
  locations: PageItem[];
  blogs: BlogItem[];
  allPages: PageItem[];
}

export const siteData = rawSiteData as SiteData;

export function getPageBySlug(slug: string): PageItem | undefined {
  if (!slug || slug === '') return siteData.home;
  return siteData.allPages.find(p => p.slug === slug);
}

export function getBlogBySlug(slug: string): BlogItem | undefined {
  return siteData.blogs.find(b => b.slug === slug);
}
