import * as React from "react";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "./card";

type WorkCardProps = {
  slug: string;
  index: string;
  title: string;
  desc: string;
  duration?: string;
  tags?: string[];
  size?: "large" | "small";
};

export default function WorkCard({
  slug,
  index,
  title,
  desc,
  duration,
  tags = [],
  size = "large",
}: WorkCardProps) {
  const isLarge = size === "large";

  return (
    <Link href={`/projects/${slug}`} className="block group h-full">
      <Card
        className={
          "relative overflow-hidden h-full border border-zinc-200 bg-white transition-shadow hover:shadow-lg " +
          (isLarge ? "rounded-2xl" : "rounded-xl")
        }
      >
        {/* Large index number watermark */}
        <div
          className={
            "absolute left-6 top-4 leading-none font-extrabold text-blue-100 select-none " +
            (isLarge
              ? "text-[120px] md:text-[140px] lg:text-[160px]"
              : "text-[80px]")
          }
          aria-hidden
        >
          {index}
        </div>

        <CardContent
          className={
            "relative " + (isLarge ? "pt-32 md:pt-36 pb-4" : "pt-20 pb-4")
          }
        >
          <h3 className="font-semibold text-lg text-zinc-900 group-hover:text-zinc-600 transition-colors">
            {title}
          </h3>
          <p className="mt-2 text-sm text-zinc-500 line-clamp-2">{desc}</p>

          {/* Duration/Timeline */}
          {duration && (
            <p className="mt-3 text-xs text-zinc-400">{duration}</p>
          )}
        </CardContent>

        {tags.length > 0 && (
          <CardFooter className="pt-0">
            <div className="flex flex-wrap gap-2">
              {tags.slice(0, isLarge ? 4 : 2).map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-blue-50 text-blue-600 px-3 py-1 text-xs font-medium"
                >
                  {t}
                </span>
              ))}
              {tags.length > (isLarge ? 4 : 2) && (
                <span className="rounded-full bg-zinc-100 text-zinc-500 px-3 py-1 text-xs font-medium">
                  +{tags.length - (isLarge ? 4 : 2)}
                </span>
              )}
            </div>
          </CardFooter>
        )}
      </Card>
    </Link>
  );
}
