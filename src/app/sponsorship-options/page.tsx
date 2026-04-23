import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Sponsorship Options | West Warwick Soccer Association",
  description: "Public sponsorship package tiers and benefits for West Warwick Soccer.",
};

const packages = [
  { name: "Bronze", price: "$100", benefits: ["Name on bulletin board", "Yard sign placed on the field"] },
  { name: "Silver", price: "$200", benefits: ["Name on concession banner", "Bulletin board placement", "Field sign"] },
  { name: "Gold", price: "$300", benefits: ["Goalie jersey recognition", "Group banner", "Field sign placement"] },
  { name: "VIP-Platinum", price: "$500", benefits: ["Sponsor Day invite", "Large single-business banner", "Goalie jersey + banner + bulletin board", "Weekly yard sign"] },
];

export default function SponsorshipOptionsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="border-b border-border bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Sponsorship Options</h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Help support West Warwick Soccer and gain visibility in the community. These package levels are preserved from the current live public site.
              </p>
            </div>
          </div>
        </section>
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <SectionHeader title="Learn About Our Packages" subtitle="Public tier names, pricing, and benefits preserved for migration parity." />
            <div className="mt-12 grid gap-6 lg:grid-cols-4">
              {packages.map((pkg) => (
                <Card key={pkg.name} className="flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-2xl">{pkg.price}</CardTitle>
                    <p className="text-sm font-medium text-primary">{pkg.name}</p>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      {pkg.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-10 flex gap-4">
              <Button asChild><a href="mailto:sponsorcoord@wwsoccer.org">Request Sponsorship Info</a></Button>
              <Button asChild variant="outline"><a href="/sponsors">View Sponsors</a></Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
