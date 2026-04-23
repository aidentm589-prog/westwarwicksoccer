import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BoardMemberCard } from "@/components/board-member-card"
import { SectionHeader } from "@/components/section-header"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Board of Directors | West Warwick Soccer Association",
  description: "Meet the Board of Directors of West Warwick Soccer Association.",
}

const boardOfDirectors = [
  {
    name: "Christina Messier",
    role: "Director",
    email: undefined,
  },
  {
    name: "Mike Martin",
    role: "Director",
    email: undefined,
  },
  {
    name: "David Soares",
    role: "Director",
    email: undefined,
  },
  {
    name: "Joe Resende",
    role: "Director",
    email: undefined,
  },
  {
    name: "Jimmy Vilayvanh",
    role: "Coaching and Skills Coordinator",
    email: "coachingcoord@wwsoccer.org",
  },
  {
    name: "Erick DiMartino",
    role: "Fields & Equipment Coordinator",
    email: "fields@wwsoccer.org",
  },
  {
    name: "Andrew Hairabedian",
    role: "Director",
    email: undefined,
  },
]

export default function BoardOfDirectorsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-background border-b border-border py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <Button asChild variant="ghost" className="mb-6 -ml-4 text-muted-foreground hover:text-foreground">
              <Link href="/about">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to About
              </Link>
            </Button>
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
                Board of Directors
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Our Board of Directors manages day-to-day operations, including fields, equipment, coaching coordination, and program development.
              </p>
            </div>
          </div>
        </section>

        {/* Board Members */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <SectionHeader
              title="Our Directors"
              subtitle="Working behind the scenes to ensure our programs run smoothly."
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {boardOfDirectors.map((member) => (
                <BoardMemberCard
                  key={member.name}
                  name={member.name}
                  role={member.role}
                  email={member.email}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-muted/50 py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Want to Get Involved?
            </h2>
            <p className="mt-4 text-muted-foreground">
              We&apos;re always looking for dedicated volunteers to help with coaching, field maintenance, and other activities.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild>
                <a href="https://system.gotsport.com/programs/29T070892" target="_blank" rel="noopener noreferrer">
                  Register as Coach
                </a>
              </Button>
              <Button asChild variant="outline">
                <Link href="/executive-board">View Executive Board</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
