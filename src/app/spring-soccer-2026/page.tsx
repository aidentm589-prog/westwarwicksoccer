import Link from "next/link"
import { ArrowRight, Calendar, Clock, DollarSign, Users, FileText, Info, AlertCircle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SectionHeader } from "@/components/section-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export const metadata = {
  title: "Spring 2026 | West Warwick Soccer Association",
  description: "Register for Spring 2026 recreational soccer. Spring rec starts April 11. Player registration closes April 3rd.",
}

const ageDivisions = [
  { division: "Jr. W", dob: "8/1/2021 - 7/31/2023", description: "Introduction to soccer fundamentals" },
  { division: "U06", dob: "8/1/2020 - 7/31/2021", description: "Learning the basics" },
  { division: "U06", dob: "8/1/2019 - 7/31/2020", description: "Building confidence" },
  { division: "U08", dob: "8/1/2018 - 7/31/2019", description: "Developing skills" },
  { division: "U08", dob: "8/1/2017 - 7/31/2018", description: "Team play introduction" },
  { division: "U10", dob: "8/1/2016 - 7/31/2017", description: "Advanced fundamentals" },
  { division: "U10", dob: "8/1/2015 - 7/31/2016", description: "Competitive development" },
  { division: "U12", dob: "8/1/2014 - 7/31/2015", description: "Tactical awareness" },
  { division: "U12", dob: "8/1/2013 - 7/31/2014", description: "Game strategy" },
]

export default function Spring2026Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-background border-b border-border py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <Calendar className="h-4 w-4" />
                Season Starts April 11
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
                Spring Soccer 2026
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Spring soccer will look a little different this year. We are working on field upgrades which will cause some temporary changes to our program schedule.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="text-base">
                  <a href="https://system.gotsport.com/programs/265J58760" target="_blank" rel="noopener noreferrer">
                    Register Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-base">
                  <a href="https://system.gotsport.com/programs/29T070892" target="_blank" rel="noopener noreferrer">
                    Register as Coach
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Important Notice */}
        <section className="border-b border-border bg-accent/10 py-6">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <Alert className="border-accent bg-accent/5">
              <AlertCircle className="h-4 w-4 text-accent" />
              <AlertTitle className="text-accent-foreground">Registration Closing Soon</AlertTitle>
              <AlertDescription className="text-muted-foreground">
                Player registration closes April 3rd. Spring Rec starts April 11. Don&apos;t miss out!
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Quick Info */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <DollarSign className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">$55 per player</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Optional $20 jersey fee for new players
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Saturdays</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Mostly morning games
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Practice + Game</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Practice prior to game, no weekday practice
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">All Ages Welcome</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Jr. W through U14/16
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Jersey Info */}
        <section className="bg-muted/50 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <SectionHeader
                title="Jersey Information"
                subtitle="Important details about team jerseys for the Spring 2026 season."
              />
              <Card className="mt-8">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Info className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                    <p className="text-foreground">
                      There is a <strong>$20 charge</strong> for team jerseys. Returning players may use the jerseys they have.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Info className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                    <p className="text-foreground">
                      Jerseys are purchased as part of the registration. Please be sure to select the correct fee option.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Info className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                    <p className="text-foreground">
                      We will have limited supplies after the season start for purchases.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Age Divisions */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <SectionHeader
              title="Age Divisions"
              subtitle="Using the USYS and SRI age matrix (August 1 - July 31) to better align with school ages."
            />
            <div className="mt-12 overflow-hidden rounded-lg border border-border">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Division</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Date of Birth Range</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground hidden sm:table-cell">Focus</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {ageDivisions.map((item, index) => (
                      <tr key={index} className="hover:bg-muted/50">
                        <td className="px-6 py-4">
                          <span className="font-semibold text-primary">{item.division}</span>
                        </td>
                        <td className="px-6 py-4 text-foreground">{item.dob}</td>
                        <td className="px-6 py-4 text-muted-foreground hidden sm:table-cell">{item.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground text-center">
              Players may request to play up if they fall into the 8/1 - 12/31 DOB range. Please note this in your registration.
            </p>
          </div>
        </section>

        {/* U14/16 Division */}
        <section className="bg-accent/10 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <Card className="border-accent/30 bg-card">
              <CardHeader>
                <CardTitle className="text-2xl">Modified U14/16 Division</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Due to the field upgrades, we will have a modified U14/16 division this Spring.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg bg-muted p-4">
                    <p className="text-sm text-muted-foreground">Cost</p>
                    <p className="text-2xl font-bold text-primary">$25</p>
                  </div>
                  <div className="rounded-lg bg-muted p-4">
                    <p className="text-sm text-muted-foreground">Eligible Birth Dates</p>
                    <p className="text-lg font-semibold text-foreground">8/1/2009 - 7/31/2013</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Additional Info */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <SectionHeader
                title="Need More Details?"
                subtitle="Check out the email sent to 2025 players on 2/11/2026 for complete information about the Spring 2026 season."
              />
              <div className="mt-8">
                <Button asChild variant="outline" size="lg">
                  <a 
                    href="https://drive.google.com/file/d/1JgHWFwjJYOSeuSLJ7V7EGM3zG_iwDDRW/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <FileText className="mr-2 h-5 w-5" />
                    View Full Details
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="border-t border-border bg-muted py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Ready to Play?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Registration closes April 3rd. Secure your spot for Spring 2026 today!
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
                  Contact Us
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
