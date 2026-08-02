"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main id="main-content" className="system-page" tabIndex={-1}>
      <div className="container system-page-inner">
        <Link className="brand system-page-brand" href="/" aria-label="Charlotte Aldred home">
          CA
        </Link>
        <p className="eyebrow">Something went wrong</p>
        <h1>The page couldn’t be loaded</h1>
        <div className="rose-rule" aria-hidden="true" />
        <p>Please try again. If the problem continues, return to the homepage.</p>
        <div className="system-page-actions">
          <button className="primary-button" type="button" onClick={reset}>
            Try again
          </button>
          <Link className="text-link" href="/">
            Return to the homepage
          </Link>
        </div>
      </div>
    </main>
  );
}
