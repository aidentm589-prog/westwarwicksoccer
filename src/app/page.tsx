import Link from "next/link"
import Image from "next/image"
import { Calendar, Users, Trophy, ArrowRight, Heart, Shield, Star } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProgramCard } from "@/components/program-card"
import { SectionHeader } from "@/components/section-header"
import { ChampionsCarousel } from "@/components/champions-carousel"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <section className="relative min-h-[660px] overflow-hidden border-b border-border bg-background lg:min-h-[760px]">
          <div className="absolute inset-0">
            <div className="absolute inset-0">
              <Image
                src="/hero-background.jpg"
                alt=""
                fill
                priority
                className="object-cover object-center"
                sizes="100vw"
              />
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,12,18,0.2)_0%,rgba(8,12,18,0.1)_18%,rgba(8,12,18,0)_42%,rgba(8,12,18,0)_100%)]" />
            <div className="absolute inset-x-0 top-0 h-[28%] bg-[linear-gradient(180deg,rgba(255,255,255,0.88)_0%,rgba(255,255,255,0.68)_58%,rgba(255,255,255,0.1)_88%,rgba(255,255,255,0)_100%)]" />
          </div>
          <div className="relative mx-auto max-w-[1580px] px-5 pb-[230px] pt-[34px] lg:px-10 lg:pb-[280px] lg:pt-[38px]">
            <div className="mx-auto max-w-[1180px]">
              <div className="mx-auto max-w-[1080px] rounded-[30px] bg-[linear-gradient(135deg,rgba(255,255,255,0.72)_0%,rgba(255,255,255,0.58)_52%,rgba(255,255,255,0.32)_100%)] px-8 py-7 shadow-[0_18px_46px_rgba(15,23,42,0.14)] backdrop-blur-[8px] sm:px-10 lg:px-12 lg:py-8">
                <h1 className="mx-auto max-w-[900px] text-center text-[54px] font-bold tracking-[-0.055em] text-foreground sm:text-[64px] lg:text-[76px] leading-[0.95] text-balance">
                  West Warwick Soccer Association
                </h1>
                <p className="mx-auto mt-4 max-w-[920px] text-center text-[20px] leading-[1.5] text-foreground/82 text-pretty lg:text-[24px]">
                  Developing young athletes and building community through youth soccer. Join hundreds of families in West Warwick and surrounding communities.
                </p>
              </div>
              <div className="mx-auto mt-6 max-w-[1120px] grid gap-4 lg:grid-cols-2">
                <Button asChild size="lg" className="h-[72px] justify-start rounded-[14px] px-6 text-left text-[20px] font-medium shadow-[0_14px_30px_rgba(230,104,24,0.24)]">
                  <a
                    href="https://drive.google.com/file/d/11cteh7_F6Z1GmL2GfNEWczgFEru-sS5Y/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-between gap-4"
                  >
                    <span className="flex min-w-0 flex-col">
                      <span className="text-[18px] font-semibold tracking-[-0.02em] lg:text-[20px]">GAME SCHEDULES</span>
                      <span className="mt-1 text-[12px] font-medium uppercase tracking-[0.08em] text-primary-foreground/80 sm:text-[13px]">
                        Spring Game Schedules U12 and Under
                      </span>
                    </span>
                    <ArrowRight className="h-6 w-6 flex-shrink-0" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-[72px] justify-start rounded-[14px] border-border/70 bg-background/96 px-6 text-left text-[20px] font-medium shadow-[0_12px_28px_rgba(15,23,42,0.1)] backdrop-blur-[2px]">
                  <a
                    href="https://docs.google.com/spreadsheets/d/1IPIQBznZzUBZiu2_ZZDHsHC5E64w62wj/edit?rtpof=true&sd=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-between gap-4"
                  >
                    <span className="flex min-w-0 flex-col">
                      <span className="text-[18px] font-semibold tracking-[-0.02em] lg:text-[20px]">ROSTERS</span>
                      <span className="mt-1 text-[12px] font-medium uppercase tracking-[0.08em] text-foreground/62 sm:text-[13px]">
                        Spring Rosters U12 and Under
                      </span>
                    </span>
                    <ArrowRight className="h-6 w-6 flex-shrink-0" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-background py-[46px]">
          <div className="mx-auto max-w-[1580px] px-6 lg:px-12">
            <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-12">
              <div className="flex items-center gap-5">
                <div className="flex h-[66px] w-[66px] items-center justify-center rounded-[16px] bg-primary/10 text-primary">
                  <Users className="h-9 w-9" />
                </div>
                <div>
                  <p className="text-[33px] font-bold leading-none text-foreground">500+</p>
                  <p className="mt-2 text-[21px] text-muted-foreground">Players</p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="flex h-[66px] w-[66px] items-center justify-center rounded-[16px] bg-primary/10 text-primary">
                  <Shield className="h-9 w-9" />
                </div>
                <div>
                  <p className="text-[33px] font-bold leading-none text-foreground">USYS</p>
                  <p className="mt-2 text-[21px] text-muted-foreground">Affiliated</p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="flex h-[66px] w-[66px] items-center justify-center rounded-[16px] bg-primary/10 text-primary">
                  <Heart className="h-9 w-9" />
                </div>
                <div>
                  <p className="text-[33px] font-bold leading-none text-foreground">100%</p>
                  <p className="mt-2 text-[21px] text-muted-foreground">Volunteer</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-primary/20 bg-accent/10">
          <div className="mx-auto max-w-[1580px] px-6 py-[42px] lg:px-12">
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div className="flex items-center gap-8">
                <div className="flex h-[96px] w-[96px] items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Star className="h-12 w-12" strokeWidth={2.1} />
                </div>
                <div>
                  <h3 className="text-[31px] font-semibold tracking-[-0.02em] text-foreground">Coaches Needed!</h3>
                  <p className="mt-1 text-[25px] leading-[1.45] text-muted-foreground">
                    Sign up to coach and receive a voucher code for your children to play for free
                  </p>
                </div>
              </div>
              <Button asChild variant="default" className="h-[72px] rounded-[14px] bg-accent px-10 text-[22px] font-medium text-accent-foreground hover:bg-accent/90">
                <a
                  href="https://system.gotsport.com/programs/29T070892"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register as Coach
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-[90px] lg:py-[110px]">
          <div className="mx-auto max-w-[1580px] px-6 lg:px-12">
            <SectionHeader
              title="Our Programs"
              subtitle="From recreational leagues to competitive travel teams, we have programs for players of all ages and skill levels."
            />
            <div className="mt-16 grid gap-8 lg:grid-cols-3">
              <ProgramCard
                title="Spring 2026"
                description="Spring rec runs on Saturdays. Teams have practice prior to games. $55 per player plus optional $20 jersey fee."
                href="/spring-soccer-2026"
                icon={<Calendar className="h-6 w-6" />}
                highlight="Open Now"
                buttonText="View Details"
              />
              <ProgramCard
                title="Recreational Soccer"
                description="Community-based soccer for players of all skill levels. Focus on fun, fundamentals, and friendship."
                href="/rec-soccer"
                icon={<Users className="h-6 w-6" />}
                buttonText="Learn More"
              />
              <ProgramCard
                title="Travel Soccer"
                description="Competitive program for players looking to take their game to the next level with regional competition."
                href="/competitive-soccer-programs"
                icon={<Trophy className="h-6 w-6" />}
                buttonText="Learn More"
              />
            </div>
          </div>
        </section>

        <section className="bg-muted/45 py-[88px] lg:py-[108px]">
          <div className="mx-auto max-w-[1580px] px-6 lg:px-12">
            <SectionHeader
              title="Age Divisions"
              subtitle="Using the USYS and SRI age matrix (August 1 - July 31) to align with school ages."
            />
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { division: "Jr. W", ages: "Born 8/1/2021 - 7/31/2023", description: "Introduction to soccer" },
                { division: "U06", ages: "Born 8/1/2019 - 7/31/2021", description: "Learning fundamentals" },
                { division: "U08", ages: "Born 8/1/2017 - 7/31/2019", description: "Building skills" },
                { division: "U10", ages: "Born 8/1/2015 - 7/31/2017", description: "Team play development" },
                { division: "U12", ages: "Born 8/1/2013 - 7/31/2015", description: "Advanced techniques" },
                { division: "U14/16", ages: "Born 8/1/2009 - 7/31/2013", description: "Modified division - $25" },
              ].map((item) => (
                <Card key={item.division} className="min-h-[250px] rounded-[22px] border border-border bg-card shadow-[0_2px_8px_rgba(15,23,42,0.08)]">
                  <CardContent className="p-12">
                    <div className="text-[46px] font-bold tracking-[-0.04em] text-primary">{item.division}</div>
                    <p className="mt-8 text-[26px] leading-[1.35] text-foreground">{item.ages}</p>
                    <p className="mt-3 text-[20px] leading-[1.35] text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="mt-10 text-center text-[18px] text-muted-foreground">
              Players may request to play up if they fall into the 8/1 - 12/31 DOB range. Please note this in your registration.
            </p>
          </div>
        </section>

        <section className="py-[88px] lg:py-[102px]">
          <div className="mx-auto max-w-[1580px] px-6 lg:px-12">
            <SectionHeader
              title="Our Champions"
              subtitle="Celebrating our players&apos; achievements on and off the field."
            />
            <div className="mt-12">
              <ChampionsCarousel />
            </div>
            <div className="mt-10 text-center">
              <Button asChild variant="outline" className="h-[54px] rounded-[10px] px-8 text-[18px] font-medium shadow-[0_1px_4px_rgba(15,23,42,0.08)]">
                <Link href="/gallery">
                  View Full Gallery
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="bg-muted/45 py-[76px] lg:py-[92px]">
          <div className="mx-auto max-w-[1580px] px-6 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:items-start">
              <div className="max-w-[760px]">
                <h2 className="max-w-[640px] text-[56px] font-bold tracking-[-0.05em] text-foreground leading-[0.98] text-balance lg:text-[66px]">
                  Building Community Through Soccer
                </h2>
                <p className="mt-8 text-[22px] leading-[1.65] text-muted-foreground lg:text-[24px]">
                  The Association dedicates itself to the best interests of youth soccer, with particular emphasis on the organization, promotion, regulation and development of youth soccer in West Warwick and the surrounding communities.
                </p>
                <p className="mt-8 text-[20px] leading-[1.65] text-muted-foreground lg:text-[22px]">
                  We are associated with the United States Youth Soccer Association (USYS) and the Rhode Island Affiliate (SRI). Our board meets the last Thursday of each month at 6:45pm at Riverpoint Park, Hay St, West Warwick, RI 02893.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Button asChild className="h-[58px] rounded-[12px] px-7 text-[18px] font-medium">
                    <Link href="/about">
                      Learn About Us
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="h-[58px] rounded-[12px] border-border bg-card px-7 text-[18px] font-medium shadow-[0_1px_4px_rgba(15,23,42,0.08)]">
                    <Link href="/executive-board">
                      Meet Our Board
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <Card className="min-h-[188px] rounded-[20px] border border-transparent bg-primary text-primary-foreground shadow-[0_4px_14px_rgba(15,23,42,0.10)]">
                  <CardContent className="flex h-full flex-col items-center justify-center p-5 text-center">
                    <div className="text-[52px] font-bold tracking-[-0.05em] lg:text-[58px]">100%</div>
                    <p className="mt-2 text-[18px] text-primary-foreground/95 lg:text-[20px]">Volunteer Run</p>
                  </CardContent>
                </Card>
                <Card className="min-h-[188px] rounded-[20px] border border-border bg-card shadow-[0_4px_14px_rgba(15,23,42,0.10)]">
                  <CardContent className="flex h-full flex-col items-center justify-center p-5 text-center">
                    <div className="text-[52px] font-bold tracking-[-0.05em] text-primary lg:text-[58px]">USYS</div>
                    <p className="mt-2 text-[18px] text-muted-foreground lg:text-[20px]">Affiliated</p>
                  </CardContent>
                </Card>
                <Card className="min-h-[188px] rounded-[20px] border border-border bg-card shadow-[0_4px_14px_rgba(15,23,42,0.10)]">
                  <CardContent className="flex h-full flex-col items-center justify-center p-5 text-center">
                    <div className="text-[52px] font-bold tracking-[-0.05em] text-primary lg:text-[58px]">SRI</div>
                    <p className="mt-2 text-[18px] text-muted-foreground lg:text-[20px]">Member</p>
                  </CardContent>
                </Card>
                <Card className="min-h-[188px] rounded-[20px] border border-transparent bg-accent text-accent-foreground shadow-[0_4px_14px_rgba(15,23,42,0.10)]">
                  <CardContent className="flex h-full flex-col items-center justify-center p-5 text-center">
                    <div className="text-[52px] font-bold tracking-[-0.05em] lg:text-[58px]">Free</div>
                    <p className="mt-2 text-[18px] text-accent-foreground/95 lg:text-[20px]">For Coach Kids</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
