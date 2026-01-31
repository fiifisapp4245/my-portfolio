"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { MenuIcon, CloseIcon } from "./icons";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isStuck, setIsStuck] = useState(false);
  const navItems = [
    { href: "#work", label: "Work" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  const headerRef = useRef<HTMLElement | null>(null);
  const [headerHeight, setHeaderHeight] = useState<number>(0);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.getBoundingClientRect().height);
    }
    const onResize = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.getBoundingClientRect().height);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const hero = document.querySelector("#home");
    if (!hero) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When hero is not intersecting, header should stick
          setIsStuck(!entry.isIntersecting);
        });
      },
      { root: null, threshold: 0 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header ref={headerRef} className={isStuck ? "sticky top-0 z-40 w-full font-sans" : "absolute inset-x-0 top-0 z-40 w-full font-sans"}>

      <div className="mx-auto flex max-w-lg w-full mt-4 items-center justify-between gap-8 rounded-full bg-white/60 backdrop-blur-sm border border-white/10 px-8 py-6 dark:bg-black/30 dark:border-black/20 md:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/fiifis_logo.svg" alt="Fiifi logo" width={84} height={24} />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-base font-medium text-zinc-800 hover:text-black dark:text-zinc-200"
            >
              {item.label}
            </a>
          ))}
        </nav> 

        {/* Mobile */}
        <div className="md:hidden">
          <button
            aria-label={open ? "Close navigation" : "Open navigation"}
            onClick={() => setOpen((s) => !s)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/70 text-zinc-900 backdrop-blur transition-colors hover:bg-white"
          >
            {open ? (
              <CloseIcon className="text-zinc-900" size={18} aria-hidden />
            ) : (
              <MenuIcon className="text-zinc-900" size={18} aria-hidden />
            )}
          </button>

          {open && (
            <div className="absolute right-6 top-20 w-48 rounded-lg bg-white/40 backdrop-blur-sm border border-white/10 p-4 dark:bg-black/30 dark:border-black/20">
              <ul className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="block rounded-md px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#contact"
                    className="block rounded-md px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50"
                    onClick={() => setOpen(false)}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      </header>
      {/* placeholder to prevent layout jump when header becomes sticky */}
      {isStuck && <div style={{ height: headerHeight }} aria-hidden />}
    </>
  );
}
