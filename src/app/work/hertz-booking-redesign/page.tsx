import type { Metadata } from "next";
import { CaseStudyLayout } from "@/components/case-study/CaseStudyLayout";
import { hertzBookingRedesignCaseStudy } from "@/content/case-studies/hertz-booking-redesign";
import {
  createCaseStudyJsonLd,
  createCaseStudyMetadata,
  getCaseStudyLayoutContent,
} from "@/lib/case-study";

export const metadata: Metadata = createCaseStudyMetadata(
  hertzBookingRedesignCaseStudy,
);

export default function HertzBookingRedesignPage() {
  const jsonLd = createCaseStudyJsonLd(hertzBookingRedesignCaseStudy);
  const serializedJsonLd = JSON.stringify(jsonLd).replace(/</g, "\\u003c");
  const layoutContent = getCaseStudyLayoutContent(
    hertzBookingRedesignCaseStudy,
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