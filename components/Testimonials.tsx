"use client";

import { ClientsSection, Stat, Testimonial } from "@/components/ui/testimonial-card";

const statsData: Stat[] = [
  { value: "150+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "4.9", label: "Average Rating" },
];

const testimonialsData: Testimonial[] = [
  {
    name: "Khalid Al-Mansoori",
    title: "CEO — Al-Mansoori Retail Group",
    quote:
      "One Smart Biz transformed our entire digital presence in under 3 months. The new platform drives 4x the lead volume of our previous site. Their financial modeling also gave us the clarity to greenlight our 6th location.",
    avatarSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=60",
    rating: 5.0,
  },
  {
    name: "Fatima Al-Rashidi",
    title: "Marketing Director — Lusail Development Co.",
    quote:
      "The brand film they produced for Lusail reached 2.1 million organic views — no paid media. Their VFX work is genuinely world-class. We get compliments on it from international clients constantly.",
    avatarSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&auto=format&fit=crop&q=60",
    rating: 4.9,
  },
  {
    name: "James Okafor",
    title: "Founder — NomadEats",
    quote:
      "We needed an app built fast. OSB delivered a React Native product with GPS, payments, and push notifications in 8 weeks flat. 50,000 installs in month one speaks for itself. These guys are the real deal.",
    avatarSrc: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&auto=format&fit=crop&q=60",
    rating: 4.8,
  },
  {
    name: "Rania Habib",
    title: "CFO — Horizon Logistics Qatar",
    quote:
      "Their Financial Hub team dissected our cost structure and found inefficiencies we'd missed for years. Combined with the new analytics dashboard, we cut operating costs by 18% in Q1. Exceptional ROI.",
    avatarSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&auto=format&fit=crop&q=60",
    rating: 4.9,
  },
];

export default function Testimonials() {
  return (
    <div id="testimonials">
      <ClientsSection
        tagLabel="Client Stories"
        title="Trusted by Industry Leaders"
        description="Our clients across Qatar and the GCC trust us to deliver world-class digital solutions that drive measurable growth and lasting impact."
        stats={statsData}
        testimonials={testimonialsData}
        primaryActionLabel="Start Your Project"
        secondaryActionLabel="View All Projects"
      />
    </div>
  );
}
