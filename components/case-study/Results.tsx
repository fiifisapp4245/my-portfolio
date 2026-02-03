import { ProjectResult } from "@/types/project";

interface CaseStudyResultsProps {
  results: ProjectResult[];
}

export function CaseStudyResults({ results }: CaseStudyResultsProps) {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-zinc-900 mb-8">Results</h2>

      <div className="grid gap-6">
        {results.map((result, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-xl border border-zinc-200"
          >
            <h3 className="text-lg font-semibold text-zinc-900 mb-2">
              {result.metric}
            </h3>
            <p className="text-zinc-600 mb-4">{result.description}</p>

            {(result.before || result.after) && (
              <div className="flex flex-wrap gap-4 pt-4 border-t border-zinc-100">
                {result.before && (
                  <div className="flex-1 min-w-[150px]">
                    <span className="text-xs font-medium text-zinc-500 uppercase tracking-wide">
                      Before
                    </span>
                    <p className="text-sm text-zinc-500 mt-1">{result.before}</p>
                  </div>
                )}
                {result.after && (
                  <div className="flex-1 min-w-[150px]">
                    <span className="text-xs font-medium text-emerald-600 uppercase tracking-wide">
                      After
                    </span>
                    <p className="text-sm text-zinc-900 font-medium mt-1">
                      {result.after}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
