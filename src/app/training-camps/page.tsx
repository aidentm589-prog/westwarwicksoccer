import { Calendar, MapPin, Shirt, Users } from "lucide-react";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Training Camps | West Warwick Soccer Association",
  description: "Current camp promotion and training philosophy for West Warwick Soccer.",
};

export default function TrainingCampsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="border-b border-border bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Training Camps</h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                At West Warwick Soccer, the best way for children and young athletes to develop is through repetition and fun, engaging activities.
              </p>
            </div>
          </div>
        </section>
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <SectionHeader title="Current Camp Promo" subtitle="The live site currently highlights a WWSA + Rhode Island Surf Soccer Camp." />
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {[
                ["July 14 - 18", <Calendar className="h-6 w-6" key="c" />],
                ["Riverpoint Park, West Warwick", <MapPin className="h-6 w-6" key="m" />],
                ["Ages 5 - 15", <Users className="h-6 w-6" key="u" />],
                ["Camp Shirt Included", <Shirt className="h-6 w-6" key="s" />],
              ].map(([label, icon]) => (
                <Card key={String(label)}>
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">{icon}</div>
                    <p className="font-semibold text-foreground">{label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8">
              <Button asChild size="lg"><a href="https://playmetrics.com/signup?clubToken=TG9naW4tQ2x1Yi52MS0xMzU5LTE3NTQ0MDA1MDB8eEZMSFpLeGhSNDJXVm0wVkZ1NkNUTk9nakdFNFM5am5yLzdSSnU3KzJyUT0=&program_id=63689" target="_blank" rel="noopener noreferrer">Register Here</a></Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
