import Link from "next/link";
import { ContactForm } from "@/components/ui/contact-form";
import styles from "./site-footer.module.css";
const groups = [
  {
    title: "Our Firm",
    links: [
      ["About Hirani", "/about"],
      ["Meet Our Team", "/attorneys"],
      ["Client Reviews", "/about#google-reviews"],
      ["Contact Us", "/contact"],
    ],
  },
  {
    title: "Practice Areas",
    links: [
      ["Family Law", "/practice-areas/family-law"],
      ["Divorce", "/practice-areas/divorce"],
      ["Child Custody", "/practice-areas/child-custody"],
      ["Adoption", "/practice-areas/adoption"],
      ["Personal Injury", "/practice-areas/personal-injury"],
      ["Auto Accidents", "/practice-areas/auto-accidents"],
    ],
  },
  {
    title: "Resources",
    links: [
      ["Legal Insights", "/blog"],
      ["Help & FAQs", "/contact#faqs"],
      ["Custody Calendars", "/#resources"],
      ["Privacy Policy", "https://www.hiranilawfirm.com/privacy-policy"],
    ],
  },
];
function SocialIcon({ type }: { type: "linkedin" | "instagram" | "x" }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      {type === "linkedin" ? (
        <>
          <rect x="3" y="3" width="18" height="18" rx="1" />
          <path d="M7 10v7m4 0v-7m0 3c0-4 6-4 6 0v4" />
          <circle cx="7" cy="7" r=".8" fill="currentColor" />
        </>
      ) : type === "instagram" ? (
        <>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" />
        </>
      ) : (
        <path d="M4 3h4l12 18h-4L4 3Zm16 0L4 21" />
      )}
    </svg>
  );
}
export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.newsletter}>
          <h2>Subscribe for legal insights</h2>
          <ContactForm className={styles.form}>
            <label className={styles.srOnly} htmlFor="footer-newsletter-email">
              Email address
            </label>
            <input
              id="footer-newsletter-email"
              type="email"
              name="Email Address"
              placeholder="Email"
              autoComplete="email"
              required
            />
            <button type="submit" aria-label="Subscribe for legal insights">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path d="M3 12h17m-6-6 6 6-6 6" />
              </svg>
            </button>
          </ContactForm>
          <p>Your information is kept confidential</p>
          <div className={styles.socials} aria-label="Social media">
            <a
              href="https://www.linkedin.com/in/sehar-hirani-3581b687"
              aria-label="LinkedIn"
            >
              <SocialIcon type="linkedin" />
            </a>
            <a
              href="https://www.instagram.com/hiranilawfirm/"
              aria-label="Instagram"
            >
              <SocialIcon type="instagram" />
            </a>
          </div>
        </div>
        <nav className={styles.links} aria-label="Footer navigation">
          {groups.map((group) => (
            <div key={group.title}>
              <h2>{group.title}</h2>
              <ul>
                {group.links.map(([label, href]) => (
                  <li key={href}>
                    <Link href={href}>{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
        <div className={styles.wordmark} aria-label="Hirani Law Firm">
          Hirani Law
        </div>
        <div className={styles.copyright}>
          <p>
            © 2026 Hirani Law Firm, PLLC. Licensed to practice law in Texas.
          </p>
          <p>
            This website provides general information and does not create an
            attorney-client relationship.
          </p>
        </div>
      </div>
    </footer>
  );
}
