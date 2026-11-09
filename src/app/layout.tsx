import type { Metadata } from "next";
import "./globals.css";
import { SiteMotion } from "@/components/ui/site-motion";
export const metadata: Metadata = {
  title: {
    default: "Hirani Law Firm | Houston & Katy Family Law Attorney",
    template: "%s | Hirani Law Firm",
  },
  description:
    "Attorney Sehar Hirani helps Greater Houston families with divorce, custody, support, and adoption, and represents personal injury clients throughout Texas. Free confidential consultation.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <SiteMotion />
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <div id="main-content">{children}</div>
      </body>
    </html>
  );
}
