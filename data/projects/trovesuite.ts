import { Project } from "@/types/project";

export const trovesuite: Project = {
  slug: "trovesuite",
  index: "01",

  title: "TroveSuite ERP Platform",
  subtitle: "Unified Business Operations for SMEs",
  description:
    "A comprehensive ERP platform that centralizes HR, Payroll, POS, and Loan data into a single source of truth. Designed to eliminate data silos across business systems for SMEs and growing companies, enabling data-driven decision making without enterprise complexity.",
  shortDescription:
    "Unified ERP platform eliminating data silos across HR, Payroll, and POS for growing businesses.",

  category: "enterprise",
  tags: [
    "5 Active Companies",
    "External Partnership Interest",
    "Live Product",
  ],

  thumbnail: "/projects/trovesuite/Dashboard_MSG.png",
  heroImage: "/projects/trovesuite/Dashboard_MSG.png",
  images: [
    {
      src: "/projects/trovesuite/Dashboard_MSG.png",
      alt: "TroveSuite Dashboard Overview",
      caption: "Real-time business metrics with sales trends and operational alerts",
    },
    {
      src: "/projects/trovesuite/POS (1).png",
      alt: "Point of Sale Interface",
      caption: "Intuitive POS system with product grid and cart management",
    },
    {
      src: "/projects/trovesuite/Solutions (1).png",
      alt: "TroveSuite Solutions Overview",
      caption: "Comprehensive solution modules for business operations",
    },
    {
      src: "/projects/trovesuite/App Details (1).png",
      alt: "App Details View",
      caption: "Modular app subscription model for HR management",
    },
    {
      src: "/projects/trovesuite/Subscription.png",
      alt: "Subscription Management",
      caption: "Flexible subscription plans for growing businesses",
    },
  ],

  overview: {
    problem:
      "SMEs and growing businesses often rely on multiple disconnected enterprise systems (HR, Payroll, POS, Loan Applications), causing data silos across platforms, inconsistent records ('multiple sources of truth'), operational inefficiencies, and poor visibility into business performance. Teams waste time reconciling data instead of making decisions.",
    solution:
      "TroveSuite centralizes HR, Payroll, POS, and Loan data into a single platform. Designed with unified navigation providing one mental model across all ERP modules, cross-module data visibility so users don't need to jump between tools, and progressive complexity that offers simple entry for SMEs with depth for scaling companies.",
    impact:
      "Launched January 2026 with 5 companies actively using the platform. External company expressed interest in partnership and operational use. Positive internal feedback on flow clarity and ease of onboarding. Strong alignment between UX, business goals, and technical feasibility.",
  },

  metrics: [
    {
      value: "5",
      label: "Active Companies",
      description: "Businesses running operations on TroveSuite",
    },
    {
      value: "4",
      label: "Integrated Modules",
      description: "HR, Payroll, POS, and Loans unified",
    },
    {
      value: "1",
      label: "External Interest",
      description: "Company expressed partnership interest",
    },
    {
      value: "Jan 2026",
      label: "Launched",
      description: "Live product with real users",
    },
  ],

  challenges: [
    {
      title: "Data Silos Across Platforms",
      description:
        "SMEs typically use separate systems for HR, payroll, and sales. Employee data lives in one tool, payroll calculations in another, and transaction records somewhere else entirely.",
    },
    {
      title: "Inconsistent Records",
      description:
        "Multiple sources of truth meant discrepancies were common. A change in one system wouldn't reflect in others, requiring manual reconciliation.",
    },
    {
      title: "Complex Domain Logic",
      description:
        "ERP systems involve intricate business rules for HR, payroll calculations, loan applications, and POS transactions. Designing clear UX for this complexity required deep domain understanding.",
    },
    {
      title: "Onboarding Mid-Project",
      description:
        "Joined the project after initial research was completed. Had to quickly immerse in existing findings, business logic, and technical constraints to contribute effectively.",
    },
  ],

  solutions: [
    {
      title: "Unified Navigation",
      description:
        "One mental model across all ERP modules. Users learn the system once and apply that knowledge everywhere, reducing training time and errors.",
      features: [
        "Consistent navigation patterns",
        "Predictable information architecture",
        "Module-agnostic design patterns",
      ],
    },
    {
      title: "Cross-Module Data Visibility",
      description:
        "Users don't need to jump between tools to understand business state. Related data surfaces contextually across modules.",
      features: [
        "Contextual data surfacing",
        "Linked records across modules",
        "Unified reporting views",
      ],
    },
    {
      title: "Progressive Complexity",
      description:
        "Simple entry for SMEs with depth for scaling companies. Core tasks are straightforward while advanced features remain accessible without cluttering the primary experience.",
      features: [
        "Simple onboarding flows",
        "Advanced features on demand",
        "Scalable for growing needs",
      ],
    },
    {
      title: "Modular Architecture",
      description:
        "Established a modular IA so new ERP tools can be added without breaking UX. Each module follows consistent patterns while addressing domain-specific needs.",
      features: [
        "Extensible module system",
        "Consistent component library",
        "Domain-specific adaptations",
      ],
    },
  ],

  results: [
    {
      metric: "5 Active Companies",
      description:
        "Successfully launched and onboarded five businesses, validating the platform's value proposition for SMEs.",
      before: "Fragmented tools, manual reconciliation",
      after: "Single platform, automated data flow",
    },
    {
      metric: "External Partnership Interest",
      description:
        "An external company expressed interest in both partnering with and operationally using the platform, indicating market traction.",
    },
    {
      metric: "Positive Onboarding Feedback",
      description:
        "Internal feedback highlighted flow clarity and ease of onboarding as key strengths of the design.",
    },
    {
      metric: "Live Product",
      description:
        "Not a concept—this is a functioning ERP platform handling real business operations and data.",
    },
  ],

  technologies: [
    { name: "Next.js", category: "frontend" },
    { name: "TypeScript", category: "frontend" },
    { name: "Tailwind CSS", category: "frontend" },
    { name: "Figma", category: "design" },
    { name: "Node.js", category: "backend" },
    { name: "PostgreSQL", category: "database" },
  ],

  role: "UX Designer (Flows, IA, Interface Design)",
  duration: "2025 → Now",
  team: "Backend/AI Engineer, Frontend Engineer",

  links: [],
  testimonials: [],

  featured: true,
  order: 1,
  publishedAt: "2026-01-01",
};
