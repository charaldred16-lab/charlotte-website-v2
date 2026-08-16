import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Charlotte Aldred and the experience across UX research, optimisation, digital marketing and product that shapes her approach to digital problems.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: "About Charlotte Aldred",
    description:
      "Experience across customer understanding, product and growth, with a practical approach shaped around the problem rather than a fixed process.",
    url: "/about",
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
    title: "About Charlotte Aldred",
    description:
      "Experience across customer understanding, product and growth, with a practical approach shaped around the problem rather than a fixed process.",
    images: ["/og-image.png"],
  },
};

export default function AboutPage() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: `${siteConfig.url}/about`,
    jobTitle: "Digital Experience Consultant",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Surrey",
      addressCountry: "GB",
    },
    sameAs: [siteConfig.linkedIn],
  };
  const serializedPersonJsonLd = JSON.stringify(personJsonLd).replace(
    /</g,
    "\\u003c",
  );

  return (
    <>
      <SiteHeader activeItem="About" activeCurrent="page" />

      <main id="main-content" className="about-page" tabIndex={-1}>
        <section className="about-hero" aria-labelledby="about-hero-title">
          <div className="container about-hero-grid">
            <div className="about-hero-heading">
              <p className="eyebrow">About</p>
              <h1 id="about-hero-title">
                My experience sits between customer understanding, product and
                growth.
              </h1>
            </div>

            <div className="about-hero-support">
              <p>
                I’ve spent more than a decade working across UX research,
                conversion optimisation, digital marketing and product.
              </p>
              <p>
                That means I rarely look at a customer problem through a single
                lens — I consider what people need, what their behaviour tells
                us and what the business is trying to achieve.
              </p>
            </div>
          </div>
        </section>

        <section className="about-how" aria-labelledby="about-how-title">
          <div className="container about-how-grid">
            <div className="about-how-main">
              <p className="eyebrow">How I work</p>
              <h2 id="about-how-title">The process should fit the problem.</h2>

              <div className="about-how-copy">
                <p>
                  I don’t arrive with a fixed methodology and ask a team to work
                  around it. I start by understanding the decision that needs to
                  be made, what’s already known and where the uncertainty sits.
                </p>
                <p>
                  From there, I adapt the approach to the business. That might
                  mean research, bringing different evidence together,
                  facilitating a workshop or testing something quickly before
                  more time is invested.
                </p>
              </div>
            </div>

            <blockquote className="about-differentiator">
              I adapt my approach to the business rather than expecting the
              business to adapt to my process.
            </blockquote>
          </div>
        </section>

        <section className="about-experience" aria-labelledby="about-experience-title">
          <div className="container">
            <div className="about-experience-intro">
              <div>
                <p className="eyebrow">Experience</p>
                <h2 id="about-experience-title">
                  Experience across research, optimisation and product
                </h2>
              </div>
              <p>
                Working across acquisition, optimisation, innovation and product
                research has meant approaching the same customer problems from
                different perspectives — understanding the customer, the data
                and the wider business context.
              </p>
            </div>

            <div className="about-experience-grid">
              <article className="about-experience-item">
                <h3>Hertz</h3>
                <p>
                  My work ranged from SEO, conversion optimisation and digital
                  journeys to service innovation. I led cross-functional work
                  including the keyless rental pilot, bringing together customer
                  insight, technology, operations and commercial priorities.
                </p>
              </article>

              <article className="about-experience-item">
                <h3>Ocado Technology</h3>
                <p>
                  As a Senior UX Researcher, I worked with product teams to bring
                  customer understanding into discovery and decision-making
                  earlier, from exploratory research and product strategy through
                  to evaluative testing.
                </p>
              </article>
            </div>

            <div className="about-work-link">
              <Link className="text-link" href="/#work">
                View selected work
              </Link>
            </div>
          </div>
        </section>

        <section className="about-contact" aria-labelledby="about-contact-title">
          <div className="container">
            <div className="about-contact-panel">
              <div>
                <h2 id="about-contact-title">
                  Have a digital problem you’re trying to make sense of?
                </h2>
                <p>
                  If an outside perspective would help, I’d be happy to hear what
                  you’re working through.
                </p>
              </div>
              <Link className="primary-button" href="/contact">
                Get in touch
              </Link>
            </div>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializedPersonJsonLd }}
        />
      </main>

      <SiteFooter />
    </>
  );
}
