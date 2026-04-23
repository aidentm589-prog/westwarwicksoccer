import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Competitive Tryouts Archive | West Warwick Soccer Association",
  description: "Archived competitive tryout registration page preserved during redesign.",
};

export default function CompetitiveTryoutsArchivePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 items-center justify-center px-4 py-24">
        <div className="w-full max-w-2xl rounded-2xl border border-border bg-card p-10 text-center">
          <h1 className="text-4xl font-bold text-foreground">WWSA Competitive Tryout</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Historical tryout route preserved so legacy public links continue to resolve.
          </p>
          <div className="mt-8">
            <Button asChild size="lg"><a href="https://system.gotsport.com/programs/79X316156" target="_blank" rel="noopener noreferrer">Archived Registration Link</a></Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
