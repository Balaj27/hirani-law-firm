"use client";
import { ArrowIcon } from "@/components/ui/arrow-icon";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Practice Areas", "/practice-areas"],
  ["Our Team", "/attorneys"],
  ["Blog", "/blog"],
  ["Contact", "/contact"],
];
export function SiteHeader({
  transparent = false,
  solidCta = false,
}: {
  transparent?: boolean;
  solidCta?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 32);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header
      className={`site-header ${transparent && !scrolled && !open ? "is-transparent" : ""} ${solidCta ? "has-solid-cta" : ""}`}
    >
      <div className="header-inner">
        <Link href="/" className="wordmark" aria-label="Hirani Law Firm home">
          <img
            src="/assets/hirani-logo.png"
            width="500"
            height="146"
            alt="Hirani Law Firm"
          />
        </Link>
        <button
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="site-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close ✕" : "Menu ☰"}
        </button>
        <nav
          id="site-navigation"
          className={open ? "navigation is-open" : "navigation"}
          aria-label="Main navigation"
        >
          {links.map(([label, url]) => (
            <Link
              key={url}
              href={url}
              aria-current={
                pathname === url ||
                (url !== "/" && pathname.startsWith(url + "/"))
                  ? "page"
                  : undefined
              }
            >
              {label}
            </Link>
          ))}
          <Link className="header-cta" href="/contact">
            Free Consultation{" "}
            <span aria-hidden>
              <ArrowIcon />
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
