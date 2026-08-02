import type { CaseStudyContent } from "@/content/case-studies/types";

export const hertzCaseStudy = {
  slug: "hertz-keyless-rental",
  seo: {
    title: "Removing the airport rental queue",
    description:
      "How Charlotte Aldred led a cross-functional Hertz pilot that adapted keyless technology so airport customers could verify their identity, unlock their car and avoid the rental desk.",
  },
  client: "Hertz",
  category: "Digital innovation",
  title: "Removing the airport rental queue",
  introduction:
    "Hertz customers regularly identified queuing at the rental desk as one of the most frustrating parts of hiring a car, particularly during busy summer periods. I led a cross-functional project to adapt existing keyless technology so customers could collect their vehicle and begin their journey without visiting the desk.",
  details: [
    {
      label: "My contribution",
      value:
        "Led the customer experience, cross-functional design and pilot delivery",
    },
    { label: "Focus", value: "Service design and digital innovation" },
    { label: "Locations", value: "Gatwick and Rome airports" },
  ],
  journey: {
    title: "The service journey",
    steps: [
      {
        title: "Register and verify",
        description:
          "Capture the driving licence and complete facial recognition.",
      },
      {
        title: "Car assigned",
        description: "Access is approved and the vehicle is prepared.",
      },
      {
        title: "Unlock through the app",
        description: "Locate and unlock the car independently.",
      },
      {
        title: "Drive away",
        description: "Begin the journey without visiting the desk.",
      },
    ],
  },
  context: [
    {
      eyebrow: "The challenge",
      title: "The rental experience began with a queue",
      paragraphs: [
        "Customer feedback consistently showed that queuing at the rental desk was one of the biggest sources of frustration, particularly during busy travel periods.",
        "Although customers had already booked and provided much of their information online, they still had to wait before collecting their vehicle. The physical process was interrupting an otherwise digital journey.",
      ],
    },
    {
      eyebrow: "The opportunity",
      title: "Adapting proven technology to a new context",
      paragraphs: [
        "Hertz already used keyless technology within its Hertz 24/7 rental service. Rather than beginning with a completely new technical solution, we explored whether the existing capability could be adapted for airport car rental.",
        "The challenge was designing the broader end-to-end experience customers could understand, trust and complete independently in an unfamiliar airport environment.",
      ],
    },
  ],
  quote:
    "The opportunity was not simply to make the queue faster. It was to remove the need for it.",
  evidence: {
    eyebrow: "Approving access before collection",
    title: "Building trust into the keyless journey",
    introduction:
      "Before a vehicle could be assigned, customers needed to verify their identity in the app. They captured the front and back of their driving licence and completed facial recognition using a photograph, allowing the team to approve access before collection.",
    items: [
      {
        src: "/work/hertz/driving-licence-front.png",
        width: 750,
        height: 1334,
        alt: "Hertz app screen capturing the front of a fictional driving licence",
        title: "Capture the front",
        description:
          "The customer positioned the front of the driving licence within the frame so the personal and licence details could be captured.",
      },
      {
        src: "/work/hertz/driving-licence-back.png",
        width: 750,
        height: 1334,
        alt: "Hertz app screen capturing the back of a fictional driving licence",
        title: "Capture the back",
        description:
          "The back of the licence supplied the remaining categories and validity information required for verification.",
      },
      {
        src: "/work/hertz/facial-recognition.png",
        width: 750,
        height: 1334,
        alt: "Hertz facial recognition screen using a photograph of a fictional customer",
        title: "Complete facial recognition",
        description:
          "A photograph was captured and checked against the licence image to confirm that the customer matched the identity provided.",
      },
    ],
  },
  delivery: {
    eyebrow: "Bringing the experience together",
    title: "Designing more than the app",
    introduction:
      "The service had to work across customer communication, airport operations and the physical collection experience. I brought the teams together around the complete journey rather than treating the app as a standalone product.",
    steps: [
      {
        title: "Align the teams",
        description:
          "I brought together operations, brand, marketing and technology to identify what needed to change across the complete experience.",
      },
      {
        title: "Design the flow",
        description:
          "I worked with a designer to shape how customers would register, verify their identity, locate the vehicle and unlock the car.",
      },
      {
        title: "Prepare customers",
        description:
          "With Amigo and Good Growth, we created website messaging and pre-arrival emails explaining the new collection process.",
      },
      {
        title: "Test the live service",
        description:
          "We tested a fully functioning app in the airport environment rather than relying solely on a prototype.",
      },
    ],
  },
  feature: {
    eyebrow: "The pilot",
    title: "A moment that made the service real",
    lead: "The first customer to complete the journey was 70 years old.",
    body:
      "She found the car and unlocked it through the app without needing assistance from the rental team. The pilot showed that customers could complete the end-to-end journey independently in a live airport setting, without visiting the desk or speaking to a member of staff.",
    image: {
      src: "/work/hertz/unlock-vehicle.png",
      alt: "Hertz app screen showing a vehicle and a tap-to-unlock control",
      width: 750,
      height: 1334,
      caption: "The live unlock screen used during the airport pilot.",
    },
    outcomeLabel: "What the pilot showed",
    outcome:
      "Customers could skip the rental desk and begin their journey independently.",
  },
  principles: {
    eyebrow: "What made the idea work",
    title: "Three decisions shaped the outcome",
    items: [
      {
        title: "Start with the real frustration",
        description:
          "The work focused on removing the part of the experience customers found most frustrating, rather than digitising the existing desk process.",
      },
      {
        title: "Use what already exists",
        description:
          "Adapting proven technology made it possible to explore a significant service change without beginning from scratch.",
      },
      {
        title: "Design beyond the screen",
        description:
          "The app was only one part of the experience. Communications, airport operations, identity approval, vehicle location and customer confidence all had to work together.",
      },
    ],
  },
  nextProject: {
    client: "Ocado Technology",
    title: "Rethinking where customers discover offers",
    descriptor: "Customer insight and product direction",
    href: "/work/ocado-offers",
  },
} satisfies CaseStudyContent;
