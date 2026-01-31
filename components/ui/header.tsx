"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MenuIcon, CloseIcon } from "./icons";

export default function Header() {
  const [open, setOpen] = useState(false);
  const navItems = [
    { href: "/#work", label: "Work" },
    { href: "/#about", label: "About" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full font-sans py-4">
      <div className="mx-auto flex max-w-lg w-full items-center justify-between gap-8 rounded-full bg-white/90 backdrop-blur-md border border-zinc-200/50 shadow-sm px-8 py-4 md:px-8">
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
            <div className="absolute right-6 top-20 w-48 rounded-lg bg-white/95 backdrop-blur-md border border-zinc-200 shadow-lg p-4">
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
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
