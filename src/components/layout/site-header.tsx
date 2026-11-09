"use client";
import { ArrowIcon } from "@/components/ui/arrow-icon";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
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
  const headerRef = useRef<HTMLElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const navigation = useRef<HTMLElement>(null);
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
    const mobile = window.matchMedia("(max-width: 809px)");
    if (!mobile.matches) {
      setOpen(false);
      return;
    }
    const scrollY = window.scrollY;
    const body = document.body;
    const previous = {
      position: body.style.position,
      top: body.style.top,
      width: body.style.width,
      overflow: body.style.overflow,
    };
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";
    body.style.overflow = "hidden";
    const focusFrame = requestAnimationFrame(() =>
      navigation.current
        ?.querySelector<HTMLAnchorElement>("a")
        ?.focus({ preventScroll: true }),
    );
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus({ preventScroll: true });
      }
      if (e.key === "Tab") {
        const controls = [
          ...(headerRef.current?.querySelectorAll<HTMLElement>("a, button") ??
            []),
        ].filter(
          (el) =>
            el.getClientRects().length &&
            getComputedStyle(el).visibility !== "hidden",
        );
        const first = controls[0],
          last = controls[controls.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };
    const resize = () => {
      if (!mobile.matches) setOpen(false);
    };
    window.addEventListener("keydown", close);
    mobile.addEventListener("change", resize);
    return () => {
      cancelAnimationFrame(focusFrame);
      window.removeEventListener("keydown", close);
      mobile.removeEventListener("change", resize);
      Object.assign(body.style, previous);
      window.scrollTo({ top: scrollY, behavior: "instant" });
    };
  }, [open]);
  return (
    <header
      ref={headerRef}
      className={`site-header ${transparent && !scrolled && !open ? "is-transparent" : ""} ${solidCta ? "has-solid-cta" : ""} ${open ? "menu-open" : ""}`}
    >
      <div className="header-inner">
        <Link
          href="/"
          className="wordmark"
          aria-label="Hirani Law Firm home"
          onClick={() => setOpen(false)}
        >
          <img
            src="/assets/hirani-logo.png"
            width="500"
            height="146"
            alt="Hirani Law Firm"
          />
        </Link>
        <button
          ref={menuButton}
          type="button"
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="site-navigation"
          onClick={() => setOpen(!open)}
        >
          <span className="menu-toggle-lines" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
        <nav
          ref={navigation}
          id="site-navigation"
          className={open ? "navigation is-open" : "navigation"}
          aria-label="Main navigation"
        >
          <div className="navigation-links">
            {links.map(([label, url], index) => (
              <Link
                key={url}
                href={url}
                onClick={() => setOpen(false)}
                style={{ "--menu-link-index": index } as React.CSSProperties}
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
          </div>
          <Link
            className="header-cta"
            href="/contact"
            onClick={() => setOpen(false)}
          >
            Free Consultation{" "}
            <span aria-hidden>
              <ArrowIcon />
            </span>
          </Link>
          <div className="mobile-menu-card">
            <p className="mobile-menu-statement">
              Your case is personal to us.
            </p>
            <p>
              Clear guidance and dedicated representation for families and
              injury victims throughout Texas.
            </p>
            <Link href="/contact" onClick={() => setOpen(false)}>
              Free Consultation <ArrowIcon />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
