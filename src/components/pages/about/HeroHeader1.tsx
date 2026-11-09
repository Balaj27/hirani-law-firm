import { ImageHero } from "@/components/shared/image-hero";
export function HeroHeader1() {
  return (
    <ImageHero
      centered
      title="Who We Are"
      image="/assets/hirani-team-office.webp"
      alt="The Hirani Law Firm team"
      eyebrow="A client-first law firm, built around you."
    />
  );
}
