import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { WorkCarousel } from "@/components/WorkCarousel";
import {
  challenges,
  insights,
  navigation,
  principles,
  siteConfig,
} from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: siteConfig.title },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: "/",
  },
  twitter: {
    title: siteConfig.title,
    description: siteConfig.description,
  },
};

export default function HomePage() {
  const featuredInsight = insights.find((item) => "featured" in item && item.featured) ?? insights[0];
  const secondaryInsights = insights.filter((item) => item !== featuredInsight);

  const currentYear = new Date().getFullYear();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    description: siteConfig.description,
    jobTitle: "Digital Experience Consultant",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Surrey",
      addressCountry: "GB",
    },
    sameAs: [siteConfig.linkedIn],
    knowsAbout: [
      "Digital experience strategy",
      "UX research",
      "Conversion rate optimisation",
      "Customer insight",
      "Experimentation",
    ],
  };
  const serializedJsonLd = JSON.stringify(jsonLd).replace(/</g, "\\u003c");

  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="container hero-layout">
            <div className="hero-headline">
              <h1 id="hero-title">
                <span className="line">Helping create</span>
                <span className="line">better digital</span>
                <span className="line">experiences that</span>
                <span className="line">customers love and</span>
                <span className="line">businesses benefit from.</span>
              </h1>
            </div>

            <div className="hero-support">
              <div className="rose-rule" aria-hidden="true" />
              <p className="support">
                I help organisations simplify complex digital problems and turn
                insight into clear priorities, practical action and more
                confident decisions.
              </p>
              <div className="hero-actions">
                <a className="primary-button" href={`mailto:${siteConfig.email}`}>
                  Let’s talk
                </a>
                <Link className="text-link" href="#work">
                  View my work
                </Link>
              </div>
            </div>

            <div className="hero-visual">
              <picture>
                <source
                  media="(max-width: 620px)"
                  srcSet="/hero-illustration-mobile.png"
                />
                <Image
                  src="/hero-illustration.png"
                  alt="A network of connected points converging into one clear outcome."
                  width={390}
                  height={338}
                  priority
                />
              </picture>
            </div>
          </div>
        </section>

        <section className="worked-with" aria-label="Previously worked with">
          <div className="container worked-with-inner">
            <Image
              src="/worked-with-strip.png"
              alt="Previously worked with Hertz and Ocado Technology."
              width={477}
              height={73}
            />
          </div>
        </section>

        <section className="challenges" aria-labelledby="challenges-title">
          <div className="container">
            <div className="section-intro">
              <h2 id="challenges-title">The challenges I help solve</h2>
              <p>
                Every organisation is different. I adapt the approach, but these
                are the situations where I most often help.
              </p>
            </div>
            <div className="challenge-grid">
              {challenges.map((challenge) => (
                <article className="challenge" key={challenge.title}>
                  <div className="rose-rule" aria-hidden="true" />
                  <h3>{challenge.title}</h3>
                  <p>{challenge.description}</p>
                  <div className="capabilities" aria-label="Relevant capabilities">
                    {challenge.capabilities.map((capability) => (
                      <span key={capability}>{capability}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="work" id="work" aria-labelledby="work-title">
          <div className="container">
            <div className="section-intro">
              <h2 id="work-title">Selected work</h2>
              <p>
                A few examples of how I’ve helped teams bring clarity to digital
                problems and decide what to do next.
              </p>
            </div>
            <WorkCarousel />
          </div>
        </section>

        <section className="how" id="how" aria-labelledby="how-title">
          <div className="container">
            <h2 id="how-title">How I work</h2>
            <div className="how-grid">
              {principles.map((principle) => (
                <article className="principle" key={principle.title}>
                  <div className="rose-rule" aria-hidden="true" />
                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about" id="about" aria-labelledby="about-title">
          <div className="container about-grid">
            <div className="about-copy">
              <h2 id="about-title">About</h2>
              <div className="rose-rule" aria-hidden="true" />
              <p>
                Over the last ten years, I’ve worked across UX research, CRO and
                digital marketing, helping teams at Hertz and Ocado Technology
                understand customers, improve digital experiences and decide
                where to focus.
              </p>
              <p>
                I bring together customer insight, behavioural data and different
                perspectives, then turn them into a practical plan teams can act
                on. I work collaboratively and adapt the approach to the
                organisation rather than expecting it to adapt to my process.
              </p>
              <div className="more">
                <Link className="text-link" href="/about">
                  More about me
                </Link>
              </div>
            </div>
            <aside className="pullquote">
              <p>
                I’m most useful when a problem feels unclear or larger than it
                needs to be.
              </p>
            </aside>
          </div>
        </section>

        <section className="insights" id="insights" aria-labelledby="insights-title">
          <div className="container">
            <div className="insights-head">
              <div>
                <p className="eyebrow">Insights</p>
                <h2 id="insights-title">Latest thinking</h2>
              </div>
              <Link className="text-link insights-all insights-all-top" href="/insights">
                View all insights
              </Link>
            </div>

            <div className="insights-grid">
              <article className="featured-article">
                <Link className="article-title" href={featuredInsight.href}>
                  {featuredInsight.title}
                </Link>
                <div className="rose-rule" aria-hidden="true" />
                <p className="article-summary">{featuredInsight.summary}</p>
                <div className="article-read">
                  <Link
                    className="text-link"
                    href={featuredInsight.href}
                    aria-label={`Read article: ${featuredInsight.title}`}
                  >
                    Read article
                  </Link>
                </div>
              </article>

              {secondaryInsights.map((article, index) => (
                <article
                  className={`small-article small-article-${index + 1}`}
                  key={article.title}
                >
                  <Link className="article-title" href={article.href}>
                    {article.title}
                  </Link>
                  <div className="rose-rule" aria-hidden="true" />
                  <p className="article-summary">{article.summary}</p>
                  <div className="article-read">
                    <Link
                      className="text-link"
                      href={article.href}
                      aria-label={`Read article: ${article.title}`}
                    >
                      Read article
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            <Link className="text-link insights-all insights-all-bottom" href="/insights">
              View all insights
            </Link>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="container contact-copy">
            <h2 id="contact-title">Let’s talk</h2>
            <p>
              If you’re exploring a new opportunity, improving an existing
              experience or looking for another perspective, I’d be happy to hear
              more.
            </p>
            <a className="primary-button" href={`mailto:${siteConfig.email}`}>
              Let’s talk
            </a>
          </div>
        </section>
      </main>

      <footer id="footer-nav">
        <div className="container footer-grid">
          <div className="footer-brand">
            <Link className="brand" href="/" aria-label="Charlotte Aldred home">
              CA
            </Link>
            <p className="copyright">© {currentYear} Charlotte Aldred</p>
          </div>
          <nav className="footer-nav" aria-label="Footer navigation">
            {navigation.map((item) => (
              <Link key={item.label} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="footer-contact">
            <strong>Contact</strong>
            <a href={`mailto:${siteConfig.email}`}>Email</a>
            <a href={siteConfig.linkedIn} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializedJsonLd }}
      />
    </>
  );
}
