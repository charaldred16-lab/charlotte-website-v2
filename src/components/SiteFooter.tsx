import Link from "next/link";
import { navigation, siteConfig } from "@/lib/site";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
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
          <Link href="/privacy">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}
