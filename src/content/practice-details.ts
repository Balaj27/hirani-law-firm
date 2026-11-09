import practices from "./practice-areas.json";
import details from "./practice-details.json";

export const practiceDetails = practices.map((practice) => {
  const slug = practice.href.split("/").pop() as keyof typeof details;
  return { ...practice, slug, ...details[slug] };
});

export type PracticeDetail = (typeof practiceDetails)[number];
