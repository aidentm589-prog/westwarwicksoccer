import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SectionHeader } from "@/components/section-header";
import { SponsorsGrid } from "@/components/sponsors-grid";
import { sponsors } from "@/data/sponsors";

export const metadata = {
  title: "Sponsors | West Warwick Soccer Association",
  description: "Current public sponsor directory for West Warwick Soccer.",
};

export default function SponsorsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="border-b border-border bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-[1580px] px-6 lg:px-12">
            <div className="max-w-4xl">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Our Sponsors
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground lg:text-xl">
                Click a sponsor to learn more or support their business. We&apos;re grateful for the local partners who help make youth soccer possible in West Warwick.
              </p>
            </div>
          </div>
        </section>
        <section className="bg-muted/35 py-16 lg:py-24">
          <div className="mx-auto max-w-[1580px] px-6 lg:px-12">
            <SectionHeader
              title="Community Partners"
              subtitle="Support the businesses and organizations that support our players, families, and programs."
            />
            <div className="mt-12">
              <SponsorsGrid sponsors={sponsors} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
