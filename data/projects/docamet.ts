import { Project } from "@/types/project";

export const docamet: Project = {
  slug: "docamet",
  index: "03",

  title: "Docamet",
  subtitle: "Scholarship Deadline Tracker",
  description:
    "A concept mobile application designed to help students actively searching for scholarships avoid missing deadlines. Combines scholarship discovery with deadline tracking, countdown timers, and accountability notifications to shift focus from browsing to completion.",
  shortDescription:
    "Mobile concept addressing deadline anxiety and low completion rates for scholarship applications.",

  category: "concept",
  tags: ["90% Task Completion Rate", "9/10 Users Valued Deadline Tracking", "Self-Initiated"],

  thumbnail: "/projects/docamet/Project banner.png",
  heroImage: "/projects/docamet/Project banner.png",
  images: [
    {
      src: "/projects/docamet/Eduhelp 1.png",
      alt: "Docamet app interface",
      caption: "Scholarship discovery and deadline tracking interface",
    },
    {
      src: "/projects/docamet/user persona.png",
      alt: "User persona research",
      caption: "Target user persona based on research findings",
    },
    {
      src: "/projects/docamet/competitive analysis.png",
      alt: "Competitive analysis",
      caption: "Analysis of existing scholarship platforms",
    },
  ],

  overview: {
    problem:
      "Students actively searching for scholarships often miss deadlines due to fragmented information, poor reminders, and platforms that prioritize listings over follow-through. Existing platforms had high drop-off due to information overload, and missed deadlines directly translated to lost educational opportunities.",
    solution:
      "A concept mobile application combining scholarship discovery, deadline tracking with countdown timers, notifications for accountability, and an optional mentorship layer. Designed with a shallow information architecture where key actions are accessible within two taps, prioritizing user behavior (follow-through) over content volume.",
    impact:
      "~90% task completion rate for 'Find and bookmark an opportunity' in usability testing. 9/10 users identified deadline tracking as the most valuable feature. Users reported feeling 'more in control' of deadlines with positive feedback on clarity and reduced overwhelm.",
  },

  metrics: [
    {
      value: "90%",
      label: "Task Completion",
      description: "Users successfully finding and bookmarking opportunities",
    },
    {
      value: "9/10",
      label: "Feature Value",
      description: "Users identified deadline tracking as most valuable",
    },
    {
      value: "~20",
      label: "Survey Respondents",
      description: "Students surveyed to validate the problem",
    },
    {
      value: "~10",
      label: "Usability Testers",
      description: "Users tested the prototype flows",
    },
  ],

  challenges: [
    {
      title: "Missed Deadlines Despite Active Searching",
      description:
        "Users invested significant time searching for scholarships but failed to complete applications. The disconnect between discovery and follow-through meant opportunities were lost despite awareness.",
    },
    {
      title: "Information Fatigue",
      description:
        "Existing platforms overwhelmed users with listings, creating cognitive overload. Users struggled to prioritize and track multiple opportunities across different platforms and timelines.",
    },
    {
      title: "Low Trust in Listing-Only Platforms",
      description:
        "Platforms that only aggregated listings without supporting the application journey created skepticism. Users didn't feel supported through the actual process of applying.",
    },
    {
      title: "Solo Execution Constraints",
      description:
        "Concept-only project with no engineering support, limited 5-week timeline, small informal research sample, and solo execution across research, UX, and testing.",
    },
  ],

  solutions: [
    {
      title: "Shallow Information Architecture",
      description:
        "Reduced cognitive load by making key actions accessible within two taps. Prioritized the most common user flows and eliminated unnecessary navigation depth.",
      features: [
        "Two-tap access to core actions",
        "Prioritized discovery and deadline tracking upfront",
        "Mentorship layer deprioritized after early feedback",
      ],
    },
    {
      title: "Countdown Timers",
      description:
        "Direct response to the missed-deadline insight. Visual timers create urgency and help users prioritize opportunities by deadline proximity.",
      features: [
        "Visual countdown for each saved opportunity",
        "Color-coded urgency indicators",
        "Sorted views by deadline proximity",
      ],
    },
    {
      title: "Saved & Tracked Opportunities",
      description:
        "Shifted focus from passive browsing to active completion. Users can save opportunities and track their progress through the application process.",
      features: [
        "Dedicated saved opportunities section",
        "Progress tracking per application",
        "Multi-channel reminders for accountability",
      ],
    },
    {
      title: "Component-Based Design System",
      description:
        "Introduced reusable components after receiving design critique, reducing duplication and improving scalability across the concept.",
      features: [
        "Reusable UI components",
        "Consistent patterns across flows",
        "Scalable design foundation",
      ],
    },
  ],

  results: [
    {
      metric: "90% Task Completion Rate",
      description:
        "Users successfully completed the core task of finding and bookmarking a scholarship opportunity during usability testing.",
    },
    {
      metric: "Deadline Tracking Most Valued",
      description:
        "9 out of 10 users identified deadline tracking as the single most valuable feature, validating the core design hypothesis.",
    },
    {
      metric: "Reduced Overwhelm",
      description:
        "Qualitative feedback indicated users felt 'more in control' and experienced less anxiety about missing deadlines.",
    },
    {
      metric: "Design Critique Integration",
      description:
        "External feedback from senior designers (Sam Daugherty, Rukayat) led to component-based refinements and improved scalability.",
    },
  ],

  technologies: [
    { name: "Figma", category: "design" },
    { name: "User Research", category: "other" },
    { name: "Wireframing", category: "design" },
    { name: "Prototyping", category: "design" },
    { name: "Usability Testing", category: "other" },
  ],

  role: "Sole Designer & Researcher",
  duration: "2022",
  team: "Solo execution with external design critique",

  links: [],
  testimonials: [],

  figmaPrototype:
    "https://www.figma.com/proto/m3CYuMZP4j0Le1I4IIgync/Docamet?page-id=134%3A1309&node-id=135-1316&p=f&viewport=729%2C481%2C0.15&t=9mV1S6daR30K7uZM-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=135%3A1316",

  featured: true,
  order: 3,
};
