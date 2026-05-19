import type { Metadata } from "next";

export type ServiceSlug =
  | "web-development"
  | "multimedia-vfx"
  | "financial-services"
  | "visa-assistance"
  | "business-formation";

export type ServiceStat = {
  value: string;
  label: string;
};

export type ServiceItem = {
  title: string;
  description: string;
};

export type ServicePackage = {
  name: string;
  price: string;
  detail: string;
};

export type ServiceData = {
  slug: ServiceSlug;
  number: string;
  title: string;
  eyebrow: string;
  href: string;
  navDescription: string;
  shortDescription: string;
  description: string;
  outcome: string;
  image: string;
  accent: string;
  secondaryAccent: string;
  metadata: {
    title: string;
    description: string;
    keywords: string;
  };
  stats: ServiceStat[];
  valueProps: ServiceItem[];
  process: ServiceItem[];
  packages: ServicePackage[];
  proofPoints: string[];
  tools: string[];
  faq: ServiceItem[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
  primaryCta: string;
};

export const serviceCatalog: ServiceData[] = [
  {
    slug: "web-development",
    number: "01",
    title: "Web & App Development",
    eyebrow: "High-performance engineering",
    href: "/services/web-development",
    navDescription: "Sites, apps, and digital platforms",
    shortDescription:
      "Premium websites, portals, and mobile applications engineered for speed, SEO, and conversion.",
    description:
      "We design and build fast, scalable digital products for Qatar and GCC businesses: marketing sites, booking platforms, e-commerce, dashboards, and mobile apps with a clear path from launch to growth.",
    outcome:
      "Launch a polished digital platform that feels premium on day one and is structured to scale with your operations.",
    image: "/projects/studiox.png",
    accent: "#00ff88",
    secondaryAccent: "#00d4ff",
    metadata: {
      title:
        "Web Development in Doha, Qatar | React, Next.js & Mobile Apps | One Smart Biz",
      description:
        "Professional web development in Doha. React, Next.js, TypeScript, and React Native. Sub-1.2s load times, 98/100 SEO scores. 150+ projects delivered across Qatar and the GCC.",
      keywords:
        "web development doha, website design qatar, react developer qatar, next.js doha, mobile app development qatar, web developer qatar",
    },
    stats: [
      { value: "<1.2s", label: "Avg load time" },
      { value: "98/100", label: "SEO score" },
      { value: "150+", label: "Projects delivered" },
      { value: "8-16w", label: "App delivery" },
    ],
    valueProps: [
      {
        title: "Conversion-first UX",
        description:
          "Information architecture, CTAs, and trust sections are planned before pixels so pages work as sales assets.",
      },
      {
        title: "Modern technical stack",
        description:
          "Next.js, React, TypeScript, Supabase, and API integrations built with maintainability in mind.",
      },
      {
        title: "Performance by default",
        description:
          "Core Web Vitals, responsive assets, structured metadata, and SEO foundations are part of the delivery.",
      },
      {
        title: "Operational features",
        description:
          "Booking flows, dashboards, payment gateways, CRM hooks, and admin tools built around your process.",
      },
    ],
    process: [
      {
        title: "Discovery and scope",
        description:
          "We map goals, users, content, integrations, and conversion points into a build-ready plan.",
      },
      {
        title: "Prototype and design",
        description:
          "You review polished layouts and key flows before development starts.",
      },
      {
        title: "Build and integrate",
        description:
          "We implement the site or app with CMS, database, payment, analytics, and automation as needed.",
      },
      {
        title: "Launch and optimize",
        description:
          "Final QA covers speed, SEO, responsiveness, analytics, and post-launch improvement priorities.",
      },
    ],
    packages: [
      {
        name: "Starter Landing Page",
        price: "QAR 750 - 1,500",
        detail: "Focused one-page website with responsive design, lead capture, and basic SEO.",
      },
      {
        name: "Business Website",
        price: "QAR 1,500 - 4,500",
        detail: "Multi-page responsive site with SEO foundations, analytics, and conversion sections.",
      },
      {
        name: "E-Commerce Website",
        price: "QAR 4,500 - 9,500",
        detail: "Product catalog, payments, order flows, and manageable store setup.",
      },
      {
        name: "Custom Web App",
        price: "QAR 9,500+",
        detail: "Dashboards, workflows, APIs, auth, and custom business logic scoped to your process.",
      },
    ],
    proofPoints: [
      "Next.js and React specialists",
      "SEO and analytics included",
      "Responsive QA across mobile, tablet, and desktop",
      "Clear handover and launch support",
    ],
    tools: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Node.js"],
    faq: [
      {
        title: "How long does a website take?",
        description:
          "A focused business website usually takes 2-4 weeks. Custom platforms and mobile apps typically take 8-16 weeks depending on integrations.",
      },
      {
        title: "Can you rebuild an existing website?",
        description:
          "Yes. We handle redesigns, migrations, SEO preservation, performance improvements, and modern stack upgrades.",
      },
    ],
    testimonial: {
      quote:
        "The new platform finally feels aligned with our brand. It is fast, clean, and built around actual lead quality.",
      author: "Operations Lead",
      role: "Qatar services company",
    },
    primaryCta: "Start Web Project",
  },
  {
    slug: "multimedia-vfx",
    number: "02",
    title: "Multimedia & VFX",
    eyebrow: "Visual storytelling",
    href: "/services/multimedia-vfx",
    navDescription: "Video, motion, and visual storytelling",
    shortDescription:
      "Cinematic content, motion graphics, and social-first campaigns built to win attention and trust.",
    description:
      "We create brand films, reels, product videos, motion graphics, and VFX-led stories that make complex offers memorable and help premium brands stand out across GCC digital channels.",
    outcome:
      "Turn your message into campaign-ready assets that look premium, explain quickly, and travel across platforms.",
    image: "/projects/artefakt.png",
    accent: "#ff00ff",
    secondaryAccent: "#00d4ff",
    metadata: {
      title:
        "Video Production & VFX in Qatar | Multimedia Services | One Smart Biz",
      description:
        "Professional video production, motion graphics, and VFX in Doha. +340% view rate increase. From brand films to social media reels - content that performs.",
      keywords:
        "video production qatar, VFX doha, motion graphics qatar, social media video doha, video production doha, multimedia qatar",
    },
    stats: [
      { value: "+340%", label: "Avg view rate" },
      { value: "+62%", label: "Brand lift" },
      { value: "2.1M", label: "Best organic reach" },
      { value: "7+", label: "Creative formats" },
    ],
    valueProps: [
      {
        title: "Campaign thinking",
        description:
          "We shape messaging, hooks, cuts, and deliverables around where each asset will be used.",
      },
      {
        title: "Premium production value",
        description:
          "Lighting, motion, editing rhythm, sound, color, and visual effects are treated as brand signals.",
      },
      {
        title: "Social-native edits",
        description:
          "Vertical reels, short-form cuts, captioned versions, and platform variants are planned upfront.",
      },
      {
        title: "Complex ideas made simple",
        description:
          "Motion graphics and explainers turn technical or financial messages into digestible stories.",
      },
    ],
    process: [
      {
        title: "Creative brief",
        description:
          "We define audience, message, references, platforms, and the business action the video should drive.",
      },
      {
        title: "Script and storyboard",
        description:
          "You review the structure, shot plan, and motion direction before production.",
      },
      {
        title: "Production and post",
        description:
          "Filming, design, editing, VFX, sound, and color are handled as one integrated workflow.",
      },
      {
        title: "Delivery pack",
        description:
          "We export campaign-ready formats for web, social, broadcast, presentations, and paid media.",
      },
    ],
    packages: [
      {
        name: "Social Reel",
        price: "QAR 500 - 2,000",
        detail: "15-60 second edit, captions, music, and platform-ready format.",
      },
      {
        name: "Product Video",
        price: "QAR 3,000 - 8,000",
        detail: "Scripted demo or explainer with polished edit and motion support.",
      },
      {
        name: "Brand Film",
        price: "QAR 10,000+",
        detail: "Cinematic story, direction, editing, motion graphics, and VFX.",
      },
    ],
    proofPoints: [
      "Short-form and long-form delivery",
      "Motion graphics and VFX capability",
      "Campaign-ready cutdowns",
      "Production planning for Qatar and GCC audiences",
    ],
    tools: [
      "After Effects",
      "DaVinci Resolve",
      "Premiere Pro",
      "Cinema 4D",
      "Blender",
      "Photoshop",
    ],
    faq: [
      {
        title: "Do you handle strategy or only production?",
        description:
          "Both. We can start with a campaign brief and produce the exact set of assets needed for launch.",
      },
      {
        title: "Can you produce social media versions?",
        description:
          "Yes. We deliver vertical, square, and wide edits with captions and hooks suited to each channel.",
      },
    ],
    testimonial: {
      quote:
        "The campaign looked like a regional brand launch, not a one-off video. The cutdowns were especially useful.",
      author: "Marketing Director",
      role: "Real estate and development group",
    },
    primaryCta: "Plan Video Campaign",
  },
  {
    slug: "financial-services",
    number: "03",
    title: "Financial Services",
    eyebrow: "Precision and compliance",
    href: "/services/financial-services",
    navDescription: "Audit, bookkeeping, tax, and automation",
    shortDescription:
      "Compliance-ready finance support, reporting, bookkeeping, and automation for Qatar businesses.",
    description:
      "We combine accounting discipline with automation thinking: audit preparation, financial statements, bookkeeping, tax filing support, reporting dashboards, and finance workflow improvement.",
    outcome:
      "Run cleaner books, reduce manual work, and make decisions from reliable financial information.",
    image: "/projects/qipco.png",
    accent: "#00d4ff",
    secondaryAccent: "#00ff88",
    metadata: {
      title:
        "Financial Services in Qatar | Audit, Bookkeeping & Tax Filing | One Smart Biz",
      description:
        "Comprehensive financial services for Qatar businesses. Audit, automation, bookkeeping, VAT compliance, and tax filing. 99% accuracy. QFC-compliant.",
      keywords:
        "financial services qatar, bookkeeping doha, audit qatar, tax filing qatar, VAT qatar, financial automation qatar",
    },
    stats: [
      { value: "99%", label: "Accuracy target" },
      { value: "-80%", label: "Processing time" },
      { value: "-92%", label: "Error reduction" },
      { value: "QFC", label: "Compliance-ready" },
    ],
    valueProps: [
      {
        title: "Audit-ready records",
        description:
          "We structure your financial documents, schedules, and ledgers so reporting is easier to defend.",
      },
      {
        title: "Month-end clarity",
        description:
          "Statements, reconciliations, and management reports are built for repeatable decision cycles.",
      },
      {
        title: "Automation mindset",
        description:
          "Manual invoice, expense, and reporting workflows are reviewed for practical automation opportunities.",
      },
      {
        title: "Qatar-focused support",
        description:
          "We work around local business realities, QFC/MOCI expectations, and executive reporting needs.",
      },
    ],
    process: [
      {
        title: "Finance review",
        description:
          "We audit the current workflow, source documents, responsibilities, and reporting gaps.",
      },
      {
        title: "Clean-up and structure",
        description:
          "Ledgers, categories, statements, and document trails are organized for accuracy.",
      },
      {
        title: "Reporting cadence",
        description:
          "We establish monthly, quarterly, or project-based reporting outputs for leadership.",
      },
      {
        title: "Automation roadmap",
        description:
          "You receive a practical plan for reducing manual work and improving control.",
      },
    ],
    packages: [
      {
        name: "Bookkeeping Support",
        price: "Monthly retainer",
        detail: "Transactions, reconciliations, vendor tracking, and monthly reports.",
      },
      {
        name: "Financial Statements",
        price: "Project based",
        detail: "P&L, balance sheet, cash flow, schedules, and management notes.",
      },
      {
        name: "Automation Review",
        price: "Assessment first",
        detail: "Workflow analysis, tool recommendations, and dashboard planning.",
      },
    ],
    proofPoints: [
      "Reporting built for management review",
      "Compliance-aware documentation",
      "Automation opportunities mapped clearly",
      "Flexible monthly or project support",
    ],
    tools: ["IFRS", "QFC", "MOCI", "Bookkeeping", "Dashboards", "Automation"],
    faq: [
      {
        title: "Do you support ongoing bookkeeping?",
        description:
          "Yes. We can provide recurring bookkeeping and reporting support based on transaction volume and deadlines.",
      },
      {
        title: "Can you automate finance workflows?",
        description:
          "Yes. We assess the process first, then build or recommend automation for invoices, expenses, reporting, and approvals.",
      },
    ],
    testimonial: {
      quote:
        "They helped us move from scattered spreadsheets to a much clearer reporting rhythm. It changed our management meetings.",
      author: "Finance Manager",
      role: "Logistics and services firm",
    },
    primaryCta: "Book Finance Review",
  },
  {
    slug: "visa-assistance",
    number: "04",
    title: "VISA Assistance",
    eyebrow: "Documentation and mobility support",
    href: "/services/visa-assistance",
    navDescription: "Documentation and mobility support",
    shortDescription:
      "Clear visa guidance, document preparation, and process support for founders, teams, and business mobility.",
    description:
      "We help business owners, employees, and families understand requirements, prepare documentation, organize submissions, and track the next step with less friction.",
    outcome:
      "Move through visa preparation with a clear checklist, fewer delays, and a team that keeps the process organized.",
    image: "/services/visa-assistance.webp",
    accent: "#00ff88",
    secondaryAccent: "#ff00ff",
    metadata: {
      title: "VISA Assistance in Qatar | One Smart Biz",
      description:
        "Visa assistance in Qatar for founders, employees, and business mobility. Document review, checklists, application coordination, renewals, and process support.",
      keywords:
        "visa assistance qatar, business visa qatar, employee visa qatar, Qatar immigration support, visa documentation Doha",
    },
    stats: [
      { value: "24h", label: "Initial checklist" },
      { value: "1:1", label: "Document review" },
      { value: "End-to-end", label: "Coordination" },
      { value: "GCC", label: "Mobility support" },
    ],
    valueProps: [
      {
        title: "Requirement clarity",
        description:
          "We translate the process into a practical checklist based on your case and business context.",
      },
      {
        title: "Document readiness",
        description:
          "Forms, IDs, company papers, photos, and supporting files are reviewed before submission.",
      },
      {
        title: "Status coordination",
        description:
          "You know what is pending, what is submitted, and what decision or document is needed next.",
      },
      {
        title: "Business-first guidance",
        description:
          "Support is aligned with hiring, relocation, founder setup, and operational timelines.",
      },
    ],
    process: [
      {
        title: "Eligibility scan",
        description:
          "We identify the likely visa route, applicant profile, and required supporting documents.",
      },
      {
        title: "Document checklist",
        description:
          "You receive a clean checklist with formats, ownership, and priority items.",
      },
      {
        title: "Preparation support",
        description:
          "We help organize documents, review completeness, and coordinate the submission workflow.",
      },
      {
        title: "Follow-through",
        description:
          "We track next steps, renewals, and related business mobility requirements.",
      },
    ],
    packages: [
      {
        name: "Visa Readiness Review",
        price: "Fast assessment",
        detail: "Checklist, missing item review, and guidance on next steps.",
      },
      {
        name: "Employee Visa Support",
        price: "Per applicant",
        detail: "Document preparation, file organization, and coordination support.",
      },
      {
        name: "Founder Mobility Pack",
        price: "Custom scope",
        detail: "Visa support aligned with company setup and operational launch.",
      },
    ],
    proofPoints: [
      "Clear document ownership",
      "Fast checklist turnaround",
      "Founder and employee support",
      "Renewal and follow-up planning",
    ],
    tools: ["Checklist", "Document Review", "Renewals", "Applicant Tracking", "Business Mobility"],
    faq: [
      {
        title: "Can you guarantee visa approval?",
        description:
          "No provider can guarantee a government decision. We focus on completeness, clarity, and process coordination to reduce avoidable delays.",
      },
      {
        title: "Do you support company-related visas?",
        description:
          "Yes. We can align visa preparation with hiring, founder setup, and business formation timelines.",
      },
    ],
    testimonial: {
      quote:
        "The process became much easier once every document and next action was mapped clearly.",
      author: "Founder",
      role: "Doha trading company",
    },
    primaryCta: "Start Visa Process",
  },
  {
    slug: "business-formation",
    number: "05",
    title: "Business Formation",
    eyebrow: "Company setup and launch guidance",
    href: "/services/business-formation",
    navDescription: "Company setup, licensing, and launch guidance",
    shortDescription:
      "Company formation, licensing, documentation, and setup guidance for entrepreneurs entering Qatar.",
    description:
      "We guide founders and companies through entity planning, document preparation, licensing paths, setup sequencing, and launch essentials so the business starts on stronger footing.",
    outcome:
      "Launch with the right structure, fewer document surprises, and a practical path from registration to operations.",
    image: "/services/business-formation.webp",
    accent: "#ff00ff",
    secondaryAccent: "#00d4ff",
    metadata: {
      title: "Business Formation and Company Setup in Qatar | One Smart Biz",
      description:
        "Business formation and company setup support in Qatar. Licensing guidance, document preparation, entity setup planning, office readiness, and launch support.",
      keywords:
        "business formation qatar, company setup qatar, start business doha, trade license qatar, QFC company setup, MOCI registration",
    },
    stats: [
      { value: "2-4w", label: "Typical setup path" },
      { value: "MOCI/QFC", label: "Route planning" },
      { value: "100%", label: "Checklist coverage" },
      { value: "Launch", label: "Ops readiness" },
    ],
    valueProps: [
      {
        title: "Entity route planning",
        description:
          "We help compare mainland, free zone, QFC, and practical operating requirements.",
      },
      {
        title: "Document preparation",
        description:
          "Founder IDs, trade name notes, activity lists, articles, and supporting files are organized.",
      },
      {
        title: "Launch sequencing",
        description:
          "License, bank, office, visa, tax, and digital readiness are planned as one timeline.",
      },
      {
        title: "Operational handover",
        description:
          "You leave with a setup checklist and next-step priorities for running the company.",
      },
    ],
    process: [
      {
        title: "Strategy session",
        description:
          "We define business activity, ownership, expected operations, and preferred setup route.",
      },
      {
        title: "Document pack",
        description:
          "You receive a clear list of required documents, formats, signatures, and missing items.",
      },
      {
        title: "License coordination",
        description:
          "We support the setup workflow, activity selection, naming, and registration steps.",
      },
      {
        title: "Operational setup",
        description:
          "We map banking, visa, finance, digital, and compliance priorities after formation.",
      },
    ],
    packages: [
      {
        name: "Formation Advisory",
        price: "Discovery first",
        detail: "Entity route, activity review, checklist, and launch plan.",
      },
      {
        name: "Setup Coordination",
        price: "Custom scope",
        detail: "Document pack, licensing workflow support, and timeline tracking.",
      },
      {
        name: "Launch Bundle",
        price: "End-to-end",
        detail: "Company setup plus visa, finance, website, and brand launch coordination.",
      },
    ],
    proofPoints: [
      "Entity route comparison",
      "Document checklist management",
      "Visa and finance handoff available",
      "Launch roadmap after registration",
    ],
    tools: ["MOCI", "QFC", "Trade License", "Document Pack", "Office Setup", "Launch Plan"],
    faq: [
      {
        title: "Which setup route is best?",
        description:
          "It depends on ownership, business activity, target clients, office needs, and regulatory requirements. We help compare the practical options.",
      },
      {
        title: "Can you support after registration?",
        description:
          "Yes. We can connect formation with visa support, finance setup, branding, website launch, and operating checklists.",
      },
    ],
    testimonial: {
      quote:
        "They helped us understand the setup path and avoid scattered advice. The launch checklist was the most useful part.",
      author: "Managing Partner",
      role: "New Qatar consultancy",
    },
    primaryCta: "Plan Company Setup",
  },
];

export const serviceNavItems = serviceCatalog.map(
  ({ title, href, navDescription }) => ({
    label: title,
    href,
    description: navDescription,
  })
);

export const contactServiceOptions = [
  ...serviceCatalog.map((service) => service.title),
  "AI Business Integrations",
  "Brand Identity",
  "Mobile Native Apps",
  "Full-Stack Solutions",
  "Consulting",
];

export const serviceSlugs = serviceCatalog.map((service) => service.slug);

export function getServiceBySlug(slug: ServiceSlug) {
  return serviceCatalog.find((service) => service.slug === slug);
}

export function getRequiredService(slug: ServiceSlug) {
  const service = getServiceBySlug(slug);

  if (!service) {
    throw new Error(`Unknown service slug: ${slug}`);
  }

  return service;
}

export function createServiceMetadata(slug: ServiceSlug): Metadata {
  const service = getRequiredService(slug);
  const url = `https://www.onesmartbiz.pro${service.href}`;

  return {
    title: service.metadata.title,
    description: service.metadata.description,
    keywords: service.metadata.keywords,
    openGraph: {
      title: service.metadata.title,
      description: service.metadata.description,
      url,
      type: "website",
      images: [
        {
          url: service.image.startsWith("http")
            ? service.image
            : `https://www.onesmartbiz.pro${service.image}`,
          width: 1200,
          height: 900,
          alt: `${service.title} by One Smart Biz`,
        },
      ],
    },
    alternates: {
      canonical: url,
    },
  };
}
