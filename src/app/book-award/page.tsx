import { FileText, GraduationCap, Trophy } from "lucide-react";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Book Award | West Warwick Soccer Association",
  description: "Albert J. Haigh Book Award information and application link.",
};

export default function BookAwardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="border-b border-border bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Albert J. Haigh Book Award</h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                A monetary grant program designed to help finance the higher education of youths who participated in WWSA.
              </p>
            </div>
          </div>
        </section>
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <SectionHeader title="Eligibility Snapshot" subtitle="Public eligibility items preserved from the live site." />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                ["WWSA Participant", "Applicants must have participated in West Warwick Soccer.", <Trophy className="h-6 w-6" key="t" />],
                ["Graduating Senior", "Applicants should be graduating in the current academic year.", <GraduationCap className="h-6 w-6" key="g" />],
                ["Application Materials", "GPA, letters, statement, and school acceptance proof are required.", <FileText className="h-6 w-6" key="f" />],
              ].map(([title, text, icon]) => (
                <Card key={String(title)}>
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">{icon}</div>
                    <h3 className="mt-4 text-lg font-semibold text-foreground">{title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8">
              <Button asChild size="lg"><a href="https://drive.google.com/file/d/1M3gniWEgyb9-WyCC1Xr25dHosrlziP-7/view?usp=sharing" target="_blank" rel="noopener noreferrer">Download the Application</a></Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
