"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "./icons";
import { getAllProjects } from "@/data/projects";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = getAllProjects();

export default function SelectedWorks() {
  // Single index for current project (used for mobile single-card view)
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // On mobile: show 1 card, navigate 1 at a time
  // On desktop: show 3 cards starting from currentIndex
  const maxIndex = projects.length - 1;

  // Get projects to display (up to 3 starting from current index)
  const visibleProjects = projects.slice(currentIndex, currentIndex + 3);

  useEffect(() => {
    if (hasAnimated) return;

    const ctx = gsap.context(() => {
      // Animate section header
      gsap.fromTo(
        headerRef.current,
        {
          opacity: 0,
          y: 40
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );

      // Animate cards with stagger
      const cards = cardsRef.current?.querySelectorAll(".project-card");
      if (cards) {
        gsap.fromTo(
          cards,
          {
            opacity: 0,
            y: 60,
            scale: 0.95
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 75%",
              toggleActions: "play none none none",
              onEnter: () => setHasAnimated(true)
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [hasAnimated]);

  // Animate card transitions when navigating
  useEffect(() => {
    if (!hasAnimated) return;

    const cards = cardsRef.current?.querySelectorAll(".project-card");
    if (cards) {
      gsap.fromTo(
        cards,
        {
          opacity: 0.5,
          x: 20
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.4,
          stagger: 0.1,
          ease: "power2.out"
        }
      );
    }
  }, [currentIndex, hasAnimated]);

  return (
    <section ref={sectionRef} id="work" className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
      <div ref={headerRef} className="flex items-center justify-between mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-zinc-900">
          Selected Works
        </h2>

        {/* Navigation arrows */}
        <div className="flex items-center gap-2">
          <button
            aria-label="Previous project"
            onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
            disabled={currentIndex === 0}
            className="h-10 w-10 rounded-full border border-zinc-200 bg-white text-zinc-400 flex items-center justify-center transition-colors hover:border-zinc-300 hover:text-zinc-600 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronLeftIcon size={18} className="text-current" />
          </button>
          <button
            aria-label="Next project"
            onClick={() => setCurrentIndex((i) => Math.min(maxIndex, i + 1))}
            disabled={currentIndex >= maxIndex}
            className="h-10 w-10 rounded-full border border-zinc-200 bg-white text-zinc-400 flex items-center justify-center transition-colors hover:border-zinc-300 hover:text-zinc-600 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronRightIcon size={18} className="text-current" />
          </button>
        </div>
      </div>

      {/* Page indicator - mobile only */}
      <div className="flex justify-center mb-4 md:hidden">
        <span className="text-sm text-zinc-400">
          {currentIndex + 1} of {projects.length}
        </span>
      </div>

      <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {visibleProjects.map((project, idx) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className={`project-card group block bg-slate-50 rounded-2xl p-8 hover:bg-slate-100 transition-colors ${
              idx === 0 ? "" : "hidden md:block"
            }`}
          >
            {/* Large Index Number */}
            <span className="block text-7xl md:text-8xl font-bold text-blue-100 mb-6">
              {project.index}
            </span>

            {/* Project Title */}
            <h3 className="text-lg font-semibold text-zinc-900 mb-2 group-hover:text-blue-600 transition-colors">
              {project.title}
            </h3>

            {/* Short Description */}
            <p className="text-sm text-zinc-600 mb-3 line-clamp-2">
              {project.shortDescription}
            </p>

            {/* Duration */}
            <p className="text-sm text-zinc-500 mb-6">{project.duration}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 2).map((tag, index) => (
                <span
                  key={index}
                  className="text-xs text-blue-600 bg-white px-3 py-1.5 rounded-full border border-blue-100"
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 2 && (
                <span className="text-xs text-zinc-500 bg-white px-3 py-1.5 rounded-full border border-zinc-200">
                  +{project.tags.length - 2}
                </span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
