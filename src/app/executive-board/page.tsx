import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BoardMemberCard } from "@/components/board-member-card"
import { SectionHeader } from "@/components/section-header"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Executive Board | West Warwick Soccer Association",
  description: "Meet the Executive Board of West Warwick Soccer Association.",
}

const executiveBoard = [
  {
    name: "Jimmy Vilayvanh",
    role: "President",
    email: "President@wwsoccer.org",
  },
  {
    name: "David Soares",
    role: "Vice President",
    email: "VicePresident@wwsoccer.org",
  },
  {
    name: "Nico Duarte",
    role: "Secretary",
    email: "secretary@wwsoccer.org",
  },
  {
    name: "Beth Friedman",
    role: "Treasurer",
    email: "Treasurer@wwsoccer.org",
  },
  {
    name: "Christina Messier",
    role: "Registrar",
    email: undefined,
  },
]

export default function ExecutiveBoardPage() {
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
                Executive Board
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Our Executive Board provides strategic leadership and oversees all association activities, ensuring our programs serve the best interests of youth soccer in our community.
              </p>
            </div>
          </div>
        </section>

        {/* Board Members */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <SectionHeader
              title="Meet Our Leaders"
              subtitle="Dedicated volunteers committed to developing youth soccer in West Warwick."
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {executiveBoard.map((member) => (
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
              Have Questions?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Feel free to reach out to any of our board members. We&apos;re here to help and always welcome feedback from our community.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/board-of-directors">View Board of Directors</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
