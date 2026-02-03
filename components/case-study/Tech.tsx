import { ProjectTechnology } from "@/types/project";

interface CaseStudyTechProps {
  technologies: ProjectTechnology[];
  role: string;
  duration: string;
  team?: string;
}

export function CaseStudyTech({
  technologies,
  role,
  duration,
  team,
}: CaseStudyTechProps) {
  // Group technologies by category
  const grouped = technologies.reduce(
    (acc, tech) => {
      if (!acc[tech.category]) {
        acc[tech.category] = [];
      }
      acc[tech.category].push(tech);
      return acc;
    },
    {} as Record<string, ProjectTechnology[]>
  );

  const categoryLabels: Record<string, string> = {
    frontend: "Frontend",
    backend: "Backend",
    database: "Database",
    infrastructure: "Infrastructure",
    design: "Design",
    other: "Other",
  };

  return (
    <section>
      <h2 className="text-2xl font-semibold text-zinc-900 mb-8">
        Technical Details
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Project info */}
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wide mb-2">
              Role
            </h3>
            <p className="text-zinc-900">{role}</p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wide mb-2">
              Duration
            </h3>
            <p className="text-zinc-900">{duration}</p>
          </div>

          {team && (
            <div>
              <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wide mb-2">
                Team
              </h3>
              <p className="text-zinc-900">{team}</p>
            </div>
          )}
        </div>

        {/* Tech stack */}
        <div>
          <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wide mb-4">
            Tech Stack
          </h3>

          <div className="space-y-4">
            {Object.entries(grouped).map(([category, techs]) => (
              <div key={category}>
                <span className="text-xs text-zinc-500">
                  {categoryLabels[category] || category}
                </span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {techs.map((tech) => (
                    <span
                      key={tech.name}
                      className="px-2.5 py-1 text-sm bg-zinc-100 rounded text-zinc-700"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
