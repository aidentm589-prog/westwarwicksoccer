export { metadata } from "@/app/competitive-soccer-programs/page";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function OutdoorCompetitivePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="border-b border-border bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Outdoor Competitive</h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                West Warwick Soccer normally participates in the RI SuperLiga outdoor competitive travel program.
              </p>
            </div>
          </div>
        </section>
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <SectionHeader title="Program Structure" subtitle="Public details preserved from the current site." />
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <Card><CardContent className="p-6"><p className="font-semibold text-foreground">SuperLiga</p><p className="mt-2 text-muted-foreground">An independent outdoor competitive travel program with Fall and Spring sessions.</p></CardContent></Card>
              <Card><CardContent className="p-6"><p className="font-semibold text-foreground">Tryout Timing</p><p className="mt-2 text-muted-foreground">Competitive tryouts normally occur in late May or early June for the upcoming season.</p></CardContent></Card>
            </div>
            <div className="mt-8"><Button asChild><a href="mailto:competitivecoord@wwsoccer.org">More Information</a></Button></div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
