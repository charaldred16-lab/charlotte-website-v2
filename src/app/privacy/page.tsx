import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { siteConfig } from "@/lib/site";
import styles from "@/styles/privacy.module.css";

export const metadata: Metadata = {
  title: "Privacy notice",
  description:
    "Privacy information for visitors who contact Charlotte Aldred through this consultancy website.",
  alternates: {
    canonical: "/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />

      <main id="main-content" className={styles.page} tabIndex={-1}>
        <article className={`container ${styles.content}`}>
          <p className="eyebrow">Privacy</p>
          <h1>Privacy notice</h1>
          <p className={styles.updated}>Last updated: 16 August 2026</p>

          <p className={styles.intro}>
            This notice explains how I handle personal information when you use
            this website, send an enquiry or choose to book an introductory
            call.
          </p>

          <section>
            <h2>Who is responsible for your information</h2>
            <p>
              Charlotte Aldred is responsible for the personal information
              collected through this consultancy website. If you have a
              question about this notice or want to exercise a data protection
              right, email <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
            </p>
          </section>

          <section>
            <h2>What information I collect</h2>
            <p>
              If you use the enquiry form, I collect the information you choose
              to provide, including your name, email address, company if you add
              one, and the content of your message.
            </p>
            <p>
              Like most websites, the hosting and security services used to run
              the site may also process limited technical information such as
              an IP address, browser details and server logs.
            </p>
          </section>

          <section>
            <h2>Why I use it</h2>
            <p>I use personal information to:</p>
            <ul>
              <li>read and respond to enquiries;</li>
              <li>arrange conversations you ask for;</li>
              <li>consider whether I can help with a potential project;</li>
              <li>manage any follow-up or resulting business relationship; and</li>
              <li>keep the website and enquiry process secure and reliable.</li>
            </ul>
            <p>
              Depending on the circumstances, I rely on my legitimate interests
              in responding to genuine business enquiries and, where relevant,
              taking steps at your request before entering into a contract.
            </p>
          </section>

          <section>
            <h2>Services that may process your information</h2>
            <p>
              The website uses Formspree to receive contact-form submissions and
              Vercel to host the website. If you choose the 15-minute booking
              option, you leave this website and use Google Calendar’s booking
              service. Those providers may process information needed to deliver
              their services.
            </p>
            <p>
              Some service providers may process information outside the UK. I
              rely on the safeguards provided by those services for relevant
              international transfers.
            </p>
          </section>

          <section>
            <h2>How long I keep information</h2>
            <p>
              I keep enquiry information only for as long as it is reasonably
              needed to respond, manage follow-up and maintain appropriate
              business records. If an enquiry leads to work, relevant records
              may be retained for longer where needed for contractual, legal,
              tax or accounting purposes.
            </p>
          </section>

          <section>
            <h2>Your rights</h2>
            <p>
              UK data protection law gives you rights over your personal
              information. Depending on the circumstances, these can include
              asking for access, correction or deletion, restricting or
              objecting to processing, and asking for information you provided
              in a portable format.
            </p>
            <p>
              To make a request, email <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
              You can also raise a concern with the UK Information
              Commissioner’s Office if you are unhappy with how your information
              has been handled.
            </p>
          </section>

          <section>
            <h2>Other websites</h2>
            <p>
              Links to services such as Google Calendar and LinkedIn take you to
              third-party websites. Their own privacy notices explain how they
              handle information you provide directly to them.
            </p>
          </section>

          <div className={styles.backLink}>
            <Link href="/contact">Back to Contact</Link>
          </div>
        </article>
      </main>

      <SiteFooter />
    </>
  );
}
