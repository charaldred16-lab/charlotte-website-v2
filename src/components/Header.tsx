import Link from "next/link";
import { siteConfig } from "@/data/site";

export default function Header() {
  return (
    <header className="border-b border-rose-200 bg-rose-100">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 focus-visible:ring-offset-4 focus-visible:ring-offset-rose-100"
          aria-label="Charlotte Aldred homepage"
        >
          <span
            className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-sm font-semibold tracking-wide text-stone-900 shadow-sm"
            aria-hidden="true"
          >
            CA
          </span>

          <span className="hidden sm:block">
            <span className="block text-base font-semibold text-stone-900">
              {siteConfig.name}
            </span>

            <span className="block text-xs text-stone-600">
              Digital Experience & Optimisation
            </span>
          </span>
        </Link>

        <nav aria-label="Primary navigation">
          <ul className="hidden items-center gap-6 lg:flex">
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-md text-sm font-medium text-stone-700 transition hover:text-stone-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 focus-visible:ring-offset-4 focus-visible:ring-offset-rose-100"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="/contact"
          className="rounded-full bg-stone-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-stone-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 focus-visible:ring-offset-4 focus-visible:ring-offset-rose-100"
        >
          Work with me
        </Link>
      </div>

      <nav
        aria-label="Mobile navigation"
        className="border-t border-rose-200 px-6 py-3 lg:hidden"
      >
        <ul className="flex gap-5 overflow-x-auto pb-1">
          {siteConfig.navigation.map((item) => (
            <li key={item.href} className="shrink-0">
              <Link
                href={item.href}
                className="rounded-md text-sm font-medium text-stone-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 focus-visible:ring-offset-4 focus-visible:ring-offset-rose-100"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}