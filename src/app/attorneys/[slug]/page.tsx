import { notFound } from "next/navigation";
import { pageMetadata } from "@/lib/metadata";
import { teamProfiles } from "@/content/team-profiles";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { AttorneyProfile } from "@/components/pages/attorney-profile/attorney-profile";

export function generateStaticParams() {
  return teamProfiles.map((member) => ({ slug: member.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = teamProfiles.find((member) => member.slug === slug);
  if (!member) notFound();
  return pageMetadata({
    title: `${member.name} — ${member.role}`,
    description: `Meet ${member.name}, ${member.role} at Hirani Law Firm in Katy, Texas. ${member.slug === "sehar-hirani" ? "Family law and personal injury representation since 2018." : "Dedicated client support for family law and personal injury matters."}`,
    path: `/attorneys/${member.slug}`,
  });
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = teamProfiles.find((member) => member.slug === slug);
  if (!member) notFound();
  return (
    <>
      <link rel="stylesheet" href="/styles/attorneys.css" />
      <SiteHeader />
      <AttorneyProfile member={member} />
      <SiteFooter />
    </>
  );
}
