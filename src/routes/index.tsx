import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Star, Phone, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { TrustStrip } from "@/components/site/TrustStrip";
import { ServiceGrid } from "@/components/site/ServiceGrid";
import { FeaturedProjects } from "@/components/site/FeaturedProjects";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Process } from "@/components/site/Process";
import { Reviews } from "@/components/site/Reviews";
import { FAQ } from "@/components/site/FAQ";
import { FinalCTA } from "@/components/site/FinalCTA";
import { SITE } from "@/lib/site/config";
import hero from "@/assets/hero-home.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Landscapes By Tyler — Professional Lawn Care & Yard Services" },
      {
        name: "description",
        content:
          "Reliable, affordable lawn mowing, edging, trimming, weed removal, yard cleanups and lawn maintenance. Free estimates available. Local, professional lawn care you can trust.",
      },
      { property: "og:title", content: "Landscapes By Tyler — Professional Lawn Care" },
      { property: "og:description", content: "Reliable lawn care, yard cleanups and maintenance. Free estimates." },
      { property: "og:url", content: "/" },
      { property: "og:image", content: "/logo/logo.png" },
      { name: "twitter:image", content: "/logo/logo.png" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative isolate min-h-[88vh] md:min-h-screen flex items-center pt-28 md:pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={hero}
            alt="Beautifully striped lawn at a luxury suburban home at golden hour"
            className="h-full w-full object-cover"
            fetchPriority="high"
            width={1920}
            height={1280}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.18_0.02_150)]/85 via-[oklch(0.18_0.02_150)]/55 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
        </div>

        <div className="container-px relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 glass-dark text-primary-glow text-xs uppercase tracking-[0.22em] font-semibold px-4 py-1.5 rounded-full">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-glow animate-pulse" />
              Free Estimates Available
            </span>
            <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.02]">
              Professional Lawn Care{" "}
              <span className="text-gradient">You Can Depend On.</span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-white/85 max-w-2xl leading-relaxed">
              Reliable lawn mowing, edging, trimming, weed removal, yard cleanups and lawn
              maintenance — delivered with attention to detail and pride in every job.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 gradient-primary text-primary-foreground px-7 py-4 rounded-full text-sm md:text-base font-semibold shadow-elegant hover:shadow-glow transition-all hover:-translate-y-0.5"
              >
                Get Free Estimate <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center gap-2 glass-dark text-white px-7 py-4 rounded-full text-sm md:text-base font-semibold hover:bg-white/10 transition-colors"
              >
                <Phone className="h-4 w-4" /> Call {SITE.phone}
              </a>
            </div>

            <div className="mt-10 flex items-center gap-5 text-white/85">
              <div className="flex -space-x-2">
                {["S","M","J","D","E"].map((c, i) => (
                  <div key={i} className="h-9 w-9 rounded-full ring-2 ring-[oklch(0.18_0.02_150)] gradient-primary flex items-center justify-center text-xs font-bold text-primary-foreground">
                    {c}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-gold text-gold" />)}
                </div>
                <p className="text-xs text-white/75 mt-0.5">Loved by local homeowners</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <TrustStrip />
      <ServiceGrid />
      <FeaturedProjects />
      <WhyChooseUs />
      <Process />
      <Reviews count={6} />
      <FAQ />
      <FinalCTA />
    </SiteLayout>
  );
}
