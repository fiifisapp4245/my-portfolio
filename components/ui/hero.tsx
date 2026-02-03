"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create timeline for sequenced animations
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Animate headline - words sliding up with stagger
      tl.fromTo(
        headlineRef.current,
        {
          opacity: 0,
          y: 60,
          clipPath: "inset(100% 0% 0% 0%)"
        },
        {
          opacity: 1,
          y: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1,
          delay: 0.2
        }
      );

      // Animate subtitle - fade up
      tl.fromTo(
        subtitleRef.current,
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8
        },
        "-=0.4" // Overlap with previous animation
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" className="relative w-full overflow-hidden bg-white -mt-[72px]">
      {/* Background illustration */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-image.svg"
          alt=""
          fill
          className="object-cover object-top"
          priority
        />
        {/* Fade to page background near fold (light/dark-specific) */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          {/* Light mode gradient */}
          <div
            className="absolute inset-0 block dark:hidden"
            style={{
              background: "linear-gradient(to bottom, rgba(255,255,255,0) 55%, rgba(255,255,255,1) 95%)",
            }}
            aria-hidden
          />
          {/* Dark mode gradient */}
          <div
            className="absolute inset-0 hidden dark:block"
            style={{
              background: "linear-gradient(to bottom, rgba(0,0,0,0) 55%, rgba(0,0,0,0.95) 95%)",
            }}
            aria-hidden
          />
        </div>
      </div>

      <div
        ref={heroRef}
        className="relative z-20 mx-auto max-w-6xl px-4 sm:px-6 pt-44 sm:pt-48 md:pt-52 lg:pt-64 pb-20 text-center sm:text-left"
      >
        <h1
          ref={headlineRef}
          className="font-sans text-[40px] sm:text-[48px] md:text-[64px] font-semibold leading-tight tracking-tight text-zinc-900 dark:text-zinc-50 max-w-4xl"
        >
          Translating complexity into operational clarity.
        </h1>
        <p
          ref={subtitleRef}
          className="mt-6 max-w-2xl text-lg leading-8 text-zinc-700 dark:text-zinc-300 font-sans"
        >
          I design enterprise platforms, ERP systems, and B2B tools that turn scattered processes across multiple tools into unified
          sources of truth, from confusion → clarity → results.
        </p>
      </div>
    </section>
  );
}
