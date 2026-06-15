import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reviews } from "@/components/site/Reviews";
import { FinalCTA } from "@/components/site/FinalCTA";
import { PROJECTS } from "@/lib/site/data";
import hero from "@/assets/hero-home.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Lawn Care Gallery — Real Projects | Landscapes By Tyler" },
      { name: "description", content: "Browse real lawn care and yard cleanup projects. See the before-and-after results we deliver for local homeowners." },
      { property: "og:title", content: "Project Gallery — Landscapes By Tyler" },
      { property: "og:description", content: "Real projects. Real results. Local lawn care." },
      { property: "og:url", content: "/gallery" },
      { property: "og:image", content: "/projects/recovery-1.jpg" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Page,
});

interface Item { src: string; project: string; category: string; }

const ALL: Item[] = PROJECTS.flatMap((p) =>
  p.images.map((src) => ({ src, project: p.title, category: p.title })),
);
const CATEGORIES = ["All", ...Array.from(new Set(ALL.map((i) => i.category)))];

function Page() {
  const [filter, setFilter] = useState("All");
  const [lb, setLb] = useState<number | null>(null);
  const items = filter === "All" ? ALL : ALL.filter((i) => i.category === filter);
  const move = (d: 1 | -1) => lb !== null && setLb((lb + d + items.length) % items.length);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Project Gallery"
        title={<>Real projects. <span className="text-gradient">Real results.</span></>}
        description="A look at the lawn care, cleanups and property transformations we’ve delivered for local homeowners."
        image={hero}
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Gallery" }]}
      />
      <section className="py-16 md:py-20">
        <div className="container-px">
          <div className="flex flex-wrap gap-2 mb-8">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={[
                  "px-4 py-2 rounded-full text-sm font-medium transition-all",
                  filter === c ? "gradient-primary text-primary-foreground shadow-soft" : "bg-card border border-border/60 text-foreground hover:border-primary/30",
                ].join(" ")}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [&>*]:mb-4">
            {items.map((it, i) => (
              <motion.button
                key={it.src + i}
                onClick={() => setLb(i)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="group relative w-full overflow-hidden rounded-2xl shadow-soft hover:shadow-elegant transition-all break-inside-avoid"
              >
                <img src={it.src} alt={it.project} loading="lazy" width={1200} height={900} className="w-full h-auto object-cover transition-transform duration-[1.2s] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white text-sm font-semibold">{it.project}</span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {lb !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setLb(null)}>
            <button onClick={() => setLb(null)} className="absolute top-5 right-5 h-11 w-11 rounded-full glass-dark text-white flex items-center justify-center" aria-label="Close"><X className="h-5 w-5" /></button>
            <button onClick={(e) => { e.stopPropagation(); move(-1); }} className="absolute left-3 md:left-6 h-11 w-11 rounded-full glass-dark text-white flex items-center justify-center" aria-label="Prev"><ChevronLeft className="h-5 w-5" /></button>
            <button onClick={(e) => { e.stopPropagation(); move(1); }} className="absolute right-3 md:right-6 h-11 w-11 rounded-full glass-dark text-white flex items-center justify-center" aria-label="Next"><ChevronRight className="h-5 w-5" /></button>
            <img src={items[lb].src} alt="" className="max-h-[88vh] max-w-[92vw] object-contain rounded-xl shadow-elegant" onClick={(e) => e.stopPropagation()} />
          </motion.div>
        )}
      </AnimatePresence>

      <Reviews count={3} />
      <FinalCTA />
    </SiteLayout>
  );
}
