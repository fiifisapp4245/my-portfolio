import * as React from "react";
import { Card, CardContent, CardFooter } from "./card";

type WorkCardProps = {
  index: string;
  title: string;
  desc: string;
  tags?: string[];
  size?: "large" | "small";
};

export default function WorkCard({ index, title, desc, tags = [], size = "large" }: WorkCardProps) {
  const isLarge = size === "large";

  return (
    <Card className={"relative overflow-hidden " + (isLarge ? "rounded-2xl" : "rounded-xl") }>
      <div className={"absolute left-6 top-6 text-[84px] leading-none font-extrabold text-zinc-300 select-none " + (isLarge ? "text-[140px] md:text-[160px] lg:text-[180px]" : "text-[84px]") } aria-hidden>
        {index}
      </div>

      <CardContent className={isLarge ? "pt-36 pb-6" : "pt-28 pb-6"}>
        <h3 className={"font-semibold text-lg text-zinc-900"}>{title}</h3>
        <p className="mt-3 text-sm text-zinc-600 max-w-xl">{desc}</p>
      </CardContent>

      {tags.length > 0 && (
        <CardFooter>
          <div className="flex flex-wrap gap-2">
            {tags.map((t) => (
              <span key={t} className="rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-xs">
                {t}
              </span>
            ))}
          </div>
        </CardFooter>
      )}
    </Card>
  );
}
