import type { Metadata } from "next";
import { CaseStudyLayout } from "@/components/case-study/CaseStudyLayout";
import { ocadoDiaryStudyCaseStudy } from "@/content/case-studies/ocado-diary-study";
import {
  createCaseStudyJsonLd,
  createCaseStudyMetadata,
  getCaseStudyLayoutContent,
} from "@/lib/case-study";

export const metadata: Metadata = createCaseStudyMetadata(
  ocadoDiaryStudyCaseStudy,
);

export default function OcadoDiaryStudyPage() {
  const jsonLd = createCaseStudyJsonLd(ocadoDiaryStudyCaseStudy);
  const serializedJsonLd = JSON.stringify(jsonLd).replace(/</g, "\\u003c");
  const layoutContent = getCaseStudyLayoutContent(
    ocadoDiaryStudyCaseStudy,
  );

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