import team from "./team.json";
import bios from "./team-profiles.json";

export const teamProfiles = team.map((member) => ({
  ...member,
  ...bios[member.slug as keyof typeof bios],
  href: `/attorneys/${member.slug}`,
}));
export type TeamProfile = (typeof teamProfiles)[number];
