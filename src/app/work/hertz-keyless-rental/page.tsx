import type { Metadata } from "next";
import { CaseStudyLayout } from "@/components/case-study/CaseStudyLayout";
import { hertzCaseStudy } from "@/content/case-studies/hertz";
import {
  createCaseStudyJsonLd,
  createCaseStudyMetadata,
  getCaseStudyLayoutContent,
} from "@/lib/case-study";

export const metadata: Metadata = createCaseStudyMetadata(hertzCaseStudy);

export default function HertzCaseStudyPage() {
  const jsonLd = createCaseStudyJsonLd(hertzCaseStudy);
  const serializedJsonLd = JSON.stringify(jsonLd).replace(/</g, "\\u003c");
  const layoutContent = getCaseStudyLayoutContent(hertzCaseStudy);

  return (
    <>
      <CaseStudyLayout {...layoutContent} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializedJsonLd }}
      />
    </>
  );
}
