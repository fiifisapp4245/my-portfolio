import Link from "next/link";
import { Project } from "@/types/project";

interface OtherProjectsProps {
  projects: Project[];
  currentSlug: string;
}

export function OtherProjects({ projects, currentSlug }: OtherProjectsProps) {
  // Filter out current project
  const filteredProjects = projects.filter((p) => p.slug !== currentSlug);

  // Get the current project's index in the sorted list
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);

  // Select 3 projects: prefer showing projects around the current one
  // to ensure variety across all project pages
  let otherProjects: typeof projects = [];

  if (filteredProjects.length <= 3) {
    otherProjects = filteredProjects;
  } else {
    // Take one from before, current position replacement, and one after
    // This ensures different projects appear on each page
    const beforeIndex = Math.max(0, currentIndex - 1);
    const afterIndex = Math.min(projects.length - 1, currentIndex + 1);

    // Collect unique projects
    const selectedSlugs = new Set<string>();

    // Add project after current
    if (afterIndex !== currentIndex && projects[afterIndex]) {
      otherProjects.push(projects[afterIndex]);
      selectedSlugs.add(projects[afterIndex].slug);
    }

    // Add project before current
    if (beforeIndex !== currentIndex && projects[beforeIndex] && !selectedSlugs.has(projects[beforeIndex].slug)) {
      otherProjects.push(projects[beforeIndex]);
      selectedSlugs.add(projects[beforeIndex].slug);
    }

    // Fill remaining slots from filtered projects
    for (const p of filteredProjects) {
      if (otherProjects.length >= 3) break;
      if (!selectedSlugs.has(p.slug)) {
        otherProjects.push(p);
        selectedSlugs.add(p.slug);
      }
    }

    // Sort by order
    otherProjects.sort((a, b) => a.order - b.order);
  }

  if (otherProjects.length === 0) return null;

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-zinc-900 mb-12">
          Other projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group block bg-slate-50 rounded-2xl p-8 hover:bg-slate-100 transition-colors"
            >
              {/* Large Index Number */}
              <span className="block text-7xl md:text-8xl font-bold text-slate-200 mb-6">
                {project.index}
              </span>

              {/* Project Title */}
              <h3 className="text-lg font-semibold text-zinc-900 mb-2 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>

              {/* Short Description */}
              <p className="text-sm text-zinc-600 mb-3 line-clamp-2">
                {project.shortDescription}
              </p>

              {/* Duration */}
              <p className="text-sm text-zinc-500 mb-6">{project.duration}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 2).map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs text-blue-600 bg-white px-3 py-1.5 rounded-full border border-blue-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
