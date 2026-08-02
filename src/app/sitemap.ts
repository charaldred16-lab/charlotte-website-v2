import type { MetadataRoute } from "next";
import { hertzCaseStudy } from "@/content/case-studies/hertz";
import { getCaseStudyPath } from "@/lib/case-study";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}${getCaseStudyPath(hertzCaseStudy.slug)}`,
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];
}
