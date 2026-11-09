import Link from "next/link";
import styles from "./image-hero.module.css";

type Props = {
  title: string;
  image: string;
  alt: string;
  eyebrow?: string;
  description?: string;
  home?: boolean;
};
export function ImageHero({
  title,
  image,
  alt,
  eyebrow = "Hirani Law Firm · Houston & Katy, Texas",
  description,
  home = false,
}: Props) {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h1>{title}</h1>
          {description && <p className={styles.description}>{description}</p>}
          {home && (
            <>
              <div className={styles.buttons}>
                <Link href="/contact">
                  Free consultation <span aria-hidden="true">↗</span>
                </Link>
                <Link href="/practice-areas">
                  Practice areas <span aria-hidden="true">↗</span>
                </Link>
              </div>
              <p className={styles.note}>
                Protecting Texas families since 2018.
              </p>
            </>
          )}
        </div>
        <div className={styles.media}>
          <img src={image} alt={alt} fetchPriority="high" decoding="async" />
        </div>
      </div>
    </section>
  );
}
