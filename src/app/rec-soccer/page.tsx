import Link from "next/link"
import { ArrowRight, Users, Heart, Calendar, Trophy, Target, Clock } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SectionHeader } from "@/components/section-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "Recreational Soccer | West Warwick Soccer Association",
  description: "Community-based recreational soccer for players of all skill levels. Focus on fun, fundamentals, and friendship.",
}

export default function RecSoccerPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-background border-b border-border py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
                Recreational Soccer
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Community-based soccer for players of all skill levels. Our recreational program focuses on fun, fundamentals, and building friendships while developing a love for the game.
              </p>
              <div className="mt-8">
                <Button asChild size="lg" className="text-base">
                  <Link href="/spring-soccer-2026">
                    View Current Season
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Program Values */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <SectionHeader
              title="What Makes Our Program Special"
              subtitle="We believe every child deserves the opportunity to play, learn, and grow through soccer."
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Heart className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">Fun First</h3>
                  <p className="mt-2 text-muted-foreground">
                    We prioritize enjoyment and positive experiences. Every player leaves the field with a smile.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Target className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">Skill Development</h3>
                  <p className="mt-2 text-muted-foreground">
                    Age-appropriate training that builds fundamental skills and soccer knowledge progressively.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">Equal Playing Time</h3>
                  <p className="mt-2 text-muted-foreground">
                    Every player gets meaningful time on the field, regardless of skill level.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Trophy className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">Sportsmanship</h3>
                  <p className="mt-2 text-muted-foreground">
                    We teach respect, teamwork, and good sportsmanship both on and off the field.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">Flexible Schedule</h3>
                  <p className="mt-2 text-muted-foreground">
                    Weekend games designed to fit busy family schedules while maximizing fun.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Clock className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">Age-Appropriate</h3>
                  <p className="mt-2 text-muted-foreground">
                    Programs designed specifically for each age group&apos;s developmental needs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Seasons */}
        <section className="bg-muted/50 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <SectionHeader
              title="Seasonal Programs"
              subtitle="We offer recreational soccer programs in both Spring and Fall seasons."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <Card className="border-primary/30">
                <CardContent className="p-8">
                  <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    Now Open
                  </div>
                  <h3 className="mt-4 text-2xl font-bold text-foreground">Spring 2026</h3>
                  <p className="mt-2 text-muted-foreground">
                    Season starts April 11. Games on Saturdays with practice prior to game time.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-foreground">
                    <li>$55 per player</li>
                    <li>Optional $20 jersey fee</li>
                    <li>Saturday morning games</li>
                  </ul>
                  <Button asChild className="mt-6 w-full">
                    <Link href="/spring-soccer-2026">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-8">
                  <div className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-sm font-medium text-muted-foreground">
                    Coming Soon
                  </div>
                  <h3 className="mt-4 text-2xl font-bold text-foreground">Fall 2026</h3>
                  <p className="mt-2 text-muted-foreground">
                    Registration opens in summer. Full season with weekday practices and weekend games.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-foreground">
                    <li>Registration opens July</li>
                    <li>Season starts September</li>
                    <li>Full practice schedule</li>
                  </ul>
                  <Button variant="outline" className="mt-6 w-full" disabled>
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border bg-muted py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Join Our Soccer Family
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Register for Spring 2026 and give your child the gift of soccer!
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="text-base">
                <a href="https://system.gotsport.com/programs/265J58760" target="_blank" rel="noopener noreferrer">
                  Register Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base">
                <Link href="/contact">
                  Have Questions?
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
