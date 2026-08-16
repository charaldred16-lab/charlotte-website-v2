import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Problem-led digital experience support from Charlotte Aldred, helping teams get clear on what matters and confident about what to do next.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: "Services | Charlotte Aldred",
    description:
      "Problem-led digital experience support that brings customer understanding, behavioural data and commercial context together to help teams move forward with confidence.",
    url: "/services",
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
    title: "Services | Charlotte Aldred",
    description:
      "Problem-led digital experience support that helps teams get clear on what matters and confident about what to do next.",
    images: ["/og-image.png"],
  },
};

const problems = [
  {
    title: "Something isn’t working and you don’t know why.",
    description:
      "I help uncover what’s driving it and where the biggest opportunities are.",
  },
  {
    title: "You have an idea but aren’t confident it’s right.",
    description:
      "I help test assumptions and build evidence before you invest.",
  },
  {
    title: "There are too many possible priorities.",
    description:
      "I help bring insight and data together so you can focus on what matters.",
  },
  {
    title: "You want to improve an experience but aren’t sure where to focus.",
    description:
      "I help identify and test changes that genuinely improve the experience.",
  },
] as const;

export default function ServicesPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Digital Experience Consultancy",
    provider: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: "GB",
    description:
      "Problem-led digital experience support combining customer understanding, behavioural data and commercial context to help teams make confident decisions.",
    url: `${siteConfig.url}/services`,
  };
  const serializedServiceJsonLd = JSON.stringify(serviceJsonLd).replace(
    /</g,
    "\\u003c",
  );

  return (
    <>
      <SiteHeader activeItem="Services" activeCurrent="page" />

      <main id="main-content" className="services-page" tabIndex={-1}>
        <section className="services-hero" aria-labelledby="services-hero-title">
          <div className="container services-hero-grid">
            <div className="services-hero-heading">
              <p className="eyebrow">Services</p>
              <h1 id="services-hero-title">
                I help teams get clear on what matters and confident about what
                to do next.
              </h1>
            </div>

            <div className="services-hero-support">
              <p>
                Whether something isn’t working, priorities are competing or an
                idea needs testing, I bring customer understanding, behavioural
                data and commercial context together to help find the right way
                forward.
              </p>
            </div>
          </div>
        </section>

        <section
          className="services-problems"
          aria-labelledby="services-problems-title"
        >
          <div className="container">
            <h2 className="eyebrow" id="services-problems-title">
              Problems I help solve
            </h2>

            <div className="services-problem-grid">
              {problems.map((problem, index) => (
                <article
                  className={`services-problem services-problem-${index + 1}`}
                  key={problem.title}
                >
                  <h3>{problem.title}</h3>
                  <p>{problem.description}</p>
                </article>
              ))}
            </div>

            <p className="services-approach-note">
              <strong>The approach is shaped around the question.</strong>{" "}
              I use the right mix of customer insight, behavioural data and
              experimentation.
            </p>
          </div>
        </section>

        <section
          className="services-fractional"
          aria-labelledby="services-fractional-title"
        >
          <div className="container services-fractional-grid">
            <div>
              <p className="eyebrow">Ongoing support</p>
              <h2 id="services-fractional-title">
                Sometimes the problem isn’t one project.
              </h2>
            </div>

            <p className="services-fractional-copy">
              I also work with organisations on a fractional basis, helping
              teams set priorities, bring customer evidence into decisions and
              keep improvement moving.
            </p>
          </div>
        </section>

        <section className="services-contact" aria-labelledby="services-contact-title">
          <div className="container services-contact-grid">
            <h2 id="services-contact-title">Tell me what’s happening.</h2>
            <p>
              You don’t need a finished brief. Tell me what’s going on and we
              can work out whether I can help.
            </p>
            <a className="primary-button" href="/contact">
              Get in touch
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializedServiceJsonLd }}
      />
    </>
  );
}
