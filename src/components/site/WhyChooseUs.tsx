import { motion } from "framer-motion";
import {
  ShieldCheck, Wallet, Sparkles, Eye, Award, Wrench, HeartHandshake, ThumbsUp,
} from "lucide-react";

const FEATURES = [
  { icon: ShieldCheck, title: "Reliable Service", desc: "Show up on time, every time. No cancellations, no excuses." },
  { icon: Wallet, title: "Affordable Pricing", desc: "Fair, transparent rates with no surprise fees, ever." },
  { icon: Sparkles, title: "Free Estimates", desc: "Honest quotes, no pressure — request yours in under a minute." },
  { icon: Eye, title: "Attention To Detail", desc: "Clean stripes, sharp edges and a perfect finish around every obstacle." },
  { icon: Award, title: "Quality Results", desc: "Lawn care work you’ll be proud to show off to neighbors." },
  { icon: Wrench, title: "Professional Equipment", desc: "Modern, well-maintained commercial-grade mowers and tools." },
  { icon: HeartHandshake, title: "Friendly Service", desc: "Local, approachable, and easy to work with — always." },
  { icon: ThumbsUp, title: "Customer Satisfaction", desc: "Your happiness is the standard — we don’t leave until you’re thrilled." },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-px">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs uppercase tracking-[0.2em] font-semibold px-4 py-1.5 rounded-full">
            Why Choose Us
          </span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
            Built on trust, finished with <span className="text-gradient">pride.</span>
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            A new generation of lawn care that treats your property like it’s our own.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
              className="group relative bg-card rounded-2xl p-6 border border-border/60 hover:border-primary/30 shadow-soft hover:shadow-elegant transition-all"
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity gradient-primary -z-10 blur-2xl" />
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:gradient-primary group-hover:text-primary-foreground transition-all">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display font-semibold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
