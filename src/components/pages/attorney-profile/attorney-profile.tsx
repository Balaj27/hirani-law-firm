import { ArrowIcon } from "@/components/ui/arrow-icon";
import Link from "next/link";
import { firm } from "@/content/firm";
import { teamProfiles, type TeamProfile } from "@/content/team-profiles";
import { ConsultationForm } from "@/components/shared/consultation-form";
import styles from "./attorney-profile.module.css";

function ContactIcon({ phone = false }: { phone?: boolean }) {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden="true"
    >
      {phone ? (
        <path d="M6 3h3l2 5-2 2c1 3 2 4 5 5l2-2 5 2v3c0 2-1 3-3 3C10 20 4 14 3 6c0-2 1-3 3-3Z" />
      ) : (
        <>
          <rect x="2" y="4" width="20" height="16" rx="1" />
          <path d="m3 5 9 8 9-8" />
        </>
      )}
    </svg>
  );
}
function CheckList({ items }: { items: string[] }) {
  return (
    <ul className={styles.checkList}>
      {items.map((item) => (
        <li key={item}>
          <span aria-hidden="true">✓</span>
          {item}
        </li>
      ))}
    </ul>
  );
}
export function AttorneyProfile({ member }: { member: TeamProfile }) {
  const index = teamProfiles.findIndex((item) => item.slug === member.slug);
  const previous =
    teamProfiles[(index + teamProfiles.length - 1) % teamProfiles.length];
  const next = teamProfiles[(index + 1) % teamProfiles.length];
  return (
    <main className={styles.page}>
      <header className={styles.heading}>
        <p>{member.role}</p>
        <h1>{member.name}</h1>
      </header>
      <section className={styles.layout} aria-label={member.name + " profile"}>
        <aside className={styles.portraitColumn}>
          <img
            className={styles.portrait}
            data-scroll-image="18"
            src={member.image}
            alt={member.name + ", " + member.role}
            width="800"
            height="1066"
            fetchPriority="high"
          />
        </aside>
        <div className={styles.content}>
          <div className={styles.biography}>
            <p className={styles.lead}>{member.lead}</p>
            {member.paragraphs.map((paragraph) => (
              <p className={styles.body} key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
          <div className={styles.contacts}>
            <div className={styles.contactLinks}>
              <a href={"mailto:" + firm.email}>
                <ContactIcon />
                {firm.email}
              </a>
              <a href={firm.phoneHref}>
                <ContactIcon phone />
                {firm.phone}
              </a>
            </div>
            <div className={styles.socials} aria-label="Social profiles">
              {member.slug === "sehar-hirani" && (
                <a
                  href="https://www.linkedin.com/in/sehar-hirani-3581b687"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Sehar Hirani on LinkedIn"
                >
                  in
                </a>
              )}
              <a
                href="https://www.instagram.com/hiranilawfirm/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hirani Law Firm on Instagram"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r=".6" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>
          <section className={styles.section}>
            <h2>{member.sectionTitle}</h2>
            <p className={styles.body}>{member.sectionText}</p>
            <CheckList items={member.focus} />
          </section>
          {member.education.length > 0 && (
            <section className={styles.section}>
              <h2>Education &amp; Bar Admission</h2>
              <p className={styles.body}>
                Sehar graduated from the University of Houston and South Texas
                College of Law. She has been licensed in the State of Texas
                since 2018.
              </p>
              <CheckList items={member.education} />
            </section>
          )}
          {member.recognition.length > 0 && (
            <section className={styles.section}>
              <h2>Professional Memberships &amp; Recognition</h2>
              <ul className={styles.recognition}>
                {member.recognition.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          )}
          <section
            className={styles.section}
            aria-label="Contact Hirani Law Firm"
          >
            <ConsultationForm
              prefix={"profile-" + member.slug}
              memberName={member.name}
              plain
            />
          </section>
          <nav
            className={styles.pagination}
            aria-label="Team profile navigation"
          >
            <Link href={previous.href}>
              <span className={styles.paginationLabel}>Previous</span>
              <span className={styles.paginationName}>
                <ArrowIcon direction="left" /> {previous.name}
              </span>
            </Link>
            <Link href={next.href}>
              <span className={styles.paginationLabel}>Next</span>
              <span className={styles.paginationName}>
                {next.name} <ArrowIcon direction="right" />
              </span>
            </Link>
          </nav>
          <Link className={styles.back} href="/attorneys#our-team">
            View the full team{" "}
            <span aria-hidden="true">
              <ArrowIcon />
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
