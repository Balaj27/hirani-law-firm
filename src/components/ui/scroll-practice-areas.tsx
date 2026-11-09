"use client";

import { useEffect, useRef, type ReactNode } from "react";
import styles from "./scroll-practice-areas.module.css";

/** Native vertical scrolling drives the horizontal, overlapping service cards. */
export function ScrollPracticeAreas({ children }: { children: ReactNode }) {
  const section = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = section.current;
    if (!root) return;
    const viewport = root.querySelector<HTMLElement>(".framer-deaimj");
    const track = root.querySelector<HTMLElement>(".framer-1lhklhz");
    const pin = root.querySelector<HTMLElement>(`.${styles.pin}`);
    const header = document.querySelector<HTMLElement>(".site-header");
    if (!viewport || !track || !pin) return;
    const media = matchMedia(
      "(min-width: 810px) and (prefers-reduced-motion: no-preference)",
    );
    let frame = 0;
    let distance = 0;
    let current = 0;
    let target = 0;
    let headerHeight = 0;
    let pinned = false;

    const tick = () => {
      current += (target - current) * 0.14;
      if (Math.abs(target - current) < 0.25) current = target;
      viewport.scrollLeft = current;
      frame = current === target ? 0 : requestAnimationFrame(tick);
    };
    const onScroll = () => {
      if (!pinned) return;
      target = Math.min(
        distance,
        Math.max(0, headerHeight - root.getBoundingClientRect().top),
      );
      if (!frame) frame = requestAnimationFrame(tick);
    };
    const measure = () => {
      headerHeight = header?.getBoundingClientRect().height ?? 0;
      root.style.setProperty("--practice-header-height", `${headerHeight}px`);
      // Never trap content in a viewport that is too short to display it.
      const contentHeight = Math.ceil(pin.getBoundingClientRect().height);
      pinned = media.matches && contentHeight <= innerHeight - headerHeight - 8;
      root.dataset.pinned = String(pinned);
      distance = Math.max(0, viewport.scrollWidth - viewport.clientWidth);
      root.style.height = pinned ? `${contentHeight + distance}px` : "auto";
      if (!pinned) {
        cancelAnimationFrame(frame);
        frame = 0;
        current = target = 0;
        viewport.scrollLeft = 0;
      }
      onScroll();
    };
    Array.from(track.children).forEach((card, index) => {
      (card as HTMLElement).style.setProperty(
        "--stack-offset",
        `${index * 32}px`,
      );
    });
    const observer = new ResizeObserver(measure);
    observer.observe(viewport);
    observer.observe(track);
    observer.observe(pin);
    if (header) observer.observe(header);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    media.addEventListener("change", measure);
    measure();
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
      media.removeEventListener("change", measure);
    };
  }, []);

  return (
    <section
      ref={section}
      id="practice-areas"
      className={styles.section}
      aria-label="Our practice areas"
    >
      <div className={styles.pin}>{children}</div>
      <div className={styles.controls} aria-label="Practice area navigation">
        <button
          type="button"
          aria-label="Previous practice area"
          onClick={() => {
            const rail =
              section.current?.querySelector<HTMLElement>(".framer-deaimj");
            rail?.scrollBy({
              left: -rail.clientWidth * 0.85,
              behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
                ? "instant"
                : "smooth",
            });
          }}
        >
          ←
        </button>
        <button
          type="button"
          aria-label="Next practice area"
          onClick={() => {
            const rail =
              section.current?.querySelector<HTMLElement>(".framer-deaimj");
            rail?.scrollBy({
              left: rail.clientWidth * 0.85,
              behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
                ? "instant"
                : "smooth",
            });
          }}
        >
          →
        </button>
      </div>
    </section>
  );
}
