import { Service } from "./service";

export const SERVICES_DATA: Service[] = [
  {
    id: "custom-software",
    title: "Custom Software Development",
    description:
      "Tailor-made software engineered to your exact business logic — scalable, maintainable, and built for long-term performance.",
    icon: "custom-software",
    tags: ["Python", "Node.js", "Go", "Microservices"],
    accentColor: "text-yellow-400",
    accentBg: "bg-yellow-400/10 border-yellow-400/20 text-yellow-400",
  },
  {
    id: "web-application",
    title: "Web Application Development",
    description:
      "High-performance web apps with modern stacks. From SPAs to full-stack platforms, we craft experiences users love.",
    icon: "web-app",
    tags: ["Next.js", "React", "TypeScript", "PostgreSQL"],
    accentColor: "text-sky-400",
    accentBg: "bg-sky-400/10 border-sky-400/20 text-sky-400",
  },
  {
    id: "mobile-app",
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile apps for iOS and Android with smooth UX, offline support, and real-device performance.",
    icon: "mobile-app",
    tags: ["React Native", "Flutter", "iOS", "Android"],
    accentColor: "text-orange-400",
    accentBg: "bg-orange-400/10 border-orange-400/20 text-orange-400",
  },
  {
    id: "api-integration",
    title: "API Development & Integration",
    description:
      "Robust RESTful and GraphQL APIs. We design, document, and integrate third-party services to connect your ecosystem.",
    icon: "api",
    tags: ["REST", "GraphQL", "OpenAPI", "Webhooks"],
    accentColor: "text-violet-400",
    accentBg: "bg-violet-400/10 border-violet-400/20 text-violet-400",
  },
  {
    id: "cloud-solutions",
    title: "Cloud Solutions",
    description:
      "Cloud-native architecture on AWS and Google Cloud. Infra-as-code, auto-scaling, CI/CD pipelines, and cost optimization.",
    icon: "cloud",
    tags: ["AWS", "Google Cloud", "Terraform", "Docker"],
    accentColor: "text-emerald-400",
    accentBg: "bg-emerald-400/10 border-emerald-400/20 text-emerald-400",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "Research-driven design that converts. Wireframes, prototypes, and pixel-perfect interfaces built in Figma.",
    icon: "design",
    tags: ["Figma", "Prototyping", "Design Systems", "User Research"],
    accentColor: "text-pink-400",
    accentBg: "bg-pink-400/10 border-pink-400/20 text-pink-400",
  },
  {
    id: "ecommerce",
    title: "E-commerce Solutions",
    description:
      "End-to-end commerce platforms with inventory, payments, and analytics. Built to scale from launch to millions.",
    icon: "ecommerce",
    tags: ["Shopify", "Stripe", "Next.js", "Headless"],
    accentColor: "text-amber-400",
    accentBg: "bg-amber-400/10 border-amber-400/20 text-amber-400",
  },
  {
    id: "saas",
    title: "SaaS Development",
    description:
      "Full-lifecycle SaaS product development — multi-tenancy, billing, auth, and the dashboards your customers need.",
    icon: "saas",
    tags: ["Multi-tenant", "Stripe Billing", "Auth", "Analytics"],
    accentColor: "text-blue-400",
    accentBg: "bg-blue-400/10 border-blue-400/20 text-blue-400",
  },
  {
    id: "maintenance-support",
    title: "Maintenance & Support",
    description:
      "Ongoing monitoring, performance tuning, security patches, and feature updates. We keep your product healthy 24/7.",
    icon: "support",
    tags: ["Monitoring", "Security", "Updates", "SLA"],
    accentColor: "text-teal-400",
    accentBg: "bg-teal-400/10 border-teal-400/20 text-teal-400",
  },
];