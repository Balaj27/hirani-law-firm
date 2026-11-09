import { ArrowIcon } from "@/components/ui/arrow-icon";
import Link from "next/link";
import practices from "@/content/practice-areas.json";
import type { PracticeDetail } from "@/content/practice-details";
import { firm } from "@/content/firm";
import styles from "./practice-detail.module.css";

export function SinglePracticeArea2({
  practice,
}: {
  practice: PracticeDetail;
}) {
  const services = practices.filter(
    (item) => item.group === practice.group && !item.parent,
  );
  return (
    <section className={styles.section} id="single-practice-area">
      <div className={styles.inner}>
        <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/practice-areas">Practice Areas</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{practice.title}</span>
        </nav>
        <div className={styles.layout}>
          <aside
            className={styles.sidebar}
            aria-label="Practice area navigation and attorney contact"
          >
            <nav className={styles.navigation} aria-label="Practice areas">
              <h2>Practice Areas</h2>
              <div className={styles.groups}>
                {practices
                  .filter((item) => item.parent)
                  .map((item) => (
                    <Link
                      className={styles.groupLink}
                      key={item.href}
                      href={item.href}
                      aria-current={
                        item.href === practice.href ? "page" : undefined
                      }
                    >
                      {item.title}
                      <span aria-hidden="true">
                        <ArrowIcon />
                      </span>
                    </Link>
                  ))}
              </div>
              <p className={styles.groupLabel}>{practice.group} services</p>
              <ul>
                {services.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={
                        item.href === practice.href ? "page" : undefined
                      }
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className={styles.attorney}>
              <img
                className={styles.portrait}
                src="/assets/sehar-hirani.jpg"
                alt="Sehar Hirani, Managing Attorney"
                width="1023"
                height="1537"
                loading="lazy"
              />
              <div className={styles.attorneyInfo}>
                <p className={styles.role}>Managing Attorney</p>
                <h3>Sehar Hirani</h3>
                <p>Serving Texas families since 2018.</p>
                <Link
                  className={styles.profileLink}
                  href="/attorneys/sehar-hirani"
                >
                  Meet Sehar{" "}
                  <span aria-hidden="true">
                    <ArrowIcon />
                  </span>
                </Link>
                <div className={styles.contacts}>
                  <a href={firm.phoneHref}>{firm.phone}</a>
                  <a href={"mailto:" + firm.email}>{firm.email}</a>
                </div>
              </div>
            </div>
          </aside>
          <article className={styles.content}>
            <header className={styles.overview}>
              <p className={styles.eyebrow}>Overview</p>
              <h2>{practice.title} at Hirani Law Firm</h2>
              <p className={styles.lead}>{practice.overview}</p>
            </header>
            <figure className={styles.figure} data-scroll-image="24">
              <img
                src="/assets/hirani-consultation.webp"
                alt="Sehar Hirani and Noraly Martinez reviewing documents"
                width="1600"
                height="1066"
                loading="lazy"
              />
            </figure>
            <section
              className={styles.block}
              aria-labelledby="service-capabilities-heading"
            >
              <p className={styles.eyebrow}>Focused support</p>
              <h2 id="service-capabilities-heading">How we can help</h2>
              {practice.parent ? (
                <div className={styles.services}>
                  {services.map((item) => (
                    <Link
                      className={styles.service}
                      href={item.href}
                      key={item.href}
                    >
                      <h3>
                        {item.title}
                        <span aria-hidden="true">
                          <ArrowIcon />
                        </span>
                      </h3>
                      <p>{item.description}</p>
                    </Link>
                  ))}
                </div>
              ) : (
                <ul className={styles.capabilities}>
                  {practice.capabilities.map((item) => (
                    <li key={item}>
                      <span aria-hidden="true">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </section>
            <section
              className={styles.block}
              aria-labelledby="service-approach-heading"
            >
              <p className={styles.eyebrow}>Our approach</p>
              <h2 id="service-approach-heading">A clear path forward.</h2>
              <p className={styles.body}>
                From intake to resolution, our entire team is dedicated to
                supporting you with clear explanations, honest updates, and a
                strategy shaped around your legal goals.
              </p>
              <ol className={styles.approach}>
                {practice.approach.map((step, index) => (
                  <li key={step}>
                    <span className={styles.step} aria-hidden="true">
                      0{index + 1}
                    </span>
                    <p>{step}</p>
                  </li>
                ))}
              </ol>
            </section>
            <section className={styles.consultation}>
              <p className={styles.eyebrow}>Start with a conversation</p>
              <h2>Your case deserves a personal commitment.</h2>
              <p>
                A confidential first conversation can help you understand your
                options before the next deadline or court date arrives.
              </p>
              <div className={styles.buttons}>
                <Link href="/contact">
                  Free consultation{" "}
                  <span aria-hidden="true">
                    <ArrowIcon />
                  </span>
                </Link>
                <a href={firm.phoneHref}>Call {firm.phone}</a>
              </div>
            </section>
          </article>
        </div>
      </div>
    </section>
  );
}
