import type { Metadata } from "next";
import { CaseStudyLayout } from "@/components/case-study/CaseStudyLayout";
import { ocadoCaseStudy } from "@/content/case-studies/ocado";
import {
  createCaseStudyJsonLd,
  createCaseStudyMetadata,
  getCaseStudyLayoutContent,
} from "@/lib/case-study";

export const metadata: Metadata = createCaseStudyMetadata(ocadoCaseStudy);

export default function OcadoCaseStudyPage() {
  const jsonLd = createCaseStudyJsonLd(ocadoCaseStudy);
  const serializedJsonLd = JSON.stringify(jsonLd).replace(/</g, "\\u003c");
  const layoutContent = getCaseStudyLayoutContent(ocadoCaseStudy);

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
