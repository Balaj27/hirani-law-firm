import { ArrowIcon } from "@/components/ui/arrow-icon";
import { firm, inquiryTopics } from "@/content/firm";
import { ContactForm } from "@/components/ui/contact-form";
import styles from "./consultation-section.module.css";
export function ConsultationForm({
  prefix,
  plain = false,
  memberName,
}: {
  prefix: string;
  plain?: boolean;
  memberName?: string;
}) {
  return (
    <ContactForm
      className={`${styles.form} ${plain ? styles.plain : ""}`}
      aria-label="Free consultation request"
    >
      <h3>{plain ? "Request a free consultation" : "Free case evaluation"}</h3>
      {memberName && (
        <input type="hidden" name="Team member" value={memberName} />
      )}
      <div className={styles.fields}>
        <label htmlFor={prefix + "-first"}>
          First name
          <input
            id={prefix + "-first"}
            name="First name"
            autoComplete="given-name"
            required
          />
        </label>
        <label htmlFor={prefix + "-last"}>
          Last name
          <input
            id={prefix + "-last"}
            name="Last name"
            autoComplete="family-name"
            required
          />
        </label>
        <label htmlFor={prefix + "-email"}>
          Email address
          <input
            id={prefix + "-email"}
            name="Email address"
            type="email"
            autoComplete="email"
            required
          />
        </label>
        <label htmlFor={prefix + "-phone"}>
          Phone number
          <input
            id={prefix + "-phone"}
            name="Phone number"
            type="tel"
            autoComplete="tel"
            required
          />
        </label>
      </div>
      <label htmlFor={prefix + "-topic"}>
        What do you need help with?
        <select
          id={prefix + "-topic"}
          name="Legal matter"
          required
          defaultValue=""
        >
          <option value="" disabled>
            Select a service
          </option>
          {inquiryTopics.map((topic) => (
            <option key={topic}>{topic}</option>
          ))}
        </select>
      </label>
      <label htmlFor={prefix + "-message"}>
        Tell us what happened
        <textarea id={prefix + "-message"} name="Message" rows={4} />
      </label>
      <button type="submit">
        Request a free consultation{" "}
        <span aria-hidden="true">
          <ArrowIcon />
        </span>
      </button>
      <p className={styles.disclaimer}>
        By submitting this form, you agree that we may contact you about your
        inquiry. Submission does not create an attorney-client relationship.
        Read our <a href={firm.privacy}>Privacy Policy</a>.
      </p>
    </ContactForm>
  );
}
