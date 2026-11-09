import { firm, inquiryTopics } from "@/content/firm";
import { ContactForm } from "@/components/ui/contact-form";
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
                        Get directions ↗
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
          <ContactForm
            className={styles.form}
            aria-label="Free consultation request"
          >
            <h3>Free case evaluation</h3>
            <div className={styles.fields}>
              <label htmlFor={prefix + "-first"}>
                First name
                <input
                  id={prefix + "-first"}
                  name="First name"
                  autoComplete="given-name"
                  required
                />
              </label>
              <label htmlFor={prefix + "-last"}>
                Last name
                <input
                  id={prefix + "-last"}
                  name="Last name"
                  autoComplete="family-name"
                  required
                />
              </label>
              <label htmlFor={prefix + "-email"}>
                Email address
                <input
                  id={prefix + "-email"}
                  name="Email address"
                  type="email"
                  autoComplete="email"
                  required
                />
              </label>
              <label htmlFor={prefix + "-phone"}>
                Phone number
                <input
                  id={prefix + "-phone"}
                  name="Phone number"
                  type="tel"
                  autoComplete="tel"
                  required
                />
              </label>
            </div>
            <label htmlFor={prefix + "-topic"}>
              What do you need help with?
              <select
                id={prefix + "-topic"}
                name="Legal matter"
                required
                defaultValue=""
              >
                <option value="" disabled>
                  Select a service
                </option>
                {inquiryTopics.map((topic) => (
                  <option key={topic}>{topic}</option>
                ))}
              </select>
            </label>
            <label htmlFor={prefix + "-message"}>
              Tell us what happened
              <textarea id={prefix + "-message"} name="Message" rows={4} />
            </label>
            <button type="submit">
              Request a free consultation <span aria-hidden="true">↗</span>
            </button>
            <p className={styles.disclaimer}>
              By submitting this form, you agree that we may contact you about
              your inquiry. Submission does not create an attorney-client
              relationship. Read our <a href={firm.privacy}>Privacy Policy</a>.
            </p>
          </ContactForm>
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
