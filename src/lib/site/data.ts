import mowing from "@/assets/service-mowing.jpg";
import edging from "@/assets/service-edging.jpg";
import trimming from "@/assets/service-trimming.jpg";
import weeds from "@/assets/service-weeds.jpg";
import cleanup from "@/assets/service-cleanup.jpg";
import fall from "@/assets/service-fall.jpg";
import maintenance from "@/assets/service-maintenance.jpg";
import type { ServiceCard } from "./config";

export const SERVICES: ServiceCard[] = [
  {
    slug: "lawn-mowing",
    title: "Lawn Mowing",
    short:
      "Crisp, evenly cut lawns with clean stripes — professional mowing on a schedule that keeps your grass healthy.",
    image: mowing,
  },
  {
    slug: "lawn-edging",
    title: "Lawn Edging",
    short:
      "Sharp, defined edges along driveways, walkways and garden beds for a finished, manicured look.",
    image: edging,
  },
  {
    slug: "trimming",
    title: "Trimming",
    short:
      "Detail trimming along fences, foundations and obstacles for a clean, polished finish in every corner.",
    image: trimming,
  },
  {
    slug: "weed-removal",
    title: "Weed Removal",
    short:
      "Thorough weed pulling and treatment in lawn, beds and walkways — restoring a clean, healthy property.",
    image: weeds,
  },
  {
    slug: "yard-cleanup",
    title: "Yard Cleanup",
    short:
      "Full-property cleanups for overgrown yards, debris, leaves and brush — restoring your lawn to its best.",
    image: cleanup,
  },
  {
    slug: "fall-cleanup",
    title: "Fall Cleanup",
    short:
      "Seasonal leaf removal, blowing and lawn prep so your property stays neat and healthy through winter.",
    image: fall,
  },
  {
    slug: "lawn-maintenance",
    title: "Lawn Maintenance",
    short:
      "Weekly and bi-weekly maintenance programs so your lawn always looks its best — without the hassle.",
    image: maintenance,
  },
];

export const REVIEWS = [
  {
    name: "Sarah M.",
    location: "Local Homeowner",
    rating: 5,
    text:
      "Tyler is incredibly reliable and our lawn has never looked better. Clean stripes, sharp edges, and he takes real pride in his work. Highly recommend!",
  },
  {
    name: "Mike R.",
    location: "Local Homeowner",
    rating: 5,
    text:
      "Came out the same week for a free estimate and gave us a fair price. The yard was completely overgrown and now it looks brand new. Top-tier service.",
  },
  {
    name: "Jessica L.",
    location: "Local Homeowner",
    rating: 5,
    text:
      "We use Tyler for weekly maintenance. He’s on time, friendly, and detail-oriented. The edging alone makes the whole property look professional.",
  },
  {
    name: "David K.",
    location: "Local Homeowner",
    rating: 5,
    text:
      "Fast response, honest pricing, and outstanding results. Tyler handled a massive fall cleanup for us in a single afternoon. Worth every dollar.",
  },
  {
    name: "Emily T.",
    location: "Local Homeowner",
    rating: 5,
    text:
      "He treats your lawn like it’s his own. The attention to detail around the flower beds and fence line is something other companies skipped completely.",
  },
  {
    name: "Brandon S.",
    location: "Local Homeowner",
    rating: 5,
    text:
      "Hired Tyler after another company kept canceling. Total game changer. Professional equipment, professional results, and a great guy to work with.",
  },
  {
    name: "Amanda P.",
    location: "Local Homeowner",
    rating: 5,
    text:
      "From the first quote to the finished job, the experience was smooth. Yard cleanup turned our backyard from jungle to perfect in one visit.",
  },
  {
    name: "Chris H.",
    location: "Local Homeowner",
    rating: 5,
    text:
      "Honest, affordable, and the lawn looks like a golf course. I’ve already referred two neighbors.",
  },
];

export interface ProjectStory {
  slug: string;
  title: string;
  description: string;
  services: string[];
  images: string[];
}

export const PROJECTS: ProjectStory[] = [
  {
    slug: "complete-yard-recovery",
    title: "Complete Yard Recovery",
    description:
      "A heavily overgrown front and backyard filled with tall grass, weeds and overgrown bushes was completely restored through a full cleanup and lawn recovery service.",
    services: ["Overgrown Yard Cleanup", "Weed Removal", "Bush Trimming", "Lawn Recovery"],
    images: [
      "/projects/recovery-1.jpg",
      "/projects/recovery-2.jpg",
      "/projects/recovery-3.jpg",
    ],
  },
  {
    slug: "seasonal-fall-cleanup",
    title: "Seasonal Fall Cleanup",
    description:
      "A complete seasonal cleanup including mowing, edging, trimming, blowing and weed removal to leave the property looking neat, healthy and professionally maintained.",
    services: ["Mowing", "Edging", "Trimming", "Blowing", "Weed Removal"],
    images: [
      "/projects/fall-1.jpg",
      "/projects/fall-2.jpg",
      "/projects/fall-3.jpg",
      "/projects/fall-4.jpg",
    ],
  },
];

export const FAQS = [
  {
    q: "Do you offer free estimates?",
    a: "Yes — every estimate is completely free and no-obligation. Reach out by phone or through our contact form and we’ll get back to you fast.",
  },
  {
    q: "What lawn care services do you provide?",
    a: "We provide professional lawn mowing, edging, trimming, weed removal, yard cleanups, fall cleanups, overgrown property recovery, and ongoing lawn maintenance.",
  },
  {
    q: "How often should my lawn be mowed?",
    a: "Most residential lawns benefit from weekly mowing during the growing season and bi-weekly mowing in cooler months. We’ll recommend a schedule that fits your lawn.",
  },
  {
    q: "Do you handle overgrown properties?",
    a: "Absolutely. Overgrown yard recovery is one of our specialties — we’ll bring it back to a clean, healthy state in as little as a single visit.",
  },
  {
    q: "Do you provide seasonal cleanups?",
    a: "Yes. Spring and fall cleanups are available and we recommend booking early as they fill up quickly each season.",
  },
  {
    q: "What areas do you serve?",
    a: "We proudly serve residential properties throughout the local area. Contact us with your address and we’ll confirm service availability.",
  },
  {
    q: "Do I need to be home during service?",
    a: "No, you don’t need to be home. As long as we have access to the property, we’ll take care of everything and leave the gate exactly as we found it.",
  },
  {
    q: "How do I request a quote?",
    a: "Click ‘Get Free Estimate’ at the top of the page or call us directly. We typically respond the same day with a fair, honest price.",
  },
];
