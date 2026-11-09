import { FaqSection } from "@/components/shared/faq-section";
import { ProcessCards } from "./process-cards";
import styles from "./process-section.module.css";
export function Process9() {
  return (
    <section
      id="process"
      className={styles.section}
      aria-labelledby="process-heading"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <p>
            <span aria-hidden="true" />
            Luxury in presence, strength in practice.
          </p>
          <h2 id="process-heading">
            Distinguished in stature, powerful in representation &amp;
            relentless in advocacy.
          </h2>
        </header>
        <ProcessCards />
        <div className={styles.faq}>
          <FaqSection />
        </div>
      </div>
    </section>
  );
}
