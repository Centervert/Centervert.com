import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/case-studies";
import { services } from "@/lib/services";
import { scaleUpEvents } from "@/lib/scale-up-events";

const baseUrl = "https://www.centervert.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/work`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/careers`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/news`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/book`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/scaleup`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${baseUrl}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/cookies`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${baseUrl}${s.href}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const caseStudyPages: MetadataRoute.Sitemap = caseStudies.map((cs) => ({
    url: `${baseUrl}/work/${cs.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const scaleUpCityHubs: MetadataRoute.Sitemap = Array.from(
    new Set(scaleUpEvents.map((e) => e.city))
  ).map((city) => ({
    url: `${baseUrl}/scaleup/${city}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  const scaleUpEventPages: MetadataRoute.Sitemap = scaleUpEvents
    .filter((e) => e.status !== "draft")
    .map((e) => ({
      url: `${baseUrl}/scaleup/${e.city}/${e.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    }));

  return [
    ...staticPages,
    ...servicePages,
    ...caseStudyPages,
    ...scaleUpCityHubs,
    ...scaleUpEventPages,
  ];
}
