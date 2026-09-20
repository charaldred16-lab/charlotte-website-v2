import type { Metadata } from "next";
import { CaseStudyLayout } from "@/components/case-study/CaseStudyLayout";
import { hertzVanRentalCaseStudy } from "@/content/case-studies/hertz-van-rental";
import {
  createCaseStudyJsonLd,
  createCaseStudyMetadata,
  getCaseStudyLayoutContent,
} from "@/lib/case-study";

export const metadata: Metadata = createCaseStudyMetadata(
  hertzVanRentalCaseStudy,
);

export default function HertzVanRentalPage() {
  const jsonLd = createCaseStudyJsonLd(hertzVanRentalCaseStudy);
  const serializedJsonLd = JSON.stringify(jsonLd).replace(/</g, "\\u003c");
  const layoutContent = getCaseStudyLayoutContent(
    hertzVanRentalCaseStudy,
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