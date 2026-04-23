import { Calendar, ClipboardCheck, Heart, Users } from "lucide-react";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Volunteers | West Warwick Soccer Association",
  description: "Volunteer opportunities, expectations, and meeting information for West Warwick Soccer.",
};

export default function VolunteersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="border-b border-border bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Volunteers Needed</h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                West Warwick Soccer is always looking for volunteers. The live site specifically calls out coaching, concession, and fundraising roles, and this page keeps that structure intact in the new UI.
              </p>
            </div>
          </div>
        </section>
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <SectionHeader title="Open Roles" subtitle="Current public volunteer opportunities from the live site." />
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {[
                ["Coaching and Skills Coordinator", "Board of directors role supporting coaches and trainings.", <Users className="h-6 w-6" key="u" />],
                ["Concession Stand Helpers", "Weekly rec-season support with cooking, prep, and cashiering.", <Heart className="h-6 w-6" key="h" />],
                ["Fundraiser Committee", "Help plan and execute approved fundraisers.", <ClipboardCheck className="h-6 w-6" key="c" />],
                ["Board Meeting Participation", "Attend the last Thursday monthly meeting at 6:45 PM.", <Calendar className="h-6 w-6" key="ca" />],
              ].map(([title, body, icon]) => (
                <Card key={String(title)}>
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">{icon}</div>
                    <h3 className="mt-4 text-lg font-semibold text-foreground">{title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{body}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg"><a href="mailto:president@wwsoccer.org">Contact to Volunteer</a></Button>
              <Button asChild variant="outline" size="lg"><a href="https://system.gotsport.com/programs/29T070892" target="_blank" rel="noopener noreferrer">Register as Coach</a></Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
