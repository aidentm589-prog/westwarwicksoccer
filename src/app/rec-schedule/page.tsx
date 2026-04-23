import { Calendar } from "lucide-react";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Rec Schedule | West Warwick Soccer Association",
  description: "Spring rec schedule reference page for West Warwick Soccer.",
};

export default function RecSchedulePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 items-center justify-center px-4 py-24">
        <div className="w-full max-w-2xl rounded-2xl border border-border bg-card p-10 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Calendar className="h-8 w-8" />
          </div>
          <h1 className="mt-6 text-4xl font-bold text-foreground">2024 Spring Rec Schedule</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            This route preserves the public schedule utility pattern from the live site.
          </p>
          <div className="mt-8">
            <Button asChild size="lg"><a href="https://drive.google.com/file/d/11cteh7_F6Z1GmL2GfNEWczgFEru-sS5Y/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Spring 2024 Game Schedule</a></Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
