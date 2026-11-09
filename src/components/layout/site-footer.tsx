import Link from "next/link";
import { ContactForm } from "@/components/ui/contact-form";
import styles from "./site-footer.module.css";
const groups = [
  {
    title: "About",
    links: [
      ["Our Firm", "/about"],
      ["Our Attorneys", "/attorneys"],
      ["Case Studies", "https://jurista-tambe.framer.website/case-studies"],
      ["Contact Us", "/contact"],
      ["Careers", "/about#careers"],
    ],
  },
  {
    title: "Practice Areas",
    links: [
      ["Corporate Law", "/practice-areas/corporate-law"],
      [
        "Immigration Law",
        "https://jurista-tambe.framer.website/practice-areas/immigration-law",
      ],
      [
        "Real Estate Law",
        "https://jurista-tambe.framer.website/practice-areas/real-estate-law",
      ],
      [
        "Criminal Law",
        "https://jurista-tambe.framer.website/practice-areas/criminal-law",
      ],
      [
        "Medical Law",
        "https://jurista-tambe.framer.website/practice-areas/medical-law",
      ],
      [
        "Family Law",
        "https://jurista-tambe.framer.website/practice-areas/family-law",
      ],
    ],
  },
  {
    title: "Resources",
    links: [
      ["Our Blog", "/blog"],
      ["Help & FAQs", "/contact#faqs"],
      ["Terms of Service", "https://jurista-tambe.framer.website/legal/terms"],
      ["Privacy Policy", "https://jurista-tambe.framer.website/legal/privacy"],
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
            <a href="https://linkedin.com" aria-label="LinkedIn">
              <SocialIcon type="linkedin" />
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <SocialIcon type="instagram" />
            </a>
            <a href="https://x.com" aria-label="X">
              <SocialIcon type="x" />
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
        <div className={styles.wordmark} aria-label="Jurista Law">
          Jurista Law
        </div>
        <div className={styles.copyright}>
          <p>
            © 2026 All rights reserved. By{" "}
            <a
              href="https://framer.link/tambe-design"
              target="_blank"
              rel="noreferrer"
            >
              Tambe
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
