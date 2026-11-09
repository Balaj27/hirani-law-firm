import Link from "next/link";
import {
  experience,
  memberships,
  mission,
  stats,
  values,
} from "@/content/firm";
import practices from "@/content/practice-areas.json";
import { FounderIntro } from "./founder-intro";
import { GoogleReviews } from "./google-reviews";
import styles from "./hirani-sections.module.css";

function Items({
  items,
}: {
  items: readonly { title: string; description: string }[];
}) {
  return (
    <div className={styles.grid}>
      {items.map((item, i) => (
        <article className={styles.item} key={item.title}>
          <span className={styles.number}>0{i + 1}</span>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </article>
      ))}
    </div>
  );
}
export function WhoWeAre() {
  return (
    <section className={styles.section} id="who-we-are">
      <div className={styles.inner}>
        <div className={styles.split}>
          <div>
            <p className={styles.eyebrow}>Who we are</p>
            <h2>A law firm built on one powerful principle.</h2>
          </div>
          <div className={styles.copy}>
            <p>
              We believe every client deserves a dedicated team committed to
              protecting their rights and securing their future. We are more
              than just your lawyers — we are your partners and your advocates
              during life’s most difficult chapters.
            </p>
            <p>
              Whether you are navigating a divorce, fighting for child custody,
              pursuing a personal injury claim, or handling an adoption, Hirani
              Law Firm brings the same commitment: your case is personal to us.
            </p>
            <Link className={styles.button} href="/about">
              About our firm <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
        <div className={styles.stats}>
          {stats.map(([number, label]) => (
            <div key={label}>
              <strong>{number}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export function Memberships() {
  return (
    <section className={styles.section} id="memberships">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Professional memberships & recognition</p>
        <ul className={styles.memberships}>
          {memberships.map((name) => (
            <li className={styles.membership} key={name}>
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
export function MissionAndValues() {
  return (
    <section className={styles.section} id="mission">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Our mission</p>
        <div className={styles.split}>
          <h2>A client-first approach to law.</h2>
          <div className={styles.copy}>
            <p>
              Our mission is simple: to provide exceptional legal representation
              that eases the emotional and financial burden on our clients. The
              Hirani Law Firm difference is our unwavering commitment to a
              client-first approach.
            </p>
          </div>
        </div>
        <Items items={mission} />
        <div className={styles.subsection}>
          <p className={styles.eyebrow}>Our story & values</p>
          <h2 className={styles.statement}>
            Founded out of a belief that legal representation should be
            personal.
          </h2>
          <div
            className={styles.copy}
            style={{ maxWidth: 1000, marginTop: 32 }}
          >
            <p>
              Attorney Sehar Hirani founded Hirani Law Firm in 2018 out of a
              frustration with the impersonal, volume-based nature of many
              larger firms. She envisioned a practice where every client’s case
              is treated with the urgency and personal attention it deserves.
              This vision is the foundation of our core values.
            </p>
          </div>
          <Items items={values} />
        </div>
      </div>
    </section>
  );
}
export function WorkingWithUs() {
  return (
    <section className={styles.section} id="working-with-us">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>What it means to work with us</p>
        <h2 className={styles.statement}>
          When you choose Hirani Law Firm, you are choosing a different kind of
          legal experience.
        </h2>
        <Items items={experience} />
        <Link className={styles.button} href="/contact">
          Free confidential consultation <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}
export function FounderSection({ reviews = false }: { reviews?: boolean }) {
  return (
    <section className={styles.founder} id="founder-text">
      <FounderIntro />
      {reviews && (
        <div className={styles.reviews}>
          <GoogleReviews />
        </div>
      )}
    </section>
  );
}
export function AttorneyProfile() {
  return (
    <section className={styles.section} id="sehar-hirani">
      <div className={styles.inner}>
        <div className={styles.split}>
          <img
            className={styles.photo}
            src="/assets/hirani-sehar-standing.webp"
            alt="Sehar Hirani, Managing Attorney"
            loading="lazy"
          />
          <div>
            <p className={styles.eyebrow}>Meet Sehar Hirani</p>
            <h2>
              A mother, advocate, and steady guide for families in transition.
            </h2>
            <div className={styles.copy} style={{ marginTop: 32 }}>
              <p>
                As a mom of two, Attorney Sehar Hirani understands how deeply
                family legal matters can affect children, parents, and the
                future of a household. She is passionate about protecting
                children, supporting families, and defending fathers who want to
                remain present and active in their children’s lives.
              </p>
              <p>
                Sehar graduated from the University of Houston and South Texas
                College of Law. She has been licensed in the State of Texas
                since 2018.
              </p>
              <p>
                Serving Harris, Fort Bend, Montgomery, Galveston, and Austin
                Counties. Personal injury representation is available throughout
                Texas.
              </p>
            </div>
            <Link href="/contact" className={styles.button}>
              Speak with Sehar <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
export function ServiceDirectory() {
  return (
    <section className={styles.section} id="services">
      <div className={styles.inner}>
        <div className={styles.servicesHeader}>
          <p className={styles.eyebrow}>Our practice areas</p>
          <h2>
            Legal help for families & injury victims across Greater Houston.
          </h2>
          <p className={styles.copy}>
            Two focused practice areas. Deep expertise in each. Attorney Sehar
            Hirani handles family law across Greater Houston and personal injury
            cases throughout Texas.
          </p>
        </div>
        {["Family Law", "Personal Injury"].map((group) => (
          <div className={styles.serviceGroup} key={group}>
            <div className={styles.groupHeading}>
              <div>
                <h3>
                  {group === "Family Law"
                    ? "Family law services in Houston & Katy, TX"
                    : "Personal injury representation throughout Texas"}
                </h3>
                <p className={styles.copy}>
                  {group === "Family Law"
                    ? "Attorney Sehar Hirani guides families through every stage of family legal matters — from initial filings to final orders and post-judgment modifications."
                    : "When you have been seriously hurt, you need an attorney who will fight for the full compensation you deserve. You pay nothing unless we win."}
                </p>
              </div>
              <Link
                className={styles.button}
                href={
                  group === "Family Law"
                    ? "/practice-areas/family-law"
                    : "/practice-areas/personal-injury"
                }
              >
                Explore {group}
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
            <div className={styles.serviceGrid}>
              {practices
                .filter((p) => p.group === group && !p.parent)
                .map((p) => (
                  <article className={styles.service} key={p.href}>
                    <img src={p.icon} alt="" />
                    <h3>{p.title}</h3>
                    <p>{p.description}</p>
                    <Link href={p.href}>
                      View more <span aria-hidden="true">↗</span>
                    </Link>
                  </article>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Resources() {
  return (
    <section className={styles.section} id="resources">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Resources</p>
        <h2>Additional useful resources for you.</h2>
        <div className={styles.resources}>
          <article className={styles.resource}>
            <small>PDF · Free download</small>
            <h3>2026 Custody Sharing Calendar</h3>
            <p>
              Free, printable co-parenting calendar to help Texas families plan
              custody schedules and possession time.
            </p>
            <a
              href="https://www.hiranilawfirm.com/assets/2026-hirani-law-firm-custody-sharing-calendar.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download calendar ↗
            </a>
          </article>
          <article className={styles.resource}>
            <small>PDF · Free download</small>
            <h3>2027 Standard Possession Order Calendar</h3>
            <p>
              Free, printable calendar showing 2027 possession dates under the
              Texas Standard Possession Order, including weekends, holidays, and
              summer time.
            </p>
            <a
              href="https://www.hiranilawfirm.com/assets/2027-hirani-law-firm-custody-sharing-calendar.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download calendar ↗
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
