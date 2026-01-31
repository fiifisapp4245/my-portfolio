import { Project } from "@/types/project";

export const techOverflow: Project = {
  slug: "tech-overflow",
  index: "02",

  title: "Tech Overflow",
  subtitle: "Internal Knowledge Exchange Platform",
  description:
    "An internal B2B knowledge exchange platform serving as a single source of truth for technical and operational knowledge across a fast-growing IT organization. Designed to replace fragmented Slack threads, emails, and individual memory with structured, searchable Q&A.",
  shortDescription:
    "B2B knowledge exchange platform replacing fragmented Slack threads with structured Q&A and best practices.",

  category: "saas",
  tags: [
    "35% Reduction in Search Time",
    "55% Increase in Q&A Participation",
    "80% Questions Answered in 2hrs",
  ],

  thumbnail: "/projects/tech-overflow/Cover page.png",
  heroImage: "/projects/tech-overflow/Cover page.png",
  images: [
    {
      src: "/projects/tech-overflow/Login.png",
      alt: "Login interface",
      caption: "Secure SSO-enabled authentication for enterprise users",
    },
    {
      src: "/projects/tech-overflow/Rich Question Posting Interface.png",
      alt: "Rich Question Posting Interface",
      caption: "Structured question authoring with tags and formatting",
    },
    {
      src: "/projects/tech-overflow/Interactive Q&A Threads.png",
      alt: "Interactive Q&A Threads",
      caption: "Threaded discussions with upvotes and accepted answers",
    },
    {
      src: "/projects/tech-overflow/Advanced Search Functionality.png",
      alt: "Advanced Search Functionality",
      caption: "Semantic search with advanced filtering options",
    },
    {
      src: "/projects/tech-overflow/User Profile & Badge System.png",
      alt: "User Profile & Badge System",
      caption: "Reputation system highlighting contributor expertise",
    },
    {
      src: "/projects/tech-overflow/Security.png",
      alt: "Security Features",
      caption: "Enterprise-grade security and compliance features",
    },
  ],

  overview: {
    problem:
      "Critical internal knowledge was fragmented across Slack, email, meetings, and individual memory. Employees repeatedly asked the same questions, struggled to find reliable answers, and often recreated solutions that already existed. Engineers spent 15–20% of their time searching for or recreating information, directly impacting velocity and cost.",
    solution:
      "A Stack Overflow-inspired Q&A system adapted for enterprise needs. Features include a trust & reputation system (upvotes, accepted answers, badges), rich question authoring with tags and formatting, advanced semantic search, content moderation dashboard, and user profiles highlighting contributor expertise.",
    impact:
      "35% reduction in time spent searching for internal knowledge. 55% increase in cross-departmental Q&A participation. 80% of critical questions received an accepted answer within 2 hours. Improved onboarding speed and reduced repetitive Slack interruptions.",
  },

  metrics: [
    {
      value: "35%",
      label: "Reduced Search Time",
      description: "Less time spent hunting for internal knowledge",
    },
    {
      value: "55%",
      label: "Increased Participation",
      description: "Cross-departmental Q&A engagement improvement",
    },
    {
      value: "80%",
      label: "Quick Answers",
      description: "Critical questions answered within 2 hours",
    },
    {
      value: "12",
      label: "User Interviews",
      description: "Cross-departmental research participants",
    },
  ],

  challenges: [
    {
      title: "Knowledge Fragmentation",
      description:
        "Critical information lived in Slack threads, emails, meetings, and people's heads. No single source of truth existed, leading to repeated questions and recreated solutions.",
    },
    {
      title: "Poor Discoverability",
      description:
        "Even when answers existed, finding them was nearly impossible. Slack's poor searchability and email silos meant knowledge was effectively lost after conversations ended.",
    },
    {
      title: "Low Trust in Answers",
      description:
        "Without verification mechanisms, employees couldn't distinguish expert answers from guesses. This led to low confidence in shared knowledge and preference for direct interruptions.",
    },
    {
      title: "Enterprise Constraints",
      description:
        "Had to coexist with Slack, email, and Teams. Required SSO integration, strict 4-month timeline, and enterprise governance requirements for legal, moderation, and compliance.",
    },
  ],

  solutions: [
    {
      title: "Trust & Reputation System",
      description:
        "Designed to surface subject matter experts quickly and act as lightweight content moderation. Upvotes, accepted answers, and badges increase confidence in answers.",
      features: [
        "Upvoting and accepted answer mechanics",
        "Expertise badges and recognition",
        "Lightweight content quality signals",
      ],
    },
    {
      title: "Rich Question Authoring",
      description:
        "Enabled structured, well-contextualized questions using tags, categories, and formatting to reduce ambiguity and improve answer quality.",
      features: [
        "Structured tags and categories",
        "Rich text formatting",
        "Context templates for common question types",
      ],
    },
    {
      title: "Advanced Search & Tag Architecture",
      description:
        "Prioritized semantic tagging and filtering over simple keyword search to ensure high-fidelity results at scale.",
      features: [
        "Semantic tagging system",
        "Advanced filtering options",
        "High-fidelity search results",
      ],
    },
    {
      title: "Content Moderation Dashboard",
      description:
        "Created an admin interface for flagging, merging duplicates, and enforcing compliance — critical for enterprise adoption.",
      features: [
        "Content flagging workflow",
        "Duplicate merging tools",
        "Compliance enforcement features",
      ],
    },
  ],

  results: [
    {
      metric: "35% Reduction in Search Time",
      description:
        "Engineers and teams spend significantly less time hunting for information across fragmented tools.",
      before: "15-20% of time searching/recreating",
      after: "Knowledge accessible in seconds",
    },
    {
      metric: "55% Increase in Participation",
      description:
        "Cross-departmental engagement grew as the platform proved valuable for finding reliable answers.",
    },
    {
      metric: "80% Answered in 2 Hours",
      description:
        "Critical questions received accepted answers quickly, enabling faster decision-making.",
      before: "Days waiting for email responses",
      after: "2-hour answer turnaround",
    },
    {
      metric: "Faster Onboarding",
      description:
        "New team members could self-serve answers, reducing dependency on senior engineers for routine questions.",
    },
  ],

  technologies: [
    { name: "Figma", category: "design" },
    { name: "User Research", category: "other" },
    { name: "Information Architecture", category: "design" },
    { name: "Prototyping", category: "design" },
    { name: "Usability Testing", category: "other" },
  ],

  role: "Lead Product Designer (UX, Research, System Design)",
  duration: "2024",
  team: "Frontend & backend engineers, Product Manager, Legal/Compliance stakeholders",

  links: [],
  testimonials: [],

  featured: true,
  order: 2,
};
