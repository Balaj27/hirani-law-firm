import Link from "next/link";
import { caseStudies } from "@/content/case-studies";
import { StickyCaseStack } from "./sticky-case-stack";
import styles from "./case-studies.module.css";
function CaseStudyCard({
  study,
  index,
}: {
  study: (typeof caseStudies)[number];
  index: number;
}) {
  return (
    <article className={styles.card} style={{ zIndex: index + 1 }}>
      <Link
        className={styles.cardLink}
        href={study.href}
        aria-labelledby={`case-study-title-${index}`}
      >
        <img className={styles.image} src={study.image} alt="" loading="lazy" />
        <div className={styles.panel}>
          <div className={styles.meta}>
            <span className={styles.category}>{study.category}</span>
            <span className={styles.verdict}>{study.verdict}</span>
          </div>
          <h3 id={`case-study-title-${index}`}>{study.title}</h3>
          <p className={styles.description}>{study.description}</p>
        </div>
      </Link>
    </article>
  );
}
export function CaseStudies8() {
  return (
    <section
      id="case-studies"
      className={styles.section}
      aria-labelledby="case-studies-heading"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <p>
            <span aria-hidden="true" />
            Refined advocacy for complex matters
          </p>
          <h2 id="case-studies-heading">
            Delivering trusted legal services with experience &amp; commitment
            to justice.
          </h2>
        </header>
        <StickyCaseStack>
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={study.href} study={study} index={index} />
          ))}
        </StickyCaseStack>
        <div className={styles.cta}>
          <p>
            We believe legal counsel should reflect precision and attention to
            every detail for excellence in all interaction and every outcome.
          </p>
          <div className={styles.buttons}>
            <Link className={styles.primary} href="/contact">
              Get Your Case Reviewed<span aria-hidden="true">↗</span>
            </Link>
            <Link
              className={styles.secondary}
              href="https://jurista-tambe.framer.website/case-studies"
            >
              More Cases
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
