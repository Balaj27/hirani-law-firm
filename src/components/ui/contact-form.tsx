"use client";
import { useState, type ComponentProps } from "react";
export function ContactForm({ children, ...props }: ComponentProps<"form">) {
  const [status, setStatus] = useState("");
  return (
    <form
      {...props}
      onSubmit={(event) => {
        event.preventDefault();
        if (!event.currentTarget.reportValidity()) return;
        const data = new FormData(event.currentTarget);
        const body = Array.from(data.entries())
          .map(([key, value]) => `${key}: ${value}`)
          .join("\n");
        window.location.href = `mailto:info@hiranilawfirm.com?subject=${encodeURIComponent("Website inquiry")}&body=${encodeURIComponent(body)}`;
        setStatus(
          "Your email application will open with your inquiry. Send the email to complete your request.",
        );
      }}
    >
      {children}
      {status && (
        <p className="form-status" role="status">
          {status}
        </p>
      )}
    </form>
  );
}
