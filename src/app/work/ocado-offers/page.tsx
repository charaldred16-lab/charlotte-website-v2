import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Ocado offers case study",
  description: "The full Ocado offers case study is currently being developed.",
  robots: { index: false, follow: false },
};

export default function OcadoCaseStudyPage() {
  return (
    <PlaceholderPage
      eyebrow="Ocado Technology"
      title="Rethinking where customers discover offers"
      description="The full case study page will be developed in the next phase."
    />
  );
}
