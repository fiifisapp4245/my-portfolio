import { Project } from "@/types/project";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/ui/icons";

interface CaseStudyNavigationProps {
  prev: Project | null;
  next: Project | null;
}

export function CaseStudyNavigation({ prev, next }: CaseStudyNavigationProps) {
  return (
    <section className="border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12">
        <div className="flex justify-between items-center">
          {/* Previous project */}
          {prev ? (
            <Link
              href={`/projects/${prev.slug}`}
              className="group flex items-center gap-3 text-zinc-500 hover:text-zinc-900 transition-colors"
            >
              <ChevronLeftIcon
                size={20}
                className="group-hover:-translate-x-1 transition-transform"
              />
              <div className="text-left">
                <span className="text-xs text-zinc-400 block">Previous</span>
                <span className="font-medium">{prev.title}</span>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {/* Back to work */}
          <Link
            href="/#work"
            className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors hidden md:block"
          >
            All Projects
          </Link>

          {/* Next project */}
          {next ? (
            <Link
              href={`/projects/${next.slug}`}
              className="group flex items-center gap-3 text-zinc-500 hover:text-zinc-900 transition-colors"
            >
              <div className="text-right">
                <span className="text-xs text-zinc-400 block">Next</span>
                <span className="font-medium">{next.title}</span>
              </div>
              <ChevronRightIcon
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </section>
  );
}
