import styles from "./founder-intro.module.css";
function ContactIcon({ phone = false }: { phone?: boolean }) {
  return (
    <span className={styles.contactIcon} aria-hidden="true">
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        {phone ? (
          <path d="M6 3h3l2 5-2 2c1 3 2 4 5 5l2-2 5 2v3c0 2-1 3-3 3C10 20 4 14 3 6c0-2 1-3 3-3Z" />
        ) : (
          <>
            <rect x="2" y="4" width="20" height="16" rx="1" />
            <path d="m3 5 9 8 9-8" />
          </>
        )}
      </svg>
    </span>
  );
}
export function FounderIntro() {
  return (
    <div className={styles.layout}>
      <div className={styles.profile}>
        <div className={styles.identity}>
          <div>
            <p className={styles.name}>Sehar Hirani</p>
            <p className={styles.role}>Founder & Attorney</p>
          </div>
          <img
            className={styles.signature}
            src="/assets/hirani-logo.png"
            alt="Hirani Law Firm"
            width="500"
            height="146"
          />
        </div>
        <img
          className={styles.portrait}
          src="/assets/hirani-sehar-standing.webp"
          alt="Sehar Hirani, Managing Attorney"
          width="800"
          height="1000"
          loading="lazy"
        />
      </div>
      <div className={styles.content}>
        <h2 className={styles.headline}>
          A mother, advocate, and steady guide for families in transition.
        </h2>
        <div className={styles.divider} />
        <div className={styles.quote}>
          <div className={styles.quoteText}>
            <p className={styles.lead}>
              As a mom of two, Attorney Sehar Hirani understands how deeply
              family legal matters can affect children, parents, and the future
              of a household. She is passionate about protecting children,
              supporting families, and defending fathers who want to remain
              present and active in their children’s lives.
            </p>
            <p className={styles.body}>
              Sehar graduated from the University of Houston and South Texas
              College of Law. She has been licensed in the State of Texas since
              2018.
            </p>
          </div>
          <svg
            className={styles.quoteMark}
            viewBox="0 0 64 59"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M36.571 19.932 56.196 0l6.465 6.566L45.714 23.78v2.72H64V59H36.571ZM27.429 26.498H9.143v-2.72L26.09 6.567 19.625 0 0 19.932V59h27.429Z" />
          </svg>
        </div>
        <div className={styles.contacts}>
          <a href="mailto:info@hiranilawfirm.com">
            <ContactIcon />
            <span>info@hiranilawfirm.com</span>
          </a>
          <a href="tel:+12816658188">
            <ContactIcon phone />
            <span>281-665-8188</span>
          </a>
        </div>
      </div>
    </div>
  );
}
