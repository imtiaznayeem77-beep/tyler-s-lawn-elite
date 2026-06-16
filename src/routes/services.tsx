import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { ServiceGrid } from "@/components/site/ServiceGrid";
import { Process } from "@/components/site/Process";
import { Reviews } from "@/components/site/Reviews";
import { FAQ } from "@/components/site/FAQ";
import { FinalCTA } from "@/components/site/FinalCTA";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import hero from "@/assets/service-mowing.jpg";
import mowing from "@/assets/service-mowing.jpg";
import cleanup from "@/assets/service-cleanup.jpg";
import maintenance from "@/assets/service-maintenance.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Lawn Care Services — Mowing, Cleanups & Maintenance | Landscapes By Tyler" },
      {
        name: "description",
        content:
          "Full-service residential lawn care: mowing, edging, trimming, weed removal, yard cleanups, fall cleanups and ongoing lawn maintenance. Free estimates available.",
      },
      { property: "og:title", content: "Lawn Care Services — Landscapes By Tyler" },
      { property: "og:description", content: "Complete residential lawn care services. Free estimates available." },
      { property: "og:url", content: "/services" },
      { property: "og:image", content: "/logo/logo.png" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const DETAILS = [
  {
    id: "lawn-mowing",
    title: "Lawn Mowing",
    image: mowing,
    description:
      "Professional residential lawn mowing on a schedule that keeps your grass healthy and your property looking incredible — week after week.",
    items: [
      "Precision mowing at the ideal height for your grass type",
      "Clean, defined edges along walkways and beds",
      "Detail trimming around obstacles, fences and foundations",
      "Full blow-down of driveways, walkways and patios",
      "Inspection for lawn health and recommendations",
      "Reliable weekly or bi-weekly scheduling",
    ],
  },
  {
    id: "yard-cleanup",
    title: "Yard Cleanup",
    image: cleanup,
    description:
      "Whether your property has been neglected for months or you just need a seasonal reset, we'll restore it to a clean, healthy, professional condition.",
    items: [
      "Overgrown property recovery — tall grass, weeds and brush",
      "Spring and fall full-property resets",
      "Leaves, sticks, branches and yard waste hauled off",
      "Weed pulling and treatment across lawn, beds and walkways",
      "Bush and shrub trimming as needed",
      "Restoration to a manicured, professional condition",
    ],
  },
  {
    id: "lawn-maintenance",
    title: "Lawn Maintenance",
    image: maintenance,
    description:
      "Weekly or bi-weekly maintenance plans so your lawn always looks its best — without you having to think about it.",
    items: [
      "Routine mowing on a consistent schedule",
      "Lawn edging along walks and driveways",
      "String trimming around obstacles",
      "Full property blow-down every visit",
      "Seasonal adjustments to height & frequency",
      "Year-round property appearance",
    ],
  },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Our Services"
        title={<>Complete lawn care, <span className="text-gradient">from mow to maintenance.</span></>}
        description="Whether your yard needs a weekly mow, a one-time cleanup, or a full recovery from months of overgrowth — every service is delivered with the same care and detail."
        image={hero}
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Services" }]}
      />
      <ServiceGrid />

      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container-px space-y-20 md:space-y-28">
          {DETAILS.map((d, idx) => (
            <div
              key={d.id}
              id={d.id}
              className={`grid gap-12 lg:grid-cols-2 items-center scroll-mt-24 ${
                idx % 2 === 1 ? "lg:[&>img]:order-2" : ""
              }`}
            >
              <img
                src={d.image}
                alt={d.title}
                loading="lazy"
                width={1280}
                height={896}
                className="rounded-3xl shadow-elegant aspect-[4/5] object-cover w-full"
              />
              <div>
                <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs uppercase tracking-[0.2em] font-semibold px-4 py-1.5 rounded-full">
                  {d.title}
                </span>
                <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold leading-tight">
                  What's included
                </h2>
                <p className="mt-4 text-muted-foreground md:text-lg">{d.description}</p>
                <ul className="mt-7 space-y-3">
                  {d.items.map((t, i) => (
                    <motion.li
                      key={t}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.04 }}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-0.5 h-6 w-6 rounded-full gradient-primary text-primary-foreground flex items-center justify-center shrink-0">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-foreground/85">{t}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <WhyChooseUs />
      <Process />
      <Reviews count={6} />
      <FAQ />
      <FinalCTA />
    </SiteLayout>
  );
}
