import { notFound } from "next/navigation";
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
  return {
    title: member ? member.name + " — " + member.role : "Team Profile",
    description: member?.lead,
  };
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
