import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Hertz keyless rental case study",
  description: "The full Hertz keyless rental case study is currently being developed.",
  robots: { index: false, follow: false },
};

export default function HertzCaseStudyPage() {
  return (
    <PlaceholderPage
      eyebrow="Hertz"
      title="Removing the airport rental queue"
      description="The full case study page will be developed in the next phase."
    />
  );
}
