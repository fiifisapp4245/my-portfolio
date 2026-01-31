// Project data types for portfolio case studies

export interface ProjectMetric {
  value: string;
  label: string;
  description?: string;
}

export interface ProjectChallenge {
  title: string;
  description: string;
}

export interface ProjectSolution {
  title: string;
  description: string;
  features?: string[];
}

export interface ProjectResult {
  metric: string;
  description: string;
  before?: string;
  after?: string;
}

export interface ProjectTechnology {
  name: string;
  category: "frontend" | "backend" | "database" | "infrastructure" | "design" | "other";
  icon?: string;
}

export interface ProjectTestimonial {
  quote: string;
  author: string;
  role: string;
  company?: string;
  avatar?: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface ProjectLink {
  label: string;
  url: string;
  type: "live" | "github" | "figma" | "case-study" | "other";
}

export interface Project {
  // Core identifiers
  slug: string;
  index: string; // "01", "02", etc.

  // Basic info
  title: string;
  subtitle?: string;
  description: string;
  shortDescription: string; // For cards/previews

  // Categorization
  category: "web-app" | "mobile-app" | "saas" | "enterprise" | "concept" | "other";
  tags: string[];

  // Visual assets
  thumbnail: string;
  heroImage?: string;
  images?: ProjectImage[];

  // Case study content
  overview: {
    problem: string;
    solution: string;
    impact: string;
  };

  metrics?: ProjectMetric[];
  challenges?: ProjectChallenge[];
  solutions?: ProjectSolution[];
  results?: ProjectResult[];

  // Technical details
  technologies: ProjectTechnology[];
  role: string;
  duration: string;
  team?: string;

  // Links
  links?: ProjectLink[];

  // Figma prototype embed
  figmaPrototype?: string;

  // Testimonials
  testimonials?: ProjectTestimonial[];

  // Meta
  featured: boolean;
  order: number;
  publishedAt?: string;
  updatedAt?: string;
}

// Helper type for project cards (subset of full project)
export type ProjectCard = Pick<
  Project,
  "slug" | "index" | "title" | "shortDescription" | "tags" | "thumbnail" | "category"
>;

// Helper type for project listing
export type ProjectListing = Pick<
  Project,
  "slug" | "index" | "title" | "shortDescription" | "tags" | "thumbnail" | "category" | "featured" | "order"
>;
