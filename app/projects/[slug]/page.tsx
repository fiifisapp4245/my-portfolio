import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getProjectBySlug,
  getAllProjectSlugs,
  getAllProjects,
} from "@/data/projects";
import { CaseStudyHero } from "@/components/case-study/Hero";
import { CaseStudyOverview } from "@/components/case-study/Overview";
import { CaseStudyMetrics } from "@/components/case-study/Metrics";
import { CaseStudyChallenges } from "@/components/case-study/Challenges";
import { CaseStudySolutions } from "@/components/case-study/Solutions";
import { CaseStudyResults } from "@/components/case-study/Results";
import { CaseStudyTech } from "@/components/case-study/Tech";
import { FigmaPrototype } from "@/components/case-study/FigmaPrototype";
import { ImageGallery } from "@/components/case-study/ImageGallery";
import { OtherProjects } from "@/components/case-study/OtherProjects";
import Contact from "@/components/ui/contact";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all projects
export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Generate metadata for each project
export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Case Study`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: project.heroImage ? [project.heroImage] : [],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const allProjects = getAllProjects();

  return (
    <main className="min-h-screen bg-white">
      <CaseStudyHero project={project} />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16 space-y-20">
        <CaseStudyOverview project={project} />

        {project.metrics && project.metrics.length > 0 && (
          <CaseStudyMetrics metrics={project.metrics} />
        )}

        {project.challenges && project.challenges.length > 0 && (
          <CaseStudyChallenges challenges={project.challenges} />
        )}

        {project.solutions && project.solutions.length > 0 && (
          <CaseStudySolutions solutions={project.solutions} />
        )}

        {project.results && project.results.length > 0 && (
          <CaseStudyResults results={project.results} />
        )}

        {project.figmaPrototype && (
          <FigmaPrototype
            url={project.figmaPrototype}
            title={`${project.title} Prototype`}
          />
        )}

        <CaseStudyTech
          technologies={project.technologies}
          role={project.role}
          duration={project.duration}
          team={project.team}
        />

        {project.images && project.images.length > 0 && (
          <ImageGallery images={project.images} title="Design Gallery" />
        )}
      </div>

      <OtherProjects projects={allProjects} currentSlug={slug} />

      <Contact />
    </main>
  );
}
