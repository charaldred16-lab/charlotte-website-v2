"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { caseStudies } from "@/lib/site";

export function WorkCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(1);

  const updateCurrent = useCallback(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const cards = Array.from(
      carousel.querySelectorAll<HTMLElement>("[data-case-study]"),
    );
    if (!cards.length) return;

    const closest = cards.reduce<{ index: number; distance: number }>(
      (best, card, index) => {
        const distance = Math.abs(card.offsetLeft - carousel.scrollLeft);
        return distance < best.distance ? { index, distance } : best;
      },
      { index: 0, distance: Number.POSITIVE_INFINITY },
    );

    setCurrent(closest.index + 1);
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let frame = 0;
    const handleScroll = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(updateCurrent);
    };

    const resizeObserver = new ResizeObserver(updateCurrent);
    resizeObserver.observe(carousel);
    carousel.addEventListener("scroll", handleScroll, { passive: true });
    updateCurrent();

    return () => {
      window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      carousel.removeEventListener("scroll", handleScroll);
    };
  }, [updateCurrent]);

  return (
    <>
      <p className="work-carousel-status" aria-live="polite" aria-atomic="true">
        <span className="sr-only">Selected work project </span>
        {current} of {caseStudies.length}
      </p>
      <div
        className="work-grid"
        ref={carouselRef}
        aria-label="Selected work case studies"
      >
        {caseStudies.map((study) => (
          <article className="case-study" data-case-study key={study.client}>
            <p className="client">{study.client}</p>
            <h3>{study.title}</h3>
            <div className="rose-rule" aria-hidden="true" />
            <p>{study.summary}</p>
            <div className="meta" aria-label="Project disciplines">
              {study.capabilities.map((capability) => (
                <span key={capability}>{capability}</span>
              ))}
            </div>
            <div className="read">
              <Link
                className="text-link"
                href={study.href}
                aria-label={`Read the ${study.client} case study: ${study.title}`}
              >
                Read case study
              </Link>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
