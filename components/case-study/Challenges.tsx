import { ProjectChallenge } from "@/types/project";

interface CaseStudyChallengesProps {
  challenges: ProjectChallenge[];
}

export function CaseStudyChallenges({ challenges }: CaseStudyChallengesProps) {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-zinc-900 mb-8">Challenges</h2>

      <div className="grid gap-6">
        {challenges.map((challenge, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-xl border border-zinc-200"
          >
            <div className="flex items-start gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-zinc-100 text-zinc-500 text-sm font-medium flex items-center justify-center">
                {index + 1}
              </span>
              <div>
                <h3 className="text-lg font-medium text-zinc-900 mb-2">
                  {challenge.title}
                </h3>
                <p className="text-zinc-600 leading-relaxed">
                  {challenge.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
