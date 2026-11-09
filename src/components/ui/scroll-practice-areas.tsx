"use client";
import { ArrowIcon } from "@/components/ui/arrow-icon";

import { useEffect, useRef } from "react";
import Link from "next/link";
import allPractices from "@/content/practice-areas.json";
const practices = allPractices.filter((practice) => practice.featured);
import styles from "./scroll-practice-areas.module.css";
export function ScrollPracticeAreas() {
  const section = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const rail = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = section.current,
      pin = stage.current,
      viewport = rail.current,
      row = track.current;
    if (!root || !pin || !viewport || !row) return;
    const header = document.querySelector<HTMLElement>(".site-header");
    const desktop = matchMedia("(min-width: 810px)");
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    let current = 0,
      target = 0,
      distance = 0,
      headerHeight = 0,
      pinned = false,
      frame = 0;
    const tick = () => {
      current = reduced.matches ? target : current + (target - current) * 0.14;
      if (Math.abs(target - current) < 0.25) current = target;
      viewport.scrollLeft = current;
      frame = current === target ? 0 : requestAnimationFrame(tick);
    };
    const update = () => {
      if (!pinned) return;
      target = Math.min(
        distance,
        Math.max(0, headerHeight - root.getBoundingClientRect().top),
      );
      if (!frame) frame = requestAnimationFrame(tick);
    };
    const fits = () =>
      Array.from(row.children).every(
        (card) => card.scrollHeight <= card.clientHeight + 2,
      ) && pin.scrollHeight <= pin.clientHeight + 2;
    const measure = () => {
      headerHeight = header?.getBoundingClientRect().height ?? 0;
      const available = Math.max(0, innerHeight - headerHeight);
      root.style.setProperty("--practice-header-height", `${headerHeight}px`);
      root.style.setProperty("--practice-stage-height", `${available}px`);
      root.dataset.layout = desktop.matches ? "desktop" : "mobile";
      root.dataset.pinned = String(desktop.matches);
      root.dataset.density = "normal";
      if (desktop.matches && !fits()) root.dataset.density = "compact";
      if (desktop.matches && !fits()) root.dataset.density = "tight";
      pinned = desktop.matches && fits();
      root.dataset.pinned = String(pinned);
      distance = Math.max(0, viewport.scrollWidth - viewport.clientWidth);
      root.style.height = pinned ? `${available + distance}px` : "auto";
      if (!pinned) {
        cancelAnimationFrame(frame);
        frame = 0;
        target = current = 0;
        viewport.scrollLeft = 0;
      } else update();
    };
    const observer = new ResizeObserver(measure);
    observer.observe(pin);
    observer.observe(viewport);
    const title = pin.querySelector("header");
    if (title) observer.observe(title);
    if (header) observer.observe(header);
    window.addEventListener("resize", measure);
    window.addEventListener("scroll", update, { passive: true });
    desktop.addEventListener("change", measure);
    reduced.addEventListener("change", update);
    let alive = true;
    document.fonts.ready.then(() => {
      if (alive) measure();
    });
    measure();
    return () => {
      alive = false;
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", update);
      desktop.removeEventListener("change", measure);
      reduced.removeEventListener("change", update);
    };
  }, []);
  return (
    <section
      ref={section}
      id="practice-areas"
      className={styles.section}
      aria-labelledby="practice-heading"
    >
      <div ref={stage} className={styles.stage}>
        <div className={styles.background} aria-hidden="true">
          <img src="/assets/6a72adc93d8c6189.webp" alt="" />
          <div />
        </div>
        <header className={styles.header}>
          <div>
            <p className={styles.eyebrow}>
              <span aria-hidden="true" />
              Protecting families. Helping injured people recover.
            </p>
            <h2 id="practice-heading">
              Comprehensive legal services for families and individuals.
            </h2>
          </div>
          <Link className={styles.button} href="/practice-areas">
            Learn More
            <span aria-hidden="true">
              <ArrowIcon />
            </span>
          </Link>
        </header>
        <div ref={rail} className={styles.rail}>
          <div ref={track} className={styles.track}>
            {practices.map((practice, index) => (
              <article
                className={styles.card}
                key={practice.title}
                style={{ "--stack-offset": `${index * 32}px` }}
              >
                <div
                  className={styles.icon}
                  style={{
                    maskImage: `url(${practice.icon})`,
                    WebkitMaskImage: `url(${practice.icon})`,
                  }}
                  aria-hidden="true"
                />
                <h3>{practice.title}</h3>
                <p className={styles.description}>{practice.description}</p>
                <div className={styles.action}>
                  <Link className={styles.button} href={practice.href}>
                    Read More
                    <span aria-hidden="true">
                      <ArrowIcon />
                    </span>
                  </Link>
                </div>
              </article>
            ))}
            <article
              className={`${styles.card} ${styles.cta}`}
              style={{ "--stack-offset": `${practices.length * 32}px` }}
            >
              <h3>
                Your story matters to us. Let’s discuss how our team can help
                you move forward.
              </h3>
              <p className={styles.description}>
                Your first step to resolution starts with a conversation. Book a
                free, confidential consultation with Hirani Law Firm PLLC.
              </p>
              <div className={styles.action}>
                <Link className={styles.button} href="/contact">
                  Free Consultation
                  <span aria-hidden="true">
                    <ArrowIcon />
                  </span>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
