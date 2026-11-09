import { ArrowIcon } from "@/components/ui/arrow-icon";
import { teamProfiles as team } from "@/content/team-profiles";
import Link from "next/link";
import styles from "./team-section.module.css";

export function TeamSection() {
  return (
    <section
      className={styles.section}
      id="our-team"
      aria-labelledby="our-team-heading"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Our team</p>
          <h2 id="our-team-heading">A dedicated team in your corner.</h2>
          <p>
            Our strength lies in our collaborative, team-based approach. From
            your first call to the final resolution of your case, our dedicated
            team is here to support you.
          </p>
        </header>
        <div className={styles.grid}>
          {team.map((member) => (
            <article className={styles.card} key={member.slug} data-reveal>
              <Link
                href={member.href}
                className={styles.photoLink}
                data-scroll-image="18"
                aria-label={`Meet ${member.name}`}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  width="800"
                  height="1000"
                />
                <span className={styles.arrow} aria-hidden="true">
                  <ArrowIcon />
                </span>
              </Link>
              <p className={styles.role}>{member.role}</p>
              <h3>
                <Link href={member.href}>{member.name}</Link>
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
