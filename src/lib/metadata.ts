import type { Metadata } from "next";

export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.hiranilawfirm.com",
);
export const homeTitle = "Hirani Law Firm | Houston & Katy Family Law Attorney";
export const homeDescription =
  "Houston and Katy attorney Sehar Hirani helps with divorce, custody and personal injury claims. Contact Hirani Law Firm for a free, confidential consultation.";

const socialImage = {
  url: new URL("/images/hirani-social-preview.jpg", siteUrl).toString(),
  width: 1200,
  height: 630,
  type: "image/jpeg",
  alt: "Hirani Law Firm — Your family. Your future. Our commitment. Family Law & Personal Injury, with Attorney Sehar Hirani.",
};

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const brandedTitle =
    title === homeTitle ? title : `${title} | Hirani Law Firm`;
  const url = new URL(path, siteUrl).toString();
  return {
    title: { absolute: brandedTitle },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: "Hirani Law Firm",
      url,
      title: brandedTitle,
      description,
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: brandedTitle,
      description,
      images: [{ url: socialImage.url, alt: socialImage.alt }],
    },
  };
}
