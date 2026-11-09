import styles from "./page-hero.module.css";
export function PageHero({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className={styles.hero} id="hero">
      <p>Hirani Law Firm · Houston & Katy, Texas</p>
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
}
