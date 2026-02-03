import { ProjectMetric } from "@/types/project";

interface CaseStudyMetricsProps {
  metrics: ProjectMetric[];
}

export function CaseStudyMetrics({ metrics }: CaseStudyMetricsProps) {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-zinc-900 mb-8">
        Key Metrics
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="p-6 bg-zinc-50 rounded-xl border border-zinc-100"
          >
            <div className="text-3xl font-semibold text-zinc-900 mb-1">
              {metric.value}
            </div>
            <div className="text-sm font-medium text-zinc-600 mb-2">
              {metric.label}
            </div>
            {metric.description && (
              <p className="text-xs text-zinc-500">{metric.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
