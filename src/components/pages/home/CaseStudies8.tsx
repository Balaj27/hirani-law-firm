import { ArrowIcon } from "@/components/ui/arrow-icon";
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
        <div className={styles.media}>
          <img
            className={styles.image}
            src={study.image}
            alt={study.imageAlt}
            loading="lazy"
          />
        </div>
        <div className={styles.panel}>
          <div className={styles.meta}>
            <span className={styles.category}>{study.category}</span>
            <span className={styles.verdict}>{study.label}</span>
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
            Why Hirani Law Firm
          </p>
          <h2 id="case-studies-heading">
            What sets us apart in personal injury representation.
          </h2>
        </header>
        <StickyCaseStack>
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={study.title} study={study} index={index} />
          ))}
        </StickyCaseStack>
        <div className={styles.cta}>
          <p>
            Evidence disappears quickly after accidents. We move fast to
            preserve records, photos, reports, and witness statements.
          </p>
          <div className={styles.buttons}>
            <Link className={styles.primary} href="/contact">
              Get Your Case Reviewed
              <span aria-hidden="true">
                <ArrowIcon />
              </span>
            </Link>
            <Link
              className={styles.secondary}
              href="/practice-areas/personal-injury"
            >
              Explore Personal Injury
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
