# Shanmukha Sai Dheeraz Chavali — Portfolio

A modern, production-ready personal portfolio website built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React + React Icons
- **Theme:** Dark/Light mode via next-themes
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Editing Content

All portfolio content is centralized in a single file:

```
data/content.ts
```

Edit this file to update your bio, experience, projects, skills, education, and contact information. No CMS required.

## Deployment

### Vercel (Recommended)

1. Push your repo to GitHub
2. Import the project on [vercel.com](https://vercel.com)
3. Vercel will auto-detect Next.js and deploy

### Manual

```bash
npm run build
```

The output will be in the `.next` directory, ready for deployment on any Node.js hosting platform.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Main page assembling all sections
│   └── globals.css         # Tailwind base + custom animations
├── components/
│   ├── Navbar.tsx           # Sticky navbar with blur backdrop
│   ├── Hero.tsx             # Full-screen hero with typewriter
│   ├── About.tsx            # Bio, photo, stats
│   ├── Experience.tsx       # Animated timeline
│   ├── Projects.tsx         # Grid of project cards
│   ├── Skills.tsx           # Categorized skill tags
│   ├── Education.tsx        # Expandable accordion cards
│   ├── Contact.tsx          # Contact form + social links
│   ├── Footer.tsx           # Footer with social icons
│   ├── SectionWrapper.tsx   # Reusable scroll animation wrapper
│   ├── ThemeProvider.tsx    # Dark/light theme provider
│   └── CursorGlow.tsx      # Cursor trail effect
├── data/
│   └── content.ts           # All portfolio content
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   └── fonts/
├── tailwind.config.ts
├── next.config.ts
└── vercel.json
```

## Customization

- **Accent color:** Change in `tailwind.config.ts` under `colors.accent`
- **Fonts:** Modify in `app/layout.tsx`
- **Content:** Edit `data/content.ts`

## License

MIT
