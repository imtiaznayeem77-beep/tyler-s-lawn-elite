import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { ServiceGrid } from "@/components/site/ServiceGrid";
import { Process } from "@/components/site/Process";
import { Reviews } from "@/components/site/Reviews";
import { FAQ } from "@/components/site/FAQ";
import { FinalCTA } from "@/components/site/FinalCTA";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import hero from "@/assets/service-mowing.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Lawn Care Services — Mowing, Cleanups & Maintenance | Landscapes By Tyler" },
      {
        name: "description",
        content:
          "Full-service residential lawn care: mowing, edging, trimming, weed removal, yard cleanups, fall cleanups and ongoing lawn maintenance. Free estimates available.",
      },
      { property: "og:title", content: "Lawn Care Services — Landscapes By Tyler" },
      { property: "og:description", content: "Complete residential lawn care services. Free estimates available." },
      { property: "og:url", content: "/services" },
      { property: "og:image", content: "/logo/logo.png" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Our Services"
        title={<>Complete lawn care, <span className="text-gradient">from mow to maintenance.</span></>}
        description="Whether your yard needs a weekly mow, a one-time cleanup, or a full recovery from months of overgrowth — every service is delivered with the same care and detail."
        image={hero}
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Services" }]}
      />
      <ServiceGrid />
      <WhyChooseUs />
      <Process />
      <Reviews count={6} />
      <FAQ />
      <FinalCTA />
    </SiteLayout>
  );
}
