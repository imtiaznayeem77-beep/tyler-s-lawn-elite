import { Phone } from "lucide-react";
import { SITE } from "@/lib/site/config";

export function FloatingCall() {
  return (
    <a
      href={SITE.phoneHref}
      aria-label={`Call ${SITE.name}`}
      className="fixed bottom-5 right-5 z-40 md:bottom-7 md:right-7 group"
    >
      <span className="absolute inset-0 rounded-full animate-pulse-ring" />
      <span className="relative flex items-center gap-2.5 gradient-primary text-primary-foreground pl-4 pr-5 py-3.5 rounded-full shadow-elegant hover:shadow-glow transition-all hover:-translate-y-0.5">
        <span className="h-9 w-9 -ml-1 rounded-full bg-white/15 flex items-center justify-center">
          <Phone className="h-4 w-4" />
        </span>
        <span className="text-sm font-semibold tracking-wide">Call Now</span>
      </span>
    </a>
  );
}
