export type CaseStudyDetail = {
  label: string;
  value: string;
};

export type CaseStudyJourneyStep = {
  title: string;
  description: string;
};

export type CaseStudyContextSection = {
  eyebrow: string;
  title: string;
  paragraphs: readonly string[];
};

export type CaseStudyEvidenceItem = {
  src: string;
  alt: string;
  width: number;
  height: number;
  title: string;
  description: string;
};

export type CaseStudyDeliveryStep = {
  title: string;
  description: string;
};

export type CaseStudyPrinciple = {
  title: string;
  description: string;
};

export type CaseStudyFeatureImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
};

export type CaseStudyReframePanel = {
  label: string;
  question: string;
  explanation: string;
};

export type CaseStudyReframe = {
  eyebrow: string;
  title: string;
  introduction: string;
  original: CaseStudyReframePanel;
  informed: CaseStudyReframePanel;
  bridgeLabel: string;
};

export type CaseStudyDecisionJourneyMarker = {
  label: string;
  variant: "original" | "informed";
};

export type CaseStudyDecisionJourneyStep = {
  title: string;
  description: string;
  markers?: readonly CaseStudyDecisionJourneyMarker[];
};

export type CaseStudyDecisionJourney = {
  eyebrow: string;
  title: string;
  introduction: string;
  steps: readonly CaseStudyDecisionJourneyStep[];
  conclusion: string;
};

export type CaseStudyLayoutContent = {
  client: string;
  category: string;
  title: string;
  introduction: string;
  details: readonly CaseStudyDetail[];
  journey?: {
    title: string;
    steps: readonly CaseStudyJourneyStep[];
  };
  context: readonly CaseStudyContextSection[];
  quote?: string;
  reframe?: CaseStudyReframe;
  decisionJourney?: CaseStudyDecisionJourney;
  evidence?: {
    eyebrow: string;
    title: string;
    introduction: string;
    items: readonly CaseStudyEvidenceItem[];
  };
  delivery?: {
    eyebrow: string;
    title: string;
    introduction: string;
    steps: readonly CaseStudyDeliveryStep[];
  };
  feature?: {
    eyebrow: string;
    title: string;
    lead: string;
    body: string;
    image?: CaseStudyFeatureImage;
    outcomeLabel: string;
    outcome: string;
  };
  principles?: {
    eyebrow: string;
    title: string;
    items: readonly CaseStudyPrinciple[];
  };
  nextProject?: {
    client: string;
    title: string;
    descriptor: string;
    href: string;
  };
};

export type CaseStudyContent = CaseStudyLayoutContent & {
  slug: string;
  seo: {
    title: string;
    description: string;
    image?: string;
  };
};
