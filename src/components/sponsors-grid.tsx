import type { Sponsor } from "@/data/sponsors";
import { SponsorCard } from "@/components/sponsor-card";

type SponsorsGridProps = {
  sponsors: Sponsor[];
};

export function SponsorsGrid({ sponsors }: SponsorsGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {sponsors.map((sponsor) => (
        <SponsorCard key={sponsor.slug} sponsor={sponsor} />
      ))}
    </div>
  );
}
