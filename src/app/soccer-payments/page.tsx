import { CreditCard } from "lucide-react";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Soccer Payments | West Warwick Soccer Association",
  description: "Public payment and registration utility route for West Warwick Soccer.",
};

export default function SoccerPaymentsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 items-center justify-center px-4 py-24">
        <div className="w-full max-w-2xl rounded-2xl border border-border bg-card p-10 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
            <CreditCard className="h-8 w-8" />
          </div>
          <h1 className="mt-6 text-4xl font-bold text-foreground">Soccer Payments</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            The current public page points visitors to rec registration and payment-related actions.
          </p>
          <div className="mt-8">
            <Button asChild size="lg"><a href="https://system.gotsport.com/programs/36S951046" target="_blank" rel="noopener noreferrer">Register Now - Fall 2021</a></Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
