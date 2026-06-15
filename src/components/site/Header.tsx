import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Leaf } from "lucide-react";
import { SITE } from "@/lib/site/config";
import logo from "/logo/logo.png?url";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/lawn-mowing", label: "Lawn Mowing" },
  { to: "/yard-cleanup", label: "Yard Cleanup" },
  { to: "/lawn-maintenance", label: "Maintenance" },
  { to: "/gallery", label: "Gallery" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60 shadow-soft"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="container-px flex h-16 md:h-20 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2.5 group">
          <img
            src={logo}
            alt="Landscapes By Tyler"
            width={44}
            height={44}
            className="h-10 w-10 md:h-11 md:w-11 rounded-full object-cover ring-1 ring-border/60"
          />
          <span className="flex flex-col leading-tight">
            <span className={["font-display font-bold text-base md:text-lg tracking-tight", scrolled ? "text-foreground" : "text-white drop-shadow"].join(" ")}>
              Landscapes By Tyler
            </span>
            <span className={["text-[10px] uppercase tracking-[0.18em] font-semibold", scrolled ? "text-primary" : "text-primary-glow drop-shadow"].join(" ")}>
              Lawn Care · Landscapes
            </span>
          </span>
        </Link>

        <nav className="hidden xl:flex items-center gap-1">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className={[
                "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                scrolled
                  ? "text-foreground/80 hover:text-primary hover:bg-primary/5"
                  : "text-white/90 hover:text-white hover:bg-white/10",
              ].join(" ")}
              activeProps={{
                className: scrolled
                  ? "px-3 py-2 rounded-md text-sm font-semibold text-primary bg-primary/10"
                  : "px-3 py-2 rounded-md text-sm font-semibold text-white bg-white/15",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a
            href={SITE.phoneHref}
            className={[
              "inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-sm font-semibold transition-colors",
              scrolled ? "text-primary hover:bg-primary/10" : "text-white hover:bg-white/10",
            ].join(" ")}
          >
            <Phone className="h-4 w-4" />
            <span className="hidden lg:inline">{SITE.phone}</span>
            <span className="lg:hidden">Call</span>
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 gradient-primary text-primary-foreground px-4 py-2.5 rounded-full text-sm font-semibold shadow-elegant hover:shadow-glow transition-all hover:-translate-y-0.5"
          >
            <Leaf className="h-4 w-4" />
            Get Free Estimate
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Open menu"
          className={[
            "xl:hidden inline-flex items-center justify-center h-11 w-11 rounded-full transition-colors",
            scrolled ? "bg-primary/10 text-primary" : "bg-white/15 text-white backdrop-blur",
          ].join(" ")}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="xl:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl"
          >
            <div className="container-px py-4 flex flex-col gap-1">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: item.to === "/" }}
                  className="px-3 py-3 rounded-lg text-base font-medium text-foreground hover:bg-primary/5 hover:text-primary"
                  activeProps={{ className: "px-3 py-3 rounded-lg text-base font-semibold text-primary bg-primary/10" }}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-3 grid grid-cols-2 gap-2">
                <a
                  href={SITE.phoneHref}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full text-sm font-semibold border border-primary/30 text-primary"
                >
                  <Phone className="h-4 w-4" /> Call Now
                </a>
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full text-sm font-semibold gradient-primary text-primary-foreground"
                >
                  Free Estimate
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
