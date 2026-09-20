import type { CaseStudyContent } from "@/content/case-studies/types";

export const ocadoDiaryStudyCaseStudy = {
  slug: "ocado-diary-study",
  seo: {
    title: "Understanding how customers approach their grocery shop",
    description:
      "How Charlotte Aldred led a two-week diary study at Ocado Technology to understand grocery shopping behaviour and bring Product, Engineering and UX closer to customers.",
  },
  client: "Ocado Technology",
  category: "Customer research and product understanding",
  title: "Understanding how customers approach their grocery shop",
  introduction:
    "I led a two-week diary study with 20 UK customers to understand the behaviours and motivations behind grocery shopping. The aim was to look beyond individual features and understand what happened around the shop itself, while bringing Product, Engineering and UX into the research throughout.",
  details: [
    {
      label: "My contribution",
      value:
        "Designed and led the diary study, follow-up interviews, synthesis and team workshops",
    },
    {
      label: "Research",
      value: "20 diary study participants and 12 follow-up interviews",
    },
    {
      label: "Focus",
      value: "Shopping behaviour, customer motivations and product opportunities",
    },
  ],
  journey: {
    title: "The research approach",
    steps: [
      {
        title: "Plan",
        description:
          "Define the research questions, study activities and what we wanted to learn.",
      },
      {
        title: "Observe",
        description:
          "Follow 20 customers through two weeks of real grocery shopping behaviour.",
      },
      {
        title: "Explore",
        description:
          "Interview 12 customers to understand particular behaviours in more depth.",
      },
      {
        title: "Apply",
        description:
          "Bring the findings into workshops with Product, Engineering and UX.",
      },
    ],
  },
  context: [
    {
      eyebrow: "The question",
      title: "Understanding the wider grocery shopping behaviour",
      paragraphs: [
        "We wanted to understand more than how customers interacted with individual features on the Ocado website.",
        "People plan differently, remember things at different times, change their minds and have different reasons for choosing what goes into their basket. The research was designed to understand those behaviours and motivations closer to when they happened.",
      ],
    },
    {
      eyebrow: "The study",
      title: "Following customers over two weeks",
      paragraphs: [
        "I developed the research plan, defined the questions we wanted to answer and designed the activities customers would complete throughout the diary study.",
        "I then led follow-up interviews with 12 participants, using what they had shared during the study to explore particular behaviours and motivations in more detail.",
      ],
    },
  ],
  quote:
    "I wanted the team to experience the research as it happened, rather than waiting two weeks for a presentation at the end.",
  delivery: {
    eyebrow: "Bringing the team into the research",
    title: "Making customer behaviour visible throughout",
    introduction:
      "A key part of the work was helping the teams building the product engage with customers throughout the study.",
    steps: [
      {
        title: "Share customer moments",
        description:
          "I produced short video snippets throughout the study so Product, Engineering and UX could hear directly from customers.",
      },
      {
        title: "Build shared understanding",
        description:
          "The ongoing communication helped the teams follow emerging behaviours instead of receiving the research only at the end.",
      },
      {
        title: "Create behavioural archetypes",
        description:
          "I brought the findings together into different patterns of grocery shopping behaviour.",
      },
      {
        title: "Apply the learning",
        description:
          "I ran workshops to discuss what the findings meant for current work and what new opportunities had emerged.",
      },
    ],
  },
  feature: {
    eyebrow: "The outcome",
    title: "Research teams could use, not just read",
    lead:
      "The study created a broader understanding of how different customers approached grocery shopping.",
    body:
      "The workshops gave Product, Engineering and UX a shared way of discussing those behaviours and helped connect the research to work already underway as well as new ideas that emerged from the study.",
    outcomeLabel: "What changed",
    outcome:
      "Teams could apply a shared understanding of customer behaviour to current product decisions and future opportunities.",
  },
  principles: {
    eyebrow: "What made the research useful",
    title: "Three choices shaped the impact",
    items: [
      {
        title: "Study behaviour over time",
        description:
          "The diary format captured shopping behaviour closer to when it happened rather than relying only on recall.",
      },
      {
        title: "Bring the team along",
        description:
          "Sharing customer video throughout the study helped teams build understanding before the final synthesis.",
      },
      {
        title: "Finish with decisions",
        description:
          "The workshops focused on what the findings meant for existing work and where they opened up new opportunities.",
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