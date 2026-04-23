import { ArrowRight, Mail } from "lucide-react";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "2025-2026 Competitive Program | West Warwick Soccer Association",
  description: "Competitive registration and waitlist links for the 2025-2026 season.",
};

export default function CompetitiveProgram20252026Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="border-b border-border bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">2025-2026 Competitive Soccer</h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Players that registered and attended tryouts will be contacted by July 1. Missed tryouts can use the waitlist as roster spots open.
              </p>
            </div>
          </div>
        </section>
        <section className="py-16 lg:py-24">
          <div className="mx-auto grid max-w-5xl gap-6 px-4 lg:grid-cols-2 lg:px-8">
            <Card><CardContent className="p-8"><h2 className="text-2xl font-bold text-foreground">Comp Registration Link</h2><p className="mt-3 text-muted-foreground">Players must be registered and approved for the link to work.</p><div className="mt-6"><Button asChild size="lg"><a href="https://system.gotsport.com/programs/57731959Y" target="_blank" rel="noopener noreferrer">Open Registration <ArrowRight className="ml-2 h-5 w-5" /></a></Button></div></CardContent></Card>
            <Card><CardContent className="p-8"><h2 className="text-2xl font-bold text-foreground">Comp Waitlist Link</h2><p className="mt-3 text-muted-foreground">Missed tryouts? Register to be placed on the waitlist for evaluation as spots open.</p><div className="mt-6"><Button asChild size="lg" variant="outline"><a href="https://system.gotsport.com/programs/178K50373" target="_blank" rel="noopener noreferrer">Join Waitlist</a></Button></div></CardContent></Card>
          </div>
          <div className="mx-auto mt-10 max-w-3xl px-4 text-center lg:px-8">
            <Button asChild variant="link"><a href="mailto:competitivecoord@wwsoccer.org"><Mail className="mr-2 h-4 w-4" />Contact competitivecoord@wwsoccer.org</a></Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
