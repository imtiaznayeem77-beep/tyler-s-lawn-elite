import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/site/data";

export function ServiceGrid({ limit }: { limit?: number }) {
  const items = limit ? SERVICES.slice(0, limit) : SERVICES;
  return (
    <section className="py-20 md:py-28">
      <div className="container-px">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs uppercase tracking-[0.2em] font-semibold px-4 py-1.5 rounded-full">
              Our Services
            </span>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
              Professional lawn care, <span className="text-gradient">end to end.</span>
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              From weekly mowing to full property recoveries, every job is treated with the same care, precision and pride.
            </p>
          </div>
          <Link
            to="/services"
            className="self-start inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
          >
            View All Services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((s, i) => {
            const Card = (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border/60 shadow-soft hover:shadow-elegant transition-all"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    width={1280}
                    height={960}
                    className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-display text-xl md:text-2xl font-bold text-white drop-shadow">{s.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.short}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-xs uppercase tracking-widest font-semibold text-primary">
                      {s.to ? "Learn more" : "Included service"}
                    </span>
                    <span className="h-9 w-9 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:gradient-primary group-hover:text-primary-foreground transition-all">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </motion.div>
            );
            return s.to ? (
              <Link key={s.slug} to={s.to}>
                {Card}
              </Link>
            ) : (
              <Link key={s.slug} to="/services">
                {Card}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
