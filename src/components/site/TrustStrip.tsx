import { motion } from "framer-motion";
import { Check } from "lucide-react";

const ITEMS = [
  "Free Estimates",
  "Reliable Service",
  "Affordable Pricing",
  "Attention To Detail",
  "Fast Response",
  "Professional Equipment",
];

export function TrustStrip() {
  return (
    <section className="relative -mt-10 md:-mt-14 z-10">
      <div className="container-px">
        <div className="rounded-2xl bg-card shadow-elegant border border-border/60 px-5 sm:px-8 py-5 md:py-6">
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-3">
            {ITEMS.map((t, i) => (
              <motion.li
                key={t}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-center gap-2.5 text-sm font-medium text-foreground"
              >
                <span className="h-7 w-7 rounded-full gradient-primary flex items-center justify-center text-primary-foreground shrink-0">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="truncate">{t}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
