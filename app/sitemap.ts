import { MetadataRoute } from "next";
import { serviceCatalog } from "@/lib/services";

// This is the registry of blog posts we've built
// Ideally, this shared data would be in a separate file, 
// but we'll manually list them here to ensure peak accuracy for now.
const blogRoutes = [
  "web-development-doha-guide-2026",
  "video-production-qatar-social-media",
  "financial-automation-qatar-business",
  "start-business-qatar-step-by-step",
  "seo-company-qatar-what-to-look-for",
  "best-website-design-companies-qatar-2026",
  "choosing-platform-small-business-websites-guide",
  "top-website-design-software-drag-drop-2026",
  "mobile-first-web-layout-best-practices",
  "cost-build-custom-website-qatar",
  "professional-website-designers-doha-near-me",
  "how-to-design-website-yourself-2026-guide",
  "cost-20-page-website-qatar-breakdown",
  "build-vs-buy-website-cost-analysis-qatar",
  "middle-east-website-design-trends-2026"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.onesmartbiz.pro";

  // Core Pages
  const corePages = [
    "",
    "/calculator",
    "/services",
    "/blog",
    "/terms",
    "/privacy-policy",
    "/faq"
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Dynamic Blog Posts
  const blogPages = blogRoutes.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const servicePages = serviceCatalog.map((service) => ({
    url: `${baseUrl}${service.href}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...corePages, ...servicePages, ...blogPages];
}
