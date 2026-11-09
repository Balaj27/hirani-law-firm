"use client";
import { useId, useState, type ComponentProps } from "react";
const answers: Record<string, string> = {
  "How do I schedule a consultation?":
    "Use the consultation form or contact our team by phone or email to arrange a meeting.",
  "What should I bring to my first meeting?":
    "Bring relevant documents, correspondence, and a list of questions about your matter.",
  "Will my information remain confidential?":
    "Contact our team to discuss confidentiality and the terms of a consultation before sharing sensitive information.",
  "How are your legal fees structured?":
    "Fees depend on the nature and scope of your matter. Our team can discuss the proposed fee arrangement during your consultation.",
  "How long will my case take?":
    "Timelines vary with the facts, complexity, and process involved. Your attorney can discuss the expected stages of your matter.",
};
export function AccordionItem({
  question,
  initialOpen,
  children,
  ...props
}: ComponentProps<"div"> & { question: string; initialOpen?: string }) {
  const [open, setOpen] = useState(initialOpen === "true");
  const id = useId();
  return (
    <div {...props} className={`${props.className || ""} faq-item`}>
      <button
        className="faq-question"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={id}
      >
        <span>{question}</span>
        <span aria-hidden>{open ? "−" : "+"}</span>
      </button>
      <div id={id} hidden={!open} className="faq-answer">
        {children || (
          <p>
            {answers[question] || "Contact our team to discuss your question."}
          </p>
        )}
      </div>
    </div>
  );
}
