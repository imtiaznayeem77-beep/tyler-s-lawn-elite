import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { Phone, Mail, MapPin, Send, Check, Loader2 } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reviews } from "@/components/site/Reviews";
import { FAQ } from "@/components/site/FAQ";
import { SITE } from "@/lib/site/config";
import hero from "@/assets/cta-banner.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Free Lawn Care Estimate | Landscapes By Tyler" },
      { name: "description", content: "Request a free lawn care estimate. Call or send us a message — we typically respond same day with honest, fair pricing." },
      { property: "og:title", content: "Contact — Landscapes By Tyler" },
      { property: "og:description", content: "Request a free lawn care estimate." },
      { property: "og:url", content: "/contact" },
      { property: "og:image", content: "/logo/logo.png" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Page,
});

const SERVICES = [
  "Lawn Mowing", "Lawn Edging", "Trimming", "Weed Removal",
  "Yard Cleanup", "Fall Cleanup", "Lawn Maintenance", "Other",
];

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().min(7, "Please enter your phone").max(30),
  service: z.string().min(1),
  address: z.string().trim().min(2, "Please enter a property address").max(200),
  message: z.string().trim().max(1000).optional(),
});

function Page() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("sending");
    try {
      const res = await fetch(SITE.formspreeEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fd,
      });
      setStatus(res.ok ? "success" : "error");
      if (res.ok) e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Get In Touch"
        title={<>Request your <span className="text-gradient">free estimate.</span></>}
        description="Tell us a little about your property and we’ll get back to you fast — usually the same day — with honest pricing."
        image={hero}
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Contact" }]}
      />

      <section className="py-20 md:py-28">
        <div className="container-px grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-card rounded-3xl border border-border/60 shadow-elegant p-7 md:p-10">
            <h2 className="font-display text-2xl md:text-3xl font-bold">Send us a message</h2>
            <p className="mt-2 text-sm text-muted-foreground">All fields except message are required.</p>

            {status === "success" ? (
              <div className="mt-8 rounded-2xl bg-primary/10 border border-primary/30 p-6 text-center">
                <div className="inline-flex h-12 w-12 rounded-full gradient-primary text-primary-foreground items-center justify-center"><Check className="h-6 w-6" /></div>
                <h3 className="mt-4 font-display text-xl font-semibold">Thank you for reaching out.</h3>
                <p className="mt-2 text-sm text-muted-foreground">We'll contact you shortly with your free estimate.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-7 grid gap-4 sm:grid-cols-2">
                <Field label="Full Name" name="name" error={errors.name} />
                <Field label="Email Address" name="email" type="email" error={errors.email} />
                <Field label="Phone Number" name="phone" type="tel" error={errors.phone} />
                <Field label="Property Address" name="address" error={errors.address} />
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium mb-1.5">Service Needed</label>
                  <select name="service" required className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30">
                    {SERVICES.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium mb-1.5">Message <span className="text-muted-foreground text-xs">(optional)</span></label>
                  <textarea name="message" rows={4} maxLength={1000} className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" placeholder="Tell us a bit about your property…" />
                </div>
                {status === "error" && <p className="sm:col-span-2 text-sm text-destructive">Something went wrong sending your message. Please try again or call us directly.</p>}
                <button type="submit" disabled={status === "sending"} className="sm:col-span-2 inline-flex items-center justify-center gap-2 gradient-primary text-primary-foreground px-6 py-4 rounded-full text-sm font-semibold shadow-elegant hover:shadow-glow transition-all disabled:opacity-70">
                  {status === "sending" ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</> : <><Send className="h-4 w-4" /> Request Free Estimate</>}
                </button>
              </form>
            )}
          </motion.div>

          <div className="space-y-5">
            <InfoCard icon={Phone} title="Call Or Text" value={SITE.phone} href={SITE.phoneHref} note="We typically reply the same day." />
            <InfoCard icon={Mail} title="Email" value={SITE.email} href={`mailto:${SITE.email}`} note="For quotes and questions." />
            <InfoCard icon={MapPin} title="Service Area" value={SITE.serviceArea} note={SITE.hours} />
            <div className="rounded-3xl overflow-hidden border border-border/60 shadow-soft aspect-[4/3] bg-accent/40 flex items-center justify-center">
              <div className="text-center p-6">
                <MapPin className="h-8 w-8 mx-auto text-primary" />
                <p className="mt-3 font-display font-semibold">Local Service Area Map</p>
                <p className="mt-1 text-xs text-muted-foreground">Google Maps embed available on request.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Reviews count={3} />
      <FAQ />
    </SiteLayout>
  );
}

function Field({ label, name, type = "text", error }: { label: string; name: string; type?: string; error?: string }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1.5">{label}</label>
      <input type={type} name={name} required maxLength={255} className={["w-full rounded-xl border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30", error ? "border-destructive" : "border-input"].join(" ")} />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function InfoCard({ icon: Icon, title, value, href, note }: { icon: typeof Phone; title: string; value: string; href?: string; note?: string }) {
  const inner = (
    <div className="flex items-start gap-4 p-6 bg-card rounded-2xl border border-border/60 shadow-soft hover:shadow-elegant hover:-translate-y-0.5 transition-all">
      <div className="h-12 w-12 rounded-xl gradient-primary text-primary-foreground flex items-center justify-center shrink-0"><Icon className="h-5 w-5" /></div>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-widest font-semibold text-primary">{title}</div>
        <div className="mt-1 font-display font-semibold text-foreground break-words">{value}</div>
        {note && <div className="mt-1 text-xs text-muted-foreground">{note}</div>}
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}
