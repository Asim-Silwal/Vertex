# Code Architecture

## Repository Shape
The workspace is a monorepo with a marketing site, an API server, shared libraries, and supporting scripts.

High-level areas:
- `artifacts/agency-site`: the primary website
- `artifacts/api-server`: a small Express API service
- `artifacts/mockup-sandbox`: experimentation and visual prototyping
- `lib/api-spec`: OpenAPI definition and schema generation inputs
- `lib/api-zod`: generated zod-based API types
- `lib/api-client-react`: generated React client utilities
- `lib/db`: database-related shared setup
- `scripts`: supporting automation

## Current Site Architecture
The website uses:
- React
- Vite
- Tailwind CSS
- Framer Motion
- wouter for routing
- React Query for data utilities
- a shared UI component library pattern

The current site behaves like a single-page marketing experience with section-driven composition.

## API Architecture
The API server is currently minimal and focused on health routing.
It uses Express, pino logging, and basic middleware wiring.

## Architectural Strengths
- Clear separation between marketing UI and API service
- Shared contract packages already exist
- Section-based composition makes the site easy to extend
- Reusable UI primitives are already present

## Current Architectural Risks
- Some contract packages are more scaffold than active product integration
- The marketing site relies heavily on motion and media assets, which increases performance sensitivity
- Form submission and third-party integrations need clear configuration rules
- There is currently a gap between documentation-friendly structure and formal QA tooling

## Architecture Direction
Future work should:
- Preserve modularity
- Keep the marketing site easy to evolve section by section
- Treat shared contracts as intentional infrastructure, not dead scaffolding
- Avoid overengineering the public-facing site

## Related Documents
- [07_DEVELOPMENT_GUIDELINES.md](07_DEVELOPMENT_GUIDELINES.md)
- [09_SEO_STRATEGY.md](09_SEO_STRATEGY.md)
- [10_SECURITY_CHECKLIST.md](10_SECURITY_CHECKLIST.md)
- [11_ROADMAP.md](11_ROADMAP.md)
