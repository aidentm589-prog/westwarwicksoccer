import { ArrowRight, Shield, Trophy, Users } from "lucide-react";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Referee Program | West Warwick Soccer Association",
  description: "Become a certified referee and support rec and competitive soccer at West Warwick Soccer.",
};

export default function RefereeProgramPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="border-b border-border bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Referee Program</h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                West Warwick is looking for new referees for rec and competitive programs. If you&apos;re 13 or older, you can sign up to become a certified referee.
              </p>
              <div className="mt-8">
                <Button asChild size="lg"><a href="https://learning.ussoccer.com/referee/" target="_blank" rel="noopener noreferrer">Become a Referee <ArrowRight className="ml-2 h-5 w-5" /></a></Button>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <SectionHeader title="Why Referee?" subtitle="Key benefits called out by the current public site." />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                ["Learn the Laws of the Game", <Shield className="h-6 w-6" key="s" />],
                ["Become a Better Player", <Trophy className="h-6 w-6" key="t" />],
                ["Earn Money and Work with Great Coaches", <Users className="h-6 w-6" key="u" />],
              ].map(([title, icon]) => (
                <Card key={String(title)}>
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">{icon}</div>
                    <h3 className="mt-4 text-lg font-semibold text-foreground">{title}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
