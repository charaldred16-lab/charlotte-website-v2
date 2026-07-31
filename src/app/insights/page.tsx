import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Insights",
  description: "Articles will appear here as they are written and published.",
  robots: { index: false, follow: false },
};

export default function InsightsPage() {
  return (
    <PlaceholderPage
      eyebrow="Insights"
      title="Insights"
      description="Articles will appear here as they are written and published."
    />
  );
}
