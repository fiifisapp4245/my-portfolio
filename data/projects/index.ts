import { Project, ProjectCard, ProjectListing } from "@/types/project";
import { trovesuite } from "./trovesuite";
import { techOverflow } from "./tech-overflow";
import { docamet } from "./docamet";
import { slbJobPlatform } from "./slb-job-platform";
import { nfcMobileMoney } from "./nfc-mobile-money";

// All projects - add new projects here
const allProjects: Project[] = [
  trovesuite,
  techOverflow,
  docamet,
  slbJobPlatform,
  nfcMobileMoney,
];

// Get all projects sorted by order
export function getAllProjects(): Project[] {
  return [...allProjects].sort((a, b) => a.order - b.order);
}

// Get featured projects only
export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((p) => p.featured);
}

// Get a single project by slug
export function getProjectBySlug(slug: string): Project | undefined {
  return allProjects.find((p) => p.slug === slug);
}

// Get all project slugs (for static generation)
export function getAllProjectSlugs(): string[] {
  return allProjects.map((p) => p.slug);
}

// Get project cards (minimal data for listings)
export function getProjectCards(): ProjectCard[] {
  return getAllProjects().map((p) => ({
    slug: p.slug,
    index: p.index,
    title: p.title,
    shortDescription: p.shortDescription,
    tags: p.tags,
    thumbnail: p.thumbnail,
    category: p.category,
  }));
}

// Get project listings (for homepage/work section)
export function getProjectListings(): ProjectListing[] {
  return getAllProjects().map((p) => ({
    slug: p.slug,
    index: p.index,
    title: p.title,
    shortDescription: p.shortDescription,
    tags: p.tags,
    thumbnail: p.thumbnail,
    category: p.category,
    featured: p.featured,
    order: p.order,
  }));
}

// Get projects by category
export function getProjectsByCategory(
  category: Project["category"]
): Project[] {
  return getAllProjects().filter((p) => p.category === category);
}

// Get adjacent projects (for navigation)
export function getAdjacentProjects(slug: string): {
  prev: Project | null;
  next: Project | null;
} {
  const projects = getAllProjects();
  const index = projects.findIndex((p) => p.slug === slug);

  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  };
}

// Export individual projects for direct import if needed
export {
  trovesuite,
  techOverflow,
  docamet,
  slbJobPlatform,
  nfcMobileMoney,
};
