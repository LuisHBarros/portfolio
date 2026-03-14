# Terminal Portfolio

![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![Prisma](https://img.shields.io/badge/Prisma-5-2D3748)
![License](https://img.shields.io/badge/license-MIT-blue)

A terminal-style personal portfolio website built with modern web technologies, featuring pixel-perfect design, bilingual support (English/Portuguese), and a robust architecture focused on maintainability and developer experience.

---

## Overview

This project implements a terminal-inspired portfolio interface that showcases professional experience, projects, skills, blog posts, and contact information. The design evokes a retro computing aesthetic while maintaining modern usability and responsiveness.

The architecture follows **clean architecture principles** with a clear separation of concerns: the UI layer consumes data exclusively through API routes, which in turn use a repository pattern with dependency injection for database access. This design enables easy database migrations and facilitates testing.

---

## Architecture

```
┌─────────────────────────────────────────────────────┐
│                   Presentation Layer                 │
│         Components │ Hooks │ Context Providers       │
└───────────────────────────┬─────────────────────────┘
                            │
┌───────────────────────────▼─────────────────────────┐
│                      API Layer                      │
│         Next.js API Routes (app/api/*)              │
└───────────────────────────┬─────────────────────────┘
                            │
┌───────────────────────────▼─────────────────────────┐
│                Repository Layer                     │
│      Experience │ Project │ Skill │ Post Repos      │
└───────────────────────────┬─────────────────────────┘
                            │
┌───────────────────────────▼─────────────────────────┐
│                  Database Layer                     │
│         Prisma Client │ PostgreSQL Database         │
└─────────────────────────────────────────────────────┘
```

### Key Patterns

**Repository Pattern with Dependency Injection:**
Each API route creates a fresh database client and repository instance, ensuring proper connection management and enabling easy mocking in tests.

```typescript
const db = createDbClient()
const repo = new ExperienceRepository(db)
const data = await repo.findAll()
await db.$disconnect()
```

**Content Management:**
All portfolio content is managed through Prisma models with bilingual fields (English/Portuguese), stored in PostgreSQL and seeded via `prisma/seed.ts`.

**State Management:**

- Theme and language state managed via React Context API with localStorage persistence
- Section navigation handled through local component state
- Data fetched through custom hooks (`useExperiences`, `useProjects`, `useSkills`, etc.)

---

## Tech Stack

| Layer        | Technology                           |
| ------------ | ------------------------------------ |
| Runtime      | Node.js 18+, Next.js 14 (App Router) |
| Language     | TypeScript (strict mode)             |
| Styling      | Tailwind CSS, PostCSS                |
| Database     | PostgreSQL 15 with Prisma ORM        |
| Fonts        | JetBrains Mono & IBM Plex Mono       |
| Markdown     | marked.js for blog post rendering    |
| Code Quality | ESLint, Prettier                     |
| Testing      | Ready for integration testing setup  |

---

## Features

- **Terminal-style interface** with scanline and vignette effects
- **Dark/Light theme toggle** with persistence
- **English/Portuguese language support** with i18n
- **Responsive design** optimized for mobile and desktop
- **Repository pattern** for clean database abstraction
- **API routes** for all data (experiences, projects, skills, posts, contact, education)
- **Blog system** with markdown content support
- **Modular architecture** enabling easy database migration

---

## Project Structure

```
src/
├── app/                           # Next.js App Router
│   ├── api/                       # API routes
│   │   ├── experiences/           # Work experience endpoints
│   │   ├── projects/              # Project portfolio endpoints
│   │   ├── skills/                # Skills endpoints
│   │   ├── posts/                 # Blog post endpoints
│   │   ├── contact/               # Contact information
│   │   ├── education/             # Education history
│   │   └── translations/          # i18n translations
│   ├── globals.css                # Global styles and theme variables
│   ├── layout.tsx                 # Root layout
│   └── page.tsx                   # Home page
├── components/
│   ├── portfolio/                 # Main portfolio components
│   │   ├── Portfolio.tsx          # Root portfolio component
│   │   ├── Titlebar.tsx           # Terminal title bar
│   │   ├── Sidebar.tsx            # Navigation sidebar
│   │   ├── Statusbar.tsx          # Terminal status bar
│   │   └── sections/              # Content sections
│   │       ├── About.tsx
│   │       ├── Experience.tsx
│   │       ├── Projects.tsx
│   │       ├── Skills.tsx
│   │       ├── Blog.tsx
│   │       ├── Education.tsx
│   │       └── Contact.tsx
│   └── ui/                        # Reusable UI components
│       ├── Dialog.tsx             # Modal dialog
│       ├── PostDialog.tsx         # Blog post dialog
│       └── Command.tsx            # Command palette
├── hooks/                         # Custom React hooks
│   ├── useTheme.ts                # Theme management
│   ├── useLang.ts                 # Language management
│   ├── useExperiences.ts         # Experience data
│   ├── useProjects.ts            # Project data
│   ├── useSkills.ts               # Skills data
│   ├── usePosts.ts                # Blog post data
│   ├── useEducation.ts            # Education data
│   ├── useContact.ts              # Contact data
│   └── usePortfolioData.ts        # All portfolio data
├── lib/
│   ├── db/                        # Database layer
│   │   ├── client.ts              # Prisma client factory
│   │   └── repositories/          # Repository implementations
│   │       ├── experience.repository.ts
│   │       ├── project.repository.ts
│   │       ├── skill.repository.ts
│   │       ├── post.repository.ts
│   │       ├── education.repository.ts
│   │       └── contact.repository.ts
│   └── markdown.ts                # Markdown rendering utilities
└── types/                         # TypeScript type definitions
    └── index.ts                   # Shared types
```

---

## Data Flow

```
User clicks "Projects"
        │
        ▼
Portfolio component updates currentSection state
        │
        ▼
useProjects() hook fetches from /api/projects
        │
        ▼
ProjectsRoute handler creates DB client and repository
        │
        ▼
ProjectRepository.findAll() queries PostgreSQL via Prisma
        │
        ▼
Data returned as JSON, cached in hook state
        │
        ▼
ProjectsSection component renders projects
```

All data fetching follows this pattern: API route → repository → database → JSON response.

---

## Internationalization

The application supports English and Portuguese through two mechanisms:

1. **UI Translations:** Static UI text served via `/api/translations`
2. **Content Translations:** Database records with bilingual fields

```typescript
// Example: Experience model
model Experience {
  titleEn   String  // English title
  titlePt   String  // Portuguese title
  dateEn    String  // English date format
  datePt    String  // Portuguese date format
  // ...
}
```

The `useLang` hook manages the current language state and persists it to localStorage.

---

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL 15
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/LuisHBarros/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Configure environment variables:

```bash
cp .env.example .env
```

Edit `.env` and set your `DATABASE_URL`:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/portfolio"
```

4. Set up the database:

```bash
npm run db:migrate
npm run db:seed
```

5. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Available Scripts

| Script               | Description                        |
| -------------------- | ---------------------------------- |
| `npm run dev`        | Start development server           |
| `npm run build`      | Build for production               |
| `npm start`          | Start production server            |
| `npm run lint`       | Run ESLint                         |
| `npm run db:migrate` | Run Prisma migrations              |
| `npm run db:seed`    | Seed the database with sample data |
| `npm run db:studio`  | Open Prisma Studio (database GUI)  |

---

## Environment Variables

| Variable                   | Required | Description                  |
| -------------------------- | -------- | ---------------------------- |
| `DATABASE_URL`             | Yes      | PostgreSQL connection string |
| `NEXT_PUBLIC_GITHUB_URL`   | No       | GitHub profile URL           |
| `NEXT_PUBLIC_LINKEDIN_URL` | No       | LinkedIn profile URL         |

---

## Database Schema

The application uses the following Prisma models:

- **Experience** - Work experience with bullet points
- **Project** - Portfolio projects with tags and descriptions
- **SkillCategory & Skill** - Skills organized by category
- **Post** - Blog posts with markdown content and translations
- **ContactInfo** - Contact information with links
- **Education** - Education and certifications

All models support bilingual content with `En` and `Pt` field suffixes.

---

## Customization

### Adding Content

Edit `prisma/seed.ts` to add new experiences, projects, skills, or posts, then run:

```bash
npm run db:seed
```

### Changing Colors

Modify CSS variables in `src/app/globals.css`:

```css
[data-theme="dark"] {
  --bg: #080808;
  --accent: #ffffff;
  --border: #ffffff30;
  /* ... */
}

[data-theme="light"] {
  --bg: #f0f0f0;
  --accent: #000000;
  --border: #00000030;
  /* ... */
}
```

### Swapping Database

To use a different database:

1. Update `prisma/schema.prisma`:

```prisma
datasource db {
  provider = "mysql"  // or "sqlite"
  url      = env("DATABASE_URL")
}
```

2. Update `.env` with the new connection string
3. Run migrations: `npm run db:migrate`

The repository pattern abstracts database-specific code, so no application code changes are required.

---

## Building for Production

```bash
npm run build
npm start
```

The production build is optimized with:

- Static generation for better performance
- Minified JavaScript and CSS
- Optimized images and fonts
- Tree-shaking to reduce bundle size

---

## License

MIT License - see LICENSE file for details.

---

## Author

**Luis Henrique de Barros**

- GitHub: [@LuisHBarros](https://github.com/LuisHBarros)
- LinkedIn: [linkedin.com/in/luishbarros](https://linkedin.com/in/luishbarros)

---

## Acknowledgments

- Terminal design inspired by retro computing interfaces
- Built with modern web technologies for performance and maintainability
- Bilingual support for international accessibility
