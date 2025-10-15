# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal website for Krishna Gopinath ([krishnagopinath.me](https://krishnagopinath.me)), built with Astro and Tailwind CSS, deployed to Netlify. The site uses server-side rendering with the Netlify adapter.

## Development Commands

```bash
# Start development server on port 9000
npm run dev
# or
npm start

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to Netlify
npm run deploy

# Generate PDF resume from resume page
SRC_URL=http://localhost:9000/resume npm run make-pdf-resume
```

## Architecture

### MDX-First Content Strategy

- **Home page**: Content sourced from [src/content/about.mdx](src/content/about.mdx)
- **Blog posts** (minimal setup):
  - Add MDX files to `src/pages/posts/`
  - Use `draft: true` in frontmatter for unpublished posts
  - Published posts (without draft flag) appear on the posts listing page

### JSON Resume System

The resume is managed through a JSON Resume schema workflow:

1. **Source**: [src/content/resume.json](src/content/resume.json) follows [JSON Resume schema](https://jsonresume.org/schema/)
2. **Rendering**: [src/pages/resume.astro](src/pages/resume.astro) consumes the JSON and renders using specialized components in `src/components/resume/`
3. **PDF Generation**:
   - Script at [scripts/makePdfResume.cjs](scripts/makePdfResume.cjs) uses Puppeteer to generate PDF
   - CI/CD workflow ([.github/workflows/main.yml](.github/workflows/main.yml)) automatically generates `files/resume.pdf` after deploying to production
   - PDF generation happens post-deployment by visiting the live resume page

### Component Structure

- `src/components/`: Reusable Astro components
  - `src/components/resume/`: Resume-specific components (Header, WorkExperience, Projects, Education, Skills, etc.)
- `src/layouts/`: Layout templates (BaseLayout.astro)
- `src/pages/`: File-based routing (index.astro, resume.astro)
- `src/content/`: Content files (about.mdx, resume.json)

### Configuration

- **Astro config** ([astro.config.mjs](astro.config.mjs)): Server-side rendering with Netlify adapter, Tailwind integration with custom base styles disabled, MDX support
- **Tailwind** ([tailwind.config.cjs](tailwind.config.cjs)): Custom configuration for styling
- **Netlify** ([netlify.toml](netlify.toml)): Build command and publish directory
- **Pages CMS** ([.pages.yml](.pages.yml)): Media management configuration

## CI/CD Workflow

GitHub Actions workflow on push to master:
1. Install dependencies with `npm ci --ignore-scripts`
2. Build with `npm run build`
3. Deploy to Netlify with `npm run deploy`
4. Generate PDF resume using Puppeteer headful action
5. Commit `files/resume.pdf` back to repository

## Key Dependencies

- **Framework**: Astro 3.x with MDX and Netlify adapters
- **Styling**: Tailwind CSS with typography plugin
- **Type Safety**: TypeScript with JSON Resume types
- **PDF Generation**: Puppeteer (used in CI only)
