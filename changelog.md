# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0] - [Unreleased]

### Added - v0.2.0

- Trust section with animated marquee of client logos using React icons
- Extended security and compliance badge collection with 10 service guarantees
- Horizontal fade effect for seamless marquee transitions
- react-icons dependency for consistent iconography
- Process section with interactive vertical stacked slider using Swiper.js
- Advanced state machine for autoplay, pause/resume, and intersection observer functionality
- Keyboard navigation support (Arrow Up/Down, Enter/Space) for process steps
- Accessibility features including ARIA roles, tablist/tab/tabpanel structure
- swiper dependency for cards effect and vertical slider functionality
- Case study marquee with continuous horizontal scrolling animation
- Background image cards with floating text content overlays
- Service badges and hover scale effects on case study cards
- RAF-based smooth animation with hover slow-down functionality
- CSS mask-based fade edges for seamless marquee transitions
- Full-screen testimonials section with Swiper.js carousel integration
- Large portrait testimonials with country flag indicators for international clients
- Sticky navigation controls positioned at top-right corner for easy access
- Background quote icon with brand color theming for visual enhancement
- TypeScript-safe testimonial data structure with comprehensive client information
- Comprehensive FAQ section with accordion functionality and detailed answers
- 15 extensively researched FAQ items covering all service areas and business processes
- Technical but client-friendly explanations for complex development concepts
- Dark navy theme integration with light text and subtle card styling
- Smooth accordion animations with one-open-at-a-time behavior
- JSON-LD structured data for search engine optimization
- Accessibility features with proper ARIA roles and keyboard navigation

### Changed - v0.2.0

- Trust component redesigned with icon-first approach instead of external images
- Logo cards now display company names alongside icons in flex layout
- Trust section background matches Hero navy theme with subtle glow effect
- Signal pills centered and expanded with comprehensive security features
- Marquee container background made transparent for cleaner appearance
- All colors updated to match Hero section's white-on-navy design system
- Process section completely redesigned from static grid to interactive two-column layout:

  - Left column: clickable process steps with selection states and hover effects
  - Right column: vertical stacked image slider with smooth card transitions
  - Dynamic step overlay showing current process icon and title instead of numbers
  - Simplified click behavior: clicking any step sets active index and continues autoplay (no pause/resume)
  - Responsive layout with optimized column proportions (2/5 processes, 3/5 media)
  - Mobile layout: stacked design with process list followed by full-width images below
  - Mobile images have reduced height (400px) and disabled pointer events for visual reference only
  - Unified blue-themed styling across desktop and mobile for better contrast and readability
  - Process cards use blue backgrounds (bg-blue-900/80 active, bg-blue-900/40 inactive) with blue accents
  - Process steps now use Phosphor icons (PiChatCircle, PiMagnifyingGlass, PiWallet, PiWrench, PiPackage)
  - Placeholder images sourced from Unsplash with descriptive alt text for each process step
  - Images on mobile have reduced opacity (opacity-20) for subtle background effect when used as overlay

- Case study section redesigned from static grid to continuous marquee layout:

  - Full background image cards with floating text content overlays
  - Tall card format (500px height) for better visual impact
  - Service badges positioned at top of each card
  - Hover effects: card scale-up and background image zoom
  - Reduced motion support with automatic animation disable
  - CSS mask-based horizontal fade edges using existing marquee module
  - RAF animation loop with precise offset calculation and gap handling
  - Responsive card sizing (78vw mobile, 460px desktop)
  - Concise content: one-line titles and two-line descriptions for consistency
  - Six case studies covering all service specializations (Web & Mobile, DevOps & SRE, Cyber Security, AI/ML, Embedded)

- Testimonials section completely redesigned as full-screen carousel experience:

  - Full viewport height (100dvh) design with immersive blue gradient background
  - Swiper.js integration with autoplay, smooth transitions, and loop functionality
  - Large portrait images (320px) in circular frames with professional styling
  - Country flag emoji system for international client representation (US, NG, ES)
  - Location parsing from testimonial data to display appropriate flags
  - Bold typography for quotes using large font sizes (text-xl to text-3xl)
  - Background quote icon (400px) with subtle brand theming for visual depth
  - Navigation controls repositioned from top-left to top-right corner
  - TypeScript integration with proper Swiper type definitions (no any types)
  - Six diverse testimonials covering different roles and organizations
  - Responsive layout with mobile and desktop optimizations

- FAQ section completely redesigned with comprehensive content and dark theme integration:

  - 15 extensively researched questions covering all service specializations
  - Technical explanations made accessible for non-technical business stakeholders
  - Service-specific FAQs for Web & Mobile, DevOps, Cyber Security, AI/ML, and Embedded Systems
  - Business process FAQs covering pricing, timelines, team composition, and project management
  - Dark navy background (bg-navy-900) with white text for consistent theme integration
  - Rounded card design with subtle borders (border-white/10) and hover effects
  - Smooth accordion functionality with controlled open/close animations
  - One-item-open-at-a-time behavior for focused content consumption
  - Removed focus rings and outlines for clean click interactions
  - JSON-LD structured data implementation for enhanced SEO
  - Accessibility compliance with ARIA roles, controls, and keyboard navigation
  - CTA section with quote and call booking buttons using consistent styling

- Color system migrated from CSS variables to Tailwind v4 tokens (`@theme`)
  and utilities. Replaced `bg-[var(--…)]`, `text-[var(--…)]`, `border-[var(--…)]`
  across the codebase with `bg-*`, `text-*`, `border-*`, `divide-*`, `ring-*`
  using tokens: `background`, `foreground`, `brand`, `muted`, `border`,
  `navy-900`, `navy-800`.

- Components refactored to tokens:

  - `app/globals.css` (define tokens, base mappings; keep gradient utility)
  - `components/shared/header.tsx`
  - `components/shared/footer.tsx`
  - `components/home/Hero.tsx`
  - `components/home/Process.tsx`
  - `components/home/CaseHighlight.tsx`
  - `components/home/Testimonials.tsx`
  - `components/home/TechStrip.tsx`
  - `components/home/FAQ.tsx`
  - `components/home/FinalCTA.tsx`
  - `components/ui/button.tsx`
  - `app/not-found.tsx`
  - `services/marquee.module.css` (kept `color-mix` with token vars for look)

- Services section redesigned (`components/home/Services.tsx`):
  - Dark mosaic variant on `bg-navy-900` with `text-foreground-dark`.
  - 6-col mosaic: first two cards span 3 cols, next three span 2.
  - Offset-aware layout via `offsetClasses` and `textPaddingClasses` for balanced image/text.
  - Cards use `bg-white/5`, `border-white/10`, blur, and hover ring glow (`ring-blue-400/40`).
  - Updated copy and highlight pills (`bg-white/10`, `border-white/20`).
  - CTA button uses white inversion for contrast.
  - Images referenced from `/images/*.png` with tuned `sizes` for perf.

### Fixed - v0.2.0

- Trust component file corruption issues resolved
- Icon imports properly configured for Feather Icons and Simple Icons
- TypeScript compilation errors in testimonials component resolved
- Property name mismatches fixed (country→location, image→photo.src, organization→org)
- Swiper type safety improved by replacing any types with proper SwiperType definitions
- FAQ section focus states cleaned up to remove unwanted outline rings
- Dark theme consistency issues resolved across FAQ cards and buttons

### Technical - v0.2.0

- Tailwind v4 pipeline via `@tailwindcss/postcss`; tokens live in
  `@theme` and are consumable as `bg-foreground`, `bg-brand`, etc.
- Complex gradients remain custom CSS using `color-mix` with token vars.
- Build verified with Turbopack.
- Process section architecture following component separation guidelines:
  - `/components/shared/ProcessSection/` with modular structure
  - `ProcessSection.tsx` (main component), `ProcessList.tsx` (left column)
  - `ProcessMedia.tsx` (right slider), `useProcessCarousel.ts` (state management)
  - `processData.ts` (centralized process step configuration)
- Swiper.js integration with controlled mode and cards effect
- Custom hook pattern for complex state management with intersection observer
- Type-safe process step definitions with ReactNode icons and image metadata
- Case study marquee architecture following reusable component patterns:
  - `/components/home/CaseHighlightMarquee.tsx` (main marquee component)
  - `/components/home/caseData.ts` (typed case study configuration)
  - RAF animation system with state refs for performance
  - CSS module integration for fade effects and responsive design
  - Hover state management with speed interpolation
- Testimonials section architecture with TypeScript integration:
  - `/components/home/TestimonialsFull.tsx` (full-screen carousel component)
  - `/components/home/testimonialsData.ts` (testimonial type definitions and data)
  - Swiper.js controlled mode with navigation and autoplay modules
  - Country flag mapping system for international client representation
  - Type-safe component props with proper Swiper instance typing
- FAQ section architecture with comprehensive content strategy:
  - `/components/home/FAQSection.tsx` (accordion component with dark theme)
  - `/components/home/faqData.ts` (15 detailed FAQ items with TypeScript definitions)
  - Accordion state management with smooth animations
  - JSON-LD structured data for search engine optimization
  - Accessibility compliance with ARIA roles and keyboard navigation
  - Content strategy covering technical services, business processes, and client concerns

### Rollback

- To revert token usage, restore prior `:root` variables and replace
  `bg/text/border-*` classes with `var(--...)` arbitrary values in components.

## [0.1.0] - 2025-08-23

### Added - v0.1.0

- Header component with dark navy background and clean navigation
- Button component with brand variants (primary, secondary, ghost)
- Hero section with dual pattern backgrounds and responsive layout
- Documentation structure for all major pages:
  - Homepage copy with service overviews and pricing blocks
  - Services hub with detailed service descriptions for Web & Mobile, Cyber Security, DevOps, Embedded Systems, and AI/ML
  - Pricing & engagement page with interactive estimator and rate guidelines
  - Case studies listing and detail templates
  - Contractors recruitment pages with application flow
  - Legal pack including Privacy Policy, Terms of Service, Cookie Policy, DPA, and Security documentation
- Project Requirements Document (PRD) defining complete site architecture and functionality
- Visual assets including circuit board and random shapes SVG patterns
- Typography assets with Mooxy font

### Changed - v0.1.0

- Header navigation simplified to core pages only (Services, Case Studies, Pricing, About, Contact)
- Header positioning changed from fixed to absolute for seamless integration with Hero section
- Single CTA approach in header using shared Button component
- Header styling updated to match Hero section's dark theme with white text and borders

### Technical - v0.1.0

- Component architecture following project guidelines with proper separation:
  - `/components/ui/` for reusable UI primitives
  - `/components/shared/` for site-wide sections
  - `/components/home/` for homepage-specific components
- Dark theme integration using CSS custom properties for navy color scheme
- Pattern overlay system with configurable tinting and fade effects
- Responsive design with mobile-first approach
- Accessibility considerations with proper contrast and keyboard navigation

## Notes

This represents the initial implementation of the Software Development Agency marketing site with focus on lead generation, service showcase, and contractor recruitment. All components follow the established design system and coding standards outlined in the project documentation.
