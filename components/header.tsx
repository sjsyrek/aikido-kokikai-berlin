"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/first-class", label: "First Class" },
  { href: "/students", label: "Students" },
  { href: "/gallery", label: "Gallery" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Close on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Body scroll lock when menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Focus trap: when menu opens, move focus to first link
  useEffect(() => {
    if (isOpen && menuRef.current) {
      const firstLink = menuRef.current.querySelector<HTMLAnchorElement>("a");
      firstLink?.focus();
    }
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-warm-200 bg-warm-50/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 no-underline">
          <Image
            src="/images/kokikai.png"
            alt="Aikido Kokikai International"
            width={32}
            height={32}
            className="h-8 w-auto"
          />
          <span className="text-sm font-black text-warm-900">
            Aikido Kokikai Berlin
          </span>
        </Link>

        <nav className="hidden md:block" aria-label="Main navigation">
          <ul className="flex items-center gap-8">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-sm font-medium transition-colors hover:text-brand-red ${
                    pathname === href ? "text-brand-red" : "text-warm-800"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-brand-red md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            aria-hidden="true"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu with slide-down animation */}
      <nav
        id="mobile-menu"
        ref={menuRef}
        className={`overflow-hidden border-t border-warm-200 transition-all duration-200 md:hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
      >
        <ul className="divide-y divide-warm-200">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                tabIndex={isOpen ? 0 : -1}
                className={`block px-4 py-4 text-center text-sm font-medium transition-colors hover:bg-warm-100 ${
                  pathname === href ? "text-brand-red" : "text-warm-800"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
