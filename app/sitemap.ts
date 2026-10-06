import { MetadataRoute } from "next";
import { siteData } from "@/lib/siteData";

const BASE_URL = "https://sr22insuranceaustintx.site";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  const entries: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.8,
    },
  ];

  // 4 Services
  siteData.services.forEach((s) => {
    entries.push({
      url: `${BASE_URL}${s.url}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    });
  });

  // 10 Locations
  siteData.locations.forEach((l) => {
    entries.push({
      url: `${BASE_URL}${l.url}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    });
  });

  // 10 Blogs
  siteData.blogs.forEach((b) => {
    entries.push({
      url: `${BASE_URL}${b.url}`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  });

  return entries;
}
