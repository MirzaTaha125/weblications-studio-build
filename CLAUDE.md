# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server (port 8080)
npm run build        # Production build → dist/
npm run build:dev    # Development mode build
npm run lint         # ESLint validation
npm run preview      # Preview production build
npm run test         # Run Vitest once
npm run test:watch   # Vitest in watch mode
```

## Architecture

Agency portfolio SPA for Weblications Studios. Built with React 18 + Vite + TypeScript + Tailwind CSS.

**Routing:** React Router v6 with 5 pages — `Home`, `About`, `Portfolio`, `Packages`, `Contact`. Route transitions are animated via Framer Motion in [src/App.jsx](src/App.jsx).

**Pages (`src/pages/`):** Each page is a `.jsx` file that composes section-level components. Pages own their own layout and scroll animation logic.

**Components (`src/components/`):**
- `ui/` — shadcn/ui components (Radix UI + Tailwind). These are generated/managed via `components.json` and should not be heavily hand-edited.
- Custom components live at the `components/` root — `Navbar`, `Footer`, `Reveal`, `Counter`, `BrowserMock`, `StaggeredMenu`, etc.

**Styling:** Tailwind CSS with HSL CSS variables for theming (defined in [src/index.css](src/index.css)). Dark mode is toggled via a `class` on `<html>` using `next-themes`. Custom Tailwind tokens live in [tailwind.config.ts](tailwind.config.ts).

**Animations:** Framer Motion for scroll-based parallax and page transitions; GSAP for imperative animations; canvas-confetti for one-shot effects.

**Forms & Email:** React Hook Form + Zod for validation; EmailJS for sending contact form submissions.

**Path aliases:** `@/` resolves to `src/` — use this for all internal imports.

**TypeScript:** Relaxed strict mode (`noImplicitAny: false`, strict null checks off). Pages are `.jsx`, most components are `.tsx`.

**Testing:** Vitest with JSDOM. Setup file at [src/test/setup.ts](src/test/setup.ts) mocks `matchMedia`. Tests co-located under `src/test/`.
