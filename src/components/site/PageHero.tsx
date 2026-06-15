import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ChevronRight, Phone } from "lucide-react";
import { SITE } from "@/lib/site/config";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  breadcrumb,
  showCta = true,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  image: string;
  breadcrumb?: { label: string; to?: string }[];
  showCta?: boolean;
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden pt-24 md:pt-28 pb-16 md:pb-24">
      <div className="absolute inset-0 -z-10">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.18_0.02_150)]/80 via-[oklch(0.18_0.02_150)]/55 to-background" />
      </div>

      <div className="container-px relative">
        {breadcrumb && (
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-white/70">
            {breadcrumb.map((b, i) => (
              <span key={i} className="flex items-center gap-2">
                {b.to ? (
                  <Link to={b.to} className="hover:text-white">{b.label}</Link>
                ) : (
                  <span className="text-white">{b.label}</span>
                )}
                {i < breadcrumb.length - 1 && <ChevronRight className="h-3 w-3 opacity-50" />}
              </span>
            ))}
          </nav>
        )}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          {eyebrow && (
            <span className="inline-flex items-center gap-2 glass-dark text-primary-glow text-xs uppercase tracking-[0.2em] font-semibold px-4 py-1.5 rounded-full">
              {eyebrow}
            </span>
          )}
          <h1 className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05]">
            {title}
          </h1>
          {description && (
            <p className="mt-6 text-base md:text-lg text-white/85 max-w-2xl leading-relaxed">
              {description}
            </p>
          )}
          {showCta && (
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
          )}
          {children}
        </motion.div>
      </div>
    </section>
  );
}
