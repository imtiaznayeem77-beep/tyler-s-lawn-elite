import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Instagram, Facebook, Leaf } from "lucide-react";
import { SITE } from "@/lib/site/config";
import logo from "/logo/logo.png?url";

export function Footer() {
  return (
    <footer className="relative bg-[oklch(0.18_0.02_150)] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute -top-32 -left-20 h-96 w-96 rounded-full bg-primary-glow/20 blur-3xl" />
        <div className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-primary-light/20 blur-3xl" />
      </div>

      <div className="relative container-px py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="Landscapes By Tyler" width={48} height={48} className="h-12 w-12 rounded-full ring-1 ring-white/20" />
              <div>
                <div className="font-display text-lg font-bold">Landscapes By Tyler</div>
                <div className="text-xs uppercase tracking-[0.2em] text-primary-glow">Professional Lawn Care</div>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-white/70 max-w-md">
              Reliable lawn mowing, edging, trimming, weed removal, yard cleanups and full
              lawn maintenance — delivered with pride in every job. Free estimates available.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 gradient-primary text-primary-foreground px-5 py-3 rounded-full text-sm font-semibold shadow-elegant hover:shadow-glow transition-all"
            >
              <Leaf className="h-4 w-4" /> Get a Free Estimate
            </Link>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-widest text-primary-glow">Explore</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-white/80">
              {[
                ["/", "Home"],
                ["/about", "About"],
                ["/services", "All Services"],
                ["/gallery", "Gallery"],
                ["/reviews", "Reviews"],
                ["/contact", "Contact"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="hover:text-primary-glow transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-widest text-primary-glow">Services</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-white/80">
              <li><Link to="/lawn-mowing" className="hover:text-primary-glow">Lawn Mowing</Link></li>
              <li><Link to="/lawn-maintenance" className="hover:text-primary-glow">Lawn Maintenance</Link></li>
              <li><Link to="/yard-cleanup" className="hover:text-primary-glow">Yard Cleanup</Link></li>
              <li><Link to="/services" className="hover:text-primary-glow">Edging & Trimming</Link></li>
              <li><Link to="/services" className="hover:text-primary-glow">Weed Removal</Link></li>
              <li><Link to="/services" className="hover:text-primary-glow">Fall Cleanups</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-widest text-primary-glow">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 text-primary-glow" />
                <a href={SITE.phoneHref} className="hover:text-primary-glow">{SITE.phone}</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 text-primary-glow" />
                <a href={`mailto:${SITE.email}`} className="hover:text-primary-glow break-all">{SITE.email}</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-primary-glow" />
                <span>{SITE.serviceArea}</span>
              </li>
            </ul>
            <div className="mt-5 flex gap-2">
              <a href={SITE.social.instagram} target="_blank" rel="noopener" aria-label="Instagram" className="h-10 w-10 rounded-full glass-dark flex items-center justify-center hover:bg-primary-glow/20 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href={SITE.social.facebook} aria-label="Facebook" className="h-10 w-10 rounded-full glass-dark flex items-center justify-center hover:bg-primary-glow/20 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between text-xs text-white/60">
          <p>© {new Date().getFullYear()} Landscapes By Tyler. All rights reserved.</p>
          <p>
            Website Designed & Developed by{" "}
            <a href={SITE.designer.url} target="_blank" rel="noopener" className="text-primary-glow hover:text-white">
              {SITE.designer.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
