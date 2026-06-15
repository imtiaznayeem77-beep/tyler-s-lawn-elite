import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reviews } from "@/components/site/Reviews";
import { FAQ } from "@/components/site/FAQ";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Process } from "@/components/site/Process";
import hero from "@/assets/service-maintenance.jpg";

export const Route = createFileRoute("/lawn-maintenance")({
  head: () => ({
    meta: [
      { title: "Ongoing Lawn Maintenance Programs | Landscapes By Tyler" },
      { name: "description", content: "Weekly and bi-weekly lawn maintenance: mowing, edging, trimming and detail care to keep your property looking its best year-round. Free estimates." },
      { property: "og:title", content: "Lawn Maintenance — Landscapes By Tyler" },
      { property: "og:description", content: "Recurring lawn maintenance plans. Free estimates." },
      { property: "og:url", content: "/lawn-maintenance" },
      { property: "og:image", content: "/logo/logo.png" },
    ],
    links: [{ rel: "canonical", href: "/lawn-maintenance" }],
  }),
  component: Page,
});

const INCLUDES = [
  "Routine mowing on a consistent schedule",
  "Lawn edging along walks and driveways",
  "String trimming around obstacles",
  "Full property blow-down",
  "Seasonal adjustments to height & frequency",
  "Year-round property appearance",
];

function Page() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Lawn Maintenance"
        title={<>Set-it-and-forget-it <span className="text-gradient">lawn perfection.</span></>}
        description="Weekly or bi-weekly maintenance plans so your lawn always looks its best — without you having to think about it."
        image={hero}
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: "Lawn Maintenance" }]}
      />
      <section className="py-20 md:py-28">
        <div className="container-px grid gap-12 lg:grid-cols-2 items-center">
          <img src={hero} alt="Beautifully maintained suburban front yard" loading="lazy" width={1280} height={896} className="rounded-3xl shadow-elegant aspect-[4/5] object-cover w-full" />
          <div>
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs uppercase tracking-[0.2em] font-semibold px-4 py-1.5 rounded-full">What's Included</span>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold leading-tight">Recurring care that compounds.</h2>
            <p className="mt-5 text-muted-foreground md:text-lg">
              A well-maintained lawn looks better, grows stronger, and adds curb appeal to your entire property.
            </p>
            <ul className="mt-7 space-y-3">
              {INCLUDES.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-0.5 h-6 w-6 rounded-full gradient-primary text-primary-foreground flex items-center justify-center shrink-0"><Check className="h-3.5 w-3.5" /></span>
                  <span className="text-foreground/85">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <Process />
      <Reviews count={3} />
      <FAQ />
      <FinalCTA />
    </SiteLayout>
  );
}

void motion;
