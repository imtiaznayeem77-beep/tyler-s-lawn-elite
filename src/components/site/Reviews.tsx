import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { REVIEWS } from "@/lib/site/data";

export function Reviews({ count = 6, title = "What Our Customers Say", eyebrow = "Real Google-style reviews" }: { count?: number; title?: string; eyebrow?: string }) {
  const items = REVIEWS.slice(0, count);
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background to-accent/40">
      <div className="container-px">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs uppercase tracking-[0.2em] font-semibold px-4 py-1.5 rounded-full">
            {eyebrow}
          </span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold text-foreground">{title}</h2>
          <div className="mt-3 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold text-gold" />
              ))}
            </div>
            <span>5.0 average · trusted by local homeowners</span>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((r, i) => (
            <motion.article
              key={r.name + i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative bg-card rounded-2xl p-6 md:p-7 shadow-soft border border-border/60 hover:shadow-elegant hover:-translate-y-1 transition-all"
            >
              <Quote className="absolute top-5 right-5 h-6 w-6 text-primary/15" />
              <div className="flex gap-1 mb-3">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-sm md:text-[15px] text-foreground/85 leading-relaxed">"{r.text}"</p>
              <div className="mt-5 flex items-center gap-3 pt-5 border-t border-border/50">
                <div className="h-10 w-10 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.location}</div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
