import team from "@/content/team.json";
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
            <article className={styles.card} key={member.slug}>
              <a
                href={member.href}
                className={styles.photoLink}
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
                  ↗
                </span>
              </a>
              <p className={styles.role}>{member.role}</p>
              <h3>
                <a href={member.href}>{member.name}</a>
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
