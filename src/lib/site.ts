const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
const resolvedUrl = configuredUrl || (vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000");

export const siteConfig = {
  name: "Charlotte Aldred",
  title: "Charlotte Aldred | Digital Experience & Product Strategy",
  description:
    "Helping businesses make better decisions about their digital products and experiences through research, data and experimentation.",
  url: resolvedUrl.replace(/\/$/, ""),
  email:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "charaldred16@gmail.com",
  linkedIn:
    process.env.NEXT_PUBLIC_LINKEDIN_URL ??
    "https://www.linkedin.com/in/charlotte-aldred-b055151b/",
  contactFormEndpoint:
    process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ??
    "https://formspree.io/f/xqpzdbbd",
  introCallUrl:
    process.env.NEXT_PUBLIC_INTRO_CALL_URL ??
    "https://calendar.app.google/sHEzKAsREm4a5LAB7",
  location: "Surrey, United Kingdom",
} as const;

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Selected Work", href: "/#work" },
  { label: "Contact", href: "/contact" },
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
    title: "Improving the car rental booking journey",
    summary:
      "A programme of redesign and A/B testing that simplified the booking experience and increased revenue per visitor by $12.",
    capabilities: [
      "Experimentation",
      "Conversion optimisation",
      "Digital experience",
    ],
    href: "/work/hertz-booking-redesign",
  },
  {
    client: "Ocado Technology",
    title: "Understanding how customers approach their grocery shop",
    summary:
      "A two-week diary study with 20 customers that helped Product, Engineering and UX understand real grocery shopping behaviour.",
    capabilities: [
      "Customer research",
      "Product insight",
      "Stakeholder engagement",
    ],
    href: "/work/ocado-diary-study",
  },
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
  {
    client: "Hertz",
    title: "Designing a better van rental experience",
    summary:
      "Understanding the different needs of van customers led to a redesigned journey and a 50% increase in conversion.",
    capabilities: [
      "Customer understanding",
      "Journey design",
      "Experimentation",
    ],
    href: "/work/hertz-van-rental",
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
