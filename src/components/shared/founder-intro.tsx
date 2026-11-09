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
            <p className={styles.name}>William Ashford Sr</p>
            <p className={styles.role}>The founder</p>
          </div>
          <img
            className={styles.signature}
            src="/assets/1de505d2eb198bdc.png"
            alt="William Ashford Sr’s signature"
            width="688"
            height="268"
          />
        </div>
        <img
          className={styles.portrait}
          src="/assets/b66d6cfd729b13a7.webp"
          alt="William Ashford Sr, founder of Jurista"
          width="800"
          height="1000"
          loading="lazy"
        />
      </div>
      <div className={styles.content}>
        <h2 className={styles.headline}>
          Values that matter deeply to us including integrity, commitment where
          the clients feel respected and confident in the counsel.
        </h2>
        <div className={styles.divider} />
        <div className={styles.quote}>
          <div className={styles.quoteText}>
            <p className={styles.lead}>
              I founded this firm because I believed clients deserved a
              different kind of legal experience, one grounded not only in skill
              and strategy, but also in empathy, trust, and true personal
              commitment. Too often, legal matters can leave people feeling
              uncertain or unheard.
            </p>
            <p className={styles.body}>
              To me, practicing law has always been about more than solving
              problems. It is about helping all people to move forward with
              clarity, confidence, and trusted support.
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
          <a href="mailto:W.Ashford@Jurista.com">
            <ContactIcon />
            <span>w.ashford@jurista.com</span>
          </a>
          <a href="tel:+20116114574">
            <ContactIcon phone />
            <span>+2 011 611-4574</span>
          </a>
        </div>
      </div>
    </div>
  );
}
