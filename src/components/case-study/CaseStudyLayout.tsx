import Image from "next/image";
import Link from "next/link";
import type { CaseStudyLayoutContent } from "@/content/case-studies/types";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export function CaseStudyLayout({
  client,
  category,
  title,
  introduction,
  details,
  journey,
  context,
  quote,
  evidence,
  delivery,
  feature,
  principles,
  nextProject,
}: CaseStudyLayoutContent) {
  const evidenceGridClassName =
    evidence?.items.length === 3
      ? "cs-evidence-grid cs-evidence-grid--three"
      : "cs-evidence-grid";

  return (
    <>
      <SiteHeader activeItem="Work" />

      <main id="main-content" className="cs-page" tabIndex={-1}>
        <section className="cs-hero" aria-labelledby="case-study-title">
          <div className="container cs-hero-grid">
            <div>
              <p className="eyebrow">
                {client} · {category}
              </p>
              <h1 id="case-study-title">{title}</h1>
              <p className="cs-hero-introduction">{introduction}</p>

              <dl className="cs-project-details">
                {details.map((detail) => (
                  <div key={detail.label}>
                    <dt>{detail.label}</dt>
                    <dd>{detail.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {journey ? (
              <aside className="cs-service-summary" aria-label={journey.title}>
                <p className="cs-service-summary-title">{journey.title}</p>
                <ol className="cs-service-list">
                  {journey.steps.map((step, index) => (
                    <li className="cs-service-step" key={step.title}>
                      <span className="cs-service-number" aria-hidden="true">
                        {index + 1}
                      </span>
                      <div className="cs-service-copy">
                        <strong>{step.title}</strong>
                        <span>{step.description}</span>
                      </div>
                    </li>
                  ))}
                </ol>
              </aside>
            ) : null}
          </div>
        </section>

        <section className="cs-context">
          <div className="container">
            <div className="cs-context-grid">
              {context.map((section) => (
                <article className="cs-context-block" key={section.title}>
                  <p className="eyebrow">{section.eyebrow}</p>
                  <h2>{section.title}</h2>
                  <div className="rose-rule" aria-hidden="true" />
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </article>
              ))}
            </div>

            {quote ? (
              <div className="cs-problem-quote">
                <blockquote>{quote}</blockquote>
              </div>
            ) : null}
          </div>
        </section>

        {evidence ? (
          <section className="cs-evidence" aria-labelledby="evidence-title">
            <div className="container">
              <div className="cs-evidence-head">
                <div>
                  <p className="eyebrow">{evidence.eyebrow}</p>
                  <h2 id="evidence-title">{evidence.title}</h2>
                </div>
                <p>{evidence.introduction}</p>
              </div>

              <div className={evidenceGridClassName}>
                {evidence.items.map((item, index) => (
                  <figure className="cs-evidence-item" key={item.title}>
                    <a
                      className="cs-evidence-image-link"
                      href={item.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View larger image in a new tab: ${item.title}`}
                    >
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={item.width}
                        height={item.height}
                        sizes="(max-width: 620px) 340px, (max-width: 1100px) 44vw, 360px"
                      />
                    </a>
                    <figcaption className="cs-evidence-caption">
                      <div className="cs-evidence-number">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {delivery ? (
          <section className="cs-delivery" aria-labelledby="delivery-title">
            <div className="container">
              <div className="cs-delivery-head">
                <div>
                  <p className="eyebrow">{delivery.eyebrow}</p>
                  <h2 id="delivery-title">{delivery.title}</h2>
                </div>
                <p>{delivery.introduction}</p>
              </div>

              <ol className="cs-delivery-grid">
                {delivery.steps.map((step, index) => (
                  <li className="cs-delivery-stage" key={step.title}>
                    <span className="cs-stage-node" aria-hidden="true">
                      {index + 1}
                    </span>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        ) : null}

        {feature ? (
          <section className="cs-feature" aria-labelledby="feature-title">
            <div className="container">
              <div
                className={`cs-feature-grid${
                  feature.image ? "" : " cs-feature-grid--text-only"
                }`}
              >
                <div className="cs-feature-copy">
                  <p className="eyebrow">{feature.eyebrow}</p>
                  <h2 id="feature-title">{feature.title}</h2>
                  <p className="cs-feature-lead">{feature.lead}</p>
                  <p className="cs-feature-body">{feature.body}</p>
                </div>

                {feature.image ? (
                  <figure className="cs-feature-image">
                    <Image
                      src={feature.image.src}
                      alt={feature.image.alt}
                      width={feature.image.width}
                      height={feature.image.height}
                      sizes="(max-width: 620px) 340px, (max-width: 900px) 340px, 430px"
                    />
                    <figcaption>{feature.image.caption}</figcaption>
                  </figure>
                ) : null}
              </div>

              <div className="cs-outcome">
                <div className="cs-outcome-grid">
                  <div className="cs-outcome-label">{feature.outcomeLabel}</div>
                  <div className="cs-outcome-statement">{feature.outcome}</div>
                </div>
              </div>
            </div>
          </section>
        ) : null}

        {principles ? (
          <section className="cs-principles" aria-labelledby="principles-title">
            <div className="container">
              <p className="eyebrow">{principles.eyebrow}</p>
              <h2 id="principles-title">{principles.title}</h2>

              <div className="cs-principle-grid">
                {principles.items.map((principle) => (
                  <article className="cs-principle" key={principle.title}>
                    <div className="cs-mini-rule" aria-hidden="true" />
                    <h3>{principle.title}</h3>
                    <p>{principle.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {nextProject ? (
          <section className="cs-next-project" aria-label="Next project">
            <div className="container cs-next-grid">
              <div className="cs-next-label">Next project</div>
              <div>
                <div className="cs-next-title">{nextProject.title}</div>
                <div className="cs-next-client">
                  {nextProject.client} · {nextProject.descriptor}
                </div>
              </div>
              <Link className="text-link cs-next-link" href={nextProject.href}>
                View case study
              </Link>
            </div>
          </section>
        ) : null}
      </main>

      <SiteFooter />
    </>
  );
}
