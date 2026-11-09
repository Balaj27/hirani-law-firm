"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Shared scroll motion. Existing pinned galleries and card stacks keep their own timelines. */
export function SiteMotion() {
  const pathname = usePathname();

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let dispose = () => {};
    const setup = () => {
      dispose();
      if (reduced.matches) return;

      const reveals = [
        ...document.querySelectorAll<HTMLElement>(
          "#main-content h1, #main-content h2, [data-reveal]",
        ),
      ].filter((el) => !el.closest(".site-header, footer, [data-motion-skip]"));
      const images = [
        ...document.querySelectorAll<HTMLElement>("[data-scroll-image]"),
      ];
      const visible = new Set<HTMLElement>();
      const positions = new Map<
        HTMLElement,
        { current: number; target: number }
      >();
      let frame = 0;
      let measuring = true;
      let disposed = false;

      const revealObserver = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            entry.target.classList.add("motion-visible");
            revealObserver.unobserve(entry.target);
          }
        },
        { threshold: 0.08, rootMargin: "0px 0px -24px 0px" },
      );

      reveals.forEach((el) => {
        // Never hide content already on screen or above a directly linked section.
        if (el.getBoundingClientRect().top < innerHeight * 0.94) return;
        el.classList.add("motion-reveal");
        revealObserver.observe(el);
      });

      const render = () => {
        frame = 0;
        if (disposed) return;
        const mobile = innerWidth <= 809;
        if (measuring) {
          for (const el of visible) {
            const position = positions.get(el)!;
            const rect = el.getBoundingClientRect();
            const top = rect.top - position.current;
            const progress = Math.min(
              1,
              Math.max(0, (innerHeight - top) / (innerHeight + rect.height)),
            );
            const distance = Number(el.dataset.scrollImage) || 24;
            position.target =
              (0.5 - progress) * 2 * distance * (mobile ? 0.4 : 1);
          }
          measuring = false;
        }
        let moving = false;
        for (const el of visible) {
          const position = positions.get(el)!;
          position.current += (position.target - position.current) * 0.14;
          if (Math.abs(position.target - position.current) < 0.04)
            position.current = position.target;
          else moving = true;
          el.style.setProperty(
            "--scroll-image-y",
            `${position.current.toFixed(2)}px`,
          );
        }
        if (moving) frame = requestAnimationFrame(render);
      };
      const schedule = () => {
        measuring = true;
        if (!frame) frame = requestAnimationFrame(render);
      };
      const imageObserver = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            const el = entry.target as HTMLElement;
            if (entry.isIntersecting) visible.add(el);
            else visible.delete(el);
          }
          schedule();
        },
        { rootMargin: "100px 0px" },
      );
      images.forEach((el) => {
        positions.set(el, { current: 0, target: 0 });
        imageObserver.observe(el);
      });
      window.addEventListener("scroll", schedule, { passive: true });
      window.addEventListener("resize", schedule);
      dispose = () => {
        disposed = true;
        cancelAnimationFrame(frame);
        revealObserver.disconnect();
        imageObserver.disconnect();
        window.removeEventListener("scroll", schedule);
        window.removeEventListener("resize", schedule);
        reveals.forEach((el) =>
          el.classList.remove("motion-reveal", "motion-visible"),
        );
        images.forEach((el) => el.style.removeProperty("--scroll-image-y"));
      };
    };
    setup();
    reduced.addEventListener("change", setup);
    return () => {
      reduced.removeEventListener("change", setup);
      dispose();
    };
  }, [pathname]);

  return null;
}
