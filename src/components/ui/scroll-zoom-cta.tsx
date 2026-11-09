"use client";
import { ArrowIcon } from "@/components/ui/arrow-icon";

import { useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./scroll-zoom-cta.module.css";
type Props = {
  title: string;
  video?: string;
  image?: string;
  poster: string;
  mark: string;
  href: string;
  label: string;
};
export function ScrollZoomCTA({
  title,
  video,
  image,
  poster,
  mark,
  href,
  label,
}: Props) {
  const section = useRef<HTMLElement>(null);
  const content = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = section.current;
    const text = content.current;
    if (!root || !text) return;
    const header = document.querySelector<HTMLElement>(".site-header");
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0,
      travel = innerHeight,
      headerHeight = 0,
      minScale = 0.72,
      current = 0.72,
      target = 0.72;
    const tick = () => {
      current = reduced.matches ? 1 : current + (target - current) * 0.14;
      if (Math.abs(current - target) < 0.0002) current = target;
      root.style.setProperty("--zoom-scale", String(current));
      frame = current === target ? 0 : requestAnimationFrame(tick);
    };
    const update = () => {
      if (!travel) {
        root.style.setProperty("--zoom-scale", "1");
        return;
      }
      const progress = Math.min(
        1,
        Math.max(0, (headerHeight - root.getBoundingClientRect().top) / travel),
      );
      target = reduced.matches ? 1 : minScale + (1 - minScale) * progress;
      if (!frame) frame = requestAnimationFrame(tick);
    };
    const measure = () => {
      headerHeight = header?.getBoundingClientRect().height ?? 0;
      const available = Math.max(0, innerHeight - headerHeight);
      const natural = text.scrollHeight + 64;
      const fits = natural <= available;
      const stageHeight = Math.max(available, natural);
      travel = reduced.matches || !fits ? 0 : innerHeight;
      minScale =
        parseFloat(
          getComputedStyle(root).getPropertyValue("--zoom-min-scale"),
        ) || 0.72;
      root.style.setProperty("--zoom-header-height", `${headerHeight}px`);
      root.style.setProperty("--zoom-stage-height", `${stageHeight}px`);
      root.style.height = `${stageHeight + travel}px`;
      root.dataset.pinned = String(fits && !reduced.matches);
      if (!travel) {
        target = current = 1;
        root.style.setProperty("--zoom-scale", "1");
      } else update();
    };
    const observer = new ResizeObserver(measure);
    observer.observe(text);
    if (header) observer.observe(header);
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", measure);
    reduced.addEventListener("change", measure);
    measure();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", measure);
      reduced.removeEventListener("change", measure);
    };
  }, []);
  return (
    <section
      ref={section}
      id="footer-cta"
      className={styles.section}
      aria-label="Speak with our attorneys"
    >
      <div className={styles.stage}>
        <div className={styles.media} aria-hidden="true">
          {video ? (
            <video
              src={video}
              poster={poster}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          ) : (
            <img
              src={image ?? poster}
              alt=""
              loading="lazy"
              width="1600"
              height="1066"
            />
          )}
          <div className={styles.shade} />
        </div>
        <div ref={content} className={styles.content}>
          <img src={mark} alt="" width={72} height={72} />
          <h2>{title}</h2>
          <Link href={href}>
            {label}
            <span aria-hidden="true">
              <ArrowIcon />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
