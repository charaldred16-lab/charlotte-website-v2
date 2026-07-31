import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "About",
  description: "The full About page is currently being developed.",
  robots: { index: false, follow: false },
};

export default function AboutPage() {
  return (
    <PlaceholderPage
      eyebrow="About"
      title="About page"
      description="The full About page is the next part of the website to be developed."
    />
  );
}
