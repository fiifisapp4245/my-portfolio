import { Project } from "@/types/project";
import { ArrowLeftIcon } from "@/components/ui/icons";

interface CaseStudyHeroProps {
  project: Project;
}

export function CaseStudyHero({ project }: CaseStudyHeroProps) {
  return (
    <section className="relative bg-zinc-50 pb-16">
      {/* Spacer for fixed header */}
      <div className="h-20" aria-hidden />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 pt-8">
        {/* Back link */}
        <a
          href="/#work"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 transition-colors mb-8"
        >
          <ArrowLeftIcon size={16} />
          Back to Work
        </a>

        {/* Project index and category */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-sm font-medium text-zinc-400">
            {project.index}
          </span>
          <span className="h-1 w-1 rounded-full bg-zinc-300" />
          <span className="text-sm text-zinc-500 capitalize">
            {project.category.replace("-", " ")}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-semibold text-zinc-900 mb-4">
          {project.title}
        </h1>

        {/* Subtitle */}
        {project.subtitle && (
          <p className="text-xl text-zinc-500 mb-6">{project.subtitle}</p>
        )}

        {/* Description */}
        <p className="text-lg text-zinc-600 max-w-2xl mb-8">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 text-sm bg-white border border-zinc-200 rounded-full text-zinc-600"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Hero image */}
      {project.heroImage && (
        <div className="mt-12 mx-auto max-w-5xl px-4 sm:px-6">
          <div className="aspect-video rounded-xl overflow-hidden bg-zinc-100 border border-zinc-200">
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}
    </section>
  );
}
