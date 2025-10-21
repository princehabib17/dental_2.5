# Overview

This is a full-stack dental clinic website for Arevalo Dental Clinic, featuring appointment booking, service showcase, doctor profiles, and contact functionality. The application is built with a modern TypeScript stack using React for the frontend and Express.js for the backend, with support for both English and Arabic languages (RTL).

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Framework & Routing**: React 18+ with Vite as the build tool and wouter for client-side routing. The application uses TypeScript throughout with strict type checking enabled.

**UI Component System**: Implements shadcn/ui (New York style) built on Radix UI primitives. Components are located in `client/src/components/ui/` and follow a consistent design system with Tailwind CSS v4 for styling.

**Internationalization**: Uses i18next with react-i18next for bilingual support (English/Arabic). Language context is managed through a custom LanguageContext provider that handles RTL/LTR layout switching. Translation files are stored in `client/src/locales/`.

**State Management**: TanStack Query (React Query) handles server state with custom query client configuration. No global state management library is used; component state is managed locally with React hooks.

**Animation & Interactivity**: Framer Motion is used extensively for page transitions, scroll animations, and micro-interactions throughout the application.

**Styling Approach**: Tailwind CSS with CSS variables for theming. Custom fonts are loaded via Google Fonts (Plus Jakarta Sans, Inter, Tajawal for Arabic). The design follows a dental/medical aesthetic with teal-blue and minty color schemes defined in CSS custom properties.

**Path Aliases**: Configured in both tsconfig.json and vite.config.ts:
- `@/` maps to `client/src/`
- `@shared/` maps to `shared/`
- `@assets/` maps to `attached_assets/`

## Backend Architecture

**Server Framework**: Express.js with TypeScript, running on Node.js. The server uses ESM module format throughout.

**API Design**: RESTful API with routes defined in `server/routes.ts`. Endpoints follow conventional REST patterns (`/api/appointments`, `/api/messages`).

**Data Validation**: Zod schemas are used for request validation, leveraging drizzle-zod to generate schemas from database models. Validation errors return structured 400 responses.

**Storage Layer**: Abstracted through an IStorage interface with an in-memory implementation (MemStorage class) in `server/storage.ts`. This allows for easy swapping to database-backed storage without changing business logic.

**Development Setup**: Vite middleware is integrated in development mode for HMR and serving the React application. In production, static files are served from the dist directory.

**Error Handling**: Centralized error handling middleware catches and formats errors consistently. API errors are logged with request details.

**Session Management**: Uses connect-pg-simple for PostgreSQL-backed sessions (dependency present but not fully implemented in visible code).

## Database Schema

**ORM**: Drizzle ORM configured for PostgreSQL with schema definitions in `shared/schema.ts`.

**Tables**:
- **users**: Basic user authentication (id, username, password)
- **appointments**: Dental appointment bookings with fields for patient info, date/time, department, reason, and status (pending/confirmed/cancelled)
- **messages**: Contact form submissions with read/unread status

**Schema Validation**: Drizzle-zod integration generates Zod schemas from table definitions for type-safe validation and inference.

**Migrations**: Drizzle Kit is configured to output migrations to `./migrations` directory. Database URL is required via `DATABASE_URL` environment variable.

## External Dependencies

**Database**: PostgreSQL (via Neon serverless driver `@neondatabase/serverless`). Connection configured through `DATABASE_URL` environment variable.

**UI Component Library**: Radix UI primitives for accessible, unstyled components that are customized with Tailwind CSS.

**Form Handling**: React Hook Form with Zod resolver for form validation and state management.

**Icons**: Lucide React for general icons, React Icons (Font Awesome, custom dental icons) for specialized iconography.

**Build Tools**: 
- Vite for frontend bundling and development server
- esbuild for backend bundling in production
- tsx for TypeScript execution in development

**Development Tools**:
- Replit-specific plugins for runtime error overlay and cartographer (development environment integration)
- TypeScript with strict mode enabled for type safety

**Styling**:
- Tailwind CSS v4 with Vite plugin
- PostCSS with autoprefixer
- class-variance-authority and clsx for conditional styling utilities

**Note**: The application currently uses in-memory storage but is structured to easily migrate to PostgreSQL. The Drizzle configuration and schema are fully set up for PostgreSQL, and the storage interface allows swapping implementations without affecting API routes.