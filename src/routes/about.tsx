import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Leaf, Target, Heart, ShieldCheck, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Process } from "@/components/site/Process";
import { Reviews } from "@/components/site/Reviews";
import { FAQ } from "@/components/site/FAQ";
import { FinalCTA } from "@/components/site/FinalCTA";
import about from "@/assets/about-hero.jpg";
import mowing from "@/assets/service-mowing.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Tyler — Local Lawn Care You Can Trust | Landscapes By Tyler" },
      {
        name: "description",
        content:
          "Meet Tyler. Hardworking, friendly and detail-obsessed — Landscapes By Tyler delivers professional lawn care with the personal service only a local business provides.",
      },
      { property: "og:title", content: "About — Landscapes By Tyler" },
      { property: "og:description", content: "Meet Tyler. Local, professional lawn care delivered with pride." },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: "/logo/logo.png" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const VALUES = [
  { icon: ShieldCheck, title: "Reliability", desc: "Showing up when promised — every single time." },
  { icon: Heart, title: "Pride In Work", desc: "We treat your lawn like it’s our own front yard." },
  { icon: Target, title: "Attention To Detail", desc: "Clean stripes, sharp edges, no missed corners." },
  { icon: Leaf, title: "Honest Service", desc: "Straightforward pricing and zero high-pressure tactics." },
];

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About Landscapes By Tyler"
        title={<>A local lawn care company built on <span className="text-gradient">pride and reliability.</span></>}
        description="Tyler started Landscapes By Tyler with a simple promise: deliver lawn care that looks better, lasts longer, and shows up when it’s supposed to."
        image={about}
        breadcrumb={[{ label: "Home", to: "/" }, { label: "About" }]}
      />

      {/* Story */}
      <section className="py-20 md:py-28">
        <div className="container-px grid gap-10 lg:grid-cols-2 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
            <img src={mowing} alt="Freshly striped lawn" loading="lazy" width={1280} height={896} className="rounded-3xl shadow-elegant object-cover aspect-[4/5] w-full" />
            <div className="absolute -bottom-6 -right-6 hidden md:block glass rounded-2xl p-5 shadow-elegant max-w-[220px]">
              <div className="text-3xl font-display font-bold text-primary">100%</div>
              <p className="mt-1 text-xs text-muted-foreground">Customer satisfaction is the standard for every job we take on.</p>
            </div>
          </motion.div>
          <div>
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs uppercase tracking-[0.2em] font-semibold px-4 py-1.5 rounded-full">Our Story</span>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
              Lawn care done the way it should be.
            </h2>
            <div className="mt-6 space-y-5 text-muted-foreground md:text-lg leading-relaxed">
              <p>
                Landscapes By Tyler was started with one goal — give local homeowners a lawn care
                service they can actually rely on. No missed appointments, no rushed work, no surprises.
              </p>
              <p>
                Every job is treated like a personal one. Whether it’s a weekly mow, a full property
                cleanup or a recovery on a heavily overgrown yard, the same care, precision and pride
                go into the work from start to finish.
              </p>
              <p className="text-foreground font-medium">
                Friendly. Hardworking. Detail-obsessed. That’s the standard — and it’s the reason
                customers stay with us, season after season.
              </p>
            </div>
            <Link to="/contact" className="mt-7 inline-flex items-center gap-2 gradient-primary text-primary-foreground px-6 py-3.5 rounded-full text-sm font-semibold shadow-elegant hover:shadow-glow transition-all">
              Work With Tyler <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-accent/30">
        <div className="container-px">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs uppercase tracking-[0.2em] font-semibold px-4 py-1.5 rounded-full">Our Values</span>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold text-foreground">What we stand for</h2>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.06 }} className="bg-card rounded-2xl p-7 border border-border/60 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all">
                <div className="inline-flex h-12 w-12 rounded-xl gradient-primary text-primary-foreground items-center justify-center shadow-elegant">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <Process />
      <Reviews count={6} title="Trusted by local homeowners" />
      <FAQ />
      <FinalCTA />
    </SiteLayout>
  );
}
