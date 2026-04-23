import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import type { Sponsor } from "@/data/sponsors";

type SponsorCardProps = {
  sponsor: Sponsor;
};

export function SponsorCard({ sponsor }: SponsorCardProps) {
  return (
    <a
      href={sponsor.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${sponsor.name}`}
      className="group block h-full"
    >
      <Card className="h-full overflow-hidden rounded-[24px] border-border/70 bg-card transition-all duration-200 group-hover:-translate-y-1 group-hover:scale-[1.01] group-hover:shadow-[0_18px_36px_rgba(15,23,42,0.14)]">
        <CardContent className="flex h-full flex-col p-0">
          <div className="flex min-h-[190px] items-center justify-center bg-[linear-gradient(180deg,#ffffff_0%,#faf7f3_100%)] px-8 py-8">
            {sponsor.logoSrc ? (
              <div className="relative h-[96px] w-full">
                <Image
                  src={sponsor.logoSrc}
                  alt={sponsor.logoAlt}
                  fill
                  sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 25vw"
                  className="object-contain"
                />
              </div>
            ) : (
              <div className="flex h-[96px] w-full items-center justify-center rounded-[18px] border border-dashed border-border/70 bg-background/80 px-6 text-center">
                <span className="text-lg font-semibold leading-snug text-foreground">
                  {sponsor.name}
                </span>
              </div>
            )}
          </div>

          <div className="flex flex-1 items-start justify-between gap-4 border-t border-border/60 px-6 py-5">
            <div>
              <p className="text-lg font-semibold text-foreground">{sponsor.name}</p>
              {sponsor.category ? (
                <p className="mt-1 text-sm text-muted-foreground">{sponsor.category}</p>
              ) : null}
            </div>
            <div className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-primary-foreground">
              <ArrowUpRight className="h-5 w-5" />
            </div>
          </div>
        </CardContent>
      </Card>
    </a>
  );
}
