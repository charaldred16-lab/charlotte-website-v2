import type { MetadataRoute } from "next";
import { hertzCaseStudy } from "@/content/case-studies/hertz";
import { ocadoCaseStudy } from "@/content/case-studies/ocado";
import { getCaseStudyPath } from "@/lib/case-study";
import { siteConfig } from "@/lib/site";
import { hertzBookingRedesignCaseStudy } from "@/content/case-studies/hertz-booking-redesign";
import { hertzVanRentalCaseStudy } from "@/content/case-studies/hertz-van-rental";
import { ocadoDiaryStudyCaseStudy } from "@/content/case-studies/ocado-diary-study";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/about`,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/services`,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/contact`,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/privacy`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
        {
      url: `${siteConfig.url}${getCaseStudyPath(hertzCaseStudy.slug)}`,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}${getCaseStudyPath(ocadoCaseStudy.slug)}`,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}${getCaseStudyPath(hertzBookingRedesignCaseStudy.slug)}`,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}${getCaseStudyPath(ocadoDiaryStudyCaseStudy.slug)}`,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}${getCaseStudyPath(hertzVanRentalCaseStudy.slug)}`,
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];
}