import { ProjectSolution } from "@/types/project";

interface CaseStudySolutionsProps {
  solutions: ProjectSolution[];
}

export function CaseStudySolutions({ solutions }: CaseStudySolutionsProps) {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-zinc-900 mb-8">Solutions</h2>

      <div className="grid gap-8">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className="p-6 bg-zinc-50 rounded-xl border border-zinc-100"
          >
            <h3 className="text-lg font-medium text-zinc-900 mb-3">
              {solution.title}
            </h3>
            <p className="text-zinc-600 leading-relaxed mb-4">
              {solution.description}
            </p>

            {solution.features && solution.features.length > 0 && (
              <ul className="space-y-2">
                {solution.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-zinc-400 mt-1.5" />
                    <span className="text-zinc-600">{feature}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
