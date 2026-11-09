import { notFound } from "next/navigation";
import { practiceDetails } from "@/content/practice-details";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { HeroHeader1 } from "@/components/pages/practice-detail/HeroHeader1";
import { SinglePracticeArea2 } from "@/components/pages/practice-detail/SinglePracticeArea2";

export function generateStaticParams() {
  return practiceDetails.map((practice) => ({ slug: practice.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const practice = practiceDetails.find((p) => p.slug === slug);
  return {
    title: practice ? practice.title : "Practice Area | Hirani Law Firm",
    description: practice?.description,
  };
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const practice = practiceDetails.find((p) => p.slug === slug);
  if (!practice) notFound();
  return (
    <>
      <link rel="stylesheet" href="/styles/practice-detail.css" />
      <SiteHeader transparent={false} />
      <main>
        <HeroHeader1 title={practice.title} />
        <SinglePracticeArea2 practice={practice} />
      </main>
      <SiteFooter />
    </>
  );
}
