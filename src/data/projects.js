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
    title: "GlobalNews",
    summary: "A news aggregator that lets users filter articles by keyword, date, source, and language, then view them on their original publisher's site.",
    tags: ["React", "Express.js", "Node.js", "NewsAPI", "Headless UI", "Vite"],
    status: "2026 · Solo project · Completed",
    liveUrl: "https://global-news-by-vihazm.vercel.app/",
    githubUrl: "https://github.com/vihazm/GlobalNews.git",
    problem:
      "News is scattered across dozens of outlets, each with its own site and search tools. GlobalNews gives users a single search interface to query global news by keyword, date, language, and source (BBC vs. other outlets), then sends them directly to the original article on the publisher's site rather than hosting the content itself.",
    role:
      "Solo full-stack build. Designed and implemented both the Express backend (NewsAPI proxy) and the React frontend (search UI, custom dropdown components, and an animated canvas globe visualization), including the theming system and API integration.",
    decisions: [
      "Backend as a thin proxy — the Express server exists mainly to keep the NewsAPI key server-side (out of the frontend bundle) and to assemble query parameters (keyword, date range, language, domain filtering) before forwarding to https://newsapi.org/v2/everything.",
      "Custom canvas globe instead of a 3D library — GlobeBackground.jsx renders a rotating dotted-globe using a hand-built Fibonacci sphere lattice and ellipse-approximated continent silhouettes on a 2D canvas, avoiding a Three.js dependency for a purely decorative background.",
      "Headless UI for the dropdowns — FancySelect.jsx wraps Headless UI's accessible Listbox instead of native <select>, so the source/language pickers can be fully restyled to match the glass-panel theme while keeping keyboard/screen-reader accessibility.",
      "Light/dark theming via a data-theme attribute mirrored onto <html>, needed specifically because Headless UI portals its dropdown panels to document.body, outside the themed .page container.",
      "Client-side result re-sorting — after fetching from NewsAPI (sorted by relevancy), results are further sorted client-side to bubble up articles whose titles contain the exact search keyword.",
    ],
    challenges:
      "The main technical wrinkle was theming across portaled UI: Headless UI renders dropdown menus outside the app's DOM tree, so CSS scoped to the themed container didn't reach them, requiring the theme attribute to be duplicated onto the document root. Building a recognizable rotating globe without a 3D graphics library also took iteration — approximating continents as lat/lon ellipses on a Fibonacci-distributed point sphere, then hand-tuning per-theme color/glow/atmosphere values so it read well in both light and dark mode.",
    outcome:
      "A working local full-stack app: an Express backend on port 5000 that proxies and filters NewsAPI queries, and a Vite/React frontend with keyword/date/source/language search, quick-search category chips (Technology, Business, Sports, Health, Entertainment), a light/dark theme toggle, and an animated globe hero background. Not yet deployed — API key and backend URL are currently hardcoded to localhost, so productionizing (env-based API URL, deployed backend) is the main remaining step before a live demo link.",
    images: [
      { src: "/resources/news-app/landing-hero.webp", alt: "GlobalNews dark-mode landing page with search form" },
      { src: "/resources/news-app/search-results.webp", alt: "GlobalNews search results grid" },
      { src: "/resources/news-app/light-mode.webp", alt: "GlobalNews landing page in light mode" },
    ],
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
