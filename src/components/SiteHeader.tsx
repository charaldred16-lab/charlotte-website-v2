"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { navigation } from "@/lib/site";

type SiteHeaderProps = {
  activeItem?: (typeof navigation)[number]["label"];
};

export function SiteHeader({ activeItem }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;

    const firstLink = menuRef.current?.querySelector<HTMLAnchorElement>("a");
    window.requestAnimationFrame(() => firstLink?.focus());
  }, [open]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape" || !open) return;
      setOpen(false);
      window.requestAnimationFrame(() => triggerRef.current?.focus());
    };

    const mediaQuery = window.matchMedia("(min-width: 1025px)");
    const handleWideViewport = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };

    document.addEventListener("keydown", handleEscape);
    mediaQuery.addEventListener("change", handleWideViewport);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      mediaQuery.removeEventListener("change", handleWideViewport);
    };
  }, [open]);

  const headerClassName = activeItem
    ? "site-header site-header--inner-page"
    : "site-header";

  return (
    <header className={headerClassName}>
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label="Charlotte Aldred home">
          CA
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={item.label === activeItem ? "nav-active" : undefined}
              aria-current={item.label === activeItem ? "location" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          ref={triggerRef}
          className="menu-trigger"
          type="button"
          aria-expanded={open}
          aria-controls={menuId}
          aria-haspopup="true"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <nav
        ref={menuRef}
        id={menuId}
        className="responsive-menu"
        aria-label="Mobile navigation"
        hidden={!open}
      >
        <div className="container responsive-menu-inner">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={item.label === activeItem ? "nav-active" : undefined}
              aria-current={item.label === activeItem ? "location" : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
