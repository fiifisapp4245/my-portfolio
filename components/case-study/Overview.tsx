import { Project } from "@/types/project";

interface CaseStudyOverviewProps {
  project: Project;
}

export function CaseStudyOverview({ project }: CaseStudyOverviewProps) {
  const { overview } = project;

  return (
    <section>
      <h2 className="text-2xl font-semibold text-zinc-900 mb-8">Overview</h2>

      <div className="grid gap-8 md:gap-12">
        {/* Problem */}
        <div>
          <h3 className="text-sm font-medium text-zinc-400 uppercase tracking-wide mb-3">
            The Problem
          </h3>
          <p className="text-zinc-600 leading-relaxed">{overview.problem}</p>
        </div>

        {/* Solution */}
        <div>
          <h3 className="text-sm font-medium text-zinc-400 uppercase tracking-wide mb-3">
            The Solution
          </h3>
          <p className="text-zinc-600 leading-relaxed">{overview.solution}</p>
        </div>

        {/* Impact */}
        <div>
          <h3 className="text-sm font-medium text-zinc-400 uppercase tracking-wide mb-3">
            The Impact
          </h3>
          <p className="text-zinc-600 leading-relaxed">{overview.impact}</p>
        </div>
      </div>
    </section>
  );
}
