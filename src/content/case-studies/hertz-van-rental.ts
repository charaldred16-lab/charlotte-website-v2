import type { CaseStudyContent } from "@/content/case-studies/types";

export const hertzVanRentalCaseStudy = {
  slug: "hertz-van-rental",
  seo: {
    title: "Designing a better van rental experience",
    description:
      "How Charlotte Aldred helped Hertz understand the different needs of van customers, redesign the journey and increase conversion by 50%.",
  },
  client: "Hertz",
  category: "Customer experience and optimisation",
  title: "Designing a better van rental experience",
  introduction:
    "Van rental used the same digital experience as car rental. It created consistency, but it assumed customers hiring a van needed the same information and made decisions in the same way. We started by understanding what mattered to van customers, then redesigned and tested an experience around those needs.",
  details: [
    {
      label: "My contribution",
      value:
        "Led the customer understanding, agency collaboration, delivery and A/B testing",
    },
    {
      label: "Focus",
      value: "Customer needs, journey redesign and experimentation",
    },
    {
      label: "Outcome",
      value: "50% increase in conversion rate",
    },
  ],
  journey: {
    title: "From customer need to live experience",
    steps: [
      {
        title: "Understand",
        description:
          "Identify what customers needed to know when choosing a van.",
      },
      {
        title: "Redesign",
        description:
          "Work with an agency to create an experience around those needs.",
      },
      {
        title: "Develop",
        description:
          "Work with a second agency to turn the proposed journey into a live experience.",
      },
      {
        title: "Test",
        description:
          "A/B test the new journey against the existing van rental experience.",
      },
    ],
  },
  context: [
    {
      eyebrow: "The problem",
      title: "Van customers were using a car rental experience",
      paragraphs: [
        "The van journey reused the standard car rental template. It made sense operationally, but it did not account for the different questions customers had when hiring a van.",
        "We wanted to understand what information customers needed to choose confidently and whether a more tailored journey would perform better.",
      ],
    },
    {
      eyebrow: "The research",
      title: "Start with what van customers needed",
      paragraphs: [
        "We first explored the questions customers had when hiring a van and what information was most important to their decision.",
        "That gave us a clearer view of where the existing template was falling short and what the redesigned experience needed to do differently.",
      ],
    },
  ],
  quote:
    "Consistency was useful, but it was more important that the experience supported the decision van customers were actually trying to make.",
  delivery: {
    eyebrow: "From insight to delivery",
    title: "Taking the work beyond research",
    introduction:
      "The work moved from understanding the customer need through design, development and live experimentation.",
    steps: [
      {
        title: "Shape the experience",
        description:
          "I worked with an agency to translate customer needs into a redesigned van rental journey.",
      },
      {
        title: "Test the direction",
        description:
          "The proposed experience was tested before committing to full development.",
      },
      {
        title: "Get it built",
        description:
          "I then worked with another agency to develop the new experience.",
      },
      {
        title: "Measure the result",
        description:
          "The new journey was A/B tested against the existing experience once live.",
      },
    ],
  },
  feature: {
    eyebrow: "The outcome",
    title: "A stronger experience for a different customer need",
    lead: "The redesigned journey increased conversion by 50%.",
    body:
      "The result showed the value of designing around the decision customers were trying to make rather than automatically reusing an existing template.",
    outcomeLabel: "Conversion impact",
    outcome: "50% increase in conversion rate.",
  },
  principles: {
    eyebrow: "What made the work effective",
    title: "Three decisions shaped the result",
    items: [
      {
        title: "Understand before redesigning",
        description:
          "The work started with what van customers needed rather than assumptions about what should change.",
      },
      {
        title: "Design for the specific decision",
        description:
          "The new experience reflected the information and questions that mattered when hiring a van.",
      },
      {
        title: "Take research through to delivery",
        description:
          "The work continued through design, development and A/B testing so the effect could be measured.",
      },
    ],
  },
 nextProject: {
  client: "Hertz",
  title: "Improving the car rental booking journey",
  descriptor: "Digital optimisation and experimentation",
  href: "/work/hertz-booking-redesign",
},
} satisfies CaseStudyContent;