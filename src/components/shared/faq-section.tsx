import Link from "next/link";
import { faqs } from "@/content/faqs";
import styles from "./faq-section.module.css";
/** Native disclosure controls work with mouse, keyboard, touch, and without hydration. */
export function FaqSection({
  contactHref = "/contact",
}: {
  contactHref?: string;
}) {
  return (
    <section id="faqs" className={styles.section} aria-labelledby="faq-heading">
      <div className={styles.header}>
        <h2 id="faq-heading">Help & FAQs</h2>
        <p>
          Questions? We’ve got answers for you
          <span aria-hidden="true" />
        </p>
      </div>
      <div className={styles.intro}>
        <p>
          Find answers to the most common questions about services, process, and
          what it’s like to work with us.
        </p>
        <div className={styles.contact}>
          <p>Still have questions?</p>
          <Link href={contactHref}>
            Ask a question<span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
      <div className={styles.list}>
        {faqs.map((item, index) => (
          <details
            className={styles.item}
            key={item.question}
            name="jurista-faq"
            open={index === 0}
          >
            <summary
              className={styles.question}
              aria-controls={`faq-answer-${index}`}
            >
              <span>{item.question}</span>
              <span className={styles.icon} aria-hidden="true" />
            </summary>
            <div className={styles.answer} id={`faq-answer-${index}`}>
              <p>{item.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
