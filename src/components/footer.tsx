import Link from "next/link"
import { Mail, MapPin } from "lucide-react"
import { SiteLogo } from "@/components/site-logo"

const footerNavigation = {
  programs: [
    { name: "Spring 2026", href: "/spring-soccer-2026" },
    { name: "Rec Soccer", href: "/rec-soccer" },
    { name: "Competitive Soccer", href: "/competitive-soccer-programs" },
    { name: "Referee Program", href: "/referee-program" },
  ],
  about: [
    { name: "About Us", href: "/about" },
    { name: "Executive Board", href: "/executive-board" },
    { name: "Board of Directors", href: "/board-of-directors" },
    { name: "Volunteers", href: "/volunteers" },
  ],
  resources: [
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
    { name: "Sponsors", href: "/sponsors" },
    { name: "Shop Fan Gear", href: "/shop-fan-gear" },
    { name: "Coach Registration", href: "https://system.gotsport.com/programs/29T070892" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted">
      <div className="mx-auto max-w-[1580px] px-6 py-[68px] lg:px-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.2fr_0.9fr_0.9fr_1fr]">
          <div className="lg:col-span-1">
            <SiteLogo
              imageSize={74}
              textClassName="text-[27px] font-bold leading-none text-foreground"
              subtextClassName="mt-[6px] text-[15px] font-medium uppercase tracking-[0.08em] text-muted-foreground"
            />
            <p className="mt-7 max-w-[420px] text-[22px] leading-[1.55] text-muted-foreground">
              Dedicated to the best interests of youth soccer in West Warwick and surrounding communities since our founding.
            </p>
            <div className="mt-10 space-y-5">
              <a
                href="mailto:president@wwsoccer.org"
                className="flex items-center gap-4 text-[22px] text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="h-7 w-7" />
                president@wwsoccer.org
              </a>
              <div className="flex items-start gap-4 text-[22px] leading-[1.45] text-muted-foreground">
                <MapPin className="mt-1 h-7 w-7 flex-shrink-0" />
                <span>Riverpoint Park, Hay St<br />West Warwick, RI 02893</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-[24px] font-semibold uppercase tracking-[0.08em] text-foreground">
              Programs
            </h3>
            <ul className="mt-8 space-y-7">
              {footerNavigation.programs.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[22px] text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[24px] font-semibold uppercase tracking-[0.08em] text-foreground">
              About
            </h3>
            <ul className="mt-8 space-y-7">
              {footerNavigation.about.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[22px] text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[24px] font-semibold uppercase tracking-[0.08em] text-foreground">
              Resources
            </h3>
            <ul className="mt-8 space-y-7">
              {footerNavigation.resources.map((item) => (
                <li key={item.name}>
                  {item.href.startsWith("http") ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[22px] text-muted-foreground transition-colors hover:text-primary"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-[22px] text-muted-foreground transition-colors hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-border pt-10">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-[19px] text-muted-foreground">
              West Warwick Soccer Association. Associated with USYS and Soccer Rhode Island (SRI).
            </p>
            <p className="text-[19px] text-muted-foreground">
              All-Volunteer Youth Soccer League
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
