"use client";
import { ArrowIcon } from "@/components/ui/arrow-icon";

import Link from "next/link";
import { useEffect, useState } from "react";
import { faqCategories, faqGroups } from "@/content/faqs";
import styles from "./faq-section.module.css";
/** Topic navigation with native, keyboard-accessible answer disclosures. */
export function FaqSection({
  contactHref = "/contact",
}: {
  contactHref?: string;
}) {
  const [activeId, setActiveId] = useState(faqCategories[0].id);

  useEffect(() => {
    const syncTopic = () => {
      const id = window.location.hash.slice(1);
      if (faqCategories.some((category) => category.id === id)) setActiveId(id);
    };
    syncTopic();
    window.addEventListener("hashchange", syncTopic);
    return () => window.removeEventListener("hashchange", syncTopic);
  }, []);

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
          Clear answers to your questions about family law and personal injury
          in Texas. Choose a topic to get started.
        </p>
        <nav className={styles.topics} aria-label="FAQ topics">
          {faqGroups.map((group) => (
            <div className={styles.topicGroup} key={group}>
              <h3>{group}</h3>
              {faqCategories
                .filter((category) => category.group === group)
                .map((category) => (
                  <a
                    key={category.id}
                    href={`#${category.id}`}
                    aria-current={activeId === category.id ? "true" : undefined}
                    aria-controls={category.id}
                    onClick={(event) => {
                      event.preventDefault();
                      setActiveId(category.id);
                      window.history.replaceState(null, "", `#${category.id}`);
                      if (window.matchMedia("(max-width: 809px)").matches) {
                        requestAnimationFrame(() => {
                          document.getElementById(category.id)?.scrollIntoView({
                            block: "start",
                            behavior: window.matchMedia(
                              "(prefers-reduced-motion: reduce)",
                            ).matches
                              ? "instant"
                              : "smooth",
                          });
                        });
                      }
                    }}
                  >
                    <span>{category.title}</span>
                    <span aria-hidden="true">
                      <ArrowIcon />
                    </span>
                  </a>
                ))}
            </div>
          ))}
        </nav>
        <div className={styles.contact}>
          <p>Still have questions?</p>
          <Link href={contactHref}>
            Ask a question
            <span aria-hidden="true">
              <ArrowIcon />
            </span>
          </Link>
        </div>
      </div>
      <div className={styles.list}>
        {faqCategories.map((category) => (
          <section
            key={category.id}
            id={category.id}
            hidden={activeId !== category.id}
            aria-labelledby={`${category.id}-heading`}
          >
            <p className={styles.categoryLabel}>{category.group}</p>
            <h3 className={styles.categoryTitle} id={`${category.id}-heading`}>
              {category.title}
            </h3>
            {category.items.map((item, index) => (
              <details
                className={styles.item}
                key={item.question}
                name={`hirani-faq-${category.id}`}
                open={index === 0}
              >
                <summary
                  className={styles.question}
                  aria-controls={`faq-answer-${category.id}-${index}`}
                >
                  <span>{item.question}</span>
                  <span className={styles.icon} aria-hidden="true" />
                </summary>
                <div
                  className={styles.answer}
                  id={`faq-answer-${category.id}-${index}`}
                >
                  <p>{item.answer}</p>
                </div>
              </details>
            ))}
          </section>
        ))}
      </div>
    </section>
  );
}
