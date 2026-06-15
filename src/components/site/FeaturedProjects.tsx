import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { PROJECTS } from "@/lib/site/data";

export function FeaturedProjects() {
  const [lightbox, setLightbox] = useState<{ project: number; index: number } | null>(null);

  const close = () => setLightbox(null);
  const move = (dir: 1 | -1) => {
    if (!lightbox) return;
    const imgs = PROJECTS[lightbox.project].images;
    setLightbox({ ...lightbox, index: (lightbox.index + dir + imgs.length) % imgs.length });
  };

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-accent/30 to-background">
      <div className="container-px">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs uppercase tracking-[0.2em] font-semibold px-4 py-1.5 rounded-full">
            Featured Projects
          </span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
            Real properties. <span className="text-gradient">Real results.</span>
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            From overgrown jungle to manicured masterpiece — see what professional lawn care looks like up close.
          </p>
        </div>

        <div className="mt-12 space-y-16 md:space-y-24">
          {PROJECTS.map((p, pi) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={[
                "grid gap-8 lg:gap-12 items-center",
                pi % 2 === 0 ? "lg:grid-cols-[1.2fr_1fr]" : "lg:grid-cols-[1fr_1.2fr] lg:[&>div:first-child]:order-2",
              ].join(" ")}
            >
              <div className="grid grid-cols-2 gap-3">
                {p.images.slice(0, 4).map((src, i) => (
                  <button
                    key={src}
                    onClick={() => setLightbox({ project: pi, index: i })}
                    className={[
                      "group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-elegant transition-all",
                      i === 0 ? "col-span-2 aspect-[16/10]" : "aspect-square",
                    ].join(" ")}
                  >
                    <img
                      src={src}
                      alt={`${p.title} photo ${i + 1}`}
                      loading="lazy"
                      width={1200}
                      height={900}
                      className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>

              <div>
                <span className="text-xs uppercase tracking-[0.22em] font-semibold text-primary">Project · {String(pi + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-display text-3xl md:text-4xl font-bold text-foreground leading-tight">{p.title}</h3>
                <p className="mt-4 text-muted-foreground md:text-lg leading-relaxed">{p.description}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {p.services.map((s) => (
                    <li key={s} className="text-xs font-medium px-3 py-1.5 rounded-full bg-primary/10 text-primary">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={close}
          >
            <button onClick={close} className="absolute top-5 right-5 h-11 w-11 rounded-full glass-dark text-white flex items-center justify-center" aria-label="Close">
              <X className="h-5 w-5" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); move(-1); }} className="absolute left-3 md:left-6 h-11 w-11 rounded-full glass-dark text-white flex items-center justify-center" aria-label="Previous">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); move(1); }} className="absolute right-3 md:right-6 h-11 w-11 rounded-full glass-dark text-white flex items-center justify-center" aria-label="Next">
              <ChevronRight className="h-5 w-5" />
            </button>
            <motion.img
              key={lightbox.project + "-" + lightbox.index}
              initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
              src={PROJECTS[lightbox.project].images[lightbox.index]}
              alt=""
              className="max-h-[88vh] max-w-[92vw] object-contain rounded-xl shadow-elegant"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
