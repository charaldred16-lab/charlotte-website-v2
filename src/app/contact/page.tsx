import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { siteConfig } from "@/lib/site";
import styles from "@/styles/contact.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Charlotte Aldred about a digital experience problem, opportunity or project, or book a 15-minute introductory call.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: "Contact Charlotte Aldred",
    description:
      "Share what you’re working on, send an enquiry or book a 15-minute introductory call with Charlotte Aldred.",
    url: "/contact",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Charlotte Aldred — Digital Experience Consultancy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Charlotte Aldred",
    description:
      "Share what you’re working on, send an enquiry or book a 15-minute introductory call with Charlotte Aldred.",
    images: ["/og-image.png"],
  },
};

export default function ContactPage() {
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Charlotte Aldred",
    url: `${siteConfig.url}/contact`,
    mainEntity: {
      "@type": "Person",
      name: siteConfig.name,
      email: siteConfig.email,
      url: siteConfig.url,
    },
  };
  const serializedContactJsonLd = JSON.stringify(contactJsonLd).replace(
    /</g,
    "\\u003c",
  );

  return (
    <>
      <SiteHeader activeItem="Contact" activeCurrent="page" />

      <main id="main-content" className={styles.page} tabIndex={-1}>
        <section className={styles.contact} aria-labelledby="contact-title">
          <div className={`container ${styles.grid}`}>
            <div className={styles.intro}>
              <p className="eyebrow">Contact</p>
              <h1 id="contact-title">
                Let’s talk about what you’re trying to achieve.
              </h1>
              <p className={styles.introCopy}>
                You don’t need a finished brief or to know exactly what support
                you need. Share a little about what you’re working on and I can
                let you know whether I think I can help.
              </p>

              <div className={styles.callOption}>
                <strong>Prefer to talk?</strong>
                <a
                  className={styles.secondaryButton}
                  href={siteConfig.introCallUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Book a 15-minute intro call
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>
            </div>

            <ContactForm
              endpoint={siteConfig.contactFormEndpoint}
              email={siteConfig.email}
            />
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializedContactJsonLd }}
        />
      </main>

      <SiteFooter />
    </>
  );
}
