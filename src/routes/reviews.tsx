import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reviews } from "@/components/site/Reviews";
import { FAQ } from "@/components/site/FAQ";
import { FinalCTA } from "@/components/site/FinalCTA";
import { REVIEWS } from "@/lib/site/data";
import hero from "@/assets/about-hero.jpg";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Customer Reviews — Landscapes By Tyler" },
      { name: "description", content: "Read reviews from local homeowners about our lawn mowing, yard cleanup and maintenance services. Rated 5 stars by happy customers." },
      { property: "og:title", content: "Customer Reviews — Landscapes By Tyler" },
      { property: "og:description", content: "5-star reviews from local homeowners." },
      { property: "og:url", content: "/reviews" },
      { property: "og:image", content: "/logo/logo.png" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: Page,
});

function Page() {
  const avg = (REVIEWS.reduce((s, r) => s + r.rating, 0) / REVIEWS.length).toFixed(1);
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Customer Reviews"
        title={<>Trusted by local homeowners, <span className="text-gradient">one lawn at a time.</span></>}
        description="Here’s what real customers say about working with Landscapes By Tyler."
        image={hero}
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Reviews" }]}
      />
      <section className="py-16">
        <div className="container-px">
          <div className="mx-auto max-w-md text-center bg-card rounded-3xl p-8 shadow-elegant border border-border/60">
            <div className="flex justify-center gap-1">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-6 w-6 fill-gold text-gold" />)}</div>
            <div className="mt-3 text-5xl font-display font-bold text-primary">{avg}</div>
            <p className="mt-1 text-sm text-muted-foreground">Average rating from {REVIEWS.length}+ reviews</p>
          </div>
        </div>
      </section>
      <Reviews count={REVIEWS.length} title="Every Review · Every Story" eyebrow="All Reviews" />
      <FAQ />
      <FinalCTA />
    </SiteLayout>
  );
}
