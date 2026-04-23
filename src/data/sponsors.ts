import sponsorsManifest from "@/data/sponsors.generated.json";

export type Sponsor = {
  name: string;
  url: string;
  slug: string;
  logoSrc: string | null;
  logoAlt: string;
  category?: string;
};

const manualLogoOverrides: Record<string, string> = {
  "natco-home-group": "/sponsors/natco-home-group.png",
};

export const sponsors: Sponsor[] = sponsorsManifest.map((sponsor) => ({
  name: sponsor.name,
  url: sponsor.url,
  slug: sponsor.slug,
  logoSrc: manualLogoOverrides[sponsor.slug] ?? sponsor.logoSrc,
  logoAlt: sponsor.logoAlt,
  category: "Community Sponsor",
}));
