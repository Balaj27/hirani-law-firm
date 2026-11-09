import { ArrowIcon } from "@/components/ui/arrow-icon";
import { firm } from "@/content/firm";
import { ConsultationForm } from "./consultation-form";
import { FaqSection } from "./faq-section";
import styles from "./consultation-section.module.css";

export function ConsultationSection({ full = false }: { full?: boolean }) {
  const prefix = full ? "contact" : "home";
  return (
    <section className={styles.section} id="consultation">
      <div className={styles.inner}>
        <div className={styles.layout}>
          <div className={styles.intro}>
            <p className={styles.eyebrow}>
              {full ? "Get in touch" : "Start here"}
            </p>
            <h2>
              {full
                ? "Tell us about your situation."
                : "Your first step to resolution starts with a conversation."}
            </h2>
            <p className={styles.description}>
              A confidential first conversation can help you understand your
              options before the next deadline or court date arrives.
            </p>
            <p className={styles.promise}>
              Confidential · No obligation · We respond within 24 hours.
            </p>
            <dl className={styles.details}>
              <div>
                <dt>Phone</dt>
                <dd>
                  <a href={firm.phoneHref}>{firm.phone}</a>
                </dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>
                  <a href={"mailto:" + firm.email}>{firm.email}</a>
                </dd>
              </div>
              {full && (
                <>
                  <div>
                    <dt>Office address</dt>
                    <dd>
                      {firm.address.map((line) => (
                        <span key={line}>
                          {line}
                          <br />
                        </span>
                      ))}
                      <a
                        className={styles.directions}
                        href={firm.directions}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Get directions <ArrowIcon />
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt>Office hours</dt>
                    <dd>
                      Monday – Friday: 9:00 AM – 5:00 PM
                      <br />
                      Saturday: By appointment
                      <br />
                      Sunday: Closed
                    </dd>
                  </div>
                </>
              )}
            </dl>
          </div>
          <ConsultationForm prefix={prefix} />
        </div>
        {full && (
          <>
            <iframe
              className={styles.map}
              title="Hirani Law Firm office location"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=Hirani%20Law%20Firm%2C%2022336%20Grand%20Corner%20Dr%20Ste%20130%2C%20Katy%2C%20TX%2077494&z=14&output=embed"
            />
            <div className={styles.faq}>
              <FaqSection />
            </div>
          </>
        )}
      </div>
    </section>
  );
}
