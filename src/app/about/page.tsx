import Link from "next/link"
import { ArrowRight, Calendar, MapPin, Mail, Users, Heart, Shield, Target } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SectionHeader } from "@/components/section-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "About Us | West Warwick Soccer Association",
  description: "Learn about West Warwick Soccer Association, our mission, and how we develop youth soccer in West Warwick and surrounding communities.",
}

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-background border-b border-border py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
                About Us
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                The Association dedicates itself to the best interests of youth soccer, with particular emphasis on the organization, promotion, regulation and development of youth soccer in West Warwick and the surrounding communities.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground">Our Mission</h2>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                  We are dedicated to developing young athletes through the sport of soccer, fostering teamwork, sportsmanship, and a love for the game. Our programs serve players of all skill levels, from first-time players to competitive athletes.
                </p>
                <p className="mt-4 text-muted-foreground">
                  The Association is associated with the United States Youth Soccer Association (USYS) and the Rhode Island Affiliate (SRI), ensuring our programs meet national standards for youth development.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-6 text-center">
                    <Target className="mx-auto h-8 w-8 text-primary" />
                    <h3 className="mt-3 font-semibold text-foreground">Development</h3>
                    <p className="mt-1 text-sm text-muted-foreground">Focus on skill building</p>
                  </CardContent>
                </Card>
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-6 text-center">
                    <Users className="mx-auto h-8 w-8 text-primary" />
                    <h3 className="mt-3 font-semibold text-foreground">Community</h3>
                    <p className="mt-1 text-sm text-muted-foreground">Building connections</p>
                  </CardContent>
                </Card>
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-6 text-center">
                    <Heart className="mx-auto h-8 w-8 text-primary" />
                    <h3 className="mt-3 font-semibold text-foreground">Volunteer</h3>
                    <p className="mt-1 text-sm text-muted-foreground">100% volunteer run</p>
                  </CardContent>
                </Card>
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-6 text-center">
                    <Shield className="mx-auto h-8 w-8 text-primary" />
                    <h3 className="mt-3 font-semibold text-foreground">Safety</h3>
                    <p className="mt-1 text-sm text-muted-foreground">Player well-being first</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Organization Structure */}
        <section className="bg-muted/50 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <SectionHeader
              title="Our Organization"
              subtitle="West Warwick Soccer is comprised of dedicated volunteers working together to provide quality soccer programs."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground">Executive Board</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Provides strategic leadership and oversees all association activities.
                  </p>
                  <Button asChild variant="link" className="mt-4 h-auto p-0">
                    <Link href="/executive-board">
                      Meet the Executive Board
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground">Board of Directors</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Manages day-to-day operations, fields, equipment, and coaching coordination.
                  </p>
                  <Button asChild variant="link" className="mt-4 h-auto p-0">
                    <Link href="/board-of-directors">
                      Meet the Directors
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground">Coaches & Volunteers</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    The backbone of our organization, bringing soccer to life for our players every week.
                  </p>
                  <Button asChild variant="link" className="mt-4 h-auto p-0">
                    <a href="https://system.gotsport.com/programs/29T070892" target="_blank" rel="noopener noreferrer">
                      Become a Coach
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Meeting Info */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Monthly Board Meeting</h2>
              <p className="mt-4 text-muted-foreground">
                All members are welcome to attend our monthly board meetings. Come share your ideas and help shape the future of youth soccer in our community.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <div className="flex items-center gap-2 text-foreground">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>Last Thursday of each month</span>
                </div>
                <div className="hidden sm:block text-muted-foreground">|</div>
                <div className="flex items-center gap-2 text-foreground">
                  <span>6:45 PM</span>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-center gap-2 text-foreground">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Riverpoint Park, Hay St, West Warwick, RI 02893</span>
              </div>
            </div>
          </div>
        </section>

        {/* How Can I Help */}
        <section className="border-t border-border bg-muted py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              How Can I Help?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              West Warwick is an All-Volunteer League. We are always looking for anyone interested in becoming a Head Coach, Assistant Coach, or any other assistance you can offer to the league.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="text-base">
                <a href="https://system.gotsport.com/programs/29T070892" target="_blank" rel="noopener noreferrer">
                  Register as Coach
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base">
                <a href="mailto:president@wwsoccer.org">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact President
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
