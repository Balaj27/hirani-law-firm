"use client";
import { useEffect, useRef, type ReactNode } from "react";
import styles from "./case-studies.module.css";
/** CSS sticky positioning lets successive case studies cover the previous card. */
export function StickyCaseStack({ children }: { children: ReactNode }) {
  const stack = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = stack.current;
    if (!root) return;
    const header = document.querySelector<HTMLElement>(".site-header");
    const cards = Array.from(root.querySelectorAll<HTMLElement>("article"));
    const measure = () => {
      const headerHeight = header?.getBoundingClientRect().height ?? 0;
      root.style.setProperty("--case-header-height", `${headerHeight}px`);
      const tallest = Math.max(
        0,
        ...cards.map((card) => card.getBoundingClientRect().height),
      );
      root.dataset.sticky = String(
        innerWidth >= 810 && tallest <= innerHeight - headerHeight - 40,
      );
    };
    const observer = new ResizeObserver(measure);
    cards.forEach((card) => observer.observe(card));
    if (header) observer.observe(header);
    window.addEventListener("resize", measure);
    measure();
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);
  return (
    <div ref={stack} className={styles.stack}>
      {children}
    </div>
  );
}
