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

### Changed - v0.2.0

- Trust component redesigned with icon-first approach instead of external images
- Logo cards now display company names alongside icons in flex layout
- Trust section background matches Hero navy theme with subtle glow effect
- Signal pills centered and expanded with comprehensive security features
- Marquee container background made transparent for cleaner appearance
- All colors updated to match Hero section's white-on-navy design system

### Fixed - v0.2.0

- Trust component file corruption issues resolved
- Icon imports properly configured for Feather Icons and Simple Icons

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
