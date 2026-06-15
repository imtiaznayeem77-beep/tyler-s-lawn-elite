import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { SITE } from "@/lib/site/config";
import banner from "@/assets/cta-banner.jpg";

export function FinalCTA({
  title = "Ready For A Better Looking Lawn?",
  description = "Get a free, no-obligation estimate today — fast response, fair pricing, and lawn care you can rely on week after week.",
}: { title?: string; description?: string }) {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="container-px">
        <div className="relative overflow-hidden rounded-3xl shadow-elegant">
          <img src={banner} alt="" loading="lazy" width={1920} height={900} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.20_0.03_150)]/95 via-[oklch(0.20_0.03_150)]/80 to-[oklch(0.20_0.03_150)]/40" />
          <div className="relative px-6 sm:px-12 py-16 md:py-24 max-w-2xl">
            <span className="inline-flex items-center gap-2 glass-dark text-primary-glow text-xs uppercase tracking-[0.22em] font-semibold px-4 py-1.5 rounded-full">
              Free Estimates
            </span>
            <h2 className="mt-5 font-display text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05]">
              {title}
            </h2>
            <p className="mt-5 text-white/85 md:text-lg max-w-xl">{description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 gradient-primary text-primary-foreground px-6 py-3.5 rounded-full text-sm font-semibold shadow-elegant hover:shadow-glow transition-all hover:-translate-y-0.5"
              >
                Get Free Estimate
              </Link>
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center gap-2 glass-dark text-white px-6 py-3.5 rounded-full text-sm font-semibold hover:bg-white/10 transition-colors"
              >
                <Phone className="h-4 w-4" /> Call {SITE.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
