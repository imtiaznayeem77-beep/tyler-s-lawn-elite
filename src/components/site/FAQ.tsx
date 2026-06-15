import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { FAQS } from "@/lib/site/data";

export function FAQ({
  items = FAQS,
  title = "Frequently Asked Questions",
  eyebrow = "Got questions?",
}: {
  items?: { q: string; a: string }[];
  title?: string;
  eyebrow?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-20 md:py-28">
      <div className="container-px grid gap-12 lg:grid-cols-[1fr_1.4fr] items-start">
        <div className="lg:sticky lg:top-28">
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs uppercase tracking-[0.2em] font-semibold px-4 py-1.5 rounded-full">
            {eyebrow}
          </span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">{title}</h2>
          <p className="mt-4 text-muted-foreground">
            If you can’t find what you’re looking for, give us a call or request a free estimate — we’re happy to help.
          </p>
        </div>

        <div className="space-y-3">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div
                key={it.q}
                className={[
                  "rounded-2xl border transition-all bg-card",
                  isOpen ? "border-primary/30 shadow-soft" : "border-border/60 hover:border-primary/20",
                ].join(" ")}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left p-5 md:p-6"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base md:text-lg font-semibold text-foreground">{it.q}</span>
                  <span
                    className={[
                      "h-9 w-9 shrink-0 rounded-full flex items-center justify-center transition-all",
                      isOpen ? "gradient-primary text-primary-foreground rotate-45" : "bg-primary/10 text-primary",
                    ].join(" ")}
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 md:px-6 pb-5 md:pb-6 text-sm md:text-[15px] text-muted-foreground leading-relaxed">
                        {it.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
