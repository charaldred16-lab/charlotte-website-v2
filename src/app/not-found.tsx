import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="system-page" tabIndex={-1}>
        <div className="container system-page-inner">
          <p className="eyebrow">Page not found</p>
          <h1>This page isn’t here</h1>
          <div className="rose-rule" aria-hidden="true" />
          <p>
            The address may have changed, or the page may not have been published
            yet.
          </p>
          <Link className="primary-button" href="/">
            Return to the homepage
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
