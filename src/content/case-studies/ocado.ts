import type { CaseStudyContent } from "@/content/case-studies/types";

export const ocadoCaseStudy = {
  slug: "ocado-offers",
  seo: {
    title: "Rethinking where customers discover offers",
    description:
      "How Charlotte Aldred used customer research at Ocado Technology to show that checkout was too late to prevent many failed offers, helping redirect the work towards clearer guidance earlier in the shopping journey.",
  },
  client: "Ocado Technology",
  category: "Customer insight and product direction",
  title: "Rethinking where customers discover offers",
  introduction:
    "A product team wanted to help customers recover special offers they had not completed by introducing a new page at checkout. Research showed that, for many customers, checkout was already too late. I helped the team understand where the confusion began and redirect the work towards clearer guidance earlier in the shopping journey.",
  details: [
    {
      label: "My contribution",
      value:
        "Led the research, challenged the proposed solution and translated the findings into a clearer product direction",
    },
    {
      label: "Focus",
      value: "Customer understanding, product strategy and stakeholder influence",
    },
    {
      label: "Journey area",
      value: "Browsing, basket building and checkout",
    },
  ],
  journey: {
    title: "The decision path",
    steps: [
      {
        title: "Proposed solution",
        description: "Show customers missed offers at checkout.",
      },
      {
        title: "Research finding",
        description:
          "Many customers believed they had already completed the offer.",
      },
      {
        title: "Product direction",
        description:
          "Make offer requirements clearer when products are added.",
      },
    ],
  },
  context: [
    {
      eyebrow: "The proposal",
      title: "Helping customers recover missed offers",
      paragraphs: [
        "The original idea was to introduce a page at checkout showing customers offers they had not completed. It was a logical response, but it assumed customers had understood the offer while shopping and had simply forgotten or decided not to complete it.",
      ],
    },
    {
      eyebrow: "What the research revealed",
      title: "The misunderstanding started earlier",
      paragraphs: [
        "Research showed the checkout page could help customers who changed their mind. But many believed the offer was already complete when they added products to their basket, so checkout was too late to prevent the misunderstanding.",
      ],
    },
  ],
  quote:
    "The important question was not whether the checkout page could work. It was whether checkout was the right place to solve the problem.",
  reframe: {
    eyebrow: "Reframing the problem",
    title: "Research changed the question",
    introduction:
      "The proposed page addressed recovery. The research showed that a larger opportunity lay in preventing the misunderstanding before it happened.",
    original: {
      label: "Initial framing",
      question:
        "How might we help customers recover missed offers at checkout?",
      explanation:
        "This focused the team on a final opportunity to correct an incomplete offer before purchase.",
    },
    informed: {
      label: "Research-informed framing",
      question:
        "How might we make offer requirements clearer when customers add products to their basket?",
      explanation:
        "This moved the focus to the moment customers were making decisions and forming their understanding of the offer.",
    },
    bridgeLabel: "Research changed the focus",
  },
  decisionJourney: {
    eyebrow: "Choosing the right moment",
    title: "Moving the intervention earlier",
    introduction:
      "Mapping both approaches against the shopping journey made the shift clear: recovery at checkout versus prevention while customers were choosing products.",
    steps: [
      {
        title: "Explore offers",
        description: "Notice promotions and decide which offers are relevant.",
      },
      {
        title: "Add products",
        description:
          "Choose qualifying items and understand what is still required.",
        markers: [
          {
            label: "Research direction",
            variant: "informed",
          },
        ],
      },
      {
        title: "Build the basket",
        description:
          "Continue shopping with a clearer view of progress towards the offer.",
      },
      {
        title: "Checkout",
        description: "Review the order and resolve anything still outstanding.",
        markers: [
          {
            label: "Original proposal",
            variant: "original",
          },
        ],
      },
    ],
    conclusion:
      "The research shifted the focus from recovering missed offers at checkout to preventing misunderstanding when customers added products.",
  },
  delivery: {
    eyebrow: "Turning insight into direction",
    title: "Helping the team act on what we learned",
    introduction:
      "The value of the work was not simply identifying confusion. It was separating different customer behaviours and giving the team a more useful problem to solve.",
    steps: [
      {
        title: "Test the assumption",
        description:
          "I examined whether the checkout concept addressed the reasons customers failed to complete offers, rather than evaluating the page in isolation.",
      },
      {
        title: "Separate the behaviours",
        description:
          "The findings distinguished customers who changed their mind from those who believed they had already met the offer requirements.",
      },
      {
        title: "Redirect the work",
        description:
          "I worked with the Discovery team to focus on improving understanding when customers added products to their basket.",
      },
    ],
  },
  feature: {
    eyebrow: "The outcome",
    title: "A clearer product priority",
    lead:
      "The team shifted from recovering failures at checkout to preventing confusion earlier in the journey.",
    body:
      "The research gave stakeholders confidence to move beyond the original page request and focus on the point where customers formed their understanding of an offer. This created a clearer basis for improving the experience without adding a late-stage solution that only helped part of the problem.",
    outcomeLabel: "What changed",
    outcome:
      "The team prioritised clearer offer guidance earlier in the journey, supporting improved customer satisfaction and fewer failed offer additions.",
  },
  principles: {
    eyebrow: "What made the work useful",
    title: "Three decisions shaped the direction",
    items: [
      {
        title: "Challenge the solution, not the goal",
        description:
          "The aim of helping customers save money remained valid. The research tested whether the proposed page was the best way to achieve it.",
      },
      {
        title: "Separate recovery from prevention",
        description:
          "Customers who changed their mind needed a different response from customers who misunderstood what the offer required.",
      },
      {
        title: "Intervene where decisions happen",
        description:
          "Clearer guidance was more useful while customers were choosing products than after the misunderstanding had already occurred.",
      },
    ],
  },
  nextProject: {
    client: "Hertz",
    title: "Removing the airport rental queue",
    descriptor: "Service design and digital innovation",
    href: "/work/hertz-keyless-rental",
  },
} satisfies CaseStudyContent;
