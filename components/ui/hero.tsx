import Image from "next/image";

export default function Hero() {
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

      <div className="relative z-20 mx-auto max-w-6xl px-4 sm:px-6 pt-36 md:pt-52 lg:pt-64 pb-20 text-center sm:text-left">
        <h1 className="font-sans text-[40px] sm:text-[48px] md:text-[64px] font-semibold leading-tight tracking-tight text-zinc-900 dark:text-zinc-50 max-w-4xl">
          Translating complexity into operational clarity.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-700 dark:text-zinc-300 font-sans">
          I design enterprise platforms, ERP systems, and B2B tools that turn fragmented workflows into unified
          sources of truth, from ambiguity → structure → adoption.
        </p>
      </div>
    </section>
  );
}
