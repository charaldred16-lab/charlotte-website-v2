import type { Metadata } from "next";
import type {
  CaseStudyContent,
  CaseStudyLayoutContent,
} from "@/content/case-studies/types";
import { siteConfig } from "@/lib/site";

export function getCaseStudyPath(slug: string): string {
  return `/work/${slug}`;
}

export function getCaseStudyLayoutContent(
  content: CaseStudyContent,
): CaseStudyLayoutContent {
  return content;
}

export function createCaseStudyMetadata(
  content: CaseStudyContent,
): Metadata {
  const path = getCaseStudyPath(content.slug);
  const image = content.seo.image ?? "/og-image.png";

  return {
    title: content.seo.title,
    description: content.seo.description,
    alternates: { canonical: path },
    openGraph: {
      title: content.seo.title,
      description: content.seo.description,
      url: path,
      type: "article",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${content.client} case study by Charlotte Aldred`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: content.seo.title,
      description: content.seo.description,
      images: [image],
    },
  };
}

export function createCaseStudyJsonLd(content: CaseStudyContent) {
  const path = getCaseStudyPath(content.slug);
  const image = content.seo.image ?? "/og-image.png";

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: content.seo.title,
    description: content.seo.description,
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Person",
      name: siteConfig.name,
    },
    mainEntityOfPage: `${siteConfig.url}${path}`,
    image: new URL(image, siteConfig.url).toString(),
  } as const;
}
