import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Competitive Futsal | West Warwick Soccer Association",
  description: "Future-ready futsal route matching the replicated UI system.",
};

export default function FutsalPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 items-center justify-center px-4 py-24">
        <div className="w-full max-w-2xl rounded-2xl border border-border bg-card p-10 text-center">
          <h1 className="text-4xl font-bold text-foreground">Competitive Futsal</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Competitive Futsal appears in the live site&apos;s program list. This route keeps that page parity in the replicated UI and can absorb full copy when ready.
          </p>
          <div className="mt-8">
            <Button asChild size="lg"><a href="mailto:competitivecoord@wwsoccer.org">Request More Information</a></Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
