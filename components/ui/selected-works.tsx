"use client";

import WorkCard from "./work-card";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "./icons";

const items = [
  {
    index: "01",
    title: "TroveSuite ERP Platform",
    desc: "Unified ERP platform eliminating data silos across HR, Payroll, and POS for growing businesses.",
    tags: ["5 Active Companies", "External Partnership Interest", "Single Source of Truth Across All Modules"],
  },
  {
    index: "02",
    title: "Tech Overflow",
    desc: "B2B knowledge exchange platform replacing fragmented Slack threads with structured Q&A and best practices.",
    tags: ["35% Reduction in Search Time"],
  },
  {
    index: "03",
    title: "Docamet",
    desc: "Mobile concept addressing deadline anxiety and low completion rates for administrative workflows.",
    tags: ["90% Task Completion Rate"],
  },
];

export default function SelectedWorks() {
  const [index, setIndex] = useState(0);

  return (
    <section id="work" className="mx-auto max-w-5xl px-4 sm:px-6 py-20">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl md:text-4xl font-semibold text-zinc-900">Selected Works</h2>
        <div className="flex gap-3">
          <button
            aria-label="Previous"
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            className="h-9 w-9 rounded-full border border-zinc-200 bg-white/60 backdrop-blur-sm text-zinc-600 flex items-center justify-center"
          >
            <ChevronLeftIcon className="text-zinc-600" size={16} aria-hidden />
          </button>
          <button
            aria-label="Next"
            onClick={() => setIndex((i) => Math.min(items.length - 1, i + 1))}
            className="h-9 w-9 rounded-full border border-zinc-200 bg-white/60 backdrop-blur-sm text-zinc-600 flex items-center justify-center"
          >
            <ChevronRightIcon className="text-zinc-600" size={16} aria-hidden />
          </button>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[2fr_1fr] lg:auto-rows-fr">
        <div className="lg:row-span-2">
          <WorkCard {...items[0]} size="large" />
        </div>

        <div className="flex flex-col gap-6">
          <WorkCard {...items[1]} size="small" />
          <WorkCard {...items[2]} size="small" />
        </div>
      </div>
    </section>
  );
}
