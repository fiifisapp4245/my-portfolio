import { Project } from "@/types/project";

export const slbJobPlatform: Project = {
  slug: "slb-job-platform",
  index: "04",

  title: "Job Application Platform Redesign",
  subtitle: "Enterprise Hiring UX Overhaul",
  description:
    "A conceptual redesign of a global energy company's job application platform focused on clarity, accessibility, and applicant control. Addressed high drop-off rates caused by rigid, confusing application flows that created unnecessary cognitive load and anxiety.",
  shortDescription:
    "Concept redesign reducing applicant drop-off through progressive disclosure and accessibility improvements.",

  category: "concept",
  tags: ["95% Task Completion", "Accessibility-First", "Self-Initiated"],

  thumbnail: "/projects/slb-job-platform/Chu Persona.png",
  heroImage: "/projects/slb-job-platform/Chu Persona.png",
  images: [
    {
      src: "/projects/slb-job-platform/Chu Persona.png",
      alt: "User Persona - Chu",
      caption: "Target user persona for job applicant research",
    },
    {
      src: "/projects/slb-job-platform/docamet_userflow.png",
      alt: "User flow diagram",
      caption: "Redesigned application flow with progressive disclosure",
    },
    {
      src: "/projects/slb-job-platform/Competitors.png",
      alt: "Competitive analysis",
      caption: "Analysis of competitor job application experiences",
    },
  ],

  overview: {
    problem:
      "The job application process was confusing, inaccessible, and rigid, causing applicants to abandon applications midway without clear feedback or status visibility. Estimated >60% applicant drop-off, with accessibility issues potentially excluding qualified candidates. The problem was not what information was required, but when and how it was demanded.",
    solution:
      "Redesigned the application flow using progressive disclosure, breaking it into three modules (profile creation, resume upload, role-specific questions). Introduced persistent progress tracking, revised information architecture to reduce cognitive load, and applied WCAG-aligned accessibility improvements.",
    impact:
      "95% successful completion rate for the redesigned modular flow in usability testing. Significantly higher task confidence compared to original experience. Users described the flow as 'clear,' 'less stressful,' and 'more respectful of time.' Projected 40% reduction in early-stage drop-off.",
  },

  metrics: [
    {
      value: "95%",
      label: "Task Completion",
      description: "Successful completion of redesigned flow",
    },
    {
      value: "40%",
      label: "Projected Drop-off Reduction",
      description: "Estimated improvement in early-stage completion",
    },
    {
      value: "8",
      label: "Contextual Inquiries",
      description: "Task-based interviews with real applicants",
    },
    {
      value: "3",
      label: "Application Modules",
      description: "Digestible stages replacing rigid flow",
    },
  ],

  challenges: [
    {
      title: "High Applicant Drop-off",
      description:
        "Estimated >60% of applicants abandoned the process midway. The rigid, linear flow created friction at sensitive entry points and demanded too much upfront commitment.",
    },
    {
      title: "Usability Heuristic Violations",
      description:
        "Heuristic evaluation identified severe violations of consistency & standards, user control & freedom, and visibility of system status. Core UX principles were not followed.",
    },
    {
      title: "Accessibility Issues",
      description:
        "Poor contrast, unclear form labeling, and inadequate error handling potentially excluded qualified candidates and created frustration for all users.",
    },
    {
      title: "No Internal Access",
      description:
        "Concept-only redesign with no access to internal metrics or engineering teams. Had to work from external research and heuristic analysis.",
    },
  ],

  solutions: [
    {
      title: "Progressive Disclosure",
      description:
        "Reduced upfront commitment by allowing applicants to defer high-effort sections until later stages. Users could complete the application incrementally.",
      features: [
        "Deferred high-effort sections",
        "Incremental profile creation",
        "Staged commitment model",
      ],
    },
    {
      title: "Revised Information Architecture",
      description:
        "Broke the application into three clearly defined, digestible modules to reduce cognitive load and make progress feel achievable.",
      features: [
        "Profile creation module",
        "Resume upload module",
        "Role-specific questions module",
      ],
    },
    {
      title: "Persistent Progress Tracking",
      description:
        "Introduced visible progress indicators to reduce anxiety and uncertainty. Users always knew where they were and what remained.",
      features: [
        "Visual progress indicators",
        "Section completion status",
        "Estimated time remaining",
      ],
    },
    {
      title: "Accessibility-First Design",
      description:
        "Applied WCAG-aligned contrast, form labeling, and error handling to ensure inclusive access for all applicants.",
      features: [
        "WCAG-compliant contrast ratios",
        "Clear form labels and instructions",
        "Descriptive error messages",
      ],
    },
  ],

  results: [
    {
      metric: "95% Completion Rate",
      description:
        "Usability testing showed 95% successful completion for the redesigned modular flow, compared to high abandonment in the original.",
    },
    {
      metric: "Higher Task Confidence",
      description:
        "Users reported significantly higher confidence while completing the redesigned application flow.",
    },
    {
      metric: "Improved User Sentiment",
      description:
        "Users described the flow as 'clear,' 'less stressful,' and 'more respectful of time.'",
      before: "Confusing, anxiety-inducing",
      after: "Clear, respectful of time",
    },
    {
      metric: "Trust Improvement",
      description:
        "Better visibility and control improved trust in the platform and overall hiring process.",
    },
  ],

  technologies: [
    { name: "Figma", category: "design" },
    { name: "Heuristic Evaluation", category: "other" },
    { name: "Contextual Inquiry", category: "other" },
    { name: "Accessibility Audit", category: "other" },
    { name: "Usability Testing", category: "other" },
  ],

  role: "Sole UX Designer & Researcher",
  duration: "~2-3 weeks",
  team: "Solo execution (self-initiated case study)",

  links: [],
  testimonials: [],

  featured: false,
  order: 4,
};
