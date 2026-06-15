import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Process } from "@/components/site/Process";
import { Reviews } from "@/components/site/Reviews";
import { FAQ } from "@/components/site/FAQ";
import { FinalCTA } from "@/components/site/FinalCTA";
import hero from "@/assets/service-mowing.jpg";

export const Route = createFileRoute("/lawn-mowing")({
  head: () => ({
    meta: [
      { title: "Professional Lawn Mowing Services | Landscapes By Tyler" },
      { name: "description", content: "Professional lawn mowing with crisp stripes, sharp edges and consistent results. Weekly and bi-weekly service available. Free estimates." },
      { property: "og:title", content: "Lawn Mowing — Landscapes By Tyler" },
      { property: "og:description", content: "Professional residential lawn mowing. Free estimates." },
      { property: "og:url", content: "/lawn-mowing" },
      { property: "og:image", content: "/logo/logo.png" },
    ],
    links: [{ rel: "canonical", href: "/lawn-mowing" }],
  }),
  component: Page,
});

const INCLUDED = [
  "Precision mowing at the ideal height for your grass type",
  "Clean, defined edges along walkways and beds",
  "Detail trimming around obstacles, fences and foundations",
  "Full blow-down of driveways, walkways and patios",
  "Inspection for lawn health and recommendations",
  "Reliable weekly or bi-weekly scheduling",
];

function Page() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Lawn Mowing"
        title={<>Crisp stripes. Sharp edges. <span className="text-gradient">Every visit.</span></>}
        description="Professional residential lawn mowing on a schedule that keeps your grass healthy and your property looking incredible — week after week."
        image={hero}
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: "Lawn Mowing" }]}
      />
      <section className="py-20 md:py-28">
        <div className="container-px grid gap-12 lg:grid-cols-2 items-start">
          <div>
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs uppercase tracking-[0.2em] font-semibold px-4 py-1.5 rounded-full">What's Included</span>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold leading-tight">Mowing done the right way.</h2>
            <p className="mt-5 text-muted-foreground md:text-lg">
              Mowing is more than just cutting grass. Every visit is a chance to keep your lawn healthier,
              stronger, and looking its absolute best.
            </p>
            <ul className="mt-8 space-y-3">
              {INCLUDED.map((t, i) => (
                <motion.li key={t} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="flex items-start gap-3">
                  <span className="mt-0.5 h-6 w-6 rounded-full gradient-primary text-primary-foreground flex items-center justify-center shrink-0">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-foreground/85">{t}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <img src={hero} alt="Striped freshly mowed residential lawn" loading="lazy" width={1280} height={896} className="rounded-3xl shadow-elegant w-full object-cover aspect-[4/5]" />
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
