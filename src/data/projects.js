export const projects = [
  {
    slug: "homehero",
    title: "HomeHero",
    summary:
      "Connects Sri Lankan households with verified home service providers, and gives providers one place to manage jobs, memberships and earnings.",
    tags: ["React", "Node.js", "Express", "PostgreSQL"],
    status: "2026 · University team project · Completed",
    liveUrl: "https://home-hero-version5-0.vercel.app",
    githubUrl: "https://github.com/visal2057/homeHeroVersion5.0.git",
    problem:
      "HomeHero was designed to make it easier for Sri Lankan households to find and connect with trusted service providers for services such as cleaning, gardening, plumbing, pet care, and AC repair. The system also addresses the difficulty service providers face in managing jobs, memberships, invoices, earnings, and notifications in one place.",
    role:
      "Team project. I worked across the overall system and was particularly responsible for the Admin module, including system administration, service-provider verification, management functions, and related workflows. I also helped coordinate the team and acted as the leader.",
    decisions: [
      "PERN stack — used PostgreSQL, Express/Node.js, and React to build a modern full-stack web application.",
      "Membership-based service-provider model — service providers pay for memberships to receive jobs, instead of customers paying providers directly through the platform.",
      "Invoicing and earnings tracking — added to better support the real operational workflow of service providers.",
    ],
    challenges:
      "Coordinating multiple modules across a team while keeping the system consistent was one of the biggest challenges. With more experience now, I would plan the architecture and API contracts earlier, establish clearer component and coding conventions, and design the user experience more systematically before implementation.",
    outcome:
      "A working web-based household-services platform developed as a university team project. It includes customer, service-provider, payment, administration, verification, invoicing, earnings, and notification functionality. It was deployed once and later taken down to be improved further before redeployment.",
    images: [
      { src: "/resources/homehero/landing-hero.webp", alt: "HomeHero landing page hero section" },
      { src: "/resources/homehero/services.webp", alt: "HomeHero services grid" },
      { src: "/resources/homehero/login.webp", alt: "HomeHero member login screen" },
    ],
  },
  {
    slug: "news-app",
    title: "News App",
    placeholder: true,
    summary: "Case study coming soon.",
    tags: [],
  },
  {
    slug: "northstar-rentals",
    title: "Northstar Rentals",
    placeholder: true,
    summary: "Case study coming soon.",
    tags: [],
  },
  {
    slug: "project-4",
    title: "Project 4",
    placeholder: true,
    summary: "A new project slot, coming soon.",
    tags: [],
  },
];

export const homeFeaturedSlugs = ["homehero", "news-app", "northstar-rentals"];
