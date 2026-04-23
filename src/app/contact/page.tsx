import Link from "next/link"
import { Mail, MapPin, Calendar, Clock, Users, ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SectionHeader } from "@/components/section-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Contact Us | West Warwick Soccer Association",
  description: "Contact West Warwick Soccer Association. Reach out to our board members for questions about programs, registration, or volunteering.",
}

const contacts = [
  {
    name: "Jimmy Vilayvanh",
    role: "President",
    email: "President@wwsoccer.org",
    description: "General inquiries, organization leadership",
  },
  {
    name: "David Soares",
    role: "Vice President",
    email: "VicePresident@wwsoccer.org",
    description: "Program oversight, board matters",
  },
  {
    name: "Nico Duarte",
    role: "Secretary",
    email: "secretary@wwsoccer.org",
    description: "Meeting minutes, communications",
  },
  {
    name: "Beth Friedman",
    role: "Treasurer",
    email: "Treasurer@wwsoccer.org",
    description: "Financial inquiries, payments",
  },
  {
    name: "Jimmy Vilayvanh",
    role: "Coaching Coordinator",
    email: "coachingcoord@wwsoccer.org",
    description: "Coaching inquiries, training, travel soccer",
  },
  {
    name: "Erick DiMartino",
    role: "Fields & Equipment",
    email: "fields@wwsoccer.org",
    description: "Field conditions, equipment",
  },
]

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-background border-b border-border py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
                Contact Us
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Have questions about our programs, registration, or want to get involved? We&apos;re here to help. Reach out to the appropriate board member below.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <SectionHeader
              title="Board Contacts"
              subtitle="Reach out to our dedicated volunteers for specific inquiries."
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {contacts.map((contact, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{contact.name}</CardTitle>
                    <p className="text-sm text-primary font-medium">{contact.role}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{contact.description}</p>
                    <a
                      href={`mailto:${contact.email}`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                    >
                      <Mail className="h-4 w-4" />
                      {contact.email}
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Meeting Info */}
        <section className="bg-muted/50 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground text-balance">
                  Monthly Board Meetings
                </h2>
                <p className="mt-4 text-muted-foreground">
                  All members are welcome to attend our monthly board meetings. Come share your ideas, ask questions, and help shape the future of youth soccer in our community.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Last Thursday of Each Month</p>
                      <p className="text-sm text-muted-foreground">Regular monthly schedule</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">6:45 PM</p>
                      <p className="text-sm text-muted-foreground">Meeting start time</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Riverpoint Park, Hay St</p>
                      <p className="text-sm text-muted-foreground">West Warwick, RI 02893</p>
                    </div>
                  </div>
                </div>
              </div>
              <Card className="bg-muted border-primary/20">
                <CardContent className="p-8">
                  <Users className="h-12 w-12 text-primary" />
                  <h3 className="mt-4 text-2xl font-bold text-foreground">Get Involved</h3>
                  <p className="mt-2 text-muted-foreground">
                    West Warwick Soccer is an all-volunteer organization. We&apos;re always looking for coaches, assistant coaches, and volunteers to help with league activities.
                  </p>
                  <div className="mt-6 space-y-3">
                    <Button asChild className="w-full">
                      <a href="https://system.gotsport.com/programs/29T070892" target="_blank" rel="noopener noreferrer">
                        Register as Coach
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                      <a href="mailto:president@wwsoccer.org">
                        Contact to Volunteer
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <SectionHeader
              title="Quick Links"
              subtitle="Common destinations for players and parents."
            />
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="group hover:border-primary/30 transition-colors">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground">Player Registration</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Register for Spring 2026</p>
                  <Button asChild variant="link" className="mt-2 h-auto p-0">
                    <a href="https://system.gotsport.com/programs/265J58760" target="_blank" rel="noopener noreferrer">
                      Register Now
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
              <Card className="group hover:border-primary/30 transition-colors">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground">Coach Registration</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Sign up to coach a team</p>
                  <Button asChild variant="link" className="mt-2 h-auto p-0">
                    <a href="https://system.gotsport.com/programs/29T070892" target="_blank" rel="noopener noreferrer">
                      Register Now
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
              <Card className="group hover:border-primary/30 transition-colors">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground">Program Info</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Spring 2026 details</p>
                  <Button asChild variant="link" className="mt-2 h-auto p-0">
                    <Link href="/spring-soccer-2026">
                      View Details
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="group hover:border-primary/30 transition-colors">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground">About Us</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Learn about our organization</p>
                  <Button asChild variant="link" className="mt-2 h-auto p-0">
                    <Link href="/about">
                      Learn More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="border-t border-border bg-muted py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Ready to Join West Warwick Soccer?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Spring 2026 registration is open now. Get your child on the field!
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="text-base">
                <a href="https://system.gotsport.com/programs/265J58760" target="_blank" rel="noopener noreferrer">
                  Register Now
                  <ArrowRight className="ml-2 h-5 w-5" />
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
