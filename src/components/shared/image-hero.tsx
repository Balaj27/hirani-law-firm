import Link from "next/link";
import { firm } from "@/content/firm";
import styles from "./image-hero.module.css";

type Props = {
  title: string;
  image: string;
  mobileImage?: string;
  alt: string;
  eyebrow?: string;
  description?: string;
  home?: boolean;
  centered?: boolean;
};
export function ImageHero({
  title,
  image,
  mobileImage,
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
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h1>{title}</h1>
          {description && <p className={styles.description}>{description}</p>}
          {home && (
            <>
              <div className={styles.homeActions}>
                <Link className={styles.consultButton} href="/contact">
                  Free consultation
                </Link>
                <a
                  className={styles.phoneLink}
                  href={firm.phoneHref}
                  aria-label={`Call Hirani Law Firm at ${firm.phone}`}
                >
                  {firm.phone}
                </a>
              </div>
              <p className={styles.note}>Serving Texas families since 2018.</p>
            </>
          )}
        </div>
        <div
          className={styles.media}
          data-scroll-image={home || centered ? undefined : "32"}
        >
          {mobileImage ? (
            <picture>
              <source media="(max-width: 809px)" srcSet={mobileImage} />
              <img
                src={image}
                alt={alt}
                fetchPriority="high"
                decoding="async"
              />
            </picture>
          ) : (
            <img src={image} alt={alt} fetchPriority="high" decoding="async" />
          )}
        </div>
      </div>
    </section>
  );
}
