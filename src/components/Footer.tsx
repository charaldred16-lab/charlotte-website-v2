import Link from "next/link";
import { siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-rose-200 bg-rose-100">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-rose-500">
              Charlotte Aldred
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight text-stone-900">
              Helping organisations create better digital experiences through
              customer understanding, experimentation and strategy.
            </h2>
          </div>

          <div className="md:justify-self-end">
            <p className="text-sm font-semibold text-stone-900">
              Get in touch
            </p>

            <div className="mt-4 flex flex-col gap-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="w-fit rounded-md text-stone-700 underline decoration-rose-300 underline-offset-4 transition hover:text-stone-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 focus-visible:ring-offset-4 focus-visible:ring-offset-rose-100"
              >
                {siteConfig.email}
              </a>

              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-fit rounded-md text-stone-700 underline decoration-rose-300 underline-offset-4 transition hover:text-stone-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 focus-visible:ring-offset-4 focus-visible:ring-offset-rose-100"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-rose-200 pt-6 text-sm text-stone-600 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="rounded-md transition hover:text-stone-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 focus-visible:ring-offset-4 focus-visible:ring-offset-rose-100"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}