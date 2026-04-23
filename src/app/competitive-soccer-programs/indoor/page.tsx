import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Indoor Competitive | West Warwick Soccer Association",
  description: "Indoor competitive soccer options for West Warwick Soccer players.",
};

export default function IndoorCompetitivePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="border-b border-border bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Indoor Competitive</h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                West Warwick competes in RI Futsal, Teamworks, and Wide World of Indoor Sports.
              </p>
            </div>
          </div>
        </section>
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <SectionHeader title="Indoor Options" subtitle="Current public indoor leagues and contact flow." />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {["RI Futsal", "Teamworks", "Wide World of Indoor Sports"].map((item) => (
                <Card key={item}><CardContent className="p-6"><p className="font-semibold text-foreground">{item}</p></CardContent></Card>
              ))}
            </div>
            <div className="mt-8"><Button asChild><a href="mailto:competitivecoord@wwsoccer.org">More Information</a></Button></div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
