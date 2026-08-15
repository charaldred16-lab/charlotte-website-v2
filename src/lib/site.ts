const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
const resolvedUrl = configuredUrl || (vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000");

export const siteConfig = {
  name: "Charlotte Aldred",
  title: "Charlotte Aldred | Digital Experience Consultancy",
  description:
    "Helping organisations simplify complex digital problems and turn insight into clear priorities, practical action and more confident decisions.",
  url: resolvedUrl.replace(/\/$/, ""),
  email:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@charlottealdred.com",
  linkedIn:
    process.env.NEXT_PUBLIC_LINKEDIN_URL ??
    "https://www.linkedin.com/in/charlotte-aldred-b055151b/",
  location: "Surrey, United Kingdom",
} as const;

export const navigation = [
  { label: "Work", href: "/#work" },
  { label: "How I help", href: "/#how" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/#insights" },
  { label: "Let’s talk", href: "/#contact" },
] as const;

export const challenges = [
  {
    title: "Exploring something new?",
    description:
      "Clarify the opportunity, understand what matters to customers and shape the next steps before investing in a solution.",
    capabilities: ["Discovery research", "Customer interviews", "Workshops"],
  },
  {
    title: "Improving an existing experience?",
    description:
      "Use customer insight, behavioural data and experimentation to identify where customers are struggling and what to improve first.",
    capabilities: [
      "Journey optimisation",
      "Behavioural insight",
      "Experimentation",
    ],
  },
  {
    title: "Need clarity on a complex problem?",
    description:
      "Bring together evidence, customer needs and business priorities to turn an unclear problem into a practical direction.",
    capabilities: [
      "Insight synthesis",
      "Prioritisation",
      "Stakeholder workshops",
    ],
  },
  {
    title: "Need experienced digital leadership?",
    description:
      "I provide experienced support to shape the direction, guide research and experimentation, and help teams move forward with confidence.",
    capabilities: ["Fractional leadership", "Strategy", "Team mentoring"],
  },
] as const;

export const caseStudies = [
  {
    client: "Hertz",
    title: "Removing the airport rental queue",
    summary:
      "A cross-functional project that adapted existing keyless technology so customers could avoid the rental desk and begin their journey more quickly.",
    capabilities: [
      "Digital innovation",
      "Service design",
      "Cross-functional delivery",
    ],
    href: "/work/hertz-keyless-rental",
  },
  {
    client: "Ocado Technology",
    title: "Rethinking where customers discover offers",
    summary:
      "Research showed that checkout was too late to solve the problem, shifting the focus to how customers understood offers while they were shopping.",
    capabilities: [
      "Customer insight",
      "Product direction",
      "Journey optimisation",
    ],
    href: "/work/ocado-offers",
  },
] as const;

export const principles = [
  {
    title: "Start with understanding",
    description:
      "Good decisions begin with understanding customers, not assumptions.",
  },
  {
    title: "Adapt the approach",
    description:
      "Every organisation is different. I adapt my approach to the business rather than expecting the business to adapt to my process.",
  },
  {
    title: "Turn insight into action",
    description:
      "The goal isn’t research for its own sake. It’s helping teams make better decisions.",
  },
] as const;

export const insights = [
  {
    title: "Why customer behaviour doesn’t always match what people say",
    summary:
      "Exploring the gap between what people say and what they do, and how to uncover the real drivers of decision making.",
    href: "/insights",
    featured: true,
  },
  {
    title: "When research isn’t the answer",
    summary:
      "Situations where research can create more noise than clarity—and what to do instead.",
    href: "/insights",
  },
  {
    title: "Three questions I ask before every discovery project",
    summary:
      "A simple framework to help define the problem, align stakeholders and start with the right focus.",
    href: "/insights",
  },
] as const;
