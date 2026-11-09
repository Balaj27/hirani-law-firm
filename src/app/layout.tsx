import type { Metadata } from "next";
import "./globals.css";
import { SiteMotion } from "@/components/ui/site-motion";
import {
  homeTitle,
  homeDescription,
  pageMetadata,
  siteUrl,
} from "@/lib/metadata";
export const metadata: Metadata = {
  ...pageMetadata({
    title: homeTitle,
    description: homeDescription,
    path: "/",
  }),
  metadataBase: siteUrl,
  applicationName: "Hirani Law Firm",
  title: {
    default: homeTitle,
    template: "%s | Hirani Law Firm",
  },
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
