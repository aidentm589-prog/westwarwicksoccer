import Link from "next/link"
import { ArrowRight, Trophy, Target, Users, MapPin, Calendar, Star } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SectionHeader } from "@/components/section-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "Competitive Soccer | West Warwick Soccer Association",
  description: "Competitive soccer program for players looking to take their game to the next level.",
}

export default function TravelSoccerPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-background border-b border-border py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
                Travel Soccer
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Our competitive travel program is for players looking to take their game to the next level. Compete against teams from across the region while developing advanced skills and tactical awareness.
              </p>
              <div className="mt-8">
                <Button asChild size="lg" className="text-base">
                  <Link href="/contact">
                    Contact for Information
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Program Features */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <SectionHeader
              title="Travel Program Features"
              subtitle="A competitive environment designed for players ready to challenge themselves."
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Trophy className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">Competitive Play</h3>
                  <p className="mt-2 text-muted-foreground">
                    Play against top teams from Rhode Island and neighboring states in organized leagues.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Target className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">Advanced Training</h3>
                  <p className="mt-2 text-muted-foreground">
                    Regular practices focused on technical skills, tactical understanding, and game preparation.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">Experienced Coaches</h3>
                  <p className="mt-2 text-muted-foreground">
                    Learn from coaches with competitive playing and coaching experience.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">Regional Competition</h3>
                  <p className="mt-2 text-muted-foreground">
                    Travel to compete at venues throughout Rhode Island and the surrounding region.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">Extended Season</h3>
                  <p className="mt-2 text-muted-foreground">
                    Longer season with more games and practice opportunities for development.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Star className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">Tournament Play</h3>
                  <p className="mt-2 text-muted-foreground">
                    Opportunity to participate in regional tournaments and showcase events.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Champions Showcase */}
        <section className="bg-muted/50 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <SectionHeader
              title="Our Champions"
              subtitle="Celebrating our travel teams&apos; success in regional competition."
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {[
                { title: "U12A Girls", achievement: "WS1 Champions", year: "2024" },
                { title: "U12B Girls", achievement: "WS1 Champions", year: "2024" },
                { title: "U12 Classic", achievement: "Gold Champions", year: "2024" },
              ].map((team, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-8">
                    <Trophy className="mx-auto h-12 w-12 text-accent" />
                    <h3 className="mt-4 text-xl font-bold text-foreground">{team.title}</h3>
                    <p className="mt-1 text-primary font-semibold">{team.achievement}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{team.year}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Tryouts Info */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Interested in Travel Soccer?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Contact our Coaching Coordinator for information about tryouts, team placement, and the travel soccer program.
              </p>
              <div className="mt-8">
                <Button asChild size="lg">
                  <a href="mailto:coachingcoord@wwsoccer.org">
                    Contact Coaching Coordinator
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border bg-muted py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Start with Recreational Soccer
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Many of our travel players started in our rec program. Join us for Spring 2026!
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="text-base">
                <Link href="/spring-soccer-2026">
                  View Spring 2026
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base">
                <Link href="/rec-soccer">
                  Learn About Rec Soccer
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
