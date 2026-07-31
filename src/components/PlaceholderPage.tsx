import Link from "next/link";

interface PlaceholderPageProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function PlaceholderPage({
  eyebrow,
  title,
  description,
}: PlaceholderPageProps) {
  return (
    <main className="placeholder-page">
      <div className="container placeholder-inner">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <div className="rose-rule" aria-hidden="true" />
        <p>{description}</p>
        <Link className="text-link" href="/">
          Back to the homepage
        </Link>
      </div>
    </main>
  );
}
