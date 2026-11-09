import { ArrowIcon } from "@/components/ui/arrow-icon";
import Link from "next/link";
import styles from "./image-hero.module.css";

type Props = {
  title: string;
  image: string;
  alt: string;
  eyebrow?: string;
  description?: string;
  home?: boolean;
  centered?: boolean;
};
export function ImageHero({
  title,
  image,
  alt,
  eyebrow = "Hirani Law Firm · Houston & Katy, Texas",
  description,
  home = false,
  centered = false,
}: Props) {
  return (
    <section
      className={`${styles.hero} ${home ? styles.home : ""} ${centered ? styles.centered : ""}`}
      id="hero"
    >
      <div className={styles.inner}>
        <div className={styles.copy}>
          {!home && <p className={styles.eyebrow}>{eyebrow}</p>}
          <h1>{title}</h1>
          {description && <p className={styles.description}>{description}</p>}
          {home && (
            <>
              <div className={styles.buttons}>
                <Link href="/practice-areas">
                  Practice areas{" "}
                  <span aria-hidden="true">
                    <ArrowIcon />
                  </span>
                </Link>
                <Link href="/about">
                  Learn more{" "}
                  <span aria-hidden="true">
                    <ArrowIcon />
                  </span>
                </Link>
              </div>
              <p className={styles.homeLabel}>{eyebrow}</p>
              <p className={styles.note}>
                Protecting Texas families since 2018.
              </p>
            </>
          )}
        </div>
        <div
          className={styles.media}
          data-scroll-image={home || centered ? undefined : "32"}
        >
          <img src={image} alt={alt} fetchPriority="high" decoding="async" />
        </div>
      </div>
    </section>
  );
}
