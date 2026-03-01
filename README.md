# Rajesh Sarkar — Portfolio
### Next.js 14 · TypeScript · Tailwind CSS · Pages Router

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
# → http://localhost:3000

# 3. Build for production
npm run build && npm start
```

---

## Folder Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky nav, theme toggle, mobile menu
│   │   └── Footer.tsx          # Social links + copyright
│   └── sections/
│       ├── HeroSection.tsx     # Animated hero + floating code card
│       ├── AboutSection.tsx    # Avatar + bio + trait tags
│       ├── SkillsSection.tsx   # Animated progress bars + skill chips
│       ├── ProjectsSection.tsx # Project cards grid
│       ├── ExperienceSection.tsx  # Timeline
│       ├── CertificationsSection.tsx
│       └── ContactSection.tsx  # Form with validation
├── data/
│   └── portfolio.ts            # ← Edit ALL your content here
├── hooks/
│   ├── useTheme.ts             # Dark/light mode with localStorage
│   └── useScrollReveal.ts      # IntersectionObserver scroll animations
├── pages/
│   ├── _document.tsx           # Custom document (fonts, meta)
│   ├── _app.tsx                # Global CSS import
│   └── index.tsx               # Main page
├── styles/
│   └── globals.css             # Tailwind + CSS vars + component classes
└── types/
    └── index.ts                # All TypeScript interfaces
```

---

## Design System

| Token         | Value              |
|---------------|--------------------|
| Primary font  | Syne (display)     |
| Body font     | DM Sans            |
| Code font     | JetBrains Mono     |
| Accent        | `#6c63ff` Indigo   |
| Accent violet | `#a78bfa`          |
| Accent sky    | `#38bdf8`          |
| Green         | `#34d399`          |

All colours are CSS custom properties on `:root` / `[data-theme='light']`,
bridged into Tailwind via `bg-[var(--accent)]` syntax.

---

## Customise Content

Open **`src/data/portfolio.ts`** — every section's data lives there:

```ts
export const skills        // Skill bars
export const chips         // Technology chips
export const projects      // Project cards
export const experiences   // Timeline entries
export const certifications
```

---

## Deploy to Vercel

```bash
npx vercel --prod
```

Or push to GitHub and connect at vercel.com — zero config needed.
