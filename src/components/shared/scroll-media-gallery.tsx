"use client";
import { useEffect, useRef } from "react";
import { media } from "@/content/media";
import styles from "./scroll-media-gallery.module.css";
export function ScrollMediaGallery() {
  const section = useRef<HTMLElement>(null);
  const gallery = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = section.current,
      row = gallery.current;
    if (!root || !row) return;
    const header = document.querySelector<HTMLElement>(".site-header");
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0,
      current = 0,
      target = 0,
      travel = 1,
      headerHeight = 0;
    const render = () => {
      current += (target - current) * 0.18;
      if (Math.abs(target - current) < 0.0005) current = target;
      root.style.setProperty("--media-progress", String(current));
      frame = current === target ? 0 : requestAnimationFrame(render);
    };
    const update = () => {
      target = reduced.matches
        ? 1
        : Math.min(
            1,
            Math.max(
              0,
              (headerHeight - root.getBoundingClientRect().top) / travel,
            ),
          );
      if (!frame) frame = requestAnimationFrame(render);
    };
    const measure = () => {
      headerHeight = header?.getBoundingClientRect().height ?? 0;
      const available = Math.max(240, innerHeight - headerHeight);
      travel = available * 0.85;
      root.style.setProperty("--media-header", headerHeight + "px");
      root.style.setProperty("--media-full-height", available + "px");
      root.dataset.animated = String(!reduced.matches);
      root.style.height = reduced.matches
        ? "auto"
        : row.offsetHeight + travel + "px";
      update();
    };
    const observer = new ResizeObserver(measure);
    observer.observe(row);
    if (header) observer.observe(header);
    window.addEventListener("resize", measure);
    window.addEventListener("scroll", update, { passive: true });
    reduced.addEventListener("change", measure);
    measure();
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", update);
      reduced.removeEventListener("change", measure);
    };
  }, []);
  return (
    <section
      ref={section}
      className={styles.section}
      id="video"
      aria-label="Life at Hirani Law Firm"
    >
      <div ref={gallery} className={styles.gallery}>
        <img
          className={styles.photo}
          src={media.seharStanding}
          alt="Attorney Sehar Hirani"
          loading="lazy"
        />
        <img
          className={styles.photo}
          src={media.consultation}
          alt="Sehar Hirani and Noraly Martinez reviewing documents"
          loading="lazy"
        />
        <div className={styles.center}>
          <div className={styles.video}>
            <img
              src={media.teamOffice}
              alt="The Hirani Law Firm team"
              loading="lazy"
            />
          </div>
        </div>
        <img
          className={styles.photo}
          src={media.teamHallway}
          alt="The Hirani Law Firm team"
          loading="lazy"
        />
        <img
          className={styles.photo}
          src={media.hero}
          alt="Attorney Sehar Hirani at her office"
          loading="lazy"
        />
      </div>
    </section>
  );
}
