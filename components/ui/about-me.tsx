import Image from "next/image";

const workExperience = [
  {
    company: "Deutsche Telekom",
    role: "UX Designer",
    period: "2025 → Now",
    logo: "/logos/dl-telekom-logo-01 1.png",
  },
  {
    company: "AmaliTech",
    role: "UX Designer",
    period: "2021 → Now",
    logo: "/logos/amalitech_icon.jpeg.png",
  },
  {
    company: "Broadspectrum DP.",
    role: "UX Designer",
    period: "2024 → 2025",
    logo: "/logos/bdp-main 1.png",
  },
  {
    company: "Duapa Werkspace",
    role: "UX Designer",
    period: "2023 → 2024",
    logo: "/logos/duapa logo 1.png",
  },
];

export default function AboutMe() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16">
        {/* Left column - Bio */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-zinc-900 mb-6">
            Hey! I'm Fiifi.{" "}
            <span className="inline-block" aria-label="waving hand">
              👋🏾
            </span>
          </h2>

          <p className="text-xl font-medium text-zinc-800 mb-6">
            Product designer and petroleum engineer based in Takoradi, Ghana,
            with experience designing enterprise platforms, fintech tools, and
            B2B systems.
          </p>

          <div className="space-y-4 text-zinc-600 text-sm leading-relaxed">
            <p>
              I've worked on ERP platforms, telecommunications infrastructure
              tools, and internal knowledge systems by simplifying technical
              complexity into workflows that operations teams can actually use.
            </p>

            <p>
              My engineering background (first-class honors, UMaT) gives me a
              systems-first lens: I think in data flows, dependencies, and
              constraints before pixels.
            </p>

            <p>
              I multiply impact by bridging the gap between technical logic and
              human usability, and collaborating closely with engineering teams
              to ensure design-to-code fidelity.
            </p>

            <p>
              When I'm not designing enterprise systems, I'm usually deep in one
              of three things: running COMSOL simulations for pipeline corrosion
              research, analyzing fundamentals for Ghana Stock Exchange
              investments, or exploring theological questions around leadership
              and ministry. I also mentor friends through technical and academic
              projects.
            </p>
          </div>
        </div>

        {/* Right column - Work Experience */}
        <div>
          <div className="space-y-6">
            {workExperience.map((job, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-zinc-50 rounded-xl"
              >
                {/* Company logo */}
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-zinc-100 overflow-hidden">
                  <Image
                    src={job.logo}
                    alt={`${job.company} logo`}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>

                {/* Job details */}
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-zinc-900">
                      {job.company}
                    </h3>
                    <span className="text-sm text-zinc-400">{job.period}</span>
                  </div>
                  <p className="text-sm text-zinc-500">{job.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
