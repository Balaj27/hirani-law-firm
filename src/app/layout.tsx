import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: {
    default: "Jurista — Trusted Legal Counsel",
    template: "%s | Jurista",
  },
  description:
    "Experienced legal counsel for individuals and businesses. Discover our practice areas, meet our attorneys, and schedule a consultation.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <div id="main-content">{children}</div>
      </body>
    </html>
  );
}
