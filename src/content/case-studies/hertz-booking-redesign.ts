import type { CaseStudyContent } from "@/content/case-studies/types";

export const hertzBookingRedesignCaseStudy = {
  slug: "hertz-booking-redesign",
  seo: {
    title: "Improving the car rental booking journey",
    description:
      "How Charlotte Aldred led a programme of redesign and A/B testing at Hertz that simplified the booking journey and increased revenue per visitor by $12.",
  },
  client: "Hertz",
  category: "Digital optimisation and experimentation",
  title: "Improving the car rental booking journey",
  introduction:
    "Hertz’s booking journey had evolved over time. Parts of the experience felt dated, there was a lot of information competing for attention and some of the more complicated decisions were difficult for customers to work through. I led a programme of redesign and A/B testing to make the journey easier to use and understand which changes genuinely improved customer behaviour and commercial performance.",
  details: [
    {
      label: "My contribution",
      value:
        "Led the optimisation programme, prioritised opportunities and worked with design and development partners to test improvements",
    },
    {
      label: "Focus",
      value: "Conversion optimisation, experimentation and customer experience",
    },
    {
      label: "Outcome",
      value: "$12 increase in revenue per visitor",
    },
  ],
  journey: {
    title: "Where we focused",
    steps: [
      {
        title: "Find a location",
        description:
          "Introduced Google Maps to make choosing a rental location easier.",
      },
      {
        title: "Choose a car",
        description:
          "Made more vehicles visible and brought important comparison information forward.",
      },
      {
        title: "Choose protection",
        description:
          "Tested different ways of presenting insurance options and prices.",
      },
      {
        title: "Complete the booking",
        description:
          "Simplified checkout and made supporting legal information easier to understand.",
      },
    ],
  },
  context: [
    {
      eyebrow: "The challenge",
      title: "Making a complex booking journey easier to use",
      paragraphs: [
        "The booking journey had built up over time. Customers had to work through a lot of information and some parts of the experience made comparing options harder than it needed to be.",
        "The opportunity was not simply to make the site look more modern. We wanted to improve the experience while being able to show which changes made a measurable difference.",
      ],
    },
    {
      eyebrow: "The approach",
      title: "Improve the journey through testing",
      paragraphs: [
        "Rather than treating the redesign as one large launch, we tested improvements across different parts of the booking journey.",
        "This allowed us to understand how individual changes affected customer behaviour before deciding what should be rolled out more widely.",
      ],
    },
  ],
  quote:
    "The aim was not simply to make the booking journey look better. It was to test whether each change made it easier for customers to make a decision.",
  delivery: {
    eyebrow: "What we changed",
    title: "Testing the parts of the journey that affected decisions",
    introduction:
      "The work covered both the overall design of the journey and specific areas where customers had to understand or compare different options.",
    steps: [
      {
        title: "Modernise the experience",
        description:
          "We redesigned the wider booking journey and simplified the route through checkout.",
      },
      {
        title: "Improve car comparison",
        description:
          "We changed the results layout so more vehicles could be seen at once and important information was easier to scan.",
      },
      {
        title: "Test insurance choices",
        description:
          "We explored different ways of presenting rental insurance, including how options and prices were shown.",
      },
      {
        title: "Simplify supporting information",
        description:
          "We reduced the complexity of legal content and made important information easier to understand at the point it was needed.",
      },
    ],
  },
  feature: {
    eyebrow: "The outcome",
    title: "Measurable commercial improvement",
    lead:
      "The programme of redesign and experimentation increased revenue per visitor by $12.",
    body:
      "Testing the journey iteratively meant decisions were based on customer behaviour rather than opinion. Individual changes could be tested, measured and improved before being rolled out more widely.",
    outcomeLabel: "Commercial impact",
    outcome: "$12 increase in revenue per visitor.",
  },
  principles: {
    eyebrow: "What made the work effective",
    title: "Three principles shaped the programme",
    items: [
      {
        title: "Test rather than assume",
        description:
          "Changes were measured against customer behaviour rather than being rolled out because they appeared better.",
      },
      {
        title: "Make decisions easier",
        description:
          "The work focused on helping customers understand, compare and choose rather than simply reducing the amount of content.",
      },
      {
        title: "Improve iteratively",
        description:
          "Breaking the journey into testable improvements allowed learning to shape what happened next.",
      },
    ],
  },
  nextProject: {
    client: "Ocado Technology",
    title: "Understanding how customers approach their grocery shop",
    descriptor: "Customer research and product understanding",
    href: "/work/ocado-diary-study",
  },
} satisfies CaseStudyContent;