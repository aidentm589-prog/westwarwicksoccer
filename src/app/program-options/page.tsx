import Link from "next/link";
import { ArrowRight, Calendar, Goal, Shield, Trophy, Users } from "lucide-react";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ProgramCard } from "@/components/program-card";
import { SectionHeader } from "@/components/section-header";

export const metadata = {
  title: "Program Options | West Warwick Soccer Association",
  description: "Explore rec, competitive, futsal, referee, and camp offerings at West Warwick Soccer.",
};

export default function ProgramOptionsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="border-b border-border bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
                Program Options
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                West Warwick Soccer offers rec, competitive, referee, and camp pathways. This page preserves the full public program map while matching the provided UI system.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <SectionHeader
              title="Current Public Offerings"
              subtitle="Every program publicly referenced on the live site remains directly accessible."
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <ProgramCard title="Spring 2026" description="Current season details, costs, and registration information." href="/spring-soccer-2026" icon={<Calendar className="h-6 w-6" />} highlight="Open Now" buttonText="View Details" />
              <ProgramCard title="Rec Soccer" description="Our flagship community program for ages 3 to 16." href="/rec-soccer" icon={<Users className="h-6 w-6" />} buttonText="Learn More" />
              <ProgramCard title="Competitive Soccer" description="Travel-focused program with year-round development and match play." href="/competitive-soccer-programs" icon={<Trophy className="h-6 w-6" />} buttonText="Learn More" />
              <ProgramCard title="Outdoor Competitive" description="SuperLiga outdoor competition in Fall and Spring." href="/competitive-soccer-programs/outdoor" icon={<Goal className="h-6 w-6" />} buttonText="View Page" />
              <ProgramCard title="Indoor Competitive" description="Indoor leagues including RI Futsal, Teamworks, and Wide World." href="/competitive-soccer-programs/indoor" icon={<Shield className="h-6 w-6" />} buttonText="View Page" />
              <ProgramCard title="Training Camps" description="Seasonal camp and skill-development opportunities." href="/training-camps" icon={<ArrowRight className="h-6 w-6" />} buttonText="View Camps" />
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/referee-program" className="text-sm font-medium text-primary hover:underline">Referee Program</Link>
              <Link href="/competitive-soccer-programs/futsal" className="text-sm font-medium text-primary hover:underline">Competitive Futsal</Link>
              <Link href="/rec-schedule" className="text-sm font-medium text-primary hover:underline">Rec Schedule</Link>
              <Link href="/soccer-payments" className="text-sm font-medium text-primary hover:underline">Soccer Payments</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
