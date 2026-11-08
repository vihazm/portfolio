export const projects = [
  {
    slug: "sprpta-complaints",
    title: "SPRPTA Public Complaint and Suggestion Management System",
    inProgress: true,
    summary:
      "One place for the Southern Provincial Road Passenger Transport Authority to receive, track and resolve public complaints and suggestions about bus and trishaw services.",
    tags: ["Next.js", "Python/FastAPI", "PostgreSQL", "pgvector"],
    status: "2026/2027 · Group project (real client) · In progress",
    problem:
      "Complaints about bus and trishaw services in Galle, Matara and Hambantota reach our client, the Southern Provincial Road Passenger Transport Authority (SPRPTA) in Sri Lanka by email, letter, WhatsApp and SMS. They are handled by hand, with no consistent tracking, deadlines or record of what was decided. This system gives the authority one place to manage the whole process.",
    role:
      "Developed by a team of 6 students. I am tasked with building the Admin module and the common login and landing page. I also run the team's GitHub workflow, reviewing, testing and merging everyone's work.",
  },
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
      { src: "/resources/homehero/admin-user-management.webp", alt: "HomeHero admin user management screen" },
      { src: "/resources/homehero/admin-sp-tracking.webp", alt: "HomeHero admin service-provider tracking and MVP providers screen" },
      { src: "/resources/homehero/admin-dashboard.webp", alt: "HomeHero system admin dashboard" },
      { src: "/resources/homehero/verification-applications.webp", alt: "HomeHero verification admin applications screen" },
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
    summary:
      "A desktop system for an exotic/luxury car rental business to manage its fleet, reservations, customers, and staff access from one place.",
    tags: ["C#", "WinForms", "PostgreSQL", "Npgsql"],
    status: "2025/2026 · Solo project · Completed",
    githubUrl: "https://github.com/vihazm/NorthstarCollection_portal.git",
    problem:
      "NorthstarCollection Portal was built to give a small exotic/luxury car rental business a single desktop system for running day-to-day operations — tracking the fleet, taking reservations, managing customers, and giving staff role-appropriate access — instead of juggling spreadsheets or ad hoc records for cars, bookings, and staff logins.",
    role:
      "Solo project. I designed and built the full system — the WinForms UI, the PostgreSQL schema, and the data layer connecting them — covering login/roles, the three dashboards, fleet management, reservations, customer history, and user administration.",
    decisions: [
      "C# WinForms + PostgreSQL — chose a native Windows desktop stack with Npgsql for the database layer, styled with Guna.UI2 and MaterialSkin rather than building a web frontend, since the target users are internal staff on fixed workstations.",
      "Role-based dashboards — Admin, Manager, and Sales each get their own dashboard wired to only the features relevant to that role, rather than one dashboard with permission checks scattered through it.",
      "Status-driven fleet state — a car's availability is derived from its reservation history and a manual status field together, so \"Available\" / \"Rented\" / \"Unavailable\" stays consistent without a separate scheduling system.",
    ],
    challenges:
      "The database was originally wired up with a hardcoded connection string and plain-text password storage — fine for getting the app working end-to-end quickly, but not something that should sit in source control or in the database long-term. Going back to fix those after the fact (hashing passwords with a migration path for already-seeded accounts, moving config to an ignored file) was straightforward, but it would have been cleaner to decide on those patterns before writing the first login query. With more experience now, I'd set up config/secrets handling and a basic security posture (hashing, parameterized queries throughout) from the very first commit instead of retrofitting them later.",
    outcome:
      "A working C# WinForms desktop application backed by PostgreSQL. It supports three staff roles with different permissions, handles the full reservation lifecycle (booking → VAT-inclusive pricing → marking a car as rented), tracks per-customer spend and loyalty tier, and exports login audit logs. Since the initial build, I've gone back in and hardened it — passwords are now hashed instead of stored in plain text, double-bookings on the same car are blocked, and the database connection string was moved out of source into a local config file so the project could be pushed to GitHub safely.",
    images: [
      { src: "/resources/northstar-rentals/login.webp", alt: "Northstar Collection Portal login screen" },
      { src: "/resources/northstar-rentals/admin-dashboard.webp", alt: "Northstar Collection Portal admin dashboard" },
      { src: "/resources/northstar-rentals/view-fleet.webp", alt: "Northstar Collection Portal fleet view with car details" },
      { src: "/resources/northstar-rentals/view-statistics.webp", alt: "Northstar Collection Portal monthly statistics screen" },
      { src: "/resources/northstar-rentals/user-management.webp", alt: "Northstar Collection Portal user management screen" },
    ],
  },
  {
    slug: "goldspice",
    title: "GoldSpice",
    summary:
      "A desktop point-of-sale and store management app for a Ceylon spice business, with separate logins for admins, managers and cashiers.",
    tags: ["NetBeans", "Java", "MySQL"],
    status: "2025 · Solo project · Completed",
    githubUrl: "https://github.com/vihazm/goldspice-pos",
    problem:
      "Small spice shops often track stock, prices and sales by hand, which leads to mistakes and no clear view of how the business is doing. GoldSpice is a desktop point-of-sale and store management app for a conceptual Ceylon spice business with the same name. It has separate logins for admins, managers and cashiers, so each person only sees the tools they need.",
    role:
      "Solo build in NetBeans with Java. I designed and implemented the Swing desktop interface in NetBeans, the controller layer, and the MySQL database it runs on, including the schema, seed data and the branding across every screen.",
    decisions: [
      "MVC structure. The screens (View) never touch the database directly. A Controller layer handles all SQL, so the database logic stays in one place.",
      "Role-based dashboards. After login, the user's role decides which dashboard opens, so cashiers can't reach pricing or user management.",
      "Bills saved as one transaction. A bill and its line items are written together and rolled back if anything fails, so there are no half-saved sales.",
      "Shared logo helper. One small class draws the logo on every screen, so it looks the same everywhere and is easy to change.",
    ],
    challenges:
      "The hardest part was rebuilding the database from scratch with no original schema after XAMPP MySQL server crashed unexpectedly and took out the entire database before I had taken any backups. Next time I'd definitely use reliable tools, move the database settings into a config file, hash passwords, and design a more intuitive UI.",
    outcome:
      "A working local desktop app backed by a MySQL database. Admins manage users and products, managers update prices and view sales (with a filter by quarter), and cashiers create customer bills. Saving a bill records it and each of its line items. I tested the main flows (logins, product and user changes, pricing, billing and sales) by running them against the real app. It is not packaged for others yet: the database password is hardcoded, user passwords are stored as plain text since this was a very beginner-level project for the 2nd Semester at LNBTI.",
    images: [
      { src: "/resources/goldspice/login.webp", alt: "GoldSpice login screen" },
      { src: "/resources/goldspice/admin-dashboard.webp", alt: "GoldSpice admin dashboard" },
      { src: "/resources/goldspice/manager-dashboard.webp", alt: "GoldSpice manager dashboard" },
      { src: "/resources/goldspice/product-management.webp", alt: "GoldSpice product management screen" },
      { src: "/resources/goldspice/pricing-management.webp", alt: "GoldSpice pricing management screen" },
      { src: "/resources/goldspice/user-management.webp", alt: "GoldSpice user management screen" },
    ],
  },
];

export const homeFeaturedSlugs = ["homehero", "news-app", "northstar-rentals"];
