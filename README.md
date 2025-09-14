# Software Development P-Diamond Marketing Site

A modern, high-conversion marketing website for a contractor-driven software P-Diamond specializing in Web & Mobile Engineering, Cyber Security, DevOps, Embedded Systems, and AI/ML. Built with Next.js 15, TypeScript, and Tailwind CSS v4.

## 🎯 Project Overview

This marketing site generates qualified leads, streamlines quoting, and recruits contractors through:

- Lead capture forms with file upload capabilities
- Meeting scheduling integration
- Service showcase with detailed capability pages
- Case studies and testimonials
- Contractor recruitment portal
- Blog/insights section

**Primary Goals**: Generate qualified leads, streamline quoting, build trust with B2B buyers, recruit contractors.

## 🏗️ Project Structure

```file
p-diamond/
├── app/                          # Next.js App Router
│   ├── globals.css              # Tailwind v4 theme tokens and base styles
│   ├── layout.tsx               # Root layout with fonts and metadata
│   ├── page.tsx                 # Homepage
│   └── not-found.tsx           # 404 page
├── components/                   # React components
│   ├── ui/                      # Reusable UI primitives
│   │   └── button.tsx          # Shared button component with variants
│   ├── shared/                  # Site-wide sections
│   │   ├── header.tsx          # Navigation header
│   │   └── footer.tsx          # Site footer
│   ├── home/                    # Homepage-specific components
│   │   ├── Hero.tsx            # Hero section with CTAs
│   │   ├── Services.tsx        # Dark mosaic services grid
│   │   ├── Process.tsx         # How we work section
│   │   ├── CaseHighlight.tsx   # Featured case studies
│   │   ├── Testimonials.tsx    # Client testimonials
│   │   ├── TechStrip.tsx       # Technology showcase
│   │   ├── FAQ.tsx             # Frequently asked questions
│   │   ├── Trust.tsx           # Client logos marquee
│   │   └── FinalCTA.tsx        # Bottom conversion section
│   └── design/                  # Design system components
│       └── PatternSheet.tsx    # Background pattern utility
├── docs/                        # Project documentation
│   ├── software_development_p_diamond_marketing_site_prd_v_1.md
│   └── pages/                  # Page-specific documentation
│       ├── homepage_copy_v_1.md
│       ├── services_service_details_copy_v_1.md
│       ├── case_studies_listing_details_copy_v_1.md
│       ├── pricing_engagement_full_page_home_block_v_1.md
│       ├── about_us_v_1.md
│       ├── contact_request_a_quote_book_a_call_v_1.md
│       ├── contractors_join_the_network_openings_v_1.md
│       └── legal_pack_privacy_terms_cookies_dpa_security_v_1.md
├── public/                      # Static assets
│   ├── fonts/                  # Custom fonts (Mooxy)
│   ├── svg/                    # SVG patterns and icons
│   └── images/                 # Service showcase images
├── services/                    # CSS modules and utilities
│   └── marquee.module.css      # Trust section marquee styles
├── changelog.md                # Project changelog
└── package.json               # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- Git

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd p-diamond
```

2.Install dependencies:

```bash
bun install
# or
npm install
```

3.Start the development server:

```bash
bun dev
# or
npm run dev
```

4.Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router) + TypeScript
- **Styling**: Tailwind CSS v4 with custom theme tokens
- **UI Components**: shadcn/ui patterns + custom components
- **Animations**: Framer Motion (planned)
- **Icons**: React Icons (Feather + Simple Icons)
- **Fonts**: Custom Mooxy font for branding
- **Build Tool**: Turbopack (via Next.js)
- **Package Manager**: Bun

### Future Integrations (Planned)

- **CMS**: Sanity or Contentlayer for content management
- **Forms**: Server actions + file upload (Uploadcare/S3)
- **Email**: Resend/SendGrid for transactional emails
- **CRM**: HubSpot/Pipedrive for lead management
- **Scheduling**: Cal.com/Calendly integration
- **Analytics**: GA4 + Plausible
- **Hosting**: Vercel

## 📋 Available Scripts

```bash
# Development
bun dev              # Start development server with Turbopack
bun build           # Create production build
bun start           # Start production server

# Code Quality
bun lint            # Run ESLint
bun typecheck       # Run TypeScript compiler check

# Other
bun clean           # Remove build artifacts
```

## 🎨 Design System

### Colors (Tailwind v4 Tokens)

- **Brand**: `bg-brand`, `text-brand` (navy #0f2d6b)
- **Backgrounds**: `bg-background` (white), `bg-navy-900` (dark)
- **Text**: `text-foreground`, `text-foreground-dark`
- **Borders**: `border-border`, `divide-border`
- **Muted**: `bg-muted` (light gray)

### Typography

- **Display**: Mooxy (custom font for logo/brand)
- **Body**: System font stack with fallbacks
- **Utilities**: `font-logo` for brand elements

### Components Architecture

```file
/components
├── /ui              # Pure UI atoms (Button, Input, Modal)
├── /shared          # Cross-page sections (Header, Footer)
├── /general         # Reusable blocks (Container, Section)
└── /<page>          # Page-specific components (home/, about/, etc.)
```

## 📖 Documentation Guide

### Key Documentation Files

1. **PRD**: `docs/software_development_agency_marketing_site_prd_v_1.md`

   - Complete product requirements and business goals
   - User personas and success metrics
   - Technical requirements and integrations

2. **Copy Guidelines**: `docs/pages/homepage_copy_v_1.md`

   - Homepage content structure and messaging
   - SEO metadata and conversion copy
   - Voice and tone guidelines

3. **Service Documentation**: `docs/pages/services_service_details_copy_v_1.md`

   - Service offering details and positioning
   - Capability descriptions and process flows

4. **Legal Requirements**: `docs/pages/legal_pack_privacy_terms_cookies_dpa_security_v_1.md`
   - Privacy policy requirements
   - Terms of service and compliance needs

### Component Documentation

Each component includes:

- Purpose comment at the top of the file
- TypeScript interfaces for props
- Accessibility considerations
- Responsive design patterns

### Content Management

- Copy lives in documentation files during development
- Component content sourced from docs for consistency
- Future: migrate to headless CMS for non-technical editing

## 🔧 Development Guidelines

### Code Style

- **TypeScript**: Strict mode enabled
- **Components**: Functional components, server-first
- **Styling**: Tailwind utilities preferred over custom CSS
- **File Naming**: kebab-case for files, PascalCase for components

### Component Creation

1. Create in appropriate subfolder (`/ui`, `/shared`, `/home`, etc.)
2. Include purpose comment and TypeScript types
3. Use Tailwind token utilities (`bg-brand` vs `bg-[var(--brand)]`)
4. Test responsive behavior and accessibility

### Git Workflow

- **Commits**: Use Conventional Commits format
- **Branches**: Feature branches from main
- **PRs**: Include context, testing notes, and screenshots

## 🚦 Performance & SEO

### Core Web Vitals Targets

- **LCP**: < 2.5s
- **INP**: ≤ 200ms
- **CLS**: < 0.1

### SEO Implementation

- Semantic HTML structure
- Meta tags and Open Graph
- Structured data (Organization, Service, FAQ)
- Clean URLs and sitemaps
- Image optimization with `next/image`

## 🔒 Security & Accessibility

### Security Features

- HTTPS only
- Content Security Policy headers
- CSRF protection on forms
- Rate limiting on submissions
- Secure file upload validation

### Accessibility (WCAG 2.2 AA)

- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance (4.5:1 for text)
- Form labels and error states
- Focus management

## 📊 Analytics & Tracking

### Key Events (Planned)

- `lead_submitted` - Quote request submissions
- `call_booked` - Discovery call scheduling
- `quote_sent` - Quote delivery
- `contractor_applied` - Recruitment applications

### Privacy Compliance

- Cookie consent management
- GDPR/CPRA compliance
- Data retention policies
- Regional privacy settings

## 🚀 Deployment

### Vercel Deployment

1. Connect repository to Vercel
2. Configure environment variables
3. Set up custom domain and SSL
4. Configure redirects and headers

### Environment Variables

```bash
# Add to .env.local for development
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GA_ID=your-ga-id
```

## 🤝 Contributing

1. Review the PRD and component guidelines
2. Follow the established file structure
3. Test accessibility and responsive design
4. Update documentation for new features
5. Submit PRs with clear descriptions

## 📞 Support

For questions about implementation or business requirements, refer to:

- PRD documentation in `/docs`
- Component examples in `/components`
- Tailwind v4 documentation for styling
- Next.js 15 App Router documentation

---

**Status**: Active development | **Version**: 0.2.0 | **Last Updated**: August 2025
