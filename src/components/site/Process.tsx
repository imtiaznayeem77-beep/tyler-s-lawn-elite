import { motion } from "framer-motion";
import { ClipboardList, MessageSquareQuote, CalendarCheck2, Sparkles } from "lucide-react";

const STEPS = [
  { icon: ClipboardList, title: "Request Free Estimate", desc: "Tell us about your property in 60 seconds — by phone or through our quick form." },
  { icon: MessageSquareQuote, title: "Receive A Fast Quote", desc: "We respond quickly with an honest, no-pressure price tailored to your property." },
  { icon: CalendarCheck2, title: "Schedule Service", desc: "Pick a one-time visit or set up an ongoing maintenance plan that fits your schedule." },
  { icon: Sparkles, title: "Enjoy A Beautiful Lawn", desc: "We show up on time, do the job right and leave your property looking incredible." },
];

export function Process() {
  return (
    <section className="py-20 md:py-28 bg-accent/30">
      <div className="container-px">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs uppercase tracking-[0.2em] font-semibold px-4 py-1.5 rounded-full">
            Our Process
          </span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold text-foreground">Four simple steps</h2>
          <p className="mt-3 text-muted-foreground">
            From your first call to a beautifully cared-for lawn — easy, professional, and reliable.
          </p>
        </div>

        <div className="relative mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div aria-hidden className="hidden lg:block absolute top-9 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          {STEPS.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative bg-card rounded-2xl p-6 md:p-7 border border-border/60 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all"
            >
              <div className="relative inline-flex items-center justify-center h-14 w-14 rounded-2xl gradient-primary text-primary-foreground shadow-elegant">
                <s.icon className="h-6 w-6" />
                <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-gold text-gold-foreground text-[10px] font-bold flex items-center justify-center">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
