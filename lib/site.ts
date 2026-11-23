export const NAV = [
  { label: 'Services', href: '/services' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Insights', href: '/insights' },
] as const

export type MegaItem = {
  key: string
  title: string
  description: string
  href: string
}

export const MEGA_MENU: MegaItem[] = [
  { key: 'WEB', title: 'Web', description: 'Marketing sites & web platforms', href: '/services#web' },
  { key: 'SAAS', title: 'SaaS', description: 'Multi-tenant products at scale', href: '/services#saas' },
  { key: 'MOBILE', title: 'Mobile', description: 'iOS & Android applications', href: '/services#mobile' },
  { key: 'AI', title: 'AI', description: 'Agents, chatbots & integrations', href: '/services#ai' },
  { key: 'AUTOMATION', title: 'Automation', description: 'n8n & business process ops', href: '/services#automation' },
  { key: 'ECOMMERCE', title: 'E-commerce', description: 'Storefronts, POS & payments', href: '/services#ecommerce' },
]

export type ServiceFeature = {
  title: string
  body: string
}

export type ServiceFaq = {
  q: string
  a: string
}

export type Service = {
  no: string
  id: string
  title: string
  short: string
  description: string
  capabilities: string[]
  stack: string[]
  image?: string
  video?: string
  tagline?: string
  longDescription?: string
  features?: ServiceFeature[]
  process?: { no: string; title: string; body: string }[]
  faqs?: ServiceFaq[]
  results?: { value: string; label: string }[]
}

export const SERVICES: Service[] = [
  {
    no: '01',
    id: 'web',
    title: 'Web Development',
    short: 'Web',
    image: '/web.jpeg',
    tagline: 'Websites that perform, convert and last.',
    description:
      'High-performance marketing sites and web platforms engineered for speed, accessibility and measurable conversion.',
    longDescription:
      'Your website is the single most leveraged piece of digital infrastructure you own. It works 24/7, reaches every market and sets the first impression for every lead, investor and hire. We build sites that are fast by default, accessible by design and conversion-optimised from day one — not retrofitted later.',
    capabilities: ['Design systems', 'Headless CMS', 'Edge rendering', 'Core Web Vitals'],
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
    features: [
      { title: 'Performance-first architecture', body: 'Every site we ship targets a 95+ Lighthouse score. We optimise images, fonts, scripts and server response times before launch — not after a complaint.' },
      { title: 'Design systems that scale', body: 'We build component libraries, not one-off pages. Your team can add new content without breaking the visual language.' },
      { title: 'Headless CMS integration', body: 'Sanity, Contentful or any CMS your team already knows. Editors get a clean interface; engineers get full control over rendering.' },
      { title: 'SEO and Core Web Vitals', body: 'LCP under 2.5s, zero layout shift, full metadata control. We treat SEO as engineering, not an afterthought.' },
      { title: 'Accessibility built in', body: 'WCAG 2.1 AA compliance, keyboard navigation, screen reader support — included in every build, not sold as an add-on.' },
      { title: 'Analytics and tracking', body: 'GA4, Plausible, Vercel Analytics — we instrument what matters so you can make decisions based on data, not guesses.' },
    ],
    process: [
      { no: '01', title: 'Discovery & strategy', body: 'We audit your current site, map conversion goals and define the content architecture before touching design.' },
      { no: '02', title: 'Design system build', body: 'Typography, spacing, colour and component library — established once and used consistently everywhere.' },
      { no: '03', title: 'Page development', body: 'Built in Next.js, optimised for edge delivery, tested across devices and browsers.' },
      { no: '04', title: 'CMS integration', body: 'Your content team gets a clean editing experience. We document every content type and field.' },
      { no: '05', title: 'Performance audit', body: 'Lighthouse, PageSpeed, real-device testing. We fix every issue before handover.' },
      { no: '06', title: 'Launch & support', body: 'Zero-downtime deployment, DNS handover, post-launch monitoring and a 30-day support window.' },
    ],
    faqs: [
      { q: 'How long does a website take?', a: 'A marketing site typically takes 4–8 weeks from kick-off to launch, depending on the number of pages and CMS complexity.' },
      { q: 'Do you do design as well?', a: 'Yes — strategy, design and engineering are handled by the same team. No agency hand-offs.' },
      { q: 'Which CMS do you use?', a: 'We recommend Sanity for most projects, but we can work with any headless CMS your team already uses.' },
      { q: 'Can we update the site ourselves?', a: 'Yes. We build the CMS integration so non-technical editors can update content, add pages and change copy without touching code.' },
    ],
    results: [
      { value: '98', label: 'Avg. Lighthouse score' },
      { value: '+120%', label: 'Engagement uplift' },
      { value: '0.4s', label: 'LCP achieved' },
    ],
  },
  {
    no: '02',
    id: 'saas',
    title: 'SaaS Products',
    short: 'SaaS',
    tagline: 'From first user to ten thousand — the same codebase.',
    description:
      'Multi-tenant SaaS products with billing, auth, dashboards and infrastructure built to scale from first user to thousands.',
    longDescription:
      'Building a SaaS product is not about writing features — it is about making the right architectural decisions on day one. Multi-tenancy, billing, authentication, role systems and analytics need to be designed before you write the first line of product code. We have shipped enough SaaS products to know which decisions are hard to undo, and we make sure you do not make the expensive ones.',
    capabilities: ['Multi-tenancy', 'Billing & auth', 'Analytics', 'Role systems'],
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    features: [
      { title: 'Multi-tenant data architecture', body: 'Row-level security with PostgreSQL, tenant isolation built in from day one. Retrofitting tenancy later is expensive — we design it right the first time.' },
      { title: 'Authentication & authorisation', body: 'Email/password, SSO, OAuth and role-based access control. We use battle-tested libraries and never roll our own crypto.' },
      { title: 'Stripe billing integration', body: 'Subscriptions, usage-based billing, trials, coupons and dunning — wired into your product data model, not bolted on.' },
      { title: 'Analytics & instrumentation', body: 'Event tracking, funnel analysis, retention metrics. We instrument your product from launch so you have data on day one.' },
      { title: 'Admin & ops dashboards', body: 'Internal tooling for your team — user management, billing overrides, impersonation, audit logs.' },
      { title: 'Infrastructure & DevOps', body: 'CI/CD pipelines, environment management, database migrations, uptime monitoring. Production-ready from the first deploy.' },
    ],
    process: [
      { no: '01', title: 'Product architecture', body: 'Data models, tenancy strategy, billing design and API contracts — defined before we write application code.' },
      { no: '02', title: 'Auth & billing foundation', body: 'Authentication, authorisation and Stripe integration built as a foundation the rest of the product sits on.' },
      { no: '03', title: 'Core product build', body: 'Feature development in tight weekly iterations, each ending with a real demo of working software.' },
      { no: '04', title: 'Admin & ops tooling', body: 'Internal dashboards and tooling so your team can manage users, debug issues and operate the product.' },
      { no: '05', title: 'Performance & security', body: 'Load testing, penetration testing basics, dependency audits, rate limiting and error monitoring.' },
      { no: '06', title: 'Launch & scale', body: 'Production deployment, runbook handover, on-call setup and retained engineering support.' },
    ],
    faqs: [
      { q: 'How do you handle multi-tenancy?', a: 'We use shared-schema with PostgreSQL Row Level Security as the default. For enterprise requirements we can use schema-per-tenant isolation.' },
      { q: 'Do you handle Stripe integration?', a: 'Yes — subscriptions, trials, usage billing, webhooks, invoicing and the customer portal. Full integration, not just the checkout.' },
      { q: 'How long does a SaaS MVP take?', a: 'A production-ready MVP with auth, billing and core features typically takes 8–14 weeks depending on scope.' },
      { q: 'What happens after launch?', a: 'We offer retained engineering partnerships — a set number of hours per month for features, fixes and infrastructure.' },
    ],
    results: [
      { value: '4.2x', label: 'Faster onboarding' },
      { value: '-38%', label: 'Support tickets' },
      { value: '99.9%', label: 'Uptime' },
    ],
  },
  {
    no: '03',
    id: 'mobile',
    title: 'Mobile Applications',
    short: 'Mobile',
    video: '/videos/app.MP4',
    tagline: 'One codebase. Two platforms. No compromises.',
    description:
      'Native-feeling iOS and Android applications with shared codebases, offline support and polished motion.',
    longDescription:
      'Mobile users are the most demanding users you will have. They expect instant load, smooth animations, offline support and native behaviour on their device. We build cross-platform apps using React Native and Expo — one codebase that produces genuinely native-feeling experiences on both iOS and Android, without the cost of two separate teams.',
    capabilities: ['Cross-platform', 'Offline-first', 'Push & deep links', 'App store ops'],
    stack: ['React Native', 'Expo', 'TypeScript', 'Firebase'],
    features: [
      { title: 'Cross-platform from one codebase', body: 'React Native with Expo — iOS and Android from a single TypeScript codebase. Shared logic, platform-appropriate UI.' },
      { title: 'Offline-first architecture', body: 'We design data sync and local storage from day one so your app works without a connection and syncs cleanly when it returns.' },
      { title: 'Push notifications', body: 'Expo Notifications with Firebase — rich notifications, deep links, notification preferences and delivery analytics.' },
      { title: 'Native animations at 60fps', body: 'Reanimated 3, Gesture Handler and carefully profiled interactions. Smooth on low-end devices, not just the demo phone.' },
      { title: 'App store submission', body: 'We handle App Store and Google Play submission, screenshots, metadata, review responses and version management.' },
      { title: 'Authentication & security', body: 'Biometric auth, secure storage, certificate pinning and OWASP mobile security best practices.' },
    ],
    process: [
      { no: '01', title: 'UX & navigation architecture', body: 'Screen map, user flows, navigation hierarchy and offline data strategy defined before design starts.' },
      { no: '02', title: 'Design & prototype', body: 'High-fidelity screens in Figma, interactive prototype for stakeholder sign-off before development begins.' },
      { no: '03', title: 'Core app development', body: 'Screens, navigation, API integration and local storage — built in weekly sprints with TestFlight builds.' },
      { no: '04', title: 'Offline & sync layer', body: 'Conflict resolution, optimistic updates and background sync — tested with real network conditions, not just airplane mode.' },
      { no: '05', title: 'Device & OS testing', body: 'Tested on physical iOS and Android devices across OS versions, screen sizes and connection speeds.' },
      { no: '06', title: 'App store launch', body: 'Screenshots, descriptions, privacy policy, review process management and post-launch crash monitoring.' },
    ],
    faqs: [
      { q: 'React Native or native?', a: 'For most business apps React Native is the right choice — one team, one codebase, 90% of the native experience at 50% of the cost. We recommend fully native only for apps with extreme performance requirements.' },
      { q: 'How long does an app take?', a: 'A production-ready mobile app typically takes 10–16 weeks from kick-off to App Store submission.' },
      { q: 'Do you handle app store submission?', a: 'Yes — developer account setup, store listings, screenshots, privacy manifests, review process and version updates.' },
      { q: 'Can the app work offline?', a: 'Yes — offline-first architecture is a first-class feature we design from day one, not an afterthought.' },
    ],
    results: [
      { value: '4.8', label: 'App store rating' },
      { value: '60fps', label: 'Interaction speed' },
      { value: '2', label: 'Platforms from one codebase' },
    ],
  },
  {
    no: '04',
    id: 'ai',
    title: 'AI Systems',
    short: 'AI',
    tagline: 'AI that works in production, not just in demos.',
    description:
      'AI chatbots, agents and retrieval systems wired directly into your data, tools and business workflows.',
    longDescription:
      'AI demos are easy. Production AI is hard. The gap between a chatbot that impresses in a presentation and one that handles 500 real users a day without hallucinating, looping or breaking is an engineering problem — not a prompt engineering problem. We have built AI systems in production and we know where they fail. We design guardrails, observability and human handoff paths before we write the first agent.',
    capabilities: ['Chatbots & agents', 'RAG pipelines', 'Evals', 'Guardrails'],
    stack: ['OpenAI', 'LangChain', 'Vector DBs', 'AI SDK'],
    features: [
      { title: 'RAG pipelines', body: 'Retrieval-augmented generation over your documents, database or knowledge base. Answers grounded in your data, not hallucinated.' },
      { title: 'AI agents with tool use', body: 'Agents that can query your CRM, send emails, update records and call APIs — with confidence thresholds and human escalation paths.' },
      { title: 'Chatbot integration', body: 'Embedded chat widgets, Slack bots, WhatsApp integration — wherever your users already are.' },
      { title: 'Evaluation & evals', body: 'Automated test suites for your AI outputs. We define what good looks like and measure it, so regressions are caught before they reach users.' },
      { title: 'Guardrails & safety', body: 'Input/output filtering, confidence thresholds, topic restriction and audit logging — production safety from day one.' },
      { title: 'Observability & tracing', body: 'Every prompt, response, tool call and escalation is logged as a structured trace. You can replay any conversation and see exactly what happened.' },
    ],
    process: [
      { no: '01', title: 'Use case definition', body: 'We define exactly what the AI is allowed to do, what it must refuse, and what the success metric is — before building anything.' },
      { no: '02', title: 'Data & knowledge audit', body: 'We map the data sources the AI needs access to and design the retrieval strategy.' },
      { no: '03', title: 'Prototype & eval baseline', body: 'A minimal prototype against a test suite. We measure accuracy before we start optimising.' },
      { no: '04', title: 'Agent & tool integration', body: 'Tools, APIs and data sources connected with explicit permission models and error handling.' },
      { no: '05', title: 'Guardrails & handoff paths', body: 'Human escalation, refusal handling and safety filtering built before production traffic.' },
      { no: '06', title: 'Production & monitoring', body: 'Deployed with full tracing, escalation rate dashboards and a plan for retraining or prompt updates.' },
    ],
    faqs: [
      { q: 'Which AI model do you use?', a: 'GPT-4o for most use cases. We evaluate the right model for each task — including local models when data privacy requires it.' },
      { q: 'How do you prevent hallucinations?', a: 'RAG grounds answers in real data, confidence thresholds block low-certainty responses, and evals catch regressions before they ship.' },
      { q: 'Can the AI access our internal data?', a: 'Yes — we connect AI systems to your CRM, database, documents or APIs with appropriate access controls and audit logging.' },
      { q: 'How long does an AI system take?', a: 'A production-ready AI chatbot or agent pipeline typically takes 4–8 weeks depending on the number of tools and data sources.' },
    ],
    results: [
      { value: '82%', label: 'Requests auto-resolved' },
      { value: '11h', label: 'Saved weekly per team' },
      { value: '<2min', label: 'Average response time' },
    ],
  },
  {
    no: '05',
    id: 'automation',
    title: 'Automation',
    short: 'Automation',
    image: '/automation.jpeg',
    tagline: 'Remove the manual work. Keep the humans for what matters.',
    description:
      'Business process automation with n8n and custom integrations that remove manual work across your stack.',
    longDescription:
      'Every business has processes that run on copy-paste, spreadsheets and someone remembering to do something. Automation replaces those processes with reliable, documented, monitored workflows that run without human intervention. We use n8n as our primary automation platform — self-hostable, flexible and powerful enough to connect anything to anything.',
    capabilities: ['n8n workflows', 'API integrations', 'Data sync', 'Ops tooling'],
    stack: ['n8n', 'Node.js', 'Webhooks', 'REST & GraphQL'],
    features: [
      { title: 'n8n workflow builds', body: 'We design, build and document n8n workflows for any business process — from lead routing to invoice generation to data sync.' },
      { title: 'API integrations', body: 'Connect any two systems that have an API. CRM, email, Slack, accounting, project management, custom internal tools.' },
      { title: 'Data sync & ETL', body: 'Keep your systems in sync — CRM to database, spreadsheet to dashboard, webhook to Slack. No more manual exports.' },
      { title: 'Error handling & alerting', body: 'Every workflow has an explicit failure path. Errors create tickets, send Slack alerts and never fail silently.' },
      { title: 'Monitoring & versioning', body: 'Workflows are version-controlled, monitored for execution time and failure rate, and documented in plain English.' },
      { title: 'Self-hosted or cloud', body: 'n8n can be self-hosted on your infrastructure for full data control, or run on n8n Cloud. We handle the setup either way.' },
    ],
    process: [
      { no: '01', title: 'Process mapping', body: 'We document the current manual process step by step, identify every system it touches and define what done looks like.' },
      { no: '02', title: 'Automation design', body: 'Happy path, error paths, edge cases and failure handling — all designed before we open n8n.' },
      { no: '03', title: 'Workflow build', body: 'Built in n8n, tested with real data, reviewed and approved before going live.' },
      { no: '04', title: 'Error handling & alerting', body: 'Every workflow gets an explicit failure path — Slack alert, ticket creation or email, depending on severity.' },
      { no: '05', title: 'Documentation & handover', body: 'Plain-English documentation, owner assigned, monitoring dashboard set up.' },
      { no: '06', title: 'Monitoring & iteration', body: 'We review workflow performance at 30 and 90 days and optimise based on real execution data.' },
    ],
    faqs: [
      { q: 'Why n8n instead of Zapier?', a: 'n8n is more powerful, cheaper at scale and can be self-hosted — which matters for data privacy. For simple one-step automations Zapier is fine; for complex multi-step workflows n8n wins every time.' },
      { q: 'Can you automate our existing tools?', a: 'If they have an API or webhook support, yes. We have integrated CRMs, accounting tools, project management platforms, custom databases and dozens of SaaS tools.' },
      { q: 'What if a workflow breaks?', a: 'We build explicit error handling into every workflow. Failures create visible alerts — they never fail silently.' },
      { q: 'How long does automation take?', a: 'A single well-scoped automation typically takes 1–2 weeks. A full automation audit and build-out for a business takes 4–8 weeks.' },
    ],
    results: [
      { value: '82%', label: 'Auto-resolved requests' },
      { value: '11h', label: 'Saved per week' },
      { value: '0', label: 'Silent failures' },
    ],
  },
  {
    no: '06',
    id: 'ecommerce',
    title: 'E-commerce',
    short: 'E-commerce',
    tagline: 'Storefronts built for conversion, not just looks.',
    description:
      'Conversion-focused storefronts, POS systems and payment flows engineered for reliability at checkout.',
    longDescription:
      'E-commerce is unforgiving. A 1-second delay costs conversion. A broken checkout costs revenue. A stock conflict costs trust. We build storefronts, POS systems and payment flows that are fast, reliable and unified — online and in-store inventory in sync, checkout that never fails and a customer experience that converts.',
    capabilities: ['Storefronts', 'POS systems', 'Payments', 'Inventory'],
    stack: ['Shopify', 'Stripe', 'Next.js', 'Postgres'],
    features: [
      { title: 'High-conversion storefronts', body: 'Custom Shopify themes or headless Next.js storefronts — built for speed, accessibility and checkout conversion.' },
      { title: 'POS systems', body: 'Custom or Shopify POS for brick-and-mortar locations — online and in-store inventory unified in real time.' },
      { title: 'Payment integration', body: 'Stripe, Shopify Payments, buy-now-pay-later, subscription billing — whatever your customers expect at checkout.' },
      { title: 'Inventory management', body: 'Real-time inventory sync across channels. No more overselling, stock conflicts or manual updates.' },
      { title: 'Offline-first POS', body: 'POS that works without internet and syncs when connectivity returns — sales never blocked by a network outage.' },
      { title: 'Analytics & attribution', body: 'Full funnel analytics — where users drop off, what drives conversion and how to improve it.' },
    ],
    process: [
      { no: '01', title: 'Commerce audit', body: 'Current stack, inventory setup, payment methods and conversion funnel mapped before we touch anything.' },
      { no: '02', title: 'Architecture decision', body: 'Shopify-native, headless or custom — we recommend the right architecture for your scale and team.' },
      { no: '03', title: 'Storefront build', body: 'Product pages, collection pages, cart and checkout — built for performance and conversion.' },
      { no: '04', title: 'Payment & inventory integration', body: 'Stripe or Shopify Payments, inventory sync, order management and fulfilment workflows.' },
      { no: '05', title: 'POS setup', body: 'In-store POS connected to online inventory, staff training and hardware setup if required.' },
      { no: '06', title: 'Launch & optimise', body: 'A/B testing setup, analytics instrumentation, conversion monitoring and ongoing optimisation.' },
    ],
    faqs: [
      { q: 'Shopify or custom?', a: 'Shopify for most retail businesses — the ecosystem, payments and ops tooling are hard to beat. Custom Next.js storefront when you need performance or flexibility that Shopify cannot provide.' },
      { q: 'Can you unify online and in-store?', a: 'Yes — unified inventory, shared customer records and real-time sync between your storefront and POS.' },
      { q: 'How do you improve conversion?', a: 'Page speed, checkout flow simplification, trust signals, mobile optimisation and A/B testing — measured against your actual baseline.' },
      { q: 'Do you handle Stripe integration?', a: 'Yes — Stripe Checkout, Payment Intents, subscription billing, webhooks and payout reconciliation.' },
    ],
    results: [
      { value: '+46%', label: 'Conversion uplift' },
      { value: '2.1s', label: 'Average load time' },
      { value: '0', label: 'Stock conflicts post-launch' },
    ],
  },
  {
    no: '07',
    id: 'software',
    title: 'Custom Software',
    short: 'Software',
    tagline: 'Software shaped around how your business actually works.',
    description:
      'Bespoke internal tools, dashboards and platforms tailored to how your business actually operates.',
    longDescription:
      'Off-the-shelf software is built for everyone, which means it fits no one perfectly. When your operations require workflows, data models or integrations that no existing tool supports, you need custom software. We build internal tools, operational dashboards and custom platforms that match exactly how your team works — and evolve as your business does.',
    capabilities: ['Internal tools', 'Dashboards', 'Integrations', 'Data models'],
    stack: ['Next.js', 'Python', 'FastAPI', 'PostgreSQL'],
    features: [
      { title: 'Internal operations tools', body: 'Custom admin interfaces, workflow management systems and internal portals built for how your team actually operates — not how a generic SaaS thinks you should.' },
      { title: 'Data dashboards', body: 'Real-time dashboards that pull from your databases, APIs and third-party tools — with the exactly the metrics your team needs.' },
      { title: 'System integrations', body: 'Connect legacy systems, third-party APIs and internal databases into a unified data layer your team can work from.' },
      { title: 'Custom data models', body: 'We design data models around your business logic — not the other way around. Schema, migrations, validations and access control.' },
      { title: 'Reporting & exports', body: 'Scheduled reports, CSV/PDF exports, email delivery and custom reporting views for different team roles.' },
      { title: 'Role-based access', body: 'Granular permissions, team hierarchies, audit logs and SSO integration — so the right people see the right data.' },
    ],
    process: [
      { no: '01', title: 'Operations audit', body: 'We spend time understanding how your team actually works — what tools they use, what manual steps they take and where time is lost.' },
      { no: '02', title: 'Requirements & data model', body: 'User stories, data model design and API contracts defined before a line of code is written.' },
      { no: '03', title: 'Core tool build', body: 'Built in weekly iterations with real working demos — not a big reveal at the end.' },
      { no: '04', title: 'Integration & data migration', body: 'Connected to your existing systems and populated with real data from day one.' },
      { no: '05', title: 'User testing & training', body: 'Tested with real users from your team, documented and trained before handover.' },
      { no: '06', title: 'Handover & support', body: 'Full documentation, admin access, runbooks and retained support if needed.' },
    ],
    faqs: [
      { q: 'How is custom software priced?', a: 'Fixed-price for well-scoped projects, time-and-materials for exploratory or evolving requirements. We agree scope clearly before starting.' },
      { q: 'How long does it take?', a: 'A focused internal tool takes 4–8 weeks. A full custom platform takes 3–6 months depending on complexity.' },
      { q: 'Will we own the code?', a: 'Yes — complete ownership of the codebase, infrastructure and documentation from day one.' },
      { q: 'Can it integrate with our existing systems?', a: 'Yes — if your existing systems have an API or database we can access, we can integrate with them.' },
    ],
    results: [
      { value: '-60%', label: 'Manual processing time' },
      { value: '1 tool', label: 'Replacing 4 spreadsheets' },
      { value: '100%', label: 'Team adoption in 30 days' },
    ],
  },
]

export const CAPABILITIES = ['WEB', 'SAAS', 'MOBILE', 'AI', 'AUTOMATION', 'ECOMMERCE', 'SOFTWARE']

export const PROCESS = [
  { no: '01', title: 'Discover', body: 'We map goals, constraints and the systems around the problem.' },
  { no: '02', title: 'Architect', body: 'We design the data models, infrastructure and technical approach.' },
  { no: '03', title: 'Design', body: 'We craft interfaces and interactions with intent and clarity.' },
  { no: '04', title: 'Engineer', body: 'We build in tight iterations with production quality from day one.' },
  { no: '05', title: 'Launch', body: 'We ship with monitoring, analytics and a plan for scale.' },
  { no: '06', title: 'Optimize', body: 'We measure, refine and expand based on real usage.' },
]

export const STATS = [
  { value: 50, suffix: '+', label: 'Digital Projects' },
  { value: 30, suffix: '+', label: 'Businesses Supported' },
  { value: 10, suffix: '+', label: 'Technology Domains' },
  { value: 24, suffix: '/7', label: 'Digital Systems' },
]

export const TECH = [
  'Next.js',
  'React',
  'Node.js',
  'Python',
  'MongoDB',
  'PostgreSQL',
  'OpenAI',
  'LangChain',
  'n8n',
  'FastAPI',
  'AWS',
  'TypeScript',
]

export type Project = {
  slug: string
  title: string
  category: string
  tag: 'Web' | 'SaaS' | 'AI' | 'Automation' | 'Mobile' | 'E-commerce'
  year: string
  summary: string
  image: string
  liveUrl?: string
  stack: string[]
}


export const PROJECTS: Project[] = [
  {
    slug: 'dairy-barn-and-grill',
    title: 'Dairy Barn & Grill',
    category: 'Restaurant Website',
    tag: 'Web',
    year: '2024',
    summary: 'A full-featured restaurant website with online menu, location info and brand storytelling for a beloved Canadian dining destination.',
    image: '/p1.jpeg',
    liveUrl: '',
    stack: ['Next.js', 'Tailwind', 'Vercel'],
  },
  {
    slug: 'sleek-automotive',
    title: 'Sleek Automotive',
    category: 'Automotive Website',
    tag: 'Web',
    year: '2024',
    summary: 'A sleek, performance-focused website for an automotive business built to showcase vehicles, services and drive customer enquiries.',
    image: '/p2.jpeg',
    liveUrl: '',
    stack: ['Next.js', 'TypeScript', 'Tailwind'],
  },
  {
    slug: 'eza-logistics',
    title: 'EZA Logistics',
    category: 'Logistics & Transport Website',
    tag: 'Web',
    year: '2024',
    summary: 'A professional logistics company website communicating services, fleet capabilities and a seamless quote request experience.',
    image: '/p3.jpeg',
    liveUrl: '',
    stack: ['Next.js', 'Tailwind', 'Vercel'],
  },
  {
    slug: 'al-chemist-coffee-bar',
    title: 'Al Chemist Coffee Bar',
    category: 'Cafe & Bar Website',
    tag: 'Web',
    year: '2025',
    summary: 'A rich, atmospheric website for a specialty coffee bar capturing brand identity, menu offerings and the in-store experience online.',
    image: '/p5.jpeg',
    liveUrl: '',
    stack: ['Next.js', 'Sanity', 'Tailwind'],
  },
  {
    slug: 'mmm-studio-by-moni',
    title: 'MMM Studio By Moni',
    category: 'Beauty & Makeup Studio Website',
    tag: 'Web',
    year: '2025',
    summary: 'An elegant portfolio and booking website for a professional makeup studio showcasing work, services and enabling direct client bookings.',
    image: '/p6.jpeg',
    liveUrl: '',
    stack: ['Next.js', 'Tailwind', 'Vercel'],
  },
  {
    slug: 'sudcan-painting',
    title: 'Sudcan Painting',
    category: 'Trades & Services Website',
    tag: 'Web',
    year: '2024',
    summary: 'A clean, trust-building website for a professional painting contractor featuring services, past work gallery and a simple quote request form.',
    image: '/p7.jpeg',
    liveUrl: '',
    stack: ['Next.js', 'Tailwind', 'Vercel'],
  },
  {
    slug: 'proper-accounting-uk',
    title: 'Proper Accounting UK',
    category: 'Accounting & Finance Website',
    tag: 'Web',
    year: '2025',
    summary: 'A professional accounting firm website built to communicate expertise, services and compliance knowledge to UK-based business clients.',
    image: '/p8.jpeg',
    liveUrl: '',
    stack: ['Next.js', 'TypeScript', 'Tailwind'],
  },
  {
    slug: 'prudential-legal-services',
    title: 'Prudential Legal Services',
    category: 'Legal Services Website',
    tag: 'Web',
    year: '2025',
    summary: 'A credibility-first legal services website conveying authority, practice areas and a clear path for prospective clients to get in touch.',
    image: '/p9.jpeg',
    liveUrl: '',
    stack: ['Next.js', 'Tailwind', 'Vercel'],
  },
  {
    slug: 'lepro-wellness-center',
    title: 'Lepro Wellness Center',
    category: 'Health & Wellness Website',
    tag: 'Web',
    year: '2025',
    summary: 'A calming, conversion-focused wellness center website featuring services, team profiles and an integrated appointment booking system.',
    image: '/p10.jpeg',
    liveUrl: '',
    stack: ['Next.js', 'Sanity', 'Tailwind'],
  },
  {
    slug: 'lucky-driving-school',
    title: 'Lucky Driving School',
    category: 'Driving School Website',
    tag: 'Web',
    year: '2025',
    summary: 'A clear, action-oriented website for a driving school covering lesson packages, instructor profiles and a streamlined online booking flow.',
    image: '/p11.jpeg',
    liveUrl: '',
    stack: ['Next.js', 'Tailwind', 'Vercel'],
  },
]

export const SOLUTIONS = [
  { no: '01', title: 'Business Automation', body: 'Remove repetitive manual work with orchestrated workflows across every tool you use.' },
  { no: '02', title: 'AI Integration', body: 'Embed agents, assistants and intelligent search directly into your products and operations.' },
  { no: '03', title: 'Digital Transformation', body: 'Replace legacy systems with modern, connected infrastructure built to evolve.' },
  { no: '04', title: 'Customer Experience', body: 'Design and engineer experiences that convert, retain and delight at every touchpoint.' },
  { no: '05', title: 'Internal Tools', body: 'Custom dashboards and tooling shaped exactly around how your teams work.' },
  { no: '06', title: 'E-commerce', body: 'Storefronts, POS and payment systems engineered for reliability and growth.' },
  { no: '07', title: 'Operations', body: 'Connect data and processes so your operations run without friction or gaps.' },
  { no: '08', title: 'Data & Analytics', body: 'Turn scattered data into clear, actionable insight with pipelines and dashboards.' },
]

export type InsightSection = {
  type: 'heading' | 'paragraph' | 'callout' | 'list' | 'code'
  content: string
  items?: string[]   // for list type
  label?: string     // for callout/code label
}

export type Insight = {
  slug: string
  title: string
  category: string
  excerpt: string
  date: string
  readTime: string
  body: InsightSection[]
  keyTakeaways: string[]
  tags: string[]
}

const insightDateValue = (date: string) => {
  const [month, year] = date.split(' ')
  return Date.parse(`${month} 1, ${year}`)
}

export const INSIGHTS: Insight[] = ([
  {
    slug: 'website-redesign-that-generates-enquiries',
    title: 'How to Plan a Website Redesign That Generates Enquiries',
    category: 'Web Development',
    excerpt:
      'A practical UK and Canada business guide to improving website conversions, clarifying your offer and turning more qualified visits into enquiries.',
    date: 'Nov 2026',
    readTime: '6 min',
    tags: ['Website Redesign', 'Conversion', 'Web Development', 'UK', 'Canada'],
    keyTakeaways: [
      'Start with visitor needs and business goals, not visual trends.',
      'Make your service, audience and next step clear on the first screen.',
      'Use relevant proof and remove unnecessary form friction.',
      'Measure qualified enquiries and calls, not just page views.',
    ],
    body: [
      {
        type: 'paragraph',
        content:
          'A website redesign is only successful if it helps the right people take a useful next step. A fresh visual style can help, but it will not fix an unclear offer, missing evidence or a contact journey that asks too much too soon. Before changing the design, understand what prospective customers need to know before they feel confident contacting you.',
      },
      {
        type: 'heading',
        content: 'Begin with the questions customers ask',
      },
      {
        type: 'paragraph',
        content:
          'Talk to recent customers and your sales team. What problem led them to search? What alternatives did they compare? What made them choose you, and what nearly stopped them? Use those answers to organize your pages around real buyer questions: who you help, what you deliver, how the engagement works and what happens after someone gets in touch.',
      },
      {
        type: 'heading',
        content: 'Make the first screen specific',
      },
      {
        type: 'paragraph',
        content:
          'A visitor should quickly understand the service, the kind of business it is for and the next step. Replace broad claims such as “innovative digital solutions” with plain language about outcomes and services. Put one primary call to action near the headline, then use a secondary link for visitors who need more detail before speaking with you.',
      },
      {
        type: 'callout',
        label: 'Quick test',
        content:
          'Show your homepage to someone outside your business for five seconds. Ask who the company helps, what it does and what they should do next. If they cannot answer, simplify the message before adding more sections.',
      },
      {
        type: 'heading',
        content: 'Use evidence that answers buyer doubts',
      },
      {
        type: 'paragraph',
        content:
          'Specific, verifiable proof helps prospects assess risk. Explain your process, show real work with context, identify the people involved and answer practical questions about timelines, ownership and support. Do not invent testimonials, client results or project counts; unsupported claims can reduce trust instead of building it.',
      },
      {
        type: 'heading',
        content: 'Make contacting you feel easy',
      },
      {
        type: 'paragraph',
        content:
          'Ask only for details you need to start a conversation. Make optional fields clearly optional, use a short message prompt, and tell visitors what happens after they submit. Offer a direct email or messaging option for people who prefer not to use a form. On mobile, make buttons easy to tap and ensure the form does not lose information when an error occurs.',
      },
      {
        type: 'heading',
        content: 'Measure meaningful outcomes after launch',
      },
      {
        type: 'paragraph',
        content:
          'Track organic search impressions, relevant landing-page visits, contact-button clicks, completed forms and qualified enquiries. Review the search terms people use and the pages where they leave. A rise in traffic without relevant enquiries may mean the targeting or message is off; a smaller number of qualified conversations can be more useful than a large volume of unfocused visits.',
      },
      {
        type: 'paragraph',
        content:
          'A conversion-focused redesign combines clear messaging, useful proof, fast pages and a low-friction contact path. Solvix Core works with UK and Canadian businesses on websites and web applications built around those goals. If you are planning a redesign, tell us what is not working and we can help you identify a practical first step.',
      },
    ],
  },
  {
    slug: 'saas-mvp-planning-for-founders',
    title: 'SaaS MVP Planning: What to Build First',
    category: 'SaaS',
    excerpt:
      'A founder-friendly framework for validating a SaaS idea, prioritising the first release and avoiding months of unnecessary product development.',
    date: 'Nov 2026',
    readTime: '6 min',
    tags: ['SaaS MVP', 'Startups', 'Product Strategy', 'Software Development'],
    keyTakeaways: [
      'Validate the customer problem before committing to a large build.',
      'Design an MVP around one complete, valuable user journey.',
      'Treat security, data ownership and support as launch requirements.',
      'Use real user behaviour to decide what to build next.',
    ],
    body: [
      {
        type: 'paragraph',
        content:
          'An MVP is not a half-finished version of the product you hope to build one day. It is the smallest dependable product that lets you test an important business assumption with real users. For a SaaS founder, that means choosing one audience, one painful problem and one workflow valuable enough that a customer will use it and give honest feedback.',
      },
      {
        type: 'heading',
        content: 'Validate the problem before the backlog',
      },
      {
        type: 'paragraph',
        content:
          'Interview people who experience the problem today. Ask how they solve it, what it costs them and what they have already tried. Look for repeated behaviour, not just encouragement. A polite “I would use that” is weaker evidence than someone agreeing to test a prototype, share a sample workflow or discuss a paid pilot.',
      },
      {
        type: 'heading',
        content: 'Scope one complete journey',
      },
      {
        type: 'paragraph',
        content:
          'Map the shortest end-to-end journey that delivers the main value: how a customer starts, provides information, sees a result and returns to use the product again. Keep the first release focused on this path. Features such as advanced reporting, multiple integrations and elaborate configuration can wait unless they are essential to the core promise.',
      },
      {
        type: 'list',
        content: 'Before development, agree on:',
        items: [
          'The target customer and the problem the product addresses.',
          'The first workflow a customer must complete successfully.',
          'The evidence that would confirm or challenge your assumptions.',
          'The integrations, data and permissions required for that workflow.',
          'Who will support early users and make product decisions.',
        ],
      },
      {
        type: 'callout',
        label: 'Keep quality in scope',
        content:
          'A small MVP can still require secure authentication, sensible access controls, backups, error handling and clear data ownership. “Minimum” means less scope—not avoidable risk for your first customers.',
      },
      {
        type: 'heading',
        content: 'Choose a delivery plan that preserves learning',
      },
      {
        type: 'paragraph',
        content:
          'Break the work into milestones that produce something testable. Start by resolving the highest-risk unknowns, especially unfamiliar integrations or complex data flows. Review working software regularly with a few representative users, and keep a record of what they actually do. This gives you options to adjust before too much budget is committed to assumptions.',
      },
      {
        type: 'heading',
        content: 'Decide what happens after launch',
      },
      {
        type: 'paragraph',
        content:
          'A SaaS product needs an owner after the first release. Plan who responds to support requests, monitors service health, handles data requests and schedules maintenance. Make sure your company has access to its repository, infrastructure and documentation. These basics make it possible to improve the product without depending on undocumented knowledge.',
      },
      {
        type: 'paragraph',
        content:
          'The best first release creates useful evidence: users can complete the core task, the business can learn from their behaviour, and the team can operate the product responsibly. Solvix Core helps founders turn SaaS ideas into scoped, production-minded delivery plans. Start with the problem you want to validate, not a long feature list.',
      },
    ],
  },
  {
    slug: 'when-to-use-ai-automation-in-your-business',
    title: 'When Should a Business Use AI Automation?',
    category: 'AI',
    excerpt:
      'Learn where AI automation can help, which processes should stay human-led, and how to run a low-risk pilot with measurable results.',
    date: 'Nov 2026',
    readTime: '6 min',
    tags: ['AI Automation', 'Business Process', 'ROI', 'UK', 'Canada'],
    keyTakeaways: [
      'Use AI where language or classification work is repetitive and reviewable.',
      'Keep people involved when decisions are sensitive or hard to reverse.',
      'Check data quality, privacy and system integrations before selecting a tool.',
      'Pilot against a baseline and measure quality as well as time saved.',
    ],
    body: [
      {
        type: 'paragraph',
        content:
          'AI automation can help teams process documents, classify incoming requests, draft responses and find information across internal knowledge. It is not automatically the right answer for every repetitive task. A reliable rule-based workflow may be cheaper and easier to audit, while a high-impact decision may need a person to review every result. The right choice depends on the work, the risks and the evidence you can collect.',
      },
      {
        type: 'heading',
        content: 'Look for work with clear boundaries',
      },
      {
        type: 'paragraph',
        content:
          'Good pilot candidates tend to have repeated inputs, a defined outcome and examples that people can use to judge quality. Document the current steps and exceptions first. For example, AI might extract fields from incoming documents for an employee to verify, or draft a response that a support agent edits before sending. Those workflows can save effort while keeping an accountable person in control.',
      },
      {
        type: 'heading',
        content: 'Know when a human decision matters',
      },
      {
        type: 'paragraph',
        content:
          'Keep a human in the loop when an incorrect result could affect a customer relationship, financial outcome, legal obligation or access to a service. Define what the system is allowed to do, when it must ask for review and how a person can correct the result. Avoid letting a model take irreversible actions based only on an unverified response.',
      },
      {
        type: 'list',
        content: 'Before a pilot, answer these practical questions:',
        items: [
          'Is the source information accurate, current and permitted for this use?',
          'How will you identify a wrong, incomplete or uncertain output?',
          'Which actions require approval before they affect a customer or record?',
          'Can staff see what the system did and correct it?',
          'What is the fallback if the model or an integration is unavailable?',
        ],
      },
      {
        type: 'heading',
        content: 'Measure the whole result',
      },
      {
        type: 'paragraph',
        content:
          'Record a baseline before changing the workflow: time per case, error rate, rework and time to respond. During the pilot, measure those same outcomes along with review effort and operating costs. A process that saves minutes but creates more corrections may not be an improvement. Set a clear stop condition as well as a success condition so the team knows when to pause or redesign the pilot.',
      },
      {
        type: 'callout',
        label: 'Start small',
        content:
          'Test one workflow with a limited group, representative examples and a clear human review path. Expand only after the results are consistent and the process owner is comfortable operating it.',
      },
      {
        type: 'heading',
        content: 'Plan for privacy and ongoing ownership',
      },
      {
        type: 'paragraph',
        content:
          'Review what data is sent to each service, who can access the outputs and how long information is retained. Use approved accounts and least-privilege access. Assign a process owner who can review failures, update guidance and decide when the workflow should change. AI systems are products that need maintenance, not one-time integrations that can be forgotten after launch.',
      },
      {
        type: 'paragraph',
        content:
          'AI automation is most useful when it improves a defined process without hiding responsibility. If you are considering an AI assistant or workflow automation for your business, Solvix Core can help evaluate the use case, risks and smallest sensible pilot before you invest in a larger build.',
      },
    ],
  },
  {
    slug: 'designing-ai-agents-for-production',
    title: 'Designing AI Agents That Survive Production',
    category: 'AI',
    excerpt: 'What actually breaks when you move an AI agent from a demo to real, messy business workflows — and how to design around it.',
    date: 'Sep 2026',
    readTime: '8 min',
    tags: ['AI Agents', 'LLM', 'Production', 'Architecture'],
    keyTakeaways: [
      'Demos work on clean inputs. Production does not have clean inputs.',
      'Guardrails are not optional — they are load-bearing architecture.',
      'Every agent needs an eject button: a clear path to human handoff.',
      'Observability on agents is harder than on APIs, and twice as important.',
      'Latency is a UX problem. Design around it from day one.',
    ],
    body: [
      {
        type: 'paragraph',
        content:
          'The demo worked perfectly. The agent answered every question, routed every request, and summarised every document flawlessly. Then it hit real users. Within 48 hours it was hallucinating customer names, looping on ambiguous inputs, and occasionally emailing the wrong person. This is not a cautionary tale — this is a pattern we have seen on nearly every AI project we have shipped.',
      },
      {
        type: 'heading',
        content: 'Why demos lie',
      },
      {
        type: 'paragraph',
        content:
          'Demos are curated. The inputs are clean, the context is complete, and the person running the demo knows what the agent can handle. Production is the opposite. Users write in fragments, switch topics mid-conversation, attach malformed files, and ask questions the agent was never designed to answer. If your agent was only tested on good inputs, you do not have a production agent — you have a demo.',
      },
      {
        type: 'callout',
        label: 'Key insight',
        content:
          'The failure mode is not the LLM. The failure mode is the assumptions baked into the system around the LLM — the prompt, the context window, the routing logic, and the absence of fallbacks.',
      },
      {
        type: 'heading',
        content: 'The three layers that actually break',
      },
      {
        type: 'list',
        content: 'In every production AI system we have built, breakage concentrates in three places:',
        items: [
          'Context assembly — the code that builds the prompt. Off-by-one errors, missing delimiters, stale data from a cache, or a context window that silently truncates. None of this surfaces in a demo.',
          'Routing logic — the code that decides which tool or agent handles a request. Ambiguous inputs hit the wrong branch. Edge cases fall through to no branch at all.',
          'Output handling — the code that consumes the LLM response. Parsing brittle JSON, assuming a specific format, failing silently when the model diverges from the expected schema.',
        ],
      },
      {
        type: 'heading',
        content: 'Guardrails are load-bearing, not cosmetic',
      },
      {
        type: 'paragraph',
        content:
          'Most teams treat guardrails as a post-launch checklist item. Block bad words, add a disclaimer, ship it. That is not guardrails — that is theatre. Real guardrails are structural. They define what the agent is allowed to do, what it must refuse, how it handles uncertainty, and what happens when confidence is low. They need to be designed in from the start, not bolted on after the first incident.',
      },
      {
        type: 'paragraph',
        content:
          'We use a simple rule: every action an agent can take that has side effects — sending a message, updating a record, making an API call — requires an explicit confidence threshold before it fires. Below that threshold, the agent surfaces the action for human review instead of executing it. This single pattern has prevented more production incidents than any other measure we have implemented.',
      },
      {
        type: 'heading',
        content: 'Build the eject button first',
      },
      {
        type: 'paragraph',
        content:
          'Before we write a single line of agent logic, we design the human handoff path. What does the agent say when it cannot handle a request? Where does that request go? Who gets notified? How long before it escalates? This is not a fallback — it is a first-class feature. Users trust a system that knows its limits more than one that confidently answers everything.',
      },
      {
        type: 'heading',
        content: 'Observability is not optional',
      },
      {
        type: 'paragraph',
        content:
          'Standard application monitoring does not work for agents. A 200 OK from your LLM call tells you nothing about whether the response was correct, helpful, or safe. You need to log inputs, outputs, tool calls, confidence scores, and escalations — and you need a way to replay and audit individual conversations. We treat every agent interaction as a structured trace, not a log line.',
      },
      {
        type: 'callout',
        label: 'What we do',
        content:
          'Every agent we ship includes a dashboard that shows live escalation rate, average confidence score, tool call distribution, and a conversation replay tool. This is non-negotiable. Without it, you are flying blind.',
      },
      {
        type: 'heading',
        content: 'Latency is a design constraint, not an afterthought',
      },
      {
        type: 'paragraph',
        content:
          'LLM calls are slow. GPT-4 can take 5–15 seconds for a complex response. In a chat interface, that is tolerable. In a workflow that chains three agent calls, that is a 30–45 second wait. Users abandon. The system looks broken even when it is working correctly. Design for latency from day one: stream responses where possible, parallelize independent tool calls, cache deterministic lookups, and set clear timeout budgets for every step in the chain.',
      },
    ],
  },
  {
    slug: 'automation-without-chaos',
    title: 'Automation Without the Chaos',
    category: 'Automation',
    excerpt: 'A pragmatic framework for introducing n8n and process automation without creating a fragile web of hidden dependencies.',
    date: 'Aug 2026',
    readTime: '6 min',
    tags: ['n8n', 'Automation', 'Workflow', 'Architecture'],
    keyTakeaways: [
      'Automate stable processes first. Do not automate what is still changing.',
      'Every workflow needs an owner — not a team, one person.',
      'Treat automation failures as first-class incidents, not silent errors.',
      'Document the workflow in plain English before you build it in n8n.',
      'Version control your workflows. Unversioned automation is technical debt.',
    ],
    body: [
      {
        type: 'paragraph',
        content:
          'Automation is one of the highest-ROI investments a business can make. It is also one of the fastest ways to create a fragile, undocumented web of hidden dependencies that no one understands six months later. We have inherited both kinds. The difference is almost always in how the automation was introduced, not how it was built.',
      },
      {
        type: 'heading',
        content: 'The automation graveyard problem',
      },
      {
        type: 'paragraph',
        content:
          'Most automation projects start the same way: someone discovers n8n, builds a workflow in an afternoon that saves them two hours a week, and shares it with the team. Three months later there are forty workflows. Half of them overlap. A quarter of them are broken and silently failing. Nobody knows which ones are critical. The person who built them left. This is the automation graveyard, and it is more common than any vendor will tell you.',
      },
      {
        type: 'callout',
        label: 'The rule',
        content: 'Before you build a workflow, write down what it does, who owns it, what it connects to, and what happens when it fails. If you cannot answer all four questions, you are not ready to automate yet.',
      },
      {
        type: 'heading',
        content: 'Automate stable processes first',
      },
      {
        type: 'paragraph',
        content:
          'Automation encodes assumptions about how a process works. If the process is still changing, the automation becomes wrong before it becomes useful. The best candidates for early automation are processes that have been running the same way for at least three months, involve more than two manual steps, and produce the same output every time given the same input. Data sync, report generation, notification routing, and lead enrichment are almost always good starting points.',
      },
      {
        type: 'heading',
        content: 'Every workflow needs a named owner',
      },
      {
        type: 'paragraph',
        content:
          'Not a team. One person. When a workflow fails at 3am and a customer is affected, someone needs to be paged. When the API it connects to changes its schema, someone needs to update it. "The team owns it" means no one owns it. Assign a human name to every workflow in production.',
      },
      {
        type: 'heading',
        content: 'Failures are incidents, not log lines',
      },
      {
        type: 'paragraph',
        content:
          'n8n will retry failed steps. That is useful. It will also silently succeed at retrying while the data it processed is now corrupted, duplicated, or incomplete. Silent success is worse than explicit failure. Instrument every workflow with an explicit failure path: a Slack message, a ticket, an email — something that creates a visible signal when the workflow does not complete as expected. Treat that signal like a production incident.',
      },
      {
        type: 'heading',
        content: 'Version control is not optional',
      },
      {
        type: 'paragraph',
        content:
          'n8n exports workflows as JSON. Check them in. Every change should go through the same review process as application code — especially for workflows that touch customer data or financial records. We use a simple convention: a workflows/ directory in the project repo, one file per workflow, named by its function not its ID. Changes are reviewed in pull requests. Deployments are logged.',
      },
      {
        type: 'list',
        content: 'The framework we use before building any new workflow:',
        items: [
          'Write the process in plain English, step by step.',
          'Identify every external system it touches.',
          'Define the success condition and the failure condition.',
          'Assign an owner and a on-call escalation path.',
          'Build a minimal version first — one happy path, then edge cases.',
          'Add monitoring before you add complexity.',
        ],
      },
    ],
  },
  {
    slug: 'the-case-for-boring-infrastructure',
    title: 'The Case for Boring Infrastructure',
    category: 'Technology',
    excerpt: 'Why the most reliable SaaS products are built on unglamorous, well-understood foundations.',
    date: 'Aug 2026',
    readTime: '5 min',
    tags: ['Infrastructure', 'PostgreSQL', 'Architecture', 'SaaS'],
    keyTakeaways: [
      'Boring technology is predictable. Predictable technology is reliable.',
      'The cost of novel infrastructure is paid in debugging, not licensing.',
      'PostgreSQL solves more problems than most teams give it credit for.',
      'Every exotic dependency is a bus-factor risk and a hiring tax.',
      'Optimize for operational simplicity, not architectural elegance.',
    ],
    body: [
      {
        type: 'paragraph',
        content:
          'Every generation of engineers has its exotic stack. In the early 2010s it was Cassandra and Riak. In the late 2010s it was Kafka for everything and microservices for a CRUD app. Today it is vector databases, edge compute for things that should be server-rendered, and distributed systems patterns applied to problems that a single Postgres instance would solve in milliseconds. The pattern is consistent: novel technology gets adopted for reasons of fashion, then paid for in years of operational pain.',
      },
      {
        type: 'heading',
        content: 'What "boring" actually means',
      },
      {
        type: 'paragraph',
        content:
          'Boring technology is not old technology. It is technology that is well-understood, well-documented, and well-staffed. It has known failure modes, mature operational tooling, and a large pool of engineers who can work with it. When something goes wrong at 2am — and it will — boring technology means you can find the answer in the docs or Stack Overflow in minutes, not wait for a vendor to respond to a support ticket.',
      },
      {
        type: 'callout',
        label: 'The test',
        content: 'Before adopting a new piece of infrastructure, ask: if this breaks in production at 3am, can I diagnose and fix it without the vendor? If the answer is no, you are outsourcing reliability to someone who is not on your on-call rotation.',
      },
      {
        type: 'heading',
        content: 'PostgreSQL is underrated at every scale',
      },
      {
        type: 'paragraph',
        content:
          'We have built multi-tenant SaaS products serving millions of rows on a single Postgres instance with no performance issues. Postgres handles JSONB for flexible schemas, full-text search, time-series data with partitioning, geospatial queries with PostGIS, and queue-like workloads with SKIP LOCKED. Before reaching for Redis, Elasticsearch, or a purpose-built time-series database, we always ask: can Postgres do this? More often than not, the answer is yes — and the operational simplicity of one database instead of three is worth the marginal performance trade-off.',
      },
      {
        type: 'heading',
        content: 'The hiring tax on exotic stacks',
      },
      {
        type: 'paragraph',
        content:
          "Every unusual technology in your stack is a hiring filter. Not the good kind. It narrows your candidate pool, increases onboarding time, and makes every future engineer's first three weeks harder. If your data pipeline requires deep knowledge of Apache Flink, you have just eliminated 95% of available engineers from being able to maintain it. Choose technology that the next person you hire can understand on day one.",
      },
      {
        type: 'heading',
        content: 'When novel is the right choice',
      },
      {
        type: 'paragraph',
        content:
          'This is not an argument against ever adopting new technology. Vector databases are genuinely useful for semantic search in ways that Postgres cannot fully replicate today. Edge compute solves real latency problems for global products. The question is not "is this technology good?" but "is this technology the right trade-off for this business, at this stage, with this team?" In almost every early-stage SaaS product, the answer favours boring — and the time saved on infrastructure is better spent on the product.',
      },
    ],
  },
  {
    slug: 'web-performance-as-a-feature',
    title: 'Web Performance Is a Feature',
    category: 'Web Development',
    excerpt: 'How treating Core Web Vitals as a product requirement changes the way you build.',
    date: 'Jul 2026',
    readTime: '7 min',
    tags: ['Performance', 'Core Web Vitals', 'Next.js', 'UX'],
    keyTakeaways: [
      'Every 100ms of load time costs measurable conversion. This is not theoretical.',
      'LCP is the metric that matters most for first impressions.',
      'CLS is almost always caused by images and fonts without explicit dimensions.',
      'Performance budgets defined at the start of a project prevent regression.',
      'Lighthouse is a floor, not a ceiling. Real-user monitoring is the source of truth.',
    ],
    body: [
      {
        type: 'paragraph',
        content:
          'Performance is not a technical concern. It is a product decision with measurable business impact. Amazon measured that every 100ms of latency cost them 1% in sales. Google found that a 0.1-second improvement in mobile load time increased conversions by 8% in retail and 10% in travel. These numbers are from companies with enormous sample sizes. They are not flukes. When a page is slow, users leave — and they do not come back.',
      },
      {
        type: 'heading',
        content: 'Why Core Web Vitals matter beyond SEO',
      },
      {
        type: 'paragraph',
        content:
          'Core Web Vitals get most of their attention as an SEO ranking signal. That framing undersells them. LCP (Largest Contentful Paint), CLS (Cumulative Layout Shift), and INP (Interaction to Next Paint) are measurements of real user experience. A high CLS score means your page is jumping around while users try to read it. A slow LCP means users are staring at a blank or partial screen. These are not theoretical quality metrics — they are direct measurements of friction in the experience.',
      },
      {
        type: 'callout',
        label: 'The number that changes minds',
        content: 'A 1-second delay in page load reduces conversions by an average of 7%. On a site doing $100k/month, that is $7,000 left on the table every month for every second of avoidable delay.',
      },
      {
        type: 'heading',
        content: 'The most common CWV killers',
      },
      {
        type: 'list',
        content: 'After auditing dozens of Next.js projects, the same culprits appear repeatedly:',
        items: [
          'Images without explicit width and height attributes causing layout shift (CLS).',
          'Web fonts loaded without font-display: swap, blocking first render.',
          'Large JavaScript bundles that are not code-split, delaying interactivity.',
          'Unoptimised third-party scripts (analytics, chat widgets, tag managers) loaded synchronously.',
          'Server components fetching data sequentially instead of in parallel.',
          'Hero images not marked as priority, meaning the browser de-prioritises them.',
        ],
      },
      {
        type: 'heading',
        content: 'Setting a performance budget',
      },
      {
        type: 'paragraph',
        content:
          'A performance budget is a set of thresholds — LCP under 2.5s, CLS under 0.1, total JavaScript under 200KB — defined at the start of the project and enforced in CI. The value of a budget is not in the specific numbers; it is in the conversation it forces. When a designer wants to add a 4MB video background, the budget makes the trade-off explicit. When an engineer wants to pull in a new third-party widget, the bundle size check makes the cost visible before it ships.',
      },
      {
        type: 'heading',
        content: 'Lighthouse is a floor, not a ceiling',
      },
      {
        type: 'paragraph',
        content:
          'A 100 Lighthouse score in a controlled lab environment says nothing about real-user experience on a $200 Android phone on a 4G connection in a rural area. Lab scores are useful for catching obvious regressions. Real-User Monitoring (RUM) — using tools like Vercel Analytics, web-vitals.js, or Datadog — is how you see what your actual users are experiencing. Run both. Weight the RUM data more heavily when making decisions.',
      },
    ],
  },
  {
    slug: 'scaling-a-saas-data-model',
    title: 'Scaling a SaaS Data Model',
    category: 'SaaS',
    excerpt: 'Multi-tenancy decisions you make on day one that determine what is possible on day one thousand.',
    date: 'Jul 2026',
    readTime: '9 min',
    tags: ['SaaS', 'PostgreSQL', 'Multi-tenancy', 'Architecture'],
    keyTakeaways: [
      'Row-level tenancy is the right default for most early-stage SaaS.',
      'Add tenant_id to every table before you have more than one tenant.',
      'Shared schema with RLS is PostgreSQL\'s killer feature for multi-tenant SaaS.',
      'Plan your indexing strategy around tenant_id from day one.',
      'The data model you choose on day one is the hardest thing to change later.',
    ],
    body: [
      {
        type: 'paragraph',
        content:
          'The most important architecture decision in a SaaS product is not which framework you use, which cloud you deploy to, or which ORM you pick. It is how you isolate tenant data. Get it wrong and you will spend years working around it. Get it right and it becomes invisible infrastructure that scales quietly in the background while you focus on the product.',
      },
      {
        type: 'heading',
        content: 'The three tenancy models',
      },
      {
        type: 'list',
        content: 'There are three standard approaches to multi-tenant data isolation, each with different trade-offs:',
        items: [
          'Separate databases per tenant — maximum isolation, maximum operational overhead. Right for enterprise products with strict compliance requirements or wildly different data volumes per tenant.',
          'Separate schemas per tenant (in Postgres) — strong isolation, moderate overhead. Useful when tenants need custom fields or schema extensions.',
          'Shared schema with a tenant_id column — lowest overhead, scales well, right default for most SaaS products. Requires careful use of Row Level Security (RLS) to prevent data leakage.',
        ],
      },
      {
        type: 'paragraph',
        content:
          'We use shared schema with RLS for the majority of projects. It means one database to manage, one schema to migrate, and one set of indexes to maintain. The isolation guarantee comes from Postgres RLS policies, which filter rows at the database level — not in application code, where it is easier to get wrong.',
      },
      {
        type: 'callout',
        label: 'The one rule',
        content: 'Add tenant_id to every single table before you have more than one tenant. Retrofitting it later is painful, migration-heavy, and risky. The cost of adding it early is one extra column. The cost of adding it late is a multi-day migration on a live database.',
      },
      {
        type: 'heading',
        content: 'Row Level Security in practice',
      },
      {
        type: 'paragraph',
        content:
          'PostgreSQL Row Level Security lets you define policies that automatically filter queries based on a session variable. Set the current tenant ID at the start of each request, and every query in that request automatically sees only that tenant\'s rows. You cannot forget to add a WHERE tenant_id = ? clause because the database enforces it for you. This is the correct level of defence for tenant isolation — the application layer is too easy to accidentally bypass.',
      },
      {
        type: 'code',
        label: 'RLS policy example',
        content: `-- Enable RLS on the table
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Policy: users see only their tenant's rows
CREATE POLICY tenant_isolation ON projects
  USING (tenant_id = current_setting('app.tenant_id')::uuid);

-- Set at the start of each request
SET LOCAL app.tenant_id = '${'{tenant_id}'}';`,
      },
      {
        type: 'heading',
        content: 'Indexing for multi-tenant queries',
      },
      {
        type: 'paragraph',
        content:
          'In a single-tenant app, you index on the columns you filter by most. In a multi-tenant app, almost every query starts with tenant_id, so almost every index should start with tenant_id as the leading column. A composite index on (tenant_id, created_at) will serve most list queries. A composite index on (tenant_id, status) will serve most filtered list queries. Without this, even a small table will do sequential scans once you have hundreds of tenants.',
      },
      {
        type: 'heading',
        content: 'The migration you cannot avoid',
      },
      {
        type: 'paragraph',
        content:
          'Every SaaS product eventually needs to move some tenants to dedicated infrastructure — either for performance, compliance, or because a large customer demands it. Design for this from the start. Use UUIDs for all IDs (not auto-incrementing integers), keep tenant_id consistent across all tables, and avoid any schema-level coupling between tenants. When the time comes to extract a tenant, it should be a data migration, not an architectural rewrite.',
      },
    ],
  },
  {
    slug: 'technology-that-earns-its-keep',
    title: 'Technology That Earns Its Keep',
    category: 'Business',
    excerpt: 'A simple test for whether a new system is actually worth building for your business.',
    date: 'Jun 2026',
    readTime: '4 min',
    tags: ['Strategy', 'ROI', 'Business', 'Decision-making'],
    keyTakeaways: [
      'Technology is a means to a business end, not an end in itself.',
      'If you cannot articulate the ROI in one sentence, the project is not ready.',
      'The best technology decision is sometimes to not build.',
      'Maintenance cost is almost always underestimated. Double your estimate.',
      'A system that 3 people depend on and 0 people understand is a liability.',
    ],
    body: [
      {
        type: 'paragraph',
        content:
          'We turn down projects. Not often, but regularly. Usually it is a business that wants to build a custom system to replace something that an off-the-shelf tool already does perfectly well. Or a startup that wants to build an internal tool before they have validated that anyone will pay for their product. Or a company that wants to add AI to something where the existing manual process is fast, accurate, and costs $200 a month. We turn these down because building them would not help the business — it would consume resources that the business needs for things that actually matter.',
      },
      {
        type: 'heading',
        content: 'The one-sentence ROI test',
      },
      {
        type: 'paragraph',
        content:
          'Before committing to any significant technology investment, we ask the client to complete this sentence: "We are building this because it will [specific outcome] by [measurable amount] within [timeframe]." If they cannot complete it, the project is not ready. This is not a paperwork exercise — it is the forcing function that separates technology that earns its keep from technology that feels important in a meeting.',
      },
      {
        type: 'callout',
        label: 'Examples',
        content: '"We are building this because it will reduce order processing time from 4 minutes to 30 seconds, saving 20 hours per week within 3 months." That is a real ROI. "We are building this to improve operational efficiency" is not.',
      },
      {
        type: 'heading',
        content: 'The true cost of ownership',
      },
      {
        type: 'paragraph',
        content:
          'Every system you build has a maintenance cost. Someone needs to keep it running, update its dependencies, handle the edge cases that the original spec did not anticipate, and train new team members on how it works. This cost is almost always underestimated in the initial project, and it compounds every year the system exists. We tell every client to double whatever maintenance estimate we give them — and to ask themselves whether the system will still be worth its cost in three years, not just in the first three months.',
      },
      {
        type: 'heading',
        content: 'When not building is the right answer',
      },
      {
        type: 'list',
        content: 'We recommend not building when:',
        items: [
          'An existing tool solves 90% of the problem for less than the cost of one sprint.',
          'The process the system would automate is still changing frequently.',
          'The team that will maintain the system does not yet exist.',
          'The expected users are fewer than 10 people and the volume is low.',
          'The ROI depends on assumptions that have not been validated.',
        ],
      },
      {
        type: 'paragraph',
        content:
          'None of this means technology is not valuable. It means technology is most valuable when it is chosen deliberately, scoped tightly, and measured honestly. The businesses we have seen get the most out of their technology investments are not the ones that build the most — they are the ones that build the right things at the right time and maintain them well.',
      },
    ],
  },
  {
    slug: 'how-to-choose-a-software-development-company',
    title: 'How to Choose a Software Development Company in 2026',
    category: 'Business',
    excerpt:
      'A practical guide to evaluating software development partners, comparing proposals, and protecting your investment before a project starts.',
    date: 'Nov 2026',
    readTime: '7 min',
    tags: ['Software Development', 'Vendor Selection', 'Project Planning', 'UK', 'Canada'],
    keyTakeaways: [
      'Start with the business outcome and constraints, not a feature wish list.',
      'Ask who will actually deliver the work and how you will work together.',
      'Compare proposals by assumptions, risks, ownership and support—not price alone.',
      'A small, testable first phase can reduce uncertainty before a larger commitment.',
    ],
    body: [
      {
        type: 'paragraph',
        content:
          'Choosing a software development company is a business decision, not just a technical one. The right partner helps you clarify the problem, make sensible trade-offs and deliver software your team can operate. The wrong fit can leave you with missed deadlines, unclear ownership and a product that solves the specification but not the underlying need. Use this guide to assess a software development partner before you sign.',
      },
      {
        type: 'heading',
        content: 'Write down the outcome before the features',
      },
      {
        type: 'paragraph',
        content:
          'Before speaking with agencies, describe the business problem in plain language. Who experiences it? How is it handled today? What should improve, and how will you measure that improvement? A useful brief also lists constraints such as launch dates, integrations, compliance needs, budget range and who will make decisions. You do not need a complete technical specification; a good partner should help you shape one.',
      },
      {
        type: 'callout',
        label: 'A better first question',
        content:
          'Instead of asking, “Can you build these features?”, ask, “What would you need to learn to recommend the smallest solution that achieves this outcome?”',
      },
      {
        type: 'heading',
        content: 'Evaluate the people and the process',
      },
      {
        type: 'paragraph',
        content:
          'Ask who will lead discovery, design and engineering after the sales conversation. Meet the people responsible for delivery and understand how often you will see working software, how decisions are documented, and how scope changes are handled. A clear weekly cadence and a named decision-maker on each side are often more valuable than a long list of tools.',
      },
      {
        type: 'list',
        content: 'Use these questions to make conversations specific:',
        items: [
          'What risks or unknowns do you see in our brief?',
          'How will you validate the most important assumptions early?',
          'Who owns the code, cloud accounts, data and documentation?',
          'How do you test releases and handle defects after launch?',
          'What support is available when the original project team moves on?',
        ],
      },
      {
        type: 'heading',
        content: 'Compare proposals on more than price',
      },
      {
        type: 'paragraph',
        content:
          'A useful proposal explains its assumptions, exclusions, milestones, team, dependencies and acceptance criteria. Compare the work included in each estimate, not just the headline total. Check whether discovery, testing, deployment, accessibility, analytics, training and post-launch support are accounted for. If two estimates differ dramatically, ask what each team understood differently before treating either number as a reliable budget.',
      },
      {
        type: 'heading',
        content: 'Protect ownership and reduce delivery risk',
      },
      {
        type: 'paragraph',
        content:
          'Make ownership explicit in the agreement. Your business should have appropriate access to source code, repositories, production environments, data and project documentation. Agree how credentials are managed and how a handover works. For uncertain projects, start with a defined discovery or prototype phase that produces decisions and evidence—not an open-ended commitment to build everything at once.',
      },
      {
        type: 'heading',
        content: 'Look for honest trade-offs',
      },
      {
        type: 'paragraph',
        content:
          'A dependable software partner will explain when an off-the-shelf product is a better choice, flag features that can wait, and discuss maintenance as well as launch. Beware of guarantees made before the team understands your systems, data and users. Clear risks and a realistic plan are stronger signals than confident promises.',
      },
      {
        type: 'paragraph',
        content:
          'The best partner is the one who can connect engineering choices to your business goals and work transparently with your team. If you are assessing a web application, SaaS product or automation project, talk to Solvix Core about the problem before committing to a build.',
      },
    ],
  },
  {
    slug: 'custom-software-development-budget-planning',
    title: 'How to Budget for Custom Software Development',
    category: 'Business',
    excerpt:
      'Understand the factors behind a custom software estimate, plan a realistic first release, and avoid common budgeting surprises.',
    date: 'Nov 2026',
    readTime: '6 min',
    tags: ['Custom Software', 'Budgeting', 'MVP', 'Project Planning'],
    keyTakeaways: [
      'Software budgets depend on scope, integrations, risk and operational needs.',
      'A clear first release is easier to estimate than an unprioritized feature backlog.',
      'Include testing, deployment, support and ongoing ownership in your plan.',
      'Discovery can replace guesswork with a phased, evidence-based estimate.',
    ],
    body: [
      {
        type: 'paragraph',
        content:
          '“How much does custom software cost?” is a reasonable first question, but there is no useful universal price without knowing what the software must do. A secure customer portal with one integration is a different project from a multi-role platform that replaces several legacy systems. A credible budget starts by identifying the outcome, boundaries and unknowns—not by guessing at a number from a feature list.',
      },
      {
        type: 'heading',
        content: 'What changes the size of a software project?',
      },
      {
        type: 'paragraph',
        content:
          'The largest cost drivers are usually the number and complexity of user journeys, integrations with third-party or legacy systems, data migration, permissions, reporting, compliance requirements and the quality bar for reliability. A polished interface is only part of the work. Authentication, error handling, testing, deployment and operational monitoring all affect the effort required to deliver software that can be used safely.',
      },
      {
        type: 'list',
        content: 'When requesting an estimate, make these assumptions visible:',
        items: [
          'Which users and roles need access, and what can each role do?',
          'Which systems must exchange data, and who controls those systems?',
          'Is existing data being migrated, cleaned or reconciled?',
          'What security, privacy, accessibility or audit requirements apply?',
          'Who will own content, support, infrastructure and future changes?',
        ],
      },
      {
        type: 'heading',
        content: 'Define a first release that proves value',
      },
      {
        type: 'paragraph',
        content:
          'A first release should deliver one meaningful outcome to a clearly defined group of users. Separate must-have workflows from improvements that can follow once people are using the product. This is not about shipping a fragile prototype; it is about avoiding speculative features while still including the quality, security and support needed for a real launch.',
      },
      {
        type: 'callout',
        label: 'A useful budget question',
        content:
          'What is the smallest dependable release that lets us test our most important business assumption with real users?',
      },
      {
        type: 'heading',
        content: 'Budget for delivery and ownership',
      },
      {
        type: 'paragraph',
        content:
          'Project estimates should make clear what is included: discovery, design, implementation, automated and manual testing, deployment, documentation and handover. Plan separately for recurring costs such as hosting, third-party services, monitoring and ongoing maintenance. If your internal team will own the product, account for training and the time needed to learn the system. If a partner will support it, agree response expectations and what counts as new work.',
      },
      {
        type: 'heading',
        content: 'Reduce uncertainty before locking the plan',
      },
      {
        type: 'paragraph',
        content:
          'When requirements are unclear or integrations are unfamiliar, a short discovery phase can map the workflows, inspect technical constraints and produce a prioritised scope. The useful outcome is not a thick document; it is a shared understanding of what to build first, what could change the estimate and which decisions are still open. Ask for estimates with explicit assumptions and ranges when the evidence does not justify false precision.',
      },
      {
        type: 'paragraph',
        content:
          'A well-planned software budget is tied to measurable business value and includes the full cost of operating the result. Solvix Core helps businesses scope custom software and web applications into clear, phased delivery plans. Bring us the problem you are trying to solve, and we can help identify the next sensible step.',
      },
    ],
  },
  {
    slug: 'business-process-automation-roi-guide',
    title: 'Business Process Automation: Find the Right First Workflow',
    category: 'Automation',
    excerpt:
      'How to identify repetitive work worth automating, estimate the real return, and introduce automation without creating fragile processes.',
    date: 'Nov 2026',
    readTime: '6 min',
    tags: ['Business Automation', 'Workflow', 'n8n', 'ROI'],
    keyTakeaways: [
      'Map the current process before choosing an automation tool.',
      'Start with repetitive, stable work that has measurable business impact.',
      'Include exceptions, monitoring and human ownership in the design.',
      'Measure quality and customer impact alongside time saved.',
    ],
    body: [
      {
        type: 'paragraph',
        content:
          'Business automation can reduce repetitive work, improve response times and make handoffs more consistent. But automating a confusing process usually makes the confusion happen faster. The best starting point is not the flashiest AI demo: it is a stable workflow with clear inputs, predictable decisions and a measurable cost when it is done manually.',
      },
      {
        type: 'heading',
        content: 'Map the process as it really works',
      },
      {
        type: 'paragraph',
        content:
          'Talk to the people doing the work and document each step, system and exception. Record how often the process runs, how long it takes, where information is re-entered and what happens when something is missing. This often reveals that the first opportunity is a small integration or validation step—not replacing the entire process with an AI agent.',
      },
      {
        type: 'heading',
        content: 'Choose a measurable first workflow',
      },
      {
        type: 'paragraph',
        content:
          'A strong candidate happens often, follows rules people can explain, uses systems with dependable interfaces and has a clear owner. Estimate the current effort using real observations rather than optimistic assumptions. Then decide how success will be measured: staff hours returned, faster turnaround, fewer errors, lower rework or a better customer experience.',
      },
      {
        type: 'callout',
        label: 'A simple ROI model',
        content:
          'Compare the ongoing cost of the manual process with the build, service and maintenance costs of automation. Include exception handling and human review; time saved on the happy path is not the whole result.',
      },
      {
        type: 'list',
        content: 'Before launch, define what happens when:',
        items: [
          'Required information is missing or does not match expected formats.',
          'A connected service is unavailable or changes its response.',
          'The workflow runs twice or a partial step must be retried.',
          'A decision is uncertain and a person needs to review it.',
          'The process owner needs to pause or change the workflow.',
        ],
      },
      {
        type: 'heading',
        content: 'Build visibility and ownership in from day one',
      },
      {
        type: 'paragraph',
        content:
          'A production workflow needs a named owner, an audit trail and alerts for failures that matter. Decide how runs are reviewed, who handles exceptions and how changes are tested. Keep credentials secure and limit the data and permissions each connection needs. For AI-assisted steps, define which decisions can be automated and which require human approval.',
      },
      {
        type: 'heading',
        content: 'Expand only after the first result is clear',
      },
      {
        type: 'paragraph',
        content:
          'Run the workflow alongside the manual process long enough to compare outcomes, then fix the failure modes before removing the old path. Once you can demonstrate improved quality, speed or cost, apply the same method to the next process. This creates a managed automation programme rather than a collection of unowned workflows.',
      },
      {
        type: 'paragraph',
        content:
          'The most effective automation is usually a series of small, well-owned improvements. If your team is spending time on repeated data entry, slow handoffs or disconnected tools, Solvix Core can help map the process and decide whether workflow automation is the right fit.',
      },
    ],
  },
] satisfies Insight[]).sort((a, b) => insightDateValue(b.date) - insightDateValue(a.date))

export const INSIGHT_CATEGORIES = ['AI', 'Automation', 'Web Development', 'SaaS', 'Technology', 'Business']

