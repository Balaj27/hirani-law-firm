"use client";
import { useRef, useState } from "react";
import { processSteps } from "@/content/process";
import styles from "./process-section.module.css";
export function ProcessCards() {
  const [active, setActive] = useState(1);
  const buttons = useRef<Array<HTMLButtonElement | null>>([]);
  return (
    <div className={styles.cards} aria-label="How we work">
      {processSteps.map((step, index) => (
        <button
          key={step.number}
          ref={(element) => {
            buttons.current[index] = element;
          }}
          className={`${styles.card} ${index === active ? styles.active : ""}`}
          type="button"
          aria-pressed={index === active}
          aria-label={`Step ${step.number}: ${step.title}`}
          aria-describedby={`process-step-${step.number}`}
          onPointerEnter={(event) => {
            if (event.pointerType === "mouse") setActive(index);
          }}
          onFocus={() => setActive(index)}
          onClick={() => setActive(index)}
          onKeyDown={(event) => {
            let next = index;
            if (event.key === "ArrowRight" || event.key === "ArrowDown")
              next = (index + 1) % processSteps.length;
            else if (event.key === "ArrowLeft" || event.key === "ArrowUp")
              next = (index + processSteps.length - 1) % processSteps.length;
            else if (event.key === "Home") next = 0;
            else if (event.key === "End") next = processSteps.length - 1;
            else return;
            event.preventDefault();
            setActive(next);
            buttons.current[next]?.focus();
          }}
        >
          <img
            className={styles.image}
            src={step.image}
            alt=""
            loading="lazy"
          />
          <span className={styles.wash} aria-hidden="true" />
          <span className={styles.shade} aria-hidden="true" />
          <span className={styles.number}>{step.number}</span>
          <span className={styles.copy}>
            <span className={styles.title}>{step.title}</span>
            <span
              className={styles.description}
              id={`process-step-${step.number}`}
            >
              {step.description}
            </span>
          </span>
        </button>
      ))}
    </div>
  );
}
