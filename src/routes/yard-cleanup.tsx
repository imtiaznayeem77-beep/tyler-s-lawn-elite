import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reviews } from "@/components/site/Reviews";
import { FAQ } from "@/components/site/FAQ";
import { FinalCTA } from "@/components/site/FinalCTA";
import hero from "@/assets/service-cleanup.jpg";
import fall from "@/assets/service-fall.jpg";

export const Route = createFileRoute("/yard-cleanup")({
  head: () => ({
    meta: [
      { title: "Yard Cleanup & Overgrown Property Recovery | Landscapes By Tyler" },
      { name: "description", content: "Full yard cleanups, overgrown property recovery, leaf removal, debris hauling and seasonal cleanups. From jungle to manicured — free estimates." },
      { property: "og:title", content: "Yard Cleanup — Landscapes By Tyler" },
      { property: "og:description", content: "Overgrown yard recovery, debris removal and seasonal cleanups." },
      { property: "og:url", content: "/yard-cleanup" },
      { property: "og:image", content: "/logo/logo.png" },
    ],
    links: [{ rel: "canonical", href: "/yard-cleanup" }],
  }),
  component: Page,
});

const SECTIONS = [
  { title: "Overgrown Properties", desc: "Tall grass, weeds, and out-of-control growth — restored in a single visit." },
  { title: "Seasonal Cleanups", desc: "Spring and fall full-property resets so your lawn starts every season strong." },
  { title: "Debris Removal", desc: "Leaves, sticks, branches and yard waste hauled off so your property is clean." },
  { title: "Weed Removal", desc: "Lawn, beds and walkways pulled and treated for a fresh, healthy look." },
  { title: "Property Restoration", desc: "Bringing neglected yards back to a manicured, professional condition." },
];

function Page() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Yard Cleanup"
        title={<>From overgrown jungle to <span className="text-gradient">manicured masterpiece.</span></>}
        description="Whether your property has been neglected for months or you just need a seasonal reset, we’ll restore it to a clean, healthy, professional condition."
        image={hero}
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: "Yard Cleanup" }]}
      />
      <section className="py-20 md:py-28">
        <div className="container-px grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SECTIONS.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="bg-card rounded-2xl p-7 border border-border/60 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all">
              <div className="inline-flex h-11 w-11 rounded-xl gradient-primary text-primary-foreground items-center justify-center"><Check className="h-5 w-5" /></div>
              <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="py-12">
        <div className="container-px">
          <img src={fall} alt="Fall leaf cleanup" loading="lazy" width={1280} height={896} className="rounded-3xl shadow-elegant w-full object-cover aspect-[16/9]" />
        </div>
      </section>
      <Reviews count={3} />
      <FAQ />
      <FinalCTA />
    </SiteLayout>
  );
}
